import * as THREE from 'three';
import { Safe } from 'utils/web';
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js');
const Loader = new GLTFLoader();
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js');
const UTMLatLng = require('./utm.js');
const UTM = new UTMLatLng('WGS 84');
export const Toyota = new Promise((res) => Loader.load('./hilux.glb', (gltf) => {
    const scene = gltf.scene;
    const scale = 0.025;
    const div = 50;
    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0);
    scene.position.set(0, -90, 0);
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
    Three;
    Maptalks;
    TruckMap;
    TruckThree;
    constructor({ Truck, Maptalks, Three }) {
        this.Three = Three;
        this.Maptalks = Maptalks;
        this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot);
        this.TruckThree = Truck.ThreePivot;
        Maptalks.threeLayer.addMesh(this.TruckMap);
        Three.scene.add(Truck.ThreePivot);
    }
    update = (args) => Safe(() => {
        const { MP, map, rotate } = args;
        const { x, y, z } = MP;
        this.TruckThree.position.fromArray([x, y, z]);
        this.TruckThree.rotation.fromArray(rotate);
        const position = this.Maptalks.threeLayer.coordinateToVector3({ x: map[1], y: map[0], z: 0 }, 0);
        this.TruckMap.getObject3d().position.copy(position);
        this.TruckMap.getObject3d().rotation.fromArray(rotate);
    });
}
//# sourceMappingURL=gltf.js.map