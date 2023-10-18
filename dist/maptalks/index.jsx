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
exports.maptalks_three = exports.maptalks = exports.MapView = void 0;
const THREE = __importStar(require("three"));
const maptalks = __importStar(require("maptalks"));
exports.maptalks = maptalks;
const maptalks_three = __importStar(require("maptalks.three"));
exports.maptalks_three = maptalks_three;
const web_1 = require("utils/web");
const utils_1 = require("../utils");
const bearing_1 = __importDefault(require("@turf/bearing"));
const helpers_1 = require("@turf/helpers");
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
        lat: 43.67338010130343,
        lon: 105.49508346330428,
        prevPos: [0, 0],
        animateDuration: 500,
        urlTemplate: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        readyCallback: (...e) => { },
        updateCallback: (...e) => { },
    };
    constructor(conf) {
        this.conf = { ...this.conf, ...conf };
        (0, web_1.Delay)(() => {
            this.map = new Map(this.conf.containerId, {
                center: [this.conf.lon, this.conf.lat],
                zoom: this.conf.zoom ?? 19,
                maxZoom: 20,
                minZoom: 16,
                pitch: 45,
                centerCross: false,
                doubleClickZoom: false,
                baseLayer: new TileLayer('base', {
                    urlTemplate: this.conf.urlTemplate,
                    subdomains: ["a", "b", "c", "d"],
                    attribution: '&copy; <a href="https://gearlink.cc/">GearLink</a>',
                    cssFilter: this.getFilter(this.conf.isDarkMode),
                }),
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
                setTimeout(() => requestAnimationFrame(update), 1000 / (this.conf.fps ?? 25));
                this.conf.updateCallback && this.conf.updateCallback();
                this.threeLayer._needsUpdate && !this.threeLayer.isRendering() && this.threeLayer.redraw();
            };
            update();
        }, 0);
    }
    animateTo = (p, threshold = 2) => {
        try {
            const d = (0, utils_1.distanceLatLon)(p[0], p[1], this.conf.prevPos[0], this.conf.prevPos[1]);
            if (d > threshold) {
                this.map.animateTo({ center: [p[0], p[1]] }, { duration: this.conf.animateDuration });
                this.conf.prevPos = p;
            }
        }
        catch (err) {
            web_1.log.error(`Maptalks: While executing animateTo() ${err.message}`);
        }
    };
    getBearing = (c1, c2) => {
        const bear = (0, bearing_1.default)(c1, c2);
        return Math.abs(this.map.getBearing() - bear) < 30 ? this.map.getBearing() : bear;
    };
    view = (position = 'TOP', { coords }) => {
        if (this.map.isInteracting()) {
            return 'panning';
        }
        const { front, back } = coords ?? {};
        if (position === 'TOP' && front) {
            this.animateTo([front[1], front[0]], 1);
            this.map.getBearing() !== 0 && this.map.setBearing(0);
        }
        if (position === 'BACK' && back && front) {
            const bearing = this.getBearing((0, helpers_1.point)([back[1], back[0]]), (0, helpers_1.point)([front[1], front[0]]));
            this.map.animateTo({ bearing: bearing, center: [front[1], front[0]] }, { duration: this.conf.animateDuration });
        }
    };
    getFilter = (isDark) => isDark ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'sepia(0) invert(0)';
    setMode = (isDark) => this.map.getBaseLayer && this.map.getBaseLayer().config('cssFilter', this.getFilter(isDark));
    onUpdate = (cb) => this.conf.updateCallback = cb;
    onReady = (cb) => this.conf.readyCallback = cb;
}
exports.MapView = MapView;
//# sourceMappingURL=index.jsx.map