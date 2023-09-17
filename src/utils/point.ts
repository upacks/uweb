import * as THREE from 'three'
import { ThreeView } from '../three'
import { MapView } from '../maptalks'
import { BaseObject } from 'maptalks.three'

export class Point {

    Three: ThreeView | any
    Maptalks: ThreeView | any
    GroupThree: THREE.Object3D | BaseObject | any = new THREE.Group()
    GroupMaptalks: THREE.Object3D | BaseObject | any = new THREE.Group()
    que = {}

    constructor({ Three, Maptalks }: { Three: ThreeView, Maptalks: MapView }) {
        try {

            this.Three = Three
            this.Maptalks = Maptalks
            this.GroupThree = new THREE.Group()
            this.GroupMaptalks = new THREE.Group()

            this.Three.scene.add(this.GroupThree)
            this.Maptalks.threeLayer.addMesh(this.GroupMaptalks)

        } catch (err) { }
    }

    add = (key: string, color: string, [x, y, z]: number[]) => {
        try {

            const geometry = new THREE.SphereGeometry(0.1, 10, 10)
            const material = new THREE.MeshBasicMaterial({ color })
            const mesh = new THREE.Mesh(geometry, material)
            mesh.position.set(x, y, z)
            mesh.name = key
            this.GroupThree.add(mesh)

        } catch (err) { console.log(err) }
    }

    removeAll = () => {

        this.Three.scene.remove(this.GroupThree)
        this.Maptalks.threeLayer.removeMesh(this.GroupMaptalks)

        this.GroupThree.traverse((child: any) => { this.GroupThree.remove(child) })
        this.GroupMaptalks.traverse((child: any) => { this.GroupMaptalks.remove(child) })

    }

    remove = (key: string) => {

        const obj = this.GroupThree.getObjectByName(key)
        if (obj) { this.GroupThree.remove(obj) }

    }

    update = (key: string, color: string, [x, y, z]: number[]) => {

        const obj = this.GroupThree.getObjectByName(key)
        obj ? obj.position.set(x, y, z) : this.add(key, color, [x, y, z])

    }

}