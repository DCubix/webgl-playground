/**
 * An OpenGL-capable display based on HTML5 Canvas
 */
export class Display {

    public canvas: HTMLCanvasElement;
    public gl: WebGL2RenderingContext | null;

    constructor(canvas: HTMLCanvasElement | string | null) {
        if (canvas == null) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 1280;
            this.canvas.height = 720;
            document.body.appendChild(this.canvas);
        } else {
            if (typeof canvas === "string") {
                this.canvas = document.getElementById(canvas) as HTMLCanvasElement;
            } else {
                this.canvas = canvas;
            }
        }

        // WebGL 2.0
        this.gl = this.canvas.getContext('webgl2');

        if (!this.gl) {
            throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.');
        }

        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.frontFace(this.gl.CCW);
        // this.gl.enable(this.gl.CULL_FACE);
        // this.gl.cullFace(this.gl.BACK);
    }

    public clear(r: number, g: number, b: number, a: number = 1.0) {
        this.gl?.clearColor(r, g, b, a);
        this.gl?.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }

    public resize(width: number, height: number) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.gl?.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    public get width(): number { return this.canvas.width; }
    public get height(): number { return this.canvas.height; }
    public get aspectRatio(): number { return this.width / this.height; }

}