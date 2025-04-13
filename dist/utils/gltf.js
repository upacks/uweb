import * as THREE from 'three';
import { log } from 'utils/web';
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js');
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js');
const Loader = new GLTFLoader();
export const Exca = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./exca-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.5;
    const div = 45;
    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    scene.position.set(x + 8, y - 24, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export const Drill = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./drill-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.5;
    const div = 45;
    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    scene.position.set(x + 21.15, y - 17.6, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export const Dozer = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./dozer-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.5;
    const div = 45;
    scene.rotation.set(Math.PI / 2, Math.PI / 2, 0);
    scene.position.set(x + 8.5, y + 40, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export const Dump = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./dump-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.4;
    const div = 45;
    scene.rotation.set(Math.PI / 2, Math.PI / 2, 0);
    scene.position.set(x + 24.5, y + 40, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export const Truck = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./truck-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.4;
    const div = 45;
    scene.rotation.set(Math.PI / 2, Math.PI / 2, 0);
    scene.position.set(x - 24.5, y + 40, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export const Toyota = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./car-mini.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.5;
    const div = 45;
    scene.rotation.set(Math.PI / 2, Math.PI / 2, 0);
    scene.position.set(x - 4.75, y + 40, z);
    const mapScene = SkeletonUtils.clone(scene);
    const threeScene = SkeletonUtils.clone(scene);
    const ThreePivot = new THREE.Group();
    ThreePivot.add(threeScene);
    ThreePivot.matrixWorldNeedsUpdate = true;
    ThreePivot.updateMatrixWorld(true);
    ThreePivot.scale.set(scale, scale, scale);
    const MapPivot = new THREE.Group();
    MapPivot.add(mapScene);
    MapPivot.matrixWorldNeedsUpdate = true;
    MapPivot.updateMatrixWorld(true);
    MapPivot.scale.set(scale / div, scale / div, scale / div);
    res({ MapPivot, ThreePivot });
}));
export class Vehicle {
    Maptalks;
    TruckMap;
    isM = false;
    Three;
    TruckThree;
    isT = false;
    callback = (...n) => { };
    canvas = document.getElementsByClassName('maptalks-canvas-layer');
    changeCursor = (coll, value) => { for (var i = 0, len = coll.length; i < len; i++)
        coll[i].style["cursor"] = value; };
    constructor({ Truck, Maptalks, Three }) {
        this.Maptalks = Maptalks ?? null;
        this.Three = Three ?? null;
        if (this.Maptalks) {
            this.isM = true;
            this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot);
            this.Maptalks.threeLayer.addMesh(this.TruckMap);
            this.TruckMap.on("click", () => {
                this.callback('mouse', 'click');
            });
            this.TruckMap.on("dblclick", () => {
                this.callback('mouse', 'dblclick');
            });
            this.TruckMap.on("mouseenter", () => {
                this.changeCursor(this.canvas, 'pointer');
                this.callback('mouse', 'enter');
            });
            this.TruckMap.on("mouseout", () => {
                this.changeCursor(this.canvas, 'auto');
                this.callback('mouse', 'out');
            });
        }
        if (this.Three) {
            this.isT = true;
            this.TruckThree = Truck.ThreePivot;
            this.Three.scene.add(this.TruckThree);
        }
    }
    on = (cb) => { this.callback = cb; };
    update = ({ gps = [0, 0, 0], utm = [0, 0, 0], head = 0 }) => {
        try {
            if (this.isM) {
                const position = this.Maptalks.threeLayer.coordinateToVector3({ x: gps[0], y: gps[1], z: 0 }, 0);
                this.TruckMap.getObject3d().position.copy(position);
                this.TruckMap.getObject3d().rotation.fromArray([0, 0, head]);
            }
            if (this.isT) {
                this.TruckThree.position.fromArray(utm);
                this.TruckThree.rotation.fromArray([0, 0, head]);
            }
            this.callback('position', { gps, utm, head });
        }
        catch {
            return null;
        }
    };
    remove = () => {
        try {
            if (this.isM) {
                this.changeCursor(this.canvas, 'auto');
                this.Maptalks.threeLayer.removeMesh(this.TruckMap);
            }
            if (this.isT) {
                this.Three.scene.remove(this.TruckThree);
            }
        }
        catch (err) {
            log.error(`[Vehicle]: Remove / ${err.message}`);
        }
    };
}
//# sourceMappingURL=gltf.js.map