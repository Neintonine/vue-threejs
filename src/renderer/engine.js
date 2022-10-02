import { WebGLRenderer, Scene, Clock } from "three";

let
    renderer,
    scene,
    sceneTemplate,
    camera,
    cameraTemplate,
    clock;

export function createRenderer(parentElement) {
    renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    parentElement.appendChild(renderer.domElement);

    clock = new Clock();

    window.addEventListener('resize', resizeAction);
}

function resizeAction() {
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (camera) {
        cameraTemplate.update(camera);
        camera.updateProjectionMatrix();
    }
}

export function getAspectRatio(width, height, forceLandscape = false) {
    if (forceLandscape) {
        return width / height;
    }

    if (width > height) {
        return { landscape: true, ratio: width / height };
    }
    return {landscape: false, ratio: height / width};
}

export function createScene(template) {
    sceneTemplate = template;
    cameraTemplate = template.getCamera();
    camera = cameraTemplate.create();

    scene = new Scene();
    template.fillScene(scene);
}

export function startRendering() {
    if (!scene) {
        console.error("Tried to start rendering without scene. Please call createScene before starting rendering.");
        return;
    }

    clock.start();
    render();
}

function render() {
    requestAnimationFrame(render);

    sceneTemplate.update(clock.getDelta());

    renderer.render(scene, camera);
}

window.sendDataToRenderer = function(data) {
    if (!scene) {
        console.error("Tried to send data without scene. Please call createScene before starting rendering.");
        return;
    }

    sceneTemplate.onClick(data);
}