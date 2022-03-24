import { Vector2 } from "@math.gl/core";
import { Completer } from "./completer";
import { Generator } from "./procedural_texture";

export abstract class ITexture {

    protected gl: WebGL2RenderingContext;
    public texture?: WebGLTexture;
    public target: number;

    constructor(gl: WebGL2RenderingContext, target: number) {
        this.gl = gl;
        this.target = target;
    }

    public bind(unit: number) {
        this.gl.activeTexture(this.gl.TEXTURE0 + unit);
        this.gl.bindTexture(this.target, this.texture!);
    }

    public unbind() {
        this.gl.bindTexture(this.target, null);
    }

    abstract get width(): number;
    abstract get height(): number;

}

export enum TextureFormat {
    R,
    RG,
    RGB,
    Rf,
    RGf,
    RGBf,
    RGBA,
    RGBAf,
    Depth,
    DepthStencil
}

export class Texture2D extends ITexture {

    private _width: number;
    private _height: number;
    private format: TextureFormat;

    constructor(gl: WebGL2RenderingContext, width: number, height: number, format: TextureFormat) {
        super(gl, gl.TEXTURE_2D);
        this._width = width;
        this._height = height;
        this.format = format;
        this.texture = gl.createTexture()!;
    }

    setFiltering(min: number, mag: number) {
        this.bind(0);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, min);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, mag);
        this.unbind();
    }

    setNull(): this {
        let fmt = Texture2D.convertFormat(this.gl, this.format);
        this.bind(0);
        this.gl.texImage2D(this.target, 0, fmt.internal, this.width, this.height, 0, fmt.format, fmt.type, null);
        this.unbind();
        return this;
    }

    static async fromImage(gl: WebGL2RenderingContext, url: string, format: TextureFormat = TextureFormat.RGBA): Promise<Texture2D> {
        const compl = new Completer<Texture2D>();
        const image = new Image();
        image.onload = () => {
            let tex = new Texture2D(gl, image.width, image.height, format);
            let fmt = Texture2D.convertFormat(gl, format);

            tex.bind(0);
            gl.texImage2D(gl.TEXTURE_2D, 0, fmt.internal, fmt.format, fmt.type, image);
            gl.generateMipmap(gl.TEXTURE_2D);
            tex.unbind();
            compl.complete!(tex);
        };
        image.onerror = (e) => {
            console.error(e);
            compl.reject!(e);
        };
        image.src = url;
        return compl.promise;
    }

    generateMipmap() {
        this.bind(0);
        this.gl.generateMipmap(this.target);
        this.unbind();
    }

    static procedural(gl: WebGL2RenderingContext, width: number, height: number, func: Generator): Texture2D {
        let tex = new Texture2D(gl, width, height, TextureFormat.RGBA);
        tex.bind(0);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        let data = new Uint8Array(width * height * 4);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let v = func(new Vector2(x / width, y / height));
                data[(y * width + x) * 4 + 0] = ~~(v.r * 255);
                data[(y * width + x) * 4 + 1] = ~~(v.g * 255);
                data[(y * width + x) * 4 + 2] = ~~(v.b * 255);
                data[(y * width + x) * 4 + 3] = ~~(v.a * 255);
            }
        }
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
        gl.generateMipmap(gl.TEXTURE_2D);
        tex.unbind();
        return tex;
    }

    public get width(): number { return this._width; }
    public get height(): number { return this._height; }

    static convertFormat(gl: WebGL2RenderingContext, format: TextureFormat): { format: number, internal: number, type: number } {
        switch (format) {
            case TextureFormat.R: return { format: gl.RED, internal: gl.R8, type: gl.UNSIGNED_BYTE };
            case TextureFormat.RG: return { format: gl.RG, internal: gl.RG8, type: gl.UNSIGNED_BYTE };
            case TextureFormat.RGB: return { format: gl.RGB, internal: gl.RGB8, type: gl.UNSIGNED_BYTE };
            case TextureFormat.Rf: return { format: gl.RED, internal: gl.R16F, type: gl.FLOAT };
            case TextureFormat.RGf: return { format: gl.RG, internal: gl.RG16F, type: gl.FLOAT };
            case TextureFormat.RGBf: return { format: gl.RGB, internal: gl.RGB16F, type: gl.FLOAT };
            case TextureFormat.RGBA: return { format: gl.RGBA, internal: gl.RGBA8, type: gl.UNSIGNED_BYTE };
            case TextureFormat.RGBAf: return { format: gl.RGBA, internal: gl.RGBA16F, type: gl.FLOAT };
            case TextureFormat.Depth: return { format: gl.DEPTH_COMPONENT, internal: gl.DEPTH_COMPONENT16, type: gl.UNSIGNED_SHORT };
            case TextureFormat.DepthStencil: return { format: gl.DEPTH_STENCIL, internal: gl.DEPTH24_STENCIL8, type: gl.UNSIGNED_INT_24_8 };
            default: throw new Error("Unsupported texture format");
        }
    }

}