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
exports.Vehicle = exports.Toyota = void 0;
const THREE = __importStar(require("three"));
const web_1 = require("utils/web");
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js');
const Loader = new GLTFLoader();
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js');
const UTMLatLng = require('./utm.js');
const UTM = new UTMLatLng('WGS 84');
exports.Toyota = new Promise((res) => Loader.load('./hilux.glb', (gltf) => {
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
class Vehicle {
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
    update = (args) => (0, web_1.Safe)(() => {
        const { MP, map, rotate } = args;
        const { x, y, z } = MP;
        this.TruckThree.position.fromArray([x, y, z]);
        this.TruckThree.rotation.fromArray(rotate);
        const position = this.Maptalks.threeLayer.coordinateToVector3({ x: map[1], y: map[0], z: 0 }, 0);
        this.TruckMap.getObject3d().position.copy(position);
        this.TruckMap.getObject3d().rotation.fromArray(rotate);
    });
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=gltf.js.map