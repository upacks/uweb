import * as THREE from 'three'
import { Loop, log } from 'utils/web'

const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js')
const { FBXLoader } = require('three/addons/loaders/FBXLoader.js')
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js')

const TWEEN = require('@tweenjs/tween.js')
const Loader = new GLTFLoader()

const { Tween, Easing } = TWEEN

interface iGLTF {
    MapPivot: THREE.Group
    ThreePivot: THREE.Group
    Mixer: any
    Clips: any
}

const cache: any = {}

export const LoadCache = (file_name: string = '', cb: any) => cache.hasOwnProperty(file_name) ?
    cb(cache[file_name]) : Loader.load(file_name, (gltf: any) => {
        cb(gltf)
        cache[file_name] = gltf
    })

export const LoadRequiredFiles = (cb: any) => {

    const files: any = {
        './location.glb': false
    }

    const mark = (name: string) => {

        files[name] = true

        for (const x in files) {
            if (files[x] === false) return false
        }

        cb(files)

    }

    for (const file_path in files) {

        LoadCache(file_path, (gltf: any) => mark(file_path))

    }

}

const GenerateCommon = (gltf: any, scale: number, div: number, point: any = [2, 0, -5]) => {

    const scene = gltf.scene

    const mapScene = SkeletonUtils.clone(scene)
    const threeScene = SkeletonUtils.clone(scene)

    /** Pointer animation **/
    const pointer = cache['./location.glb']
    pointer.scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0)
    pointer.scene.animations = pointer.animations
    const cloned_pointer = SkeletonUtils.clone(pointer.scene)
    cloned_pointer.position.set(point[1], point[2], 0)
    cloned_pointer.scale.set(point[0], point[0], point[0])
    cloned_pointer.name = 'pointer'

    const ThreePivot = new THREE.Group()
    ThreePivot.add(threeScene)

    ThreePivot.matrixWorldNeedsUpdate = true
    ThreePivot.updateMatrixWorld(true)
    ThreePivot.scale.set(scale, scale, scale)

    const MapPivot = new THREE.Group()
    MapPivot.add(cloned_pointer)
    MapPivot.add(mapScene)

    MapPivot.matrixWorldNeedsUpdate = true
    MapPivot.updateMatrixWorld(true)
    MapPivot.scale.set(scale / div, scale / div, scale / div)

    const Mixer = { Three: new THREE.AnimationMixer(ThreePivot), Map: new THREE.AnimationMixer(MapPivot) }

    const Clips = [...gltf.animations, ...cloned_pointer.animations]

    return { MapPivot, ThreePivot, Mixer, Clips }

}

const style = (gltf: any, cfg: any) => {

    if (gltf) {

        if (cfg.hasOwnProperty('opacity')) {

            const model = gltf.scene.children[0]
            model.children.map((e: any) => {
                e.material.opacity = cfg.opacity
                e.material.transparent = true
            })

        }

        if (true) { }

    }

}

export const Exca = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./exca-mini.glb', (gltf: any) => {

        const scale = 1
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0)
        gltf.scene.position.set(x + 8, y - 24, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [3.5, 0, -10]))

    }))

export const Drill = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./drill-mini.glb', (gltf: any) => {

        const scale = 1.2
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0)
        gltf.scene.position.set(x - 0.55, y - 2.5, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [1.5, -0.5, -3]))

    }))

export const Dozer = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./dozer-mini.glb', (gltf: any) => {

        const scale = 0.5
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, Math.PI / 2, 0)
        gltf.scene.position.set(x + 8.5, y + 40, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [4, 0, -7.5]))

    }))

export const Dump = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./dump-mini.glb', (gltf: any) => {

        const scale = 0.7
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, Math.PI * 2, 0)
        gltf.scene.position.set(x, y - 5.5, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [3.8, 0, -6]))

    }))

export const Truck = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./truck-mini.glb', (gltf: any) => {

        const scale = 0.4
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, Math.PI / 2, 0)
        gltf.scene.position.set(x - 24.5, y + 40, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [5, 0, -11]))

    }))

export const Toyota = ({ size = 1, x = 0, y = 0, z = 0 }: { size?: number, x?: number, y?: number, z?: number }, cfg: any = {}): Promise<iGLTF> =>
    new Promise((res) => LoadCache('./car-mini.glb', (gltf: any) => {

        const scale = 1.4
        style(gltf, cfg)
        gltf.scene.rotation.set(Math.PI / 2, Math.PI, 0)
        gltf.scene.position.set(x, y - 3.25, z)
        res(GenerateCommon(gltf, (size < 0 || size > 10) ? scale : (scale * size), 45, [1.2, 0, -1.5]))

    }))

