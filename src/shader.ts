import { Vector2, Vector3, Vector4, Matrix3, Matrix4 } from '@math.gl/core';
export { Vector2, Vector3, Vector4, Matrix3, Matrix4, Quaternion } from '@math.gl/core';

export class Shader {
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null;
    private uniforms: { [key: string]: WebGLUniformLocation };
    private attributes: { [key: string]: number };

    constructor(gl: WebGL2RenderingContext) {
        this.gl = gl;
        this.program = gl.createProgram();
        this.uniforms = {};
        this.attributes = {};
    }

    public enableVertex(src: string): Shader {
        const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, src);
        if (vertexShader === null) {
            throw new Error("Failed to compile vertex shader");
        }
        this.gl.attachShader(this.program!, vertexShader);
        return this;
    }

    public enableFragment(src: string): Shader {
        const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, src);
        if (fragmentShader === null) {
            throw new Error("Failed to compile fragment shader");
        }
        this.gl.attachShader(this.program!, fragmentShader);
        return this;
    }

    public link(): Shader {
        this.gl.linkProgram(this.program!);
        if (!this.gl.getProgramParameter(this.program!, this.gl.LINK_STATUS)) {
            throw new Error(this.gl.getProgramInfoLog(this.program!)!);
        }
        // now we can detach and delete the shaders
        let shaders = this.gl.getAttachedShaders(this.program!);
        if (shaders !== null) {
            for (const shader of shaders) {
                this.gl.detachShader(this.program!, shader);
                this.gl.deleteShader(shader);
            }
        }
        return this;
    }

    public getAttribute(name: string): number {
        if (this.attributes[name] === undefined) {
            const loc = this.gl.getAttribLocation(this.program!, name);
            if (loc === -1) {
                throw new Error(`Attribute "${name}" not found`);
            }
            this.attributes[name] = loc;
        }
        return this.attributes[name];
    }

    public bindAttributeLocation(name: string, index: number): Shader {
        this.gl.bindAttribLocation(this.program!, index, name);
        return this;
    }

    public setTexture(name: string, value: number) {
        let location = this.uniforms[name];
        if (location === undefined) {
            const loc = this.gl.getUniformLocation(this.program!, name);
            if (loc === null) {
                throw new Error(`Uniform "${name}" not found`);
            }
            this.uniforms[name] = loc;
            location = loc;
        }
        this.gl.uniform1i(location, value);
    }

    public setUniform(name: string, value: number | Vector2 | Vector3 | Vector4 | Matrix3 | Matrix4) {
        let location = this.uniforms[name];
        if (location === undefined) {
            const loc = this.gl.getUniformLocation(this.program!, name);
            if (loc === null) {
                throw new Error(`Uniform "${name}" not found`);
            }
            this.uniforms[name] = loc;
            location = loc;
        }

        if (value instanceof Vector2) {
            this.gl.uniform2fv(location, value.toArray());
        } else if (value instanceof Vector3) {
            this.gl.uniform3fv(location, value.toArray());
        } else if (value instanceof Vector4) {
            this.gl.uniform4fv(location, value.toArray());
        } else if (value instanceof Matrix3) {
            this.gl.uniformMatrix3fv(location, false, value.toArray());
        } else if (value instanceof Matrix4) {
            this.gl.uniformMatrix4fv(location, false, value.toArray());
        } else {
            this.gl.uniform1f(location, value as number);
        }
    }

    public enable() {
        this.gl.useProgram(this.program!);
    }

    private compileShader(type: number, src: string): WebGLShader | null {
        const shader = this.gl.createShader(type);
        if (shader === null) {
            throw new Error("Failed to create shader");
        }

        this.gl.shaderSource(shader, src);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }

}