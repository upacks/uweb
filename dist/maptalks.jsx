import * as THREE from 'three';
import * as maptalks from 'maptalks';
import * as maptalks_three from 'maptalks.three';
import { log, Delay, Sfy } from 'utils/web';
import { distanceLatLon } from './utils';
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
        Delay(() => {
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
                log.info(Sfy({ projection, center, prj, containerPoint }));
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
            const d = distanceLatLon(p[0], p[1], this.conf.prevPos[0], this.conf.prevPos[1]);
            if (d > threshold) {
                this.map.animateTo({ center: [p[0], p[1]] }, { duration: 500 });
                this.conf.prevPos = p;
            }
        }
        catch (err) {
            log.error(`Maptalks: While executing animateTo() ${err.message}`);
        }
    };
    getFilter = (isDark) => isDark ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'sepia(0) invert(0)';
    setMode = (isDark) => this.map.getBaseLayer && this.map.getBaseLayer().config('cssFilter', this.getFilter(isDark));
    onUpdate = (cb) => this.conf.updateCallback = cb;
    onReady = (cb) => this.conf.readyCallback = cb;
}
export { MapView, maptalks, maptalks_three, };
//# sourceMappingURL=maptalks.jsx.map