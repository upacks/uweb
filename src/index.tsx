import React, { useState, useEffect, useRef } from 'react'
import { Typography, Row, Col } from 'antd'
import { log, Delay } from 'utils/web'

const { Title } = Typography

if (true) {

    const { run } = require('./antd')
    const { ThreeView } = require('./three')
    const { MapView } = require('./map')
    const { Vehicle, Toyota } = require('./utils')

    console.log('Toyota', Toyota)

    const ll = [43.67338010130343, 105.49508346330428, 0]
    const en = [0, 0, 0] // [539910, 4835716, 0]

    const main = ({ isDarkMode }: any) => {

        const v0 = useRef<any>({})
        const v1 = useRef<any>({})
        const t0 = useRef<any>({})

        useEffect(() => {

            const ready: string[] = []
            const onReady = (indicate: string) => {

                log.success(indicate)
                ready.push(indicate)

                if (ready.length === 3) {

                    log.success(`Master is ready`)

                    const vehicle = new Vehicle({
                        Truck: t0.current,
                        Maptalks: v0.current,
                        Three: v1.current,
                    })

                    Delay(() => {
                        vehicle.update({
                            map: [ll[0], ll[1], 0],
                            rotate: [0, 0, 0],
                            MP: { x: en[0], y: en[1], z: 0 }
                        })
                    }, 500)

                }
            }

            v0.current = new MapView({
                containerId: 'render_0',
                simulate: true,
                isDarkMode,
                lat: ll[0],
                lon: ll[1]
            })

            v1.current = new ThreeView({
                containerId: 'render_1',
                simulate: true,
                isDarkMode,
            })

            Toyota.then((Truck: any) => {
                t0.current = Truck
                onReady('Toyota is ready')
            })

            v0.current.onReady(() => onReady('MapView is ready'))
            v1.current.onReady(() => onReady('ThreeView is ready'))

        }, [])

        useEffect(() => {

            v0.current.setMode && v0.current.setMode(isDarkMode)
            v1.current.setMode && v1.current.setMode(isDarkMode)

        }, [isDarkMode])

        return <Row id="main" style={{ height: '100%' }}>
            <Col id='render_0' span={12} style={{ height: '100%' }} />
            <Col id='render_1' span={12} style={{ height: '100%' }} />
        </Row>

    }

    const setting = ({ isDarkMode }: any) => <Title>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>

    run(main, setting, { maxWidth: '100%' })

}