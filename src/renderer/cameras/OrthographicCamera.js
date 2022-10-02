import {OrthographicCamera} from "three";
import {getAspectRatio} from "@/renderer/engine";

export function create() {
    let aspect = getAspectRatio(window.innerWidth, window.innerHeight, true);
    return new OrthographicCamera(aspect / -2,aspect / 2, 0.5, -0.5, 0.01, 100);
}

export function update(camera) {
    let aspect = getAspectRatio(window.innerWidth, window.innerHeight, true);
    camera.left = aspect / -2;
    camera.right = aspect / 2;
}