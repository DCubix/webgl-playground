import { Vector2, Matrix3, Vector3 } from "@math.gl/core";
import { Perlin, Voronoi } from "libnoise-ts/module/generator";

function lerpScalar(a: number, b: number, t: number): number {
    return a * (1 - t) + b * t;
}

function saturate(x: number): number {
    return Math.max(0, Math.min(1, x));
}

function sstep(edge0: number, edge1: number, x: number): number {
    let t = saturate((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}

function lstep(a: number, b: number, t: number): number {
    if (t <= a) return 0.0;
    if (t >= b) return 1.0;
    return (t - a) / (b - a);
}

function rand(x: number, y: number): number {
    x += 0.2127 + x * 0.3713 * y;
    y += 0.2127 + x * 0.3713 * y;

    const rx = 4.789 * Math.sin(489.123 * x);
    const ry = 4.789 * Math.sin(489.123 * y);
    const v = rx * ry;

    return v - Math.floor(v);
}

export class Color {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    constructor(r: number, g: number, b: number, a: number = 1) {
        this.r = saturate(r);
        this.g = saturate(g);
        this.b = saturate(b);
        this.a = saturate(a);
    }

    static fromHex(hex: string): Color {
        if (hex.startsWith("#")) hex = hex.slice(1);
        if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
        const r = parseInt(hex.slice(0, 2), 16) / 255;
        const g = parseInt(hex.slice(2, 4), 16) / 255;
        const b = parseInt(hex.slice(4, 6), 16) / 255;
        return new Color(r, g, b);
    }

    lerp(b: Color, t: number): Color {
        return new Color(
            lerpScalar(this.r, b.r, t),
            lerpScalar(this.g, b.g, t),
            lerpScalar(this.b, b.b, t),
            lerpScalar(this.a, b.a, t)
        );
    }

    add(b: Color): Color {
        return new Color(
            this.r + b.r,
            this.g + b.g,
            this.b + b.b,
            this.a + b.a
        );
    }

    sub(b: Color): Color {
        return new Color(
            this.r - b.r,
            this.g - b.g,
            this.b - b.b,
            this.a - b.a
        );
    }

    mul(b: Color): Color {
        return new Color(
            this.r * b.r,
            this.g * b.g,
            this.b * b.b,
            this.a * b.a
        );
    }

    div(b: Color): Color {
        return new Color(
            this.r / (b.r + 0.0001),
            this.g / (b.g + 0.0001),
            this.b / (b.b + 0.0001),
            1.0
        );
    }

    mulScalar(s: number): Color {
        return new Color(
            this.r * s,
            this.g * s,
            this.b * s,
            this.a * s
        );
    }

    get luma(): number {
        return 0.2126 * this.r + 0.7152 * this.g + 0.0722 * this.b;
    }

}

const pgen = new Perlin();
const vgen = new Voronoi();

export type Generator = (p: Vector2) => Color;

export function solid(c: Color): Generator {
    return (p: Vector2) => c;
}

export function scalar(s: number): Generator {
    return (p: Vector2) => new Color(s, s, s);
}

export function mix(a: Generator, b: Generator, amt: Generator): Generator {
    return (p: Vector2): Color => a(p).lerp(b(p), amt(p).luma);
}

export function perlin(sizeX: number, sizeY: number): Generator {
    return function(p: Vector2): Color {
        const v = Math.abs(pgen.getValue(p.x * sizeX, p.y * sizeY, 0));
        return new Color(v, v, v, 1);
    };
}

export function voronoi(sizeX: number, sizeY: number): Generator {
    return function(p: Vector2): Color {
        const v = vgen.getValue(p.x * sizeX, p.y * sizeY, 0);
        return new Color(v, v, v, 1);
    };
}

export function bricks(sizeX: number, sizeY: number, xoffset: number = 0.5, gap: number = 0.01, smooth: number = 0.03): Generator {
    return function(p: Vector2): Color {
        let uu = p.x * sizeX;
        let vv = p.y * sizeY;

        if ((vv * 0.5 - Math.floor(vv * 0.5)) >= 0.5)
			uu += xoffset;

        if (uu >= sizeX) uu -= sizeX;
        if (vv >= sizeY) vv -= sizeY;

        let x = uu - Math.floor(uu);
        let y = vv - Math.floor(vv);

        let inside = true;
        if (gap > 0.0) {
            inside &&= x > gap * sizeX;
            inside &&= y > gap * sizeY;
        }

        let v = 1.0;
        if (inside) {
            let dist = Math.min(Math.min(x - gap * sizeX, 1.0 - x) / sizeX, Math.min(y - gap * sizeY, 1.0 - y) / sizeY);
            dist *= Math.min(sizeX, sizeY);

            if (dist < smooth) {
                v *= dist / smooth;
            }

            // let brickIdX = Math.floor(uu);
            // const brickIdY = Math.floor(vv);

            // if (brickIdX > sizeX) brickIdX = 0;

            // v *= rand(brickIdX * 0.01, brickIdY * 0.01);
        } else v = 0.0;

        return new Color(v, v, v, 1);
    };
}

export function checker(sizeX: number, sizeY: number): Generator {
    return function(p: Vector2): Color {
        const sx = 0.5 / Math.max(sizeX, 1);
        const sy = 0.5 / Math.max(sizeY, 1);
        const nx = Math.floor(p.x / sx);
        const ny = Math.floor(p.y / sy);
        const v = (nx + ny) % 2 === 0 ? 1.0 : 0.0;
        return new Color(v, v, v);
    };
}

export function deform(input: Generator, heightMap: Generator, intensity: number): Generator {
    return function(p: Vector2): Color {
        const h = heightMap(p).luma - 0.5;
        const c = new Vector2(
            p.x + h * intensity,
            p.y + h * -intensity
        );
        return input(c);
    };
}

export function threshold(input: Generator, threshold: number): Generator {
    return function(p: Vector2): Color {
        const v = input(p).luma;
        return new Color(v > threshold ? 1 : 0, v > threshold ? 1 : 0, v > threshold ? 1 : 0);
    };
}

export function smoothStep(edge0: number, edge1: number, amt: Generator): Generator {
    return function(p: Vector2): Color {
        const x = amt(p).luma;
        const v = sstep(edge0, edge1, x);
        return new Color(v, v, v);
    };
}

export function circle(radius: number): Generator {
    return function(p: Vector2): Color {
        const center = new Vector2(0.5, 0.5);
        const rad = radius + 0.0001;
        const dist = p.distanceTo(center);
        const v = dist <= rad ? 1.0 - dist / rad : 0.0;
        return new Color(v, v, v);
    };
}

export function polygon(radius: number, angle: number, sides: number, gradient: number): Generator {
    return function(p: Vector2): Color {
        const c = new Vector2(
            p.x * 2.0 - 1.0,
            p.y * 2.0 - 1.0
        );

        const a = Math.atan2(c.x, c.y) + angle;
        const b = (Math.PI * 2.0) / sides;

        const d = Math.cos(Math.floor(0.5 + a / b) * b - a) * c.len() / radius;
        const v = 1.0 - lstep(0.8 - gradient, 0.8, d);

        return new Color(v, v, v);
    };
}

export function transform(
    input: Generator,
    x: number, y: number,
    scaleX: number = 1, scaleY: number = 1,
    rotation: number = 0,
): Generator {
    return function(p: Vector2): Color {
        const c = new Vector2(
            p.x * 2.0 - 1.0,
            p.y * 2.0 - 1.0
        );
        // rotate
        const r = new Vector2(
            c.x * Math.cos(rotation) - c.y * Math.sin(rotation),
            c.x * Math.sin(rotation) + c.y * Math.cos(rotation)
        );
        // scale + translate
        const s = new Vector2(
            r.x * scaleX + x,
            r.y * scaleY + y
        );
        return input(s);
    };
}

export enum BlendMode {
    Add,
    Subtract,
    Multiply,
    Screen,
    Overlay,
    Divide,
    Min,
    Max,
    Color
}

export function blend(a: Generator, b: Generator, mode: BlendMode): Generator {
    return function(p: Vector2): Color {
        const va = a(p);
        const vb = b(p);
        switch (mode) {
            case BlendMode.Add:
                return va.add(vb);
            case BlendMode.Subtract:
                return va.sub(vb);
            case BlendMode.Multiply:
                return va.mul(vb);
            case BlendMode.Screen:
                return va.mul(vb).add(va.mul(vb).sub(va).mulScalar(2.0));
            case BlendMode.Overlay:
                return va.mul(vb).add(va.mul(vb).mulScalar(2.0).sub(va).mul(vb).mulScalar(2.0));
            case BlendMode.Divide:
                return va.mul(vb).div(va.add(vb).mulScalar(2.0));
            case BlendMode.Min:
                return new Color(
                    Math.min(va.r, vb.r),
                    Math.min(va.g, vb.g),
                    Math.min(va.b, vb.b)
                );
            case BlendMode.Max:
                return new Color(
                    Math.max(va.r, vb.r),
                    Math.max(va.g, vb.g),
                    Math.max(va.b, vb.b)
                );
        }
        return va;
    };
}

export function normalMap(input: Generator, width: number, height: number, strength: number = 1): Generator {
    return function(p: Vector2): Color {
        const epx = 1.0 / width, epy = 1.0 / height;
        const d0 = Math.abs(input(p).luma);
        const d1 = Math.abs(input(new Vector2(p.x + epx, p.y)).luma) * strength / 2.0;
        const d2 = Math.abs(input(new Vector2(p.x - epx, p.y)).luma) * strength / 2.0;
        const d3 = Math.abs(input(new Vector2(p.x, p.y + epy)).luma) * strength / 2.0;
        const d4 = Math.abs(input(new Vector2(p.x, p.y - epy)).luma) * strength / 2.0;
        const dx = ((d2 - d0) + (d0 - d1)) * 0.5;
        const dy = ((d4 - d0) + (d0 - d3)) * 0.5;
        const n = new Vector3(dx, dy, 1.0).normalize();
        return new Color(n.x * 0.5 + 0.5, n.y * 0.5 + 0.5, n.z * 0.5 + 0.5);
    };
}

export enum Filter {
    Nearest,
    Linear
}

export function sample(image: ImageData, filter: Filter = Filter.Nearest): Generator {
    return function(p: Vector2): Color {
        switch (filter) {
            case Filter.Nearest: {
                const x = Math.floor(p.x * image.width);
                const y = Math.floor(p.y * image.height);
                const i = (y * image.width + x) * 4;
                return new Color(
                    image.data[i + 0] / 255.0,
                    image.data[i + 1] / 255.0,
                    image.data[i + 2] / 255.0,
                    image.data[i + 3] / 255.0
                );
            }
            case Filter.Linear: {
                const x0 = Math.floor(p.x * image.width);
                const y0 = Math.floor(p.y * image.height);
                const x1 = x0 + 1;
                const y1 = y0 + 1;
                const x = p.x * image.width - x0;
                const y = p.y * image.height - y0;
                const i0 = (y0 * image.width + x0) * 4;
                const i1 = (y0 * image.width + x1) * 4;
                const i2 = (y1 * image.width + x0) * 4;
                const i3 = (y1 * image.width + x1) * 4;
                const c0 = new Color(
                    image.data[i0 + 0] / 255.0,
                    image.data[i0 + 1] / 255.0,
                    image.data[i0 + 2] / 255.0,
                    image.data[i0 + 3] / 255.0
                );
                const c1 = new Color(
                    image.data[i1 + 0] / 255.0,
                    image.data[i1 + 1] / 255.0,
                    image.data[i1 + 2] / 255.0,
                    image.data[i1 + 3] / 255.0
                );
                const c2 = new Color(
                    image.data[i2 + 0] / 255.0,
                    image.data[i2 + 1] / 255.0,
                    image.data[i2 + 2] / 255.0,
                    image.data[i2 + 3] / 255.0
                );
                const c3 = new Color(
                    image.data[i3 + 0] / 255.0,
                    image.data[i3 + 1] / 255.0,
                    image.data[i3 + 2] / 255.0,
                    image.data[i3 + 3] / 255.0
                );
                return new Color(
                    c0.r * (1.0 - x) * (1.0 - y) + c1.r * x * (1.0 - y) + c2.r * (1.0 - x) * y + c3.r * x * y,
                    c0.g * (1.0 - x) * (1.0 - y) + c1.g * x * (1.0 - y) + c2.g * (1.0 - x) * y + c3.g * x * y,
                    c0.b * (1.0 - x) * (1.0 - y) + c1.b * x * (1.0 - y) + c2.b * (1.0 - x) * y + c3.b * x * y,
                    c0.a * (1.0 - x) * (1.0 - y) + c1.a * x * (1.0 - y) + c2.a * (1.0 - x) * y + c3.a * x * y
                );
            }
        }
    };
}