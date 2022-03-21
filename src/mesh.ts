import { Vector2, Vector3, Vector4 } from "@math.gl/core";
import { threadId } from "worker_threads";

export abstract class IBaseVertex {
    abstract layoutSetup(gl: WebGL2RenderingContext): void;
    abstract interleave(): number[];
    abstract clone(): IBaseVertex;
}

export class Vertex extends IBaseVertex {
    
    public position: Vector3;
    public normal: Vector3;
    public tangent: Vector3;
    public uv: Vector2;
    public color: Vector4;

    constructor(
        position: Vector3,
        normal: Vector3 = new Vector3(),
        tangent: Vector3 = new Vector3(),
        uv: Vector2 = new Vector2(),
        color: Vector4 = new Vector4(1, 1, 1, 1)
     ) {
        super();
        
        this.position = position;
        this.normal = normal;
        this.tangent = tangent;
        this.uv = uv;
        this.color = color;
    }

    layoutSetup(gl: WebGL2RenderingContext) {
        gl.enableVertexAttribArray(0);
        gl.enableVertexAttribArray(1);
        gl.enableVertexAttribArray(2);
        gl.enableVertexAttribArray(3);
        gl.enableVertexAttribArray(4);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 60, 0);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 60, 12);
        gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 60, 24);
        gl.vertexAttribPointer(3, 2, gl.FLOAT, false, 60, 36);
        gl.vertexAttribPointer(4, 4, gl.FLOAT, false, 60, 44);
    }

    interleave(): number[] {
        return [
            ...this.position.toArray(new Array(3)),
            ...this.normal.toArray(new Array(3)),
            ...this.tangent.toArray(new Array(3)),
            ...this.uv.toArray(new Array(2)),
            ...this.color.toArray(new Array(4))
        ];
    }
    
    clone(): Vertex {
        return new Vertex(this.position.clone(), this.normal.clone(), this.tangent.clone(), this.uv.clone(), this.color.clone());
    }

    add(other: Vertex) {
        this.position.add(other.position);
        this.normal.add(other.normal);
        this.tangent.add(other.tangent);
        this.uv.add(other.uv);
        this.color.add(other.color);
        return this;
    }

    sub(other: Vertex) {
        this.position.sub(other.position);
        this.normal.sub(other.normal);
        this.tangent.sub(other.tangent);
        this.uv.sub(other.uv);
        this.color.sub(other.color);
        return this;
    }

    divideScalar(scalar: number) {
        this.position.divideScalar(scalar);
        this.normal.divideScalar(scalar);
        this.tangent.divideScalar(scalar);
        this.uv.divideScalar(scalar);
        this.color.divideScalar(scalar);
        return this;
    }

    lerp(other: Vertex, alpha: number) {
        return new Vertex(
            this.position.clone().lerp(this.position, other.position, alpha),
            this.normal.clone().lerp(this.normal, other.normal, alpha),
            this.tangent.clone().lerp(this.tangent, other.tangent, alpha),
            this.uv.clone().lerp(this.uv, other.uv, alpha),
            this.color.clone().lerp(this.color, other.color, alpha)
        );
    }
    
}

/**
 * WebGL Mesh (does not store data)
 */
export class Mesh {
    private vao: WebGLVertexArrayObject;
    private vbo: WebGLBuffer;
    private ibo: WebGLBuffer;

    private iboSize: number;
    private vboSize: number;

    constructor(gl: WebGL2RenderingContext, vertices: Vertex[], indices: number[]) {
        if (vertices.length == 0) {
            throw new Error("Mesh must have at least one vertex");
        }

        this.vao = gl.createVertexArray()!;
        this.vbo = gl.createBuffer()!;
        this.ibo = gl.createBuffer()!;

        this.vboSize = this.iboSize = 0;

        gl.bindVertexArray(this.vao);
        this.update(gl, vertices, indices);
    }

