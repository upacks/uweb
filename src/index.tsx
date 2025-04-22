import { React, Render, Typography, Row, Col } from './react'
import { ThreeView } from './three'
import { MapView } from './maptalks'
import { LoadRequiredFiles, UTM, Vehicle, Toyota, Dozer, Drill, Exca, Dump, Truck } from './utils'
import { log, Loop, Delay } from 'utils/web'

const { useEffect, useRef } = React

const { Title } = Typography

const ll = [43.67338010130343, 105.49508346330428, 0]
console.log(UTM.convertLatLngToUtm(0, 100.51125610283364, 2))

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

        const types = {
            'topo': 'https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=l4hWJmvvmISSL7tpiPUZ',
            'satellite': 'https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=l4hWJmvvmISSL7tpiPUZ',
            'openstreet': 'https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=l4hWJmvvmISSL7tpiPUZ',
        }

        v0.current = new MapView({
            containerId: 'render_0',
            simulate: true,
            isDarkMode,
            urlTemplate: types.satellite,
            // lat: ll[0],
            // lon: ll[1],
            lat: 0,
            lon: 100.51125610283364,
            zoom: 19,
            fps: 10,
            // devicePixelRatio: 0.5,
        })

        v1.current = new ThreeView({
            containerId: 'render_1',
            simulate: true,
            stats: false,
            isDarkMode,
            fps: 10,
            // devicePixelRatio: 0.2,
            antialias: true,
            far: 50
        })

        LoadRequiredFiles((files: any) => {

            setTimeout(() => {

                const gen = (x = 0, y = 0, z = 0, h = 0): any => {

                    const { lat, lng } = UTM.convertUtmToLatLng(x, y, "48", "N")
                    return { gps: [lng, lat, z], utm: [x, y, z], head: h }

                }

                for (let i = 1; i <= 10; i++) {

                    const posx = -80
                    const anim = true

                    Toyota({}).then((t: any) => {

                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current, fps: 10 })

                        // Delay(() => v.update(gen(posx + (i * 30), 0, 0, 1)), 250 * i)
                        // Delay(() => v.update(gen(posx + (i * 40), 0, 0, 10 / i)), 500 * i + (i * 500))
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                        v.update(gen(posx + (i * 30), 0, 0, 0))

                        i === 5 && setTimeout(() => {

                            let pi = 0
                            let cases = [0, 1, 2, 3, 1, 5, 1, 0]
                            let len = cases.length

                            Loop(() => {

                                v.update(gen(posx + (i * 30), 0, 0, cases[++pi % len]))
                                // v.update(gen(posx + (i * 30), 0, 0, Math.PI * pi++))

                            }, 2500)

                            return null
                            v.on((state: any, args) => {
                                console.log(args.gps)
                            })

                            setTimeout(() => {

                                setTimeout(() => v.setColor('#FF0000'), 2000) // Red
                                setTimeout(() => v.setColor('#00FF00'), 4000) // Green

                                anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5, stop: true }), 2500)

                            }, 7500)

                        }, 2500)

                    })

                    Dozer({}).then((t: any) => {
                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current, fps: 10 })
                        Delay(() => v.update(gen(posx + (i * 30), 30, 0, 0)), 250 * i)
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                    })

                    Drill({}).then((t: any) => {
                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                        Delay(() => v.update(gen(posx + (i * 30), 60, 0, 0)), 250 * i)
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                    })

                    Dump({}).then((t: any) => {
                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                        Delay(() => v.update(gen(posx + (i * 30), 90, 0, 0)), 250 * i)
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                    })

                    Exca({}).then((t: any) => {
                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                        Delay(() => v.update(gen(posx + (i * 30), 130, 0, 0)), 250 * i)
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                    })

                    Truck({}).then((t: any) => {
                        const v = new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current })
                        Delay(() => v.update(gen(posx + (i * 30), 150, 0, 0)), 250 * i)
                        anim && setTimeout(() => v.animate("Take 001", { loop: true, speed: 0.5 }), 2500)
                    })

                }

            }, 1000)

        })

        v0.current.onReady(() => onReady('MapView is ready'))
        v1.current.onReady(() => onReady('ThreeView is ready'))

    }, [])

    useEffect(() => {

        v0.current.setMode && v0.current.setMode(isDarkMode)
        v1.current.setMode && v1.current.setMode(isDarkMode)

    }, [isDarkMode])

    return <Row id="main" style={{ height: '100%' }}>
        <Col id='render_0' span={24} style={{ height: '100%' }} />
        {/* <Col id='render_1' span={24} style={{ height: '50%' }} /> */}
    </Row>

}

const setting = ({ isDarkMode }: any) => <Title>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>

Render(main, setting, { maxWidth: '100%' })