import * as THREE from 'three';
import { Safe } from 'utils/web';
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
    constructor({ Truck, Maptalks, Three }) {
        this.Maptalks = Maptalks ?? null;
        this.Three = Three ?? null;
        if (this.Maptalks) {
            this.isM = true;
            this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot);
            this.Maptalks.threeLayer.addMesh(this.TruckMap);
            const changeCursor = (coll, value) => {
                for (var i = 0, len = coll.length; i < len; i++) {
                    coll[i].style["cursor"] = value;
                }
            };
            const can = document.getElementsByClassName('maptalks-canvas-layer');
            this.TruckMap.on("click", () => { console.log("CLICK"); });
            this.TruckMap.on("dblclick", () => {
                changeCursor(can, 'wait');
                console.log("CLICK*2");
            });
            this.TruckMap.on("mouseenter", () => {
                changeCursor(can, 'pointer');
                console.log("ENTER");
            });
            this.TruckMap.on("mouseout", () => {
                changeCursor(can, 'auto');
                console.log("OUT");
            });
        }
        if (this.Three) {
            this.isT = true;
            this.TruckThree = Truck.ThreePivot;
            this.Three.scene.add(this.TruckThree);
        }
    }
    position = ({ gps = [0, 0, 0], utm = [0, 0, 0], r = [0, 0, 0] }) => {
        try {
            if (this.isM) {
                const position = this.Maptalks.threeLayer.coordinateToVector3({ x: gps[1], y: gps[0], z: 0 }, 0);
                this.TruckMap.getObject3d().position.copy(position);
                this.TruckMap.getObject3d().rotation.fromArray(r);
            }
            if (this.isT) {
                this.TruckThree.position.fromArray(utm);
                this.TruckThree.rotation.fromArray(r);
            }
        }
        catch {
            return null;
        }
    };
    update = ({ MP, map, rotate }) => Safe(() => {
        if (this.isM) {
            const position = this.Maptalks.threeLayer.coordinateToVector3({ x: map[1], y: map[0], z: 0 }, 0);
            this.TruckMap.getObject3d().position.copy(position);
            this.TruckMap.getObject3d().rotation.fromArray(rotate);
        }
        if (this.isT) {
            const { x, y, z } = MP;
            this.TruckThree.position.fromArray([x, y, z]);
            this.TruckThree.rotation.fromArray(rotate);
        }
    });
}
//# sourceMappingURL=gltf.js.map