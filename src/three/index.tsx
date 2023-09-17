import * as THREE from 'three'
import Stats from 'stats.js'

const { OrbitControls } = require('three/addons/controls/OrbitControls.js')
const { ViewHelper } = require('three/addons/helpers/ViewHelper.js')
const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js')

import { log, Doc, KeyValue, Delay, Loop } from 'utils/web'
import { UTM, Tick, distance3D, colorize } from '../utils'

class ThreeView {

    conf: any = {
        tick: new Tick(),
        clock: new THREE.Clock(),
        stats: new Stats(),
        cbs: {},
        readyCallback: (...e: any) => { },
        updateCallback: (...e: any) => { },
    }

    scene = new THREE.Scene()
    renderer = new THREE.WebGLRenderer({ antialias: true })
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10000)
    controls: any = {}
    raycaster: any = {}
    gltf = new GLTFLoader()

    viewHelper: any
    axesHelper: any | THREE.AxesHelper
    gridHelper: any | THREE.GridHelper
    polrHelper: any | THREE.PolarGridHelper
    arroHelper: any | THREE.ArrowHelper

    constructor(conf: any) {

        this.conf = { ...this.conf, ...conf }

        /** @_setup_three_ **/ Delay(() => {

            THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1)
            this.setup()
            conf.simulate && this.simulate()

        }, 0)

        /** @_init_helpers_ **/ Delay(() => {

            typeof conf.viewHelper !== 'undefined' && this._viewHelper(conf.viewHelper)
            typeof conf.axesHelper !== 'undefined' && this._axesHelper(conf.axesHelper)
            typeof conf.gridHelper !== 'undefined' && this._gridHelper(conf.gridHelper)
            typeof conf.polrHelper !== 'undefined' && this._polrHelper(conf.polrHelper)
            typeof conf.arroHelper !== 'undefined' && this._arroHelper(conf.arroHelper)

        }, 5)

    }

    setup = () => {

        /** Setup Cameras **/
        this.camera.position.z = 1
        this.camera.up.fromArray([0, 0, 1])
        this.camera.position.z = 1

        /** Setup Controllers **/
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.addEventListener('change', (e: any) => this.conf.tick.set(15))
        this.controls.update()
        this.conf.tick.on((s: number) => { this.emit('tick', s > 0 ? `Will automatically reposition camera in ${s} seconds` : '') })

        /** Add Lights **/
        const sun = new THREE.DirectionalLight(0xffffff, 1)
        sun.position.setScalar(1)
        this.scene.add(sun)
        this.scene.add(new THREE.AmbientLight('#fff', 0.5))
        this.scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5))
        this.setMode(this.conf.isDarkMode)

        /** Add Canvas **/
        const container: any = document.getElementById(this.conf.containerId)
        container.appendChild(this.conf.stats.dom)
        container.appendChild(this.renderer.domElement)

        const { width, height } = container.getBoundingClientRect()
        this.renderer.setSize(width, height)

        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()

        this.renderer.setAnimationLoop((time: number) => {
            this.conf.stats.begin()

            if (this.viewHelper && this.viewHelper.animating) this.viewHelper.update(this.conf.clock.getDelta())
            this.conf.updateCallback && this.conf.updateCallback()
            this.renderer.render(this.scene, this.camera)
            this.viewHelper && this.viewHelper.render(this.renderer)

            this.conf.stats.end()
        })

        Delay(() => this.conf.readyCallback(), 0)

    }

    updateHelpers = (ps: [number, number, number]) => {

        if (!this.conf.tick.can()) { this.camera.lookAt(ps[0], ps[1], ps[2]) }
        this.controls.target = new THREE.Vector3(ps[0], ps[1], ps[2])

        if (true) {
            this.axesHelper && this.axesHelper.position.set(ps[0], ps[1], ps[2])
            this.gridHelper && this.gridHelper.position.set(ps[0], ps[1], ps[2])
            this.polrHelper && this.polrHelper.position.set(ps[0], ps[1], ps[2])
            this.arroHelper && this.arroHelper.position.set(ps[0], ps[1], ps[2])
        }

    }

    view = (position: string = 'TOP', { camera, MP }: {
        camera: { top: { x: number, y: number, z: number }, right: { x: number, y: number, z: number }, back: { x: number, y: number, z: number } },
        MP: { x: number, y: number, z: number },
    }) => {

        this.updateHelpers([MP.x, MP.y, MP.z])
        if (!this.conf.tick.can()) { return 'panning' }

        position === 'TOP' && this.camera.position.set(camera.top.x, camera.top.y, camera.top.z)
        position === 'RIGHT' && this.camera.position.set(camera.right.x, camera.right.y, camera.right.z)
        position === 'BACK' && this.camera.position.set(camera.back.x, camera.back.y, camera.back.z)

        this.camera.lookAt(MP.x, MP.y, MP.z)

    }

    setMode = (isDark: boolean) => { this.scene.background = isDark ? new THREE.Color('#333') : new THREE.Color('#e5e5e5') }
    onUpdate = (cb: any) => this.conf.updateCallback = cb
    onReady = (cb: any) => this.conf.readyCallback = cb
    emit = (name: string, data: any) => { for (const cb of this.conf.cbs[name] ?? []) { try { cb(data) } catch (err) { } } }
    on = (name: string, cb: any) => {

        if (!this.conf.cbs[name]) { this.conf.cbs[name] = [] }
        this.conf.cbs[name].push(cb)
        return this.conf.cbs[name].length - 1

    }
    close = (name: string, index: number) => { try { this.conf.cbs[name].splice(index, 1) } catch (err) { } }

    simulate = () => {

        const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4)
        const material = new THREE.MeshNormalMaterial()
        const mesh = new THREE.Mesh(geometry, material)
        this.scene.add(mesh)

    }

    /** Helpers **/

    _viewHelper = (args: any) => {

        const div: any = document.createElement('div')
        div.id = 'viewHelper'
        div.style.position = 'absolute'
        div.style.bottom = 0
        div.style.right = 0
        div.style.height = '128px'
        div.style.width = '128px'
        document.body.appendChild(div)

        this.viewHelper = new ViewHelper(this.camera, this.renderer.domElement)
        this.viewHelper.controls = this.controls
        this.viewHelper.controls.center = this.controls.target

    }

    _axesHelper = (args: any) => {

        this.axesHelper = new THREE.AxesHelper(10)
        this.scene.add(this.axesHelper)

    }

    _gridHelper = (args: any) => {

        this.gridHelper = new THREE.GridHelper(10, 10, '#ff4d4f', '#161b26')
        this.gridHelper.rotateX(Math.PI / 2)
        this.scene.add(this.gridHelper)

    }

    _polrHelper = (args: any) => {

        const radius = 4, sectors = 16, rings = 4, divisions = 64
        this.polrHelper = new THREE.PolarGridHelper(radius, sectors, rings, divisions, "#ff4d4f", "#161b26")
        this.polrHelper.rotateX(Math.PI / 2)
        this.scene.add(this.polrHelper)

    }

    _arroHelper = (args: any) => {

        const dir = new THREE.Vector3(0, 0, 0)
        this.arroHelper = new THREE.ArrowHelper(dir, new THREE.Vector3(0, 0, 0), 2, 'blue', 0.05, 0.05)
        let blink = true
        let color = 'red'

        Loop(() => { this.arroHelper.setColor(blink ? color : '#0d1016'), blink = !blink }, 500)

        this.arroHelper.direction = (_x: number, _y: number, _z: number) => {

            const pos = this.arroHelper.position
            const x = _x > 0 ? _x : pos.x
            const y = _y > 0 ? _y : pos.y
            const z = _z > 0 ? _z : pos.z
            const src = new THREE.Vector3(pos.x, pos.y, pos.z)
            const dst = new THREE.Vector3(x, y, z)
            const dis = distance3D(pos, { x, y, z })
            this.arroHelper.setLength(dis, 0.05, 0.05)
            color = colorize(dis, [10, 1, 0.5, 0.25, 0.1])
            dir.subVectors(dst, src)
            dir.normalize()
            this.arroHelper.setDirection(dir)

        }

        this.scene.add(this.arroHelper)

    }

}

export {
    ThreeView,
    THREE,
    GLTFLoader,
    ViewHelper,
}