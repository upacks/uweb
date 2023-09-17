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
exports.maptalks_three = exports.maptalks = exports.MapView = void 0;
const THREE = __importStar(require("three"));
const maptalks = __importStar(require("maptalks"));
exports.maptalks = maptalks;
const maptalks_three = __importStar(require("maptalks.three"));
exports.maptalks_three = maptalks_three;
const web_1 = require("utils/web");
const utils_1 = require("../utils");
const { Map, TileLayer } = maptalks;
const { ThreeLayer } = maptalks_three;
class MapView {
    map = {};
    scene;
    camera;
    threeLayer = new ThreeLayer('threelayer', {
        identifyCountOnEvent: 1,
        forceRenderOnMoving: true,
        forceRenderOnRotating: true
    });
    conf = {
        lat: 47.92061659187936,
        lon: 106.9174311698285,
        prevPos: [0, 0],
        readyCallback: (...e) => { },
        updateCallback: (...e) => { },
    };
    constructor(conf) {
        this.conf = { ...this.conf, ...conf };
        (0, web_1.Delay)(() => {
            this.map = new Map(this.conf.containerId, {
                center: [this.conf.lon, this.conf.lat],
                zoom: this.conf.zoom ?? 19,
                maxZoom: 22,
                minZoom: 13,
                pitch: 45,
                centerCross: true,
                doubleClickZoom: false,
                baseLayer: new TileLayer('base', {
                    urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    subdomains: ["a", "b", "c", "d"],
                    attribution: '&copy; <a href="https://gearlink.cc/">GearLink</a>',
                    cssFilter: this.getFilter(this.conf.isDarkMode),
                }),
            });
            this.map.on('moveend', () => {
                const projection = this.map.getProjection();
                const center = this.map.getCenter();
                const containerPoint = this.map.coordinateToContainerPoint(center).round();
                const prj = projection.project(center);
                web_1.log.info((0, web_1.Sfy)({ projection, center, prj, containerPoint }));
            });
            this.threeLayer.prepareToDraw = (gl, scene, camera) => {
                camera.up.fromArray([0, 0, 1]);
                this.scene = scene;
                this.camera = camera;
                const light = new THREE.DirectionalLight(0xffffff);
                light.position.set(0, -10, 10).normalize();
                this.scene.add(light);
                this.scene.add(new THREE.AmbientLight('#fff', 0.5));
                this.conf.readyCallback();
            };
            this.threeLayer.addTo(this.map);
            const update = () => {
                setTimeout(() => requestAnimationFrame(update), 1000 / (this.conf.fps ?? 30));
                this.conf.updateCallback && this.conf.updateCallback();
                this.threeLayer._needsUpdate && !this.threeLayer.isRendering() && this.threeLayer.redraw();
            };
        }, 0);
    }
    animateTo = (p, threshold = 2) => {
        try {
            const d = (0, utils_1.distanceLatLon)(p[0], p[1], this.conf.prevPos[0], this.conf.prevPos[1]);
            if (d > threshold) {
                this.map.animateTo({ center: [p[0], p[1]] }, { duration: 500 });
                this.conf.prevPos = p;
            }
        }
        catch (err) {
            web_1.log.error(`Maptalks: While executing animateTo() ${err.message}`);
        }
    };
    getBearing = (c1, c2) => {
    };
    view = (position = 'TOP', { coords }) => {
        if (this.map.isInteracting()) {
            return 'panning';
        }
        const { front, back } = coords ?? {};
        if (position === 'TOP' && front) {
            this.animateTo([front[1], front[0]], 1);
            if (this.map.getBearing() !== 0) {
                this.map.setBearing(0);
            }
        }
        if (position === 'BACK' && back && front) {
        }
    };
    getFilter = (isDark) => isDark ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'sepia(0) invert(0)';
    setMode = (isDark) => this.map.getBaseLayer && this.map.getBaseLayer().config('cssFilter', this.getFilter(isDark));
    onUpdate = (cb) => this.conf.updateCallback = cb;
    onReady = (cb) => this.conf.readyCallback = cb;
}
exports.MapView = MapView;
//# sourceMappingURL=index.jsx.map