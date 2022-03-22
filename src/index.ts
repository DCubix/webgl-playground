import { Display } from "./display";
import { Matrix4, Shader } from "./shader";
import { Mesh, MeshBuilder } from "./mesh";
import { Texture2D } from "./texture";
import { blend, BlendMode, bricks, circle, Color, deform, Filter, mix, normalMap, perlin, polygon, sample, scalar, smoothStep, solid, threshold } from "./procedural_texture";
import { loadImage } from "./loaders";

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

    let img = await loadImage("me.jpg");

    let redDonut = mix(
        solid(Color.fromHex("#ffff00")),
        sample(img, Filter.Linear),
        deform(
            smoothStep(
                0.3, 0.31,
                blend(
                    circle(0.5),
                    circle(0.28),
                    BlendMode.Subtract
                )
            ),
            perlin(2, 2),
            0.04
        )
    );
    let texGen = mix(
        solid(Color.fromHex("#363b45")),
        solid(Color.fromHex("#94544d")),
        bricks(4.0, 8.0)
    );
    let tex = Texture2D.procedural(display.gl!, 256, 256, redDonut);

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