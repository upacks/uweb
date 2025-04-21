import * as THREE from 'three';
export class Point {
    Three;
    Maptalks;
    GroupThree = new THREE.Group();
    GroupMaptalks = new THREE.Group();
    que = {};
    constructor({ Three, Maptalks }) {
        try {
            this.Three = Three;
            this.Maptalks = Maptalks;
            this.GroupThree = new THREE.Group();
            this.GroupMaptalks = new THREE.Group();
            this.Three.scene.add(this.GroupThree);
            this.Maptalks.threeLayer.addMesh(this.GroupMaptalks);
        }
        catch (err) { }
    }
    add = (key, color, [x, y, z]) => {
        try {
            const geometry = new THREE.SphereGeometry(0.1, 10, 10);
            const material = new THREE.MeshBasicMaterial({ color });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x, y, z);
            mesh.name = key;
            this.GroupThree.add(mesh);
        }
        catch (err) {
            console.log(err);
        }
    };
    removeAll = () => {
        this.Three.scene.remove(this.GroupThree);
        this.Maptalks.threeLayer.removeMesh(this.GroupMaptalks);
        this.GroupThree.traverse((child) => { this.GroupThree.remove(child); });
        this.GroupMaptalks.traverse((child) => { this.GroupMaptalks.remove(child); });
    };
    remove = (key) => {
        const obj = this.GroupThree.getObjectByName(key);
        if (obj) {
            this.GroupThree.remove(obj);
        }
    };
    update = (key, color, [x, y, z]) => {
        const obj = this.GroupThree.getObjectByName(key);
        obj ? obj.position.set(x, y, z) : this.add(key, color, [x, y, z]);
    };
}
//# sourceMappingURL=point.js.map