import { Vector2 } from "@math.gl/core";
import { Completer } from "./completer";
import { Generator } from "./procedural_texture";

export abstract class ITexture {

    protected gl: WebGL2RenderingContext;
    protected texture?: WebGLTexture;
    protected target: number;

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

export class Texture2D extends ITexture {

    private _width: number;
    private _height: number;
    private format: number;
    private internalFormat: number;
    private type: number;

    constructor(gl: WebGL2RenderingContext, width: number, height: number, format: number, internalFormat: number, type: number) {
        super(gl, gl.TEXTURE_2D);
        this._width = width;
        this._height = height;
        this.format = format;
        this.internalFormat = internalFormat;
        this.type = type;
        this.texture = gl.createTexture()!;
    }

    setFiltering(min: number, mag: number) {
        this.bind(0);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, min);
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, mag);
        this.unbind();
    }

    static async fromImage(gl: WebGL2RenderingContext, url: string, format: number = gl.RGBA, internalFormat: number = gl.RGBA, type: number = gl.UNSIGNED_BYTE): Promise<Texture2D> {
        const compl = new Completer<Texture2D>();
        const image = new Image();
        image.onload = () => {
            let tex = new Texture2D(gl, image.width, image.height, format, internalFormat, type);
            tex.bind(0);
            gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, format, type, image);
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

    static procedural(gl: WebGL2RenderingContext, width: number, height: number, func: Generator): Texture2D {
        let tex = new Texture2D(gl, width, height, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE);
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

}