    update(gl: WebGL2RenderingContext, vertices: Vertex[], indices: number[]) {
        let verts = vertices.map((e) => e.interleave()).flat();

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        if (vertices.length > this.vboSize) {
            vertices[0].layoutSetup(gl);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.DYNAMIC_DRAW);
        } else {
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(verts));
        }

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo);
        if (indices.length > this.iboSize) {
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.DYNAMIC_DRAW);
        } else {
            gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(indices));
        }

        gl.bindVertexArray(null);

        this.iboSize = indices.length;
        this.vboSize = vertices.length;
    }

    draw(gl: WebGL2RenderingContext, mode: number = gl.TRIANGLES) {
        gl.bindVertexArray(this.vao);
        gl.drawElements(mode, this.iboSize, gl.UNSIGNED_SHORT, 0);
    }

}

/**
 * Basic mesh primitives generator
 */
export class MeshBuilder {

    private vertices: Vertex[] = [];
    private indices: number[] = [];

    get offset(): number {
        return this.vertices.length;
    }

    public addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
        return this.vertices[this.vertices.length - 1];
    }

    public addIndex(index: number) {
        this.indices.push(index + this.offset);
    }

    public addTriangle(a: Vertex, b: Vertex, c: Vertex): MeshBuilder {
        this.addVertex(a);
        this.addVertex(b);
        this.addVertex(c);
        return this;
    }

    public addQuad(a: Vertex, b: Vertex, c: Vertex, d: Vertex): MeshBuilder {        
        this.addIndex(0);
        this.addIndex(1);
        this.addIndex(2);
        this.addIndex(2);
        this.addIndex(3);
        this.addIndex(0);

        let v1 = this.addVertex(a.clone() as Vertex);
        let v2 = this.addVertex(b.clone() as Vertex);
        let v3 = this.addVertex(c.clone() as Vertex);
        let v4 = this.addVertex(d.clone() as Vertex);

        v1.uv = new Vector2(0, 0);
        v2.uv = new Vector2(1, 0);
        v3.uv = new Vector2(1, 1);
        v4.uv = new Vector2(0, 1);

        return this;
    }

    public addCube(size: number = 1): MeshBuilder {
        const a = new Vertex(new Vector3(-size, -size, -size));
        const b = new Vertex(new Vector3(size, -size, -size));
        const c = new Vertex(new Vector3(size, size, -size));
        const d = new Vertex(new Vector3(-size, size, -size));
        const e = new Vertex(new Vector3(-size, -size, size));
        const f = new Vertex(new Vector3(size, -size, size));
        const g = new Vertex(new Vector3(size, size, size));
        const h = new Vertex(new Vector3(-size, size, size));

        this.addQuad(a, b, c, d);
        this.addQuad(h, g, f, e);

        this.addQuad(d, h, e, a);
        this.addQuad(b, f, g, c);

        this.addQuad(c, g, h, d);
        this.addQuad(a, e, f, b);

        return this;
    }

    public addIcosahedron(size: number = 1): MeshBuilder {
        const t = ((1 + Math.sqrt(5)) / 2) * size;
        const vertices = [
            new Vertex(new Vector3(-size, t, 0)),
            new Vertex(new Vector3(size, t, 0)),
            new Vertex(new Vector3(-size, -t, 0)),
            new Vertex(new Vector3(size, -t, 0)),
            new Vertex(new Vector3(0, -size, t)),
            new Vertex(new Vector3(0, size, t)),
            new Vertex(new Vector3(0, -size, -t)),
            new Vertex(new Vector3(0, size, -t)),
            new Vertex(new Vector3(t, 0, -size)),
            new Vertex(new Vector3(t, 0, size)),
            new Vertex(new Vector3(-t, 0, -size)),
            new Vertex(new Vector3(-t, 0, size))
        ];

        const indices = [
            0, 11, 5,  0, 5, 1,  0, 1, 7,  0, 7, 10,  0, 10, 11,
            1, 5, 9,  5, 11, 4,  11, 10, 2,  10, 7, 6,  7, 1, 8,
            3, 9, 4,  3, 4, 2,  3, 2, 6,  3, 6, 8,  3, 8, 9,
            4, 9, 5,  2, 4, 11,  6, 2, 10, 8, 6, 7,  8, 1, 9
        ].reverse();
        
        for (let i = 0; i < indices.length; i++) {
            this.addIndex(indices[i]);
        }

        for (let i = 0; i < vertices.length; i++) {
            let v = this.addVertex(vertices[i]);
            v.uv = new Vector2(vertices[i].position.x / size, vertices[i].position.y / size);
        }

        return this;
    }

    public addCylinder(radius: number = 1, height: number = 1, segments: number = 32): MeshBuilder {
        if (segments < 3) {
            throw new Error('MeshBuilder.addCylinder: segments must be greater than 2');
        }

        const step = Math.PI * 2 / segments;

        function buildRing(mb: MeshBuilder, center: Vector3, uv_v: number, buildTriangles: boolean) {
            for (let i = 0; i < segments; i++) {
                const angle = i * step;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                let v = mb.addVertex(new Vertex(new Vector3(x, 0, z).add(center)));
                v.uv = new Vector2(i / segments, uv_v);

                if (i > 0 && buildTriangles) {
                    const baseIndex = mb.vertices.length - 1;
                    const vertsPerRow = segments;

                    const indices = [
                        baseIndex, baseIndex - 1, baseIndex - vertsPerRow, baseIndex - vertsPerRow - 1
                    ];

                    mb.addIndex(indices[1]);
                    mb.addIndex(indices[2]);
                    mb.addIndex(indices[0]);
                    mb.addIndex(indices[1]);
                    mb.addIndex(indices[3]);
                    mb.addIndex(indices[2]);
                }
            }

            // connect last segment with first vertex
            if (buildTriangles) {
                const baseIndex = mb.vertices.length - 1;
                const vertsPerRow = segments + 1;

                const indices = [
                    baseIndex - vertsPerRow + 1,
                    0,
                    baseIndex,
                    vertsPerRow - 1,
                ];

                mb.addIndex(indices[1]);
                mb.addIndex(indices[2]);
                mb.addIndex(indices[0]);
                mb.addIndex(indices[1]);
                mb.addIndex(indices[3]);
                mb.addIndex(indices[2]);
            }
        }

        function buildCap(mb: MeshBuilder, center: Vector3, reverse: boolean) {
            let cv = mb.addVertex(new Vertex(center));
            cv.uv = new Vector2(0.5, 0.5);
            
            const centerIndex = mb.vertices.length - 1;

            for (let i = 0; i <= segments; i++) {
                const angle = i * step;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                let v = mb.addVertex(new Vertex(new Vector3(x, 0, z).add(center)));
                v.uv = new Vector2(x / radius, z / radius);

                if (i > 0) {
                    const baseIndex = mb.vertices.length - 1;

                    const indices = reverse ? [
                        centerIndex, baseIndex - 1, baseIndex
                    ] : [
                        centerIndex, baseIndex, baseIndex - 1
                    ];

                    mb.addIndex(indices[0]);
                    mb.addIndex(indices[1]);
                    mb.addIndex(indices[2]);
                }
            }
        }

        buildRing(this, new Vector3(0, -height / 2, 0), 1.0, false);
        buildRing(this, new Vector3(0, height / 2, 0), 0.0, true);

        buildCap(this, new Vector3(0, -height / 2, 0), false);
        buildCap(this, new Vector3(0, height / 2, 0), true);

        return this;
    }

    public recalculateNormals(): MeshBuilder {
        const vertices = this.vertices;
        const indices = this.indices;

        for (let i = 0; i < indices.length; i += 3) {
            const a = vertices[indices[i]];
            const b = vertices[indices[i + 1]];
            const c = vertices[indices[i + 2]];

            const ab = b.position.clone().sub(a.position.clone());
            const ac = c.position.clone().sub(a.position.clone());

            const normal = ab.cross(ac).normalize();

            a.normal.add(normal);
            b.normal.add(normal);
            c.normal.add(normal);
        }

        // normalize all
        for (let i = 0; i < vertices.length; i++) {
            vertices[i].normal.normalize();
        }

        return this;
    }

    public build(gl: WebGL2RenderingContext): Mesh {
        return new Mesh(gl, this.vertices, this.indices);
    }

}