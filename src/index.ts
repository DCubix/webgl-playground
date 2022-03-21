import { Display } from "./display";
import { Matrix4, Shader } from "./shader";
import { Mesh, MeshBuilder } from "./mesh";
import { PixelGenerator, Texture2D } from "./texture";
import { sin, Vector2, Vector4 } from "@math.gl/core";
import { Perlin } from "libnoise-ts/module/generator";

let display = new Display(null);

let basicVS = `#version 300 es
in vec3 a_position;
in vec3 a_normal;
in vec3 a_tangent;
in vec2 a_uv;
in vec4 a_color;

uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;

out vec3 v_normal;
out vec2 v_uv;

void main() {
    mat4 modelView = u_view * u_model;
    gl_Position = u_projection * modelView * vec4(a_position, 1.0);

    mat3 normalMatrix = mat3(transpose(inverse(modelView)));
    v_normal = normalMatrix * a_normal;

    v_uv = a_uv;
}`;

let basicFS = `#version 300 es
precision highp float;

out vec4 fragColor;
in vec3 v_normal;
in vec2 v_uv;

uniform sampler2D u_texture;

void main() {
    float lambert = max(dot(normalize(v_normal), normalize(vec3(0, 0, -1))), 0.0);
    vec4 texColor = texture(u_texture, v_uv);
    fragColor = vec4(vec3(lambert), 1.0) * texColor;
}`;

async function init() {
    let shader = new Shader(display.gl!)
                        .bindAttributeLocation("a_position", 0)
                        .bindAttributeLocation("a_normal", 1)
                        .bindAttributeLocation("a_tangent", 2)
                        .bindAttributeLocation("a_uv", 3)
                        .bindAttributeLocation("a_color", 4)
                        .enableVertex(basicVS)
                        .enableFragment(basicFS)
                        .link();

    // let tex = await Texture2D.fromImage(display.gl!, "me.jpg");
    const perlin = new Perlin();

    function checker(p: Vector2): Vector4 {
        const size = 0.25;
        let nx = Math.floor(p.x / size);
        let ny = Math.floor(p.y / size);
        let v = (nx + ny) % 2 === 0 ? 1.0 : 0.0;
        return new Vector4(v, v, v, 1);
    }

    function bricks(p: Vector2): Vector4 {
        const sizeX = 5.0;
        const sizeY = 8.0;
        const gap = 0.01;
        const smooth = 0.05;

        let uu = p.x * sizeX;
        let vv = p.y * sizeY;

        if ((vv * 0.5 - Math.floor(vv * 0.5)) >= 0.5)
			uu += 0.5;

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
        } else v = 0.0;
        
        return new Vector4(v, v, v, 1);
    }

    function perlinNoise(p: Vector2): Vector4 {
        let v = perlin.getValue(p.x, p.y, 0);
        return new Vector4(v, v, v, 1);
    }

    function mix(a: Vector4, b: Vector4, f: number): Vector4 {
        return new Vector4(
            a.x * (1.0 - f) + b.x * f,
            a.y * (1.0 - f) + b.y * f,
            a.z * (1.0 - f) + b.z * f,
            a.w * (1.0 - f) + b.w * f
        );
    }

    function warp(p: Vector2): Vector4 {
        const intens = 0.05;
        let w = perlinNoise(p).x;

        let c = p.clone();
        c.x = c.x + (w - 0.5) * intens;
        c.y = c.y + (w - 0.5) * -intens;
        
        let col = bricks(c).x;

        let brickColor = new Vector4(0.7, 0.3, 0.0, 1);
        let cementColor = new Vector4(0.2, 0.2, 0.2, 1);
        let dirtColor = new Vector4(0.3, 0.15, 0.0, 1.0);

        let dirtAmt = perlin.getValue(p.x * 3.0, p.y * 3.0, 0) * 0.5;

        return mix(mix(cementColor, brickColor, col), dirtColor, dirtAmt);
    }

    let tex = Texture2D.procedural(display.gl!, 256, 256, warp);
    tex.setFiltering(display.gl!.LINEAR_MIPMAP_LINEAR, display.gl!.LINEAR);
    let mesh = new MeshBuilder().addCube().recalculateNormals().build(display.gl!);

    let rot = 0;
    function loop() {
        display.clear(0.1, 0.4, 0.7, 1.0);

        tex.bind(0);
        shader.enable();

        shader.setTexture("u_texture", 0);

        let model = new Matrix4().rotateY(rot).rotateX(rot * 0.5).rotateZ(rot * 0.25);
        let view = new Matrix4().translate([0, 0, -5]);
        let proj = new Matrix4().perspective({ fov: Math.PI / 4, aspect: display.aspectRatio, near: 0.1, far: 1000 });

        shader.setUniform("u_model", model);
        shader.setUniform("u_view", view);
        shader.setUniform("u_projection", proj);

        mesh.draw(display.gl!);

        rot += 0.02;

        window.requestAnimationFrame(loop);
    }
    loop();
}
init();