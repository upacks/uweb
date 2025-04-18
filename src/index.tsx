import { React, Render, Typography, Row, Col } from './react'
import { ThreeView } from './three'
import { MapView } from './maptalks'
import { UTM, Vehicle, Toyota, Dozer, Drill, Exca, Dump, Truck } from './utils'
import { log, Loop, Delay } from 'utils/web'

const { useEffect, useRef } = React

const { Title } = Typography

const ll = [43.67338010130343, 105.49508346330428, 0]

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

            }
        }

        v0.current = new MapView({
            containerId: 'render_0',
            simulate: true,
            isDarkMode,
            urlTemplate: `https://c.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png`,
            // lat: ll[0],
            // lon: ll[1],
            lat: 0,
            lon: 100.51125610283364,
            zoom: 20,
            // fps: 10,
            // devicePixelRatio: 0.5,
        })

        v1.current = new ThreeView({
            containerId: 'render_1',
            simulate: true,
            stats: false,
            isDarkMode,
            // fps: 10,
            // devicePixelRatio: 0.2,
            antialias: true,
            far: 50
        })

        setTimeout(() => {

            /* for (let i = 0; i <= 15; i++) {

                Toyota({ size: 50, x: -60 + (i * 6), y: -30, z: 0 }).then((t: any) => {
                    new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                })

                Dump({ size: 50, x: -180 + (i * 22), y: 40, z: 0 }).then((t: any) => {
                    new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                })

            } */

            Toyota({ size: 1, x: 0, y: 0, z: 0 }).then((t: any) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
            })

            Dozer({ size: 50, x: -35, y: 0, z: 0 }).then((t: any) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
            })

            Drill({ size: 1, x: 0, y: 0, z: 0 }).then((t: any) => {

                const drill2 = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current, fps: 0 })

                // setTimeout(() => drill2.animate(0, { loop: true }), 2500)
                // setTimeout(() => drill2.animate(0, { reset: false, stop: true }), 5000)

                const gen = (x = 0, y = 0, z = 0, h = 0): any => {

                    const { lat, lng } = UTM.convertUtmToLatLng(x, y, "48", "T")
                    return { gps: [lng, lat, z], utm: [x, y, z], head: h }

                }

                Delay(() => drill2.update(gen(0, 0, 0, 0)), 1000)
                Delay(() => drill2.update(gen(10, 10, 0, 0.4)), 2500)
                Delay(() => drill2.update(gen(10, 25, 0, 1)), 5000)

            })

            // Dump({ size: 50, x: 35, y: 0, z: 0 }).then((t: any) => {
            Dump({ size: 50, x: -50, y: 0, z: 0 }).then((t: any) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
            })

            Exca({ size: 50, x: 50, y: 0, z: 0 }).then((t: any) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
            })

            Truck({ size: 50, x: 60, y: 0, z: 0 }).then((t: any) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
            })

        }, 500)

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

Render(main, setting, { maxWidth: '100%' })