export class Vehicle {

    Truck: any

    Maptalks
    TruckMap
    isM = false

    Three
    TruckThree
    isT = false

    mixer: any
    clips: any
    fps = 30
    frame: any = null
    buffer: boolean = false /** Buffer the moves, for smooth transitioning **/
    visible: boolean = true

    prev: any = {
        map: { pos: { x: 0, y: 0, z: 0 }, rot: { x: 0, y: 0, z: 0 } },
        three: { pos: { x: 0, y: 0, z: 0 }, rot: { x: 0, y: 0, z: 0 } },
        moves: [],
        free: true,
        update: 0,
        opacity: 1,
    }

    callback: any = (...n: any) => { }

    canvas: any = document.getElementsByClassName('maptalks-canvas-layer')
    changeCursor = (coll: any, value: string) => { for (var i = 0, len = coll.length; i < len; i++) coll[i].style["cursor"] = value }

    constructor({ Truck, Maptalks, Three, fps = 60, buffer = true }: any) {

        this.Truck = Truck ?? null

        this.Maptalks = Maptalks ?? null
        this.Three = Three ?? null

        this.mixer = Truck.Mixer ?? {}
        this.clips = Truck.Clips ?? null
        this.fps = fps
        this.buffer = buffer

        if (this.Maptalks) {

            this.isM = true

            this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot, {
                coordinate: [0, 0] // Maptalks.map.getCenter()
            })

            this.Maptalks.threeLayer.addMesh(this.TruckMap)

            this.TruckMap.on("click", () => this.callback('mouse', 'click'))
            this.TruckMap.on("dblclick", () => this.callback('mouse', 'dblclick'))

            this.TruckMap.on("mouseenter", () => {
                this.changeCursor(this.canvas, 'pointer')
                this.callback('mouse', 'enter')
            })

            this.TruckMap.on("mouseout", () => {
                this.changeCursor(this.canvas, 'auto')
                this.callback('mouse', 'out')
            })

            /** Animation related **/
            this.mixer && this.mixer.Map && this.Maptalks.mixers.push(this.mixer.Map)

        }

        if (this.Three) {

            this.isT = true

            this.TruckThree = Truck.ThreePivot
            this.Three.scene.add(this.TruckThree)

            /** Animation related **/
            this.mixer && this.mixer.Three && this.Three.mixers.push(this.mixer.Three)

        }


