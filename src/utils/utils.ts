import { Loop } from 'utils/web'

const UTMLatLng = require('./utm.js')
export const UTM = new UTMLatLng('WGS 84')

/**
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 * @returns Array
 * 0. Array of UTM
 * 1. Array of LatLon
 * 2. Object of UTM
 * 3. Object of LatLon
 * | x: EAST LATITUDE | y: NORTH LONGITUDE | z: ELEVATION (Meters)
 */
export const Coordinate = (...n: any) => {
    try {

        const { x, y, z } = n.length === 3 ? { x: n[0], y: n[1], z: n[2] } : { x: n[0].x, y: n[0].y, z: n[0].z }

        if (x < 181 && y < 181) {
            const { Easting, Northing } = UTM.convertLatLngToUtm(x, y, 2)
            return [[Easting, Northing, z], [y, x, z], { x: Easting, y: Northing, z }, { y, x, z }]
        } else {
            const { lat, lng } = UTM.convertUtmToLatLng(x, y, "48", "T")
            return [[x, y, z], [lng, lat, z], { x, y, z }, { x: lng, y: lat, z }]
        }

    } catch (err) {
        return [[0, 0, 0], [0, 0, 0], { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }]
    }
}

/** General color range **/
export const colorize = (actual: number, [c5, c4, c3, c2, c1]: any) => {

    const cl5 = '#ff0000'
    const cl4 = '#ffa700'
    const cl3 = '#fff400'
    const cl2 = '#a3ff00'
    const cl1 = '#2cba00'

    if (c1 >= actual) return cl1
    if (c2 >= actual) return cl2
    if (c3 >= actual) return cl3
    if (c4 >= actual) return cl4
    if (c5 >= actual) return cl5
    return cl5

}

/** Supposed to wait while panning around the globe **/
export class Tick {
    hide = false
    s = 0
    cb: any = null
    constructor() {
        Loop(() => {
            if (this.s === 0 && this.hide === true) {
                this.hide = false
                this.cb && this.cb(0)
            }
            if (this.s > 0) {
                this.hide = true
                this.cb && this.cb(this.s)
                --this.s
            }
        }, 1000)
    }
    on = (cb: any) => { this.cb = cb }
    set = (sec: any) => { this.s = sec }
    can = () => this.s === 0
}