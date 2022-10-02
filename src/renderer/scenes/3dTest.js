import * as PerspectiveCamera from "../cameras/PerspectiveCamera";

import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
import {FontLoader} from "three/addons/loaders/FontLoader";
import {TextGeometry} from "three/addons/geometries/TextGeometry";

export const name = 'template';
export const visible = false;

let obj, scene;

export function getCamera() {
    return PerspectiveCamera;
}

export function fillScene(sceneInput) {
    scene = sceneInput;
    obj = new Mesh(new BoxGeometry(1,1,1), new MeshBasicMaterial( { color: 0x00ff00 } ));
    sceneInput.add(obj);
}

export function update(deltatime) {
    obj.rotation.x += 1 * deltatime;
    obj.rotation.y += 1 * deltatime;
}

export function onClick(data) {
    const loader = new FontLoader();
    loader.load(
        'fonts/Electrolize_Regular.json',
        function (font) {
            scene.remove(obj);
            const geometry = new TextGeometry( data, {
                font: font,
                size: 1,
                height: .1,
                curveSegments: 12,

            } );
            geometry.center();
            let textObj = new Mesh(geometry, new MeshBasicMaterial( { color: 0x00ff00 } ));
            scene.add(textObj);
            obj = textObj;
        }
    );
}