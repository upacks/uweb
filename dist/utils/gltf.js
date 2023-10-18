import * as THREE from 'three';
import { log } from 'utils/web';
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js');
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js');
const Loader = new GLTFLoader();
export const Drill = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => {
    Loader.load('./drill/body/scene.gltf', (gltf) => compile(gltf.scene, null));
    Loader.load('./drill/bit/scene.gltf', (gltf) => compile(null, gltf.scene));
    let crane = null;
    let bit = null;
    const compile = (_crane, _bit) => {
        if (_crane) {
            crane = _crane;
        }
        if (_bit) {
            bit = _bit;
        }
        if (crane && bit) {
            const scale = 0.003;
            const sbit = 0.0025;
            const div = 45;
            crane.rotation.set(Math.PI / 2, Math.PI, 0);
            crane.position.set(0, -1800, 150);
            bit.rotation.set(Math.PI * 2, Math.PI / 2, 0);
            bit.position.set(-1680, -80, -1350);
            bit.scale.set(sbit, sbit, sbit);
            const threeCrane = SkeletonUtils.clone(crane);
            const threeBit = SkeletonUtils.clone(bit);
            const mapCrane = SkeletonUtils.clone(crane);
            const mapBit = SkeletonUtils.clone(bit);
            const ThreePivot = new THREE.Group();
            ThreePivot.add(threeCrane);
            ThreePivot.add(threeBit);
            ThreePivot.matrixWorldNeedsUpdate = true;
            ThreePivot.updateMatrixWorld(true);
            ThreePivot.scale.set(scale, scale, scale);
            const MapPivot = new THREE.Group();
            MapPivot.add(mapCrane);
            MapPivot.add(mapBit);
            MapPivot.matrixWorldNeedsUpdate = true;
            MapPivot.updateMatrixWorld(true);
            MapPivot.scale.set(scale / div, scale / div, scale / div);
            res({ MapPivot, ThreePivot });
        }
    };
});
export const Dozer = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./dozer/scene.gltf', (gltf) => {
    const scene = gltf.scene;
    const scale = size / 250;
    const div = 45;
    scene.rotation.set(Math.PI / 2, 0, 0);
    scene.position.set(-1.25 + (x / 10), -13.25 - (y / 10), 1.25 + (z / 10));
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
export const Toyota = ({ size = 50, x = 0, y = 0, z = 0 }) => new Promise((res) => Loader.load('./hilux.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = (size - 23) / 1000;
    const div = 45;
    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    scene.position.set(x, (-90) - y, z);
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