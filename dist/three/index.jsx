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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewHelper = exports.GLTFLoader = exports.THREE = exports.ThreeView = void 0;
const THREE = __importStar(require("three"));
exports.THREE = THREE;
const stats_js_1 = __importDefault(require("stats.js"));
const { OrbitControls } = require('three/addons/controls/OrbitControls.js');
const { ViewHelper } = require('three/addons/helpers/ViewHelper.js');
exports.ViewHelper = ViewHelper;
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js');
exports.GLTFLoader = GLTFLoader;
const web_1 = require("utils/web");
const utils_1 = require("../utils");
class ThreeView {
    conf = {
        tick: new utils_1.Tick(),
        clock: new THREE.Clock(),
        stats: new stats_js_1.default(),
        cbs: {},
        readyCallback: (...e) => { },
        updateCallback: (...e) => { },
    };
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10000);
    controls = {};
    raycaster = {};
    gltf = new GLTFLoader();
    viewHelper;
    axesHelper;
    gridHelper;
    polrHelper;
    arroHelper;
    constructor(conf) {
        this.conf = { ...this.conf, ...conf };
        (0, web_1.Delay)(() => {
            THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);
            this.setup();
            conf.simulate && this.simulate();
        }, 0);
        (0, web_1.Delay)(() => {
            typeof conf.viewHelper !== 'undefined' && this._viewHelper(conf.viewHelper);
            typeof conf.axesHelper !== 'undefined' && this._axesHelper(conf.axesHelper);
            typeof conf.gridHelper !== 'undefined' && this._gridHelper(conf.gridHelper);
            typeof conf.polrHelper !== 'undefined' && this._polrHelper(conf.polrHelper);
            typeof conf.arroHelper !== 'undefined' && this._arroHelper(conf.arroHelper);
        }, 5);
    }
    setup = () => {
        this.camera.position.z = 1;
        this.camera.up.fromArray([0, 0, 1]);
        this.camera.position.z = 1;
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', (e) => this.conf.tick.set(15));
        this.controls.update();
        this.conf.tick.on((s) => { this.emit('tick', s > 0 ? `Will automatically reposition camera in ${s} seconds` : ''); });
        const sun = new THREE.DirectionalLight(0xffffff, 1);
        sun.position.setScalar(1);
        this.scene.add(sun);
        this.scene.add(new THREE.AmbientLight('#fff', 0.5));
        this.scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5));
        this.setMode(this.conf.isDarkMode);
        const container = document.getElementById(this.conf.containerId);
        container.appendChild(this.conf.stats.dom);
        container.appendChild(this.renderer.domElement);
        const { width, height } = container.getBoundingClientRect();
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setAnimationLoop((time) => {
            this.conf.stats.begin();
            if (this.viewHelper && this.viewHelper.animating)
                this.viewHelper.update(this.conf.clock.getDelta());
            this.conf.updateCallback && this.conf.updateCallback();
            this.renderer.render(this.scene, this.camera);
            this.viewHelper && this.viewHelper.render(this.renderer);
            this.conf.stats.end();
        });
        (0, web_1.Delay)(() => this.conf.readyCallback(), 0);
    };
    updateHelpers = (ps) => {
        if (!this.conf.tick.can()) {
            this.camera.lookAt(ps[0], ps[1], ps[2]);
        }
        this.controls.target = new THREE.Vector3(ps[0], ps[1], ps[2]);
        if (true) {
            this.axesHelper && this.axesHelper.position.set(ps[0], ps[1], ps[2]);
            this.gridHelper && this.gridHelper.position.set(ps[0], ps[1], ps[2]);
            this.polrHelper && this.polrHelper.position.set(ps[0], ps[1], ps[2]);
            this.arroHelper && this.arroHelper.position.set(ps[0], ps[1], ps[2]);
        }
    };
    view = (position = 'TOP', { camera, MP }) => {
        this.updateHelpers([MP.x, MP.y, MP.z]);
        if (!this.conf.tick.can()) {
            return 'panning';
        }
        position === 'TOP' && this.camera.position.set(camera.top.x, camera.top.y, camera.top.z);
        position === 'RIGHT' && this.camera.position.set(camera.right.x, camera.right.y, camera.right.z);
        position === 'BACK' && this.camera.position.set(camera.back.x, camera.back.y, camera.back.z);
        this.camera.lookAt(MP.x, MP.y, MP.z);
    };
    setMode = (isDark) => { this.scene.background = isDark ? new THREE.Color('#333') : new THREE.Color('#e5e5e5'); };
    onUpdate = (cb) => this.conf.updateCallback = cb;
    onReady = (cb) => this.conf.readyCallback = cb;
    emit = (name, data) => { for (const cb of this.conf.cbs[name] ?? []) {
        try {
            cb(data);
        }
        catch (err) { }
    } };
    on = (name, cb) => {
        if (!this.conf.cbs[name]) {
            this.conf.cbs[name] = [];
        }
        this.conf.cbs[name].push(cb);
        return this.conf.cbs[name].length - 1;
    };
    close = (name, index) => { try {
        this.conf.cbs[name].splice(index, 1);
    }
    catch (err) { } };
    simulate = () => {
        const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        const material = new THREE.MeshNormalMaterial();
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);
    };
    _viewHelper = (args) => {
        const div = document.createElement('div');
        div.id = 'viewHelper';
        div.style.position = 'absolute';
        div.style.bottom = 0;
        div.style.right = 0;
        div.style.height = '128px';
        div.style.width = '128px';
        document.body.appendChild(div);
        this.viewHelper = new ViewHelper(this.camera, this.renderer.domElement);
        this.viewHelper.controls = this.controls;
        this.viewHelper.controls.center = this.controls.target;
    };
    _axesHelper = (args) => {
        this.axesHelper = new THREE.AxesHelper(10);
        this.scene.add(this.axesHelper);
    };
    _gridHelper = (args) => {
        this.gridHelper = new THREE.GridHelper(10, 10, '#ff4d4f', '#161b26');
        this.gridHelper.rotateX(Math.PI / 2);
        this.scene.add(this.gridHelper);
    };
    _polrHelper = (args) => {
        const radius = 4, sectors = 16, rings = 4, divisions = 64;
        this.polrHelper = new THREE.PolarGridHelper(radius, sectors, rings, divisions, "#ff4d4f", "#161b26");
        this.polrHelper.rotateX(Math.PI / 2);
        this.scene.add(this.polrHelper);
    };
    _arroHelper = (args) => {
        const dir = new THREE.Vector3(0, 0, 0);
        this.arroHelper = new THREE.ArrowHelper(dir, new THREE.Vector3(0, 0, 0), 2, 'blue', 0.05, 0.05);
        let blink = true;
        let color = 'red';
        (0, web_1.Loop)(() => { this.arroHelper.setColor(blink ? color : '#0d1016'), blink = !blink; }, 500);
        this.arroHelper.direction = (_x, _y, _z) => {
            const pos = this.arroHelper.position;
            const x = _x > 0 ? _x : pos.x;
            const y = _y > 0 ? _y : pos.y;
            const z = _z > 0 ? _z : pos.z;
            const src = new THREE.Vector3(pos.x, pos.y, pos.z);
            const dst = new THREE.Vector3(x, y, z);
            const dis = (0, utils_1.distance3D)(pos, { x, y, z });
            this.arroHelper.setLength(dis, 0.05, 0.05);
            color = (0, utils_1.colorize)(dis, [10, 1, 0.5, 0.25, 0.1]);
            dir.subVectors(dst, src);
            dir.normalize();
            this.arroHelper.setDirection(dir);
        };
        this.scene.add(this.arroHelper);
    };
}
exports.ThreeView = ThreeView;
//# sourceMappingURL=index.jsx.map