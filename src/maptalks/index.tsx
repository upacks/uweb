import * as THREE from 'three'
import * as maptalks from 'maptalks'
import * as maptalks_three from 'maptalks.three'

import { log, Doc, KeyValue, Delay, Loop, Safe, Sfy } from 'utils/web'
import { distanceLatLon } from '../utils'

import bearing from '@turf/bearing'
import { point, Coord, Point } from '@turf/helpers'

const { Map, TileLayer } = maptalks
const { ThreeLayer } = maptalks_three

class MapView {

    map: maptalks.Map | any = {}
    scene: any
    camera: any
    threeLayer: maptalks_three.ThreeLayer = new ThreeLayer('threelayer', {
        identifyCountOnEvent: 1,
        forceRenderOnMoving: true,
        forceRenderOnRotating: true
    })

    conf: any = {
        lat: 43.67338010130343,
        lon: 105.49508346330428,
        prevPos: [0, 0],
        animateDuration: 500,
        readyCallback: (...e: any) => { },
        updateCallback: (...e: any) => { },
    }

    constructor(conf: any) {

        this.conf = { ...this.conf, ...conf }

        /** @_setup_map_ **/ Delay(() => {

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
            })

            /* this.map.on('moveend', () => {
                const projection = this.map.getProjection();
                const center = this.map.getCenter()
                const containerPoint = this.map.coordinateToContainerPoint(center).round()
                const prj = projection.project(center)
                // log.info(Sfy({ projection, center, prj, containerPoint }))
            }) */

            this.threeLayer.prepareToDraw = (gl, scene, camera) => {

                camera.up.fromArray([0, 0, 1])
                this.scene = scene
                this.camera = camera

                const light = new THREE.DirectionalLight(0xffffff)
                light.position.set(0, -10, 10).normalize()
                this.scene.add(light)
                this.scene.add(new THREE.AmbientLight('#fff', 0.5))

                this.conf.readyCallback()

            }

            this.threeLayer.addTo(this.map)

            const update = () => {

                setTimeout(() => requestAnimationFrame(update), 1000 / (this.conf.fps ?? 30))
                this.conf.updateCallback && this.conf.updateCallback()
                this.threeLayer._needsUpdate && !this.threeLayer.isRendering() && this.threeLayer.redraw()

            }

            update()

        }, 0)

    }

    animateTo = (p: [number, number], threshold = 2) => {
        try {
            const d = distanceLatLon(p[0], p[1], this.conf.prevPos[0], this.conf.prevPos[1])
            if (d > threshold) {
                this.map.animateTo({ center: [p[0], p[1]] }, { duration: this.conf.animateDuration })
                this.conf.prevPos = p
            }
        } catch (err: any) {
            log.error(`Maptalks: While executing animateTo() ${err.message}`)
        }
    }

    getBearing = (c1: Coord, c2: Coord) => {
        const bear = bearing(c1, c2)
        return Math.abs(this.map.getBearing() - bear) < 30 ? this.map.getBearing() : bear
    }

    view = (position = 'TOP', { coords }: {
        coords: {
            back: [number, number, number];
            front: [number, number, number];
        }
    }) => {

        if (this.map.isInteracting()) { return 'panning' }

        const { front, back } = coords ?? {}

        if (position === 'TOP' && front) {

            this.animateTo([front[1], front[0]], 1)
            this.map.getBearing() !== 0 && this.map.setBearing(0)

        }

        if (position === 'BACK' && back && front) {

            const bearing = this.getBearing(point([back[1], back[0]]), point([front[1], front[0]]))
            this.map.animateTo({ bearing: bearing, center: [front[1], front[0]] }, { duration: this.conf.animateDuration })

        }

    }

    getFilter = (isDark: boolean) => isDark ? 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'sepia(0) invert(0)'
    setMode = (isDark: boolean) => this.map.getBaseLayer && this.map.getBaseLayer().config('cssFilter', this.getFilter(isDark))
    onUpdate = (cb: any) => this.conf.updateCallback = cb
    onReady = (cb: any) => this.conf.readyCallback = cb

}

export {
    MapView,
    maptalks,
    maptalks_three,
}