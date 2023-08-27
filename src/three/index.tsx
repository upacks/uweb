import React, { FC, useState, useEffect } from "react"
import { theme, ConfigProvider, Layout, FloatButton, Modal } from 'antd'
import { BulbOutlined, BulbFilled, SettingOutlined } from '@ant-design/icons'
import * as THREE from 'three'
import Stats from 'stats.js'
import { log, Doc, KeyValue } from 'utils/web'

THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1)
const stats = new Stats()

export const run_three = (wrapper_id: string = 'root') => {

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
    camera.position.z = 1

    const scene = new THREE.Scene()

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const material = new THREE.MeshNormalMaterial()

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const animation = (time: number) => {

        stats.begin()

        mesh.rotation.x = time / 2000
        mesh.rotation.y = time / 1000
        renderer.render(scene, camera)

        stats.end()

    }

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const container: any = document.getElementById(wrapper_id)
    const { width, height } = container.getBoundingClientRect()
    log.info(`Three size [${wrapper_id}]: ${width} / ${height}`)
    renderer.setSize(width, height)
    renderer.setAnimationLoop(animation)

    container.appendChild(stats.dom)
    container.appendChild(renderer.domElement)

}