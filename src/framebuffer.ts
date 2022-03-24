import { Texture2D, TextureFormat } from "./texture";

export enum FramebufferTarget {
    Read = WebGL2RenderingContext.READ_FRAMEBUFFER,
    Draw = WebGL2RenderingContext.DRAW_FRAMEBUFFER,
    ReadDraw = WebGL2RenderingContext.FRAMEBUFFER
}

export enum Attachment {
    Color = WebGL2RenderingContext.COLOR_ATTACHMENT0,
    Depth = WebGL2RenderingContext.DEPTH_ATTACHMENT,
    Stencil = WebGL2RenderingContext.STENCIL_ATTACHMENT,
    DepthStencil = WebGL2RenderingContext.DEPTH_STENCIL_ATTACHMENT
}

export class Framebuffer {

    private gl: WebGL2RenderingContext;
    private colorAttachments: Texture2D[];
    private depthAttachment?: Texture2D;

    private fbo?: WebGLFramebuffer;
    private rbo?: WebGLRenderbuffer;

    private viewport?: [ number, number, number, number ];
    private target: FramebufferTarget;
    private _width: number;
    private _height: number;

    constructor(gl: WebGL2RenderingContext, width: number, height: number) {
        this.gl = gl;
        this.target = FramebufferTarget.ReadDraw;
        this.colorAttachments = [];
        this._width = width;
        this._height = height;
        this.fbo = gl.createFramebuffer()!;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
        gl.readBuffer(gl.NONE);
        gl.drawBuffers([ gl.NONE ]);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    addColorAttachment(format: TextureFormat) {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo!);

        let tex = new Texture2D(this.gl, this._width, this._height, format).setNull();
        tex.generateMipmap();

        let drawBuffers = [];
        let att = this.colorAttachments.length;
        for (let i = 0; i < att + 1; i++) {
            drawBuffers.push(Attachment.Color + i);
        }

        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, Attachment.Color + att, tex.target, tex.texture!, 0);
        this.gl.drawBuffers(drawBuffers);

        if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) {
            throw new Error("Framebuffer is incomplete");
        }
        this.colorAttachments.push(tex);

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    addDepthAttachment() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo!);

        let tex = new Texture2D(this.gl, this._width, this._height, TextureFormat.Depth).setNull();
        tex.generateMipmap();

        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, Attachment.Depth, tex.target, tex.texture!, 0);

        if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) {
            throw new Error("Framebuffer is incomplete");
        }
        this.depthAttachment = tex;

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    addRenderbuffer(storage: TextureFormat, attachment: Attachment) {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo!);

        let fmt = Texture2D.convertFormat(this.gl, storage);

        let rbo = this.gl.createRenderbuffer()!;
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, rbo);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, fmt.internal, this._width, this._height);
        this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, attachment, this.gl.RENDERBUFFER, rbo);

        if (this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) != this.gl.FRAMEBUFFER_COMPLETE) {
            throw new Error("Framebuffer is incomplete");
        }
        this.rbo = rbo;

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    drawBuffer(index: number | null) {
        if (index == null) {
            let db = [];
            for (let i = 0; i < this.colorAttachments.length; i++) {
                db.push(Attachment.Color + i);
            }
            this.gl.drawBuffers(db);
        } else {
            this.gl.drawBuffers([ Attachment.Color + index ]);
        }
    }

    bind(target: FramebufferTarget = FramebufferTarget.ReadDraw, readBuffer?: Attachment) {
        let vp: Int32Array = this.gl.getParameter(this.gl.VIEWPORT);
        this.viewport = [ vp[0], vp[1], vp[2], vp[3] ];
        this.target = target;
        this.gl.bindFramebuffer(this.target, this.fbo!);
        this.gl.viewport(0, 0, this._width, this._height);
        if (target != FramebufferTarget.Draw && readBuffer) {
            this.gl.readBuffer(readBuffer);
        }
    }

    unbind(resetViewport: boolean = true) {
        this.gl.bindFramebuffer(this.target, null);
        if (resetViewport) {
            this.gl.viewport(...this.viewport!);
        }
    }

    get width() { return this._width; }
    get height() { return this._height; }

}