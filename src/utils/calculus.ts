import { Loop } from 'utils/web'

/** Didn't test following function, So don't use it on heavy calculations */
export const distanceLatLon = (lat1: number, lon1: number, lat2: number, lon2: number) => {  // generally used geo measurement function

    var R = 6378.137 // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = R * c
    return d * 1000 // meters

}

/** Calculate distance between 2 points / 3D **/
export const distance3D = (A: { x: number, y: number, z: number }, B: { x: number, y: number, z: number }) => {

    try {
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2) + Math.pow(B.z - A.z, 2))
    } catch (error) {
        return 0
    }

}