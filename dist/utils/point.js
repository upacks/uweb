"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const THREE = __importStar(require("three"));
class Point {
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
exports.Point = Point;
//# sourceMappingURL=point.js.map