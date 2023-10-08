import * as THREE from 'three'
import { Safe, log } from 'utils/web'

const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js')
const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js')
const Loader = new GLTFLoader()

interface iGLTF {
    MapPivot: THREE.Group
    ThreePivot: THREE.Group
}

export const Drill = (

    /** Ignoring the config, since calculation is bit difficult **/
    { size = 50, x = 0, y = 0, z = 0 }: { size: number, x: number, y: number, z: number }

): Promise<iGLTF> => new Promise((res) => {

    Loader.load('./drill/body/scene.gltf', (gltf: any) => compile(gltf.scene, null))
    Loader.load('./drill/bit/scene.gltf', (gltf: any) => compile(null, gltf.scene))

    let crane: any = null
    let bit: any = null

    const compile = (_crane: any, _bit: any) => {

        if (_crane) { crane = _crane }
        if (_bit) { bit = _bit }
        if (crane && bit) {

            const scale = 0.003
            const sbit = 0.0025
            const div = 45

            crane.rotation.set(Math.PI / 2, Math.PI, 0)
            crane.position.set(0, -1800, 150)

            bit.rotation.set(Math.PI * 2, Math.PI / 2, 0)
            bit.position.set(-1680, -80, -1350)
            bit.scale.set(sbit, sbit, sbit)

            const threeCrane = SkeletonUtils.clone(crane)
            const threeBit = SkeletonUtils.clone(bit)

            const mapCrane = SkeletonUtils.clone(crane)
            const mapBit = SkeletonUtils.clone(bit)

            const ThreePivot = new THREE.Group()
            ThreePivot.add(threeCrane)
            ThreePivot.add(threeBit)
            ThreePivot.matrixWorldNeedsUpdate = true
            ThreePivot.updateMatrixWorld(true)
            ThreePivot.scale.set(scale, scale, scale)

            const MapPivot = new THREE.Group()
            MapPivot.add(mapCrane)
            MapPivot.add(mapBit)
            MapPivot.matrixWorldNeedsUpdate = true
            MapPivot.updateMatrixWorld(true)
            MapPivot.scale.set(scale / div, scale / div, scale / div)

            res({ MapPivot, ThreePivot })
        }

    }

})

export const Dozer = (

    { size = 50, x = 0, y = 0, z = 0 }: { size: number, x: number, y: number, z: number }

): Promise<iGLTF> => new Promise((res) => Loader.load('./dozer/scene.gltf', (gltf: any) => {

    const scene = gltf.scene
    const scale = size / 250 // 0.2
    const div = 45

    scene.rotation.set(Math.PI / 2, 0, 0)
    scene.position.set(-1.25 + (x / 10), -13.25 - (y / 10), 1.25 + (z / 10))

    const mapScene = SkeletonUtils.clone(scene)
    const threeScene = SkeletonUtils.clone(scene)

    const ThreePivot = new THREE.Group()
    ThreePivot.add(threeScene)
    ThreePivot.matrixWorldNeedsUpdate = true
    ThreePivot.updateMatrixWorld(true)
    ThreePivot.scale.set(scale, scale, scale)

    const MapPivot = new THREE.Group()
    MapPivot.add(mapScene)
    MapPivot.matrixWorldNeedsUpdate = true
    MapPivot.updateMatrixWorld(true)
    MapPivot.scale.set(scale / div, scale / div, scale / div)

    res({ MapPivot, ThreePivot })

}))

export const Toyota = (

    { size = 50, x = 0, y = 0, z = 0 }: { size: number, x: number, y: number, z: number }

): Promise<iGLTF> => new Promise((res) => Loader.load('./hilux.glb', (gltf: any) => {

    const scene = gltf.scene
    const scale = (size - 23) / 1000
    const div = 45

    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0)
    scene.position.set(x, (-90) - y, z)

    const mapScene = SkeletonUtils.clone(scene)
    const threeScene = SkeletonUtils.clone(scene)

    const ThreePivot = new THREE.Group()
    ThreePivot.add(threeScene)
    ThreePivot.matrixWorldNeedsUpdate = true
    ThreePivot.updateMatrixWorld(true)
    ThreePivot.scale.set(scale, scale, scale)

    const MapPivot = new THREE.Group()
    MapPivot.add(mapScene)
    MapPivot.matrixWorldNeedsUpdate = true
    MapPivot.updateMatrixWorld(true)
    MapPivot.scale.set(scale / div, scale / div, scale / div)

    res({ MapPivot, ThreePivot })

}))

export class Vehicle {

    Maptalks
    TruckMap
    isM = false

    Three
    TruckThree
    isT = false

    callback: any = (...n: any) => { }

    canvas: any = document.getElementsByClassName('maptalks-canvas-layer')
    changeCursor = (coll: any, value: string) => { for (var i = 0, len = coll.length; i < len; i++) coll[i].style["cursor"] = value }

    constructor({ Truck, Maptalks, Three }: any) {

        this.Maptalks = Maptalks ?? null
        this.Three = Three ?? null

        if (this.Maptalks) {

            this.isM = true

            this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot)
            this.Maptalks.threeLayer.addMesh(this.TruckMap)

            this.TruckMap.on("click", () => {
                this.callback('mouse', 'click')
            })

            this.TruckMap.on("dblclick", () => {
                this.callback('mouse', 'dblclick')
            })

            this.TruckMap.on("mouseenter", () => {
                this.changeCursor(this.canvas, 'pointer')
                this.callback('mouse', 'enter')
            })

            this.TruckMap.on("mouseout", () => {
                this.changeCursor(this.canvas, 'auto')
                this.callback('mouse', 'out')
            })

        }

        if (this.Three) {

            this.isT = true

            this.TruckThree = Truck.ThreePivot
            this.Three.scene.add(this.TruckThree)

        }

    }

    on = (cb: (event_name: string, args: any) => any) => { this.callback = cb }

    update = (

        { gps = [0, 0], utm = [0, 0], z = 0, r = 0 }: { gps: [number, number], utm: [number, number], r: number, z: number }

    ) => {

        try {

            if (this.isM) {

                const position = this.Maptalks.threeLayer.coordinateToVector3({ x: gps[0], y: gps[1], z: 0 }, 0)
                this.TruckMap.getObject3d().position.copy(position)
                this.TruckMap.getObject3d().rotation.fromArray([0, 0, r])

            }

            if (this.isT) {

                this.TruckThree.position.fromArray([utm[0], utm[1], z])
                this.TruckThree.rotation.fromArray([0, 0, r])

            }

            this.callback('position', { gps, utm, r })

        } catch { return null }

    }

    /* Deprecated */
    view = ({ MP, map, rotate }: {

        MP: { x: number, y: number, z: number },
        map: [number, number, number],
        rotate: [number, number, number],

    }) => Safe(() => {

        if (this.isM) {

            const position = this.Maptalks.threeLayer.coordinateToVector3({ x: map[0], y: map[1], z: 0 }, 0)
            this.TruckMap.getObject3d().position.copy(position)
            this.TruckMap.getObject3d().rotation.fromArray(rotate)

        }

        if (this.isT) {

            const { x, y, z } = MP
            this.TruckThree.position.fromArray([x, y, z])
            this.TruckThree.rotation.fromArray(rotate)

        }

    })

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