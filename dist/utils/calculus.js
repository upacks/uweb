"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance3D = exports.distanceLatLon = void 0;
const distanceLatLon = (lat1, lon1, lat2, lon2) => {
    var R = 6378.137;
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000;
};
exports.distanceLatLon = distanceLatLon;
const distance3D = (A, B) => {
    try {
        return Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2) + Math.pow(B.z - A.z, 2));
    }
    catch (error) {
        return 0;
    }
};
exports.distance3D = distance3D;
//# sourceMappingURL=calculus.js.map