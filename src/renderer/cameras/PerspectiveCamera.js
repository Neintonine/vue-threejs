import {PerspectiveCamera} from "three";
import {getAspectRatio} from "@/renderer/engine";


export function create() {
    let camera =  new PerspectiveCamera(90, getAspectRatio(window.innerWidth, window.innerHeight, true));
    camera.position.z = 5;
    return camera;
}

export function update(camera) {
    camera.aspect = getAspectRatio(window.innerWidth, window.innerHeight, true);
}