        this.buffer && Loop(() => {

            if (this.prev.free && this.prev.moves.length > 0) {
                clearInterval(this.frame)
                this.update_exec(this.prev.moves.shift())
            }

        }, 100)

    }

    on = (cb: (event_name: string, args: any) => any) => { this.callback = cb }

    setColor = (color: string) => {

        const object = this.Truck.MapPivot.getObjectByName("pointer", true)

        object.traverse((object: any) => {

            if (object.isMesh) {

                object.material = object.material.clone()
                object.material.color.set(color)

            }

        })

    }

    animate = (index: number | string = 0, { loop = true, reset = true, stop = false, play = true, fadeIn = 0, fadeOut = 0, speed = 1 } = {}) => {

        if (this.mixer && this.clips) {

            let clip_actions = []
            let warner = console.warn
            console.warn = (...n) => { }

            this.mixer.Map && clip_actions.push(this.mixer.Map.clipAction(
                typeof index === 'number' ? this.clips[index] : this.clips.find((clip: any) => clip.name === index)
            ))

            this.mixer.Three && clip_actions.push(this.mixer.Three.clipAction(
                typeof index === 'number' ? this.clips[index] : this.clips.find((clip: any) => clip.name === index)
            ))

            clip_actions.forEach((action: any) => {

                if (action) {

                    action.timeScale = speed

                    fadeIn > 0 && action.fadeIn(fadeIn)
                    fadeOut > 0 && action.fadeOut(fadeOut)

                    if (!loop) { action.clampWhenFinished = true; action.setLoop(THREE.LoopOnce); }
                    reset && action.reset()
                    play && action.play()
                    stop && action.stop()

                }

            })

            console.warn = warner

        }

    }

    update = ({ gps = [0, 0, 0], utm = [0, 0, 0], head = 0 }: { gps: [number, number, number], utm: [number, number, number], head: number }) => {

        const pre = this.prev.update
        const now = Date.now()
        const dur = (now - pre) > 5000 ? 0 : now - pre
        this.prev.update = now

        if (this.buffer) {

            /** should also save previous value to avoid glitch **/
            this.prev.moves.push({ gps, utm, head, dur })

        } else {

            clearInterval(this.frame)
            this.update_exec({ gps, utm, head, dur })

        }

    }

    update_exec = ({ gps = [0, 0, 0], utm = [0, 0, 0], head = 0, dur = 0 }: { gps: [number, number, number], utm: [number, number, number], head: number, dur: number }) => {

        try {

            this.prev.free = false
            const ups: any = []
            const duration = this.fps > 0 ? dur : 0
            const fps = dur === 0 ? 0 : this.fps > 0 ? 1000 / this.fps : 500
            this.frame = fps > 0 ? setInterval(() => { ups.forEach((tween: any) => tween && tween.update()) }, fps) : null

            const head_pre = this.prev.map.rot.z
            const head_dir = head_pre < head // 1 -> 5 ? true || 5 -> 1 ? false
            const head_abs = head_dir ? head - head_pre : head_pre - head // 4 || 4
            const head_gen = head_dir ? head - (Math.PI * 2) : (Math.PI * 2) + head
            const head_exc = head_abs > Math.PI // true || true

            if (this.isM) {

                const pos = { x: gps[0], y: gps[1], z: 0 }
                const rot = { x: 0, y: 0, z: head_exc ? head_gen : head }

                const clear = () => {

                    clearInterval(this.frame)
                    this.prev.map.pos = pos
                    this.prev.map.rot = rot
                    this.prev.free = true

                }

                if (fps > 0) {

                    ups[0] = new TWEEN.Tween(this.prev.map.pos).to(pos, duration).easing(Easing.Quadratic.InOut).onComplete(() => clear()).onUpdate((_pos: any) => {

                        this.callback('position-map', { gps: _pos })
                        this.TruckMap.getObject3d().position.copy(this.Maptalks.threeLayer.coordinateToVector3(_pos, 0))

                    }).start()

                    ups[1] = new TWEEN.Tween(this.prev.map.rot).to(rot, duration).easing(Easing.Quadratic.InOut).onComplete(() => clear()).onUpdate((_rot: any) => {

                        this.TruckMap.getObject3d().rotation.fromArray([_rot.x, _rot.y, _rot.z])

                    }).start()

                } else {

                    this.callback('position-map', { gps: pos })
                    this.TruckMap.getObject3d().position.copy(this.Maptalks.threeLayer.coordinateToVector3(pos, 0))
                    this.TruckMap.getObject3d().rotation.fromArray([rot.x, rot.y, rot.z])
                    clear()

                }

            }

            if (this.isT) {

                const pos = { x: utm[0], y: utm[1], z: utm[2] }
                const rot = { x: 0, y: 0, z: head_exc ? head_gen : head }

                const clear = () => {

                    clearInterval(this.frame)
                    this.prev.three.pos = pos
                    this.prev.three.rot = rot
                    this.prev.free = true

                }

                if (fps > 0) {

                    ups[2] = new TWEEN.Tween(this.prev.three.pos).to(pos, duration).easing(Easing.Quadratic.InOut).onComplete(() => clear()).onUpdate((_pos: any) => {

                        this.callback('position-three', { gps: _pos })
                        this.TruckThree.position.fromArray([_pos.x, _pos.y, _pos.z])

                    }).start()

                    ups[3] = new TWEEN.Tween(this.prev.three.rot).to(rot, duration).easing(Easing.Quadratic.InOut).onComplete(() => clear()).onUpdate((_rot: any) => {

                        this.TruckThree.rotation.fromArray([_rot.x, _rot.y, _rot.z])

                    }).start()

                } else {

                    this.callback('position-three', { gps: pos })
                    this.TruckThree.position.fromArray([pos.x, pos.y, pos.z])
                    this.TruckThree.rotation.fromArray([rot.x, rot.y, rot.z])
                    clear()

                }

            }

        } catch { return null }

    }

    /** Dispose object **/
    remove = () => {

        try {

            if (this.isM) {

                this.changeCursor(this.canvas, 'auto')
                /* const mNodes: any = []
                this.TruckMap.traverse((child: any) => { mNodes.push(child) })
                mNodes.forEach((node: any) => { node.removeFromParent() }) */
                this.Maptalks.threeLayer.removeMesh(this.TruckMap)

            }

            if (this.isT) {

                /* const tNodes: any = []
                this.TruckThree.traverse((child: any) => { tNodes.push(child) })
                tNodes.forEach((node: any) => { node.removeFromParent() }) */
                this.Three.scene.remove(this.TruckThree)

            }

        } catch (err: any) { log.error(`[Vehicle]: Remove / ${err.message}`) }

    }

}