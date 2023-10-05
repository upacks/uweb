import * as THREE from 'three'
import { log, Safe, Loop, Win, Doc, Sfy } from 'utils/web'

const { GLTFLoader } = require('three/addons/loaders/GLTFLoader.js')
const Loader = new GLTFLoader()

const SkeletonUtils = require('three/addons/utils/SkeletonUtils.js')

const UTMLatLng = require('./utm.js')
const UTM = new UTMLatLng('WGS 84')

interface iGLTF {
    MapPivot: THREE.Group
    ThreePivot: THREE.Group
}

export const Toyota: Promise<iGLTF> = new Promise((res) => Loader.load('./hilux.glb', (gltf: any) => {

    const scene = gltf.scene
    const scale = 0.025
    const div = 50

    scene.rotation.set(Math.PI / 2, -Math.PI / 2, 0)
    scene.position.set(0, -90, 0)

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

    Three
    Maptalks

    TruckMap
    TruckThree

    constructor({ Truck, Maptalks, Three }: any) {

        this.Three = Three
        this.Maptalks = Maptalks

        this.TruckMap = Maptalks.threeLayer.toModel(Truck.MapPivot)
        this.TruckThree = Truck.ThreePivot
        Maptalks.threeLayer.addMesh(this.TruckMap)
        Three.scene.add(Truck.ThreePivot)

        const changeCursor = (coll: any, value: string) => {
            for (var i = 0, len = coll.length; i < len; i++) {
                coll[i].style["cursor"] = value
            }
        }

        const can: any = document.getElementsByClassName('maptalks-canvas-layer')

        console.log(can)

        this.TruckMap.on("click", () => { console.log("CLICK") })
        this.TruckMap.on("dblclick", () => {
            changeCursor(can, 'wait')
            console.log("CLICK*2")
        })

        this.TruckMap.on("mouseenter", () => {
            changeCursor(can, 'pointer')
            console.log("ENTER")
        })

        this.TruckMap.on("mouseout", () => {
            changeCursor(can, 'auto')
            console.log("OUT")
        })

    }

    update = ({ MP, map, rotate }: {

        MP: { x: number, y: number, z: number },
        map: [number, number, number],
        rotate: [number, number, number],

    }) => Safe(() => {

        const { x, y, z } = MP
        this.TruckThree.position.fromArray([x, y, z])
        this.TruckThree.rotation.fromArray(rotate)

        const position = this.Maptalks.threeLayer.coordinateToVector3({ x: map[1], y: map[0], z: 0 }, 0)
        this.TruckMap.getObject3d().position.copy(position)
        this.TruckMap.getObject3d().rotation.fromArray(rotate)

    })

}