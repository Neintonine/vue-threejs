import {Vector3} from "three";

export function centerText(mesh) {
    console.log(mesh);
    let size = new Vector3();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.boundingBox.getSize(size);
    mesh.position.x -= size.x / 2;
    mesh.position.y -= size.y / 2;
    mesh.position.z -= size.z / 2;
}