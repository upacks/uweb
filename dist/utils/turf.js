"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
!function (t) { if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
else if ("function" == typeof define && define.amd)
    define([], t);
else {
    var e;
    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.turf = t();
} }(function () {
    var t;
    return function e(t, n, r) { function i(o, a) { if (!n[o]) {
        if (!t[o]) {
            var u = "function" == typeof require && require;
            if (!a && u)
                return u(o, !0);
            if (s)
                return s(o, !0);
            var l = new Error("Cannot find module '" + o + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
        }
        var c = n[o] = { exports: {} };
        t[o][0].call(c.exports, function (e) { var n = t[o][1][e]; return i(n ? n : e); }, c, c.exports, e, t, n, r);
    } return n[o].exports; } for (var s = "function" == typeof require && require, o = 0; o < r.length; o++)
        i(r[o]); return i; }({ 1: [function (t, e, n) { var r = t("turf-distance"), i = t("turf-helpers").point, s = t("turf-bearing"), o = t("turf-destination"); e.exports = function (t, e, n) { var a; if ("Feature" === t.type)
                a = t.geometry.coordinates;
            else {
                if ("LineString" !== t.type)
                    throw new Error("input must be a LineString Feature or Geometry");
                a = t.coordinates;
            } for (var u = 0, l = 0; l < a.length && !(e >= u && l === a.length - 1); l++) {
                if (u >= e) {
                    var c = e - u;
                    if (c) {
                        var h = s(a[l], a[l - 1]) - 180, g = o(a[l], c, h, n);
                        return g;
                    }
                    return i(a[l]);
                }
                u += r(a[l], a[l + 1], n);
            } return i(a[a.length - 1]); }; }, { "turf-bearing": 2, "turf-destination": 3, "turf-distance": 4, "turf-helpers": 5 }], 2: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-bearing"); }, { "/Users/tmcw/src/turf/packages/turf-bearing": 13 }], 3: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-destination"); }, { "/Users/tmcw/src/turf/packages/turf-destination": 55 }], 4: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-distance"); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60 }], 5: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-helpers"); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71 }], 6: [function (t, e, n) { function r(t) { if ("FeatureCollection" === t.type) {
                for (var e = 0, n = 0; e < t.features.length; e++)
                    t.features[e].geometry && (n += i(t.features[e].geometry));
                return n;
            } return i("Feature" === t.type ? t.geometry : t); } var i = t("geojson-area").geometry; e.exports = r; }, { "geojson-area": 7 }], 7: [function (t, e, n) { function r(t) { var e, n = 0; switch (t.type) {
                case "Polygon": return s(t.coordinates);
                case "MultiPolygon":
                    for (e = 0; e < t.coordinates.length; e++)
                        n += s(t.coordinates[e]);
                    return n;
                case "Point":
                case "MultiPoint":
                case "LineString":
                case "MultiLineString": return 0;
                case "GeometryCollection":
                    for (e = 0; e < t.geometries.length; e++)
                        n += r(t.geometries[e]);
                    return n;
            } } function s(t) { var e = 0; if (t && t.length > 0) {
                e += Math.abs(o(t[0]));
                for (var n = 1; n < t.length; n++)
                    e -= Math.abs(o(t[n]));
            } return e; } function o(t) { var e, n, r, s, o, l, c = 0, h = t.length; if (h > 2) {
                for (i = 0; i < h; i++)
                    i === h - 2 ? (s = h - 2, o = h - 1, l = 0) : i === h - 1 ? (s = h - 1, o = 0, l = 1) : (s = i, o = i + 1, l = i + 2), e = t[s], n = t[o], r = t[l], c += (a(r[0]) - a(e[0])) * Math.sin(a(n[1]));
                c = c * u.RADIUS * u.RADIUS / 2;
            } return c; } function a(t) { return t * Math.PI / 180; } var u = t("wgs84"); e.exports.geometry = r, e.exports.ring = o; }, { wgs84: 8 }], 8: [function (t, e, n) { e.exports.RADIUS = 6378137, e.exports.FLATTENING = 1 / 298.257223563, e.exports.POLAR_RADIUS = 6356752.3142; }, {}], 9: [function (t, e, n) { var r = t("turf-helpers").polygon; e.exports = function (t) { var e = [t[0], t[1]], n = [t[0], t[3]], i = [t[2], t[3]], s = [t[2], t[1]]; return r([[e, s, i, n, e]]); }; }, { "turf-helpers": 10 }], 10: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 11: [function (t, e, n) { var r = t("turf-meta").coordEach; e.exports = function (t) { var e = [1 / 0, 1 / 0, -(1 / 0), -(1 / 0)]; return r(t, function (t) { e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1]); }), e; }; }, { "turf-meta": 12 }], 12: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-meta"); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98 }], 13: [function (t, e, n) { var r = t("turf-invariant").getCoord; e.exports = function (t, e) { var n = Math.PI / 180, i = 180 / Math.PI, s = r(t), o = r(e), a = n * s[0], u = n * o[0], l = n * s[1], c = n * o[1], h = Math.sin(u - a) * Math.cos(c), g = Math.cos(l) * Math.sin(c) - Math.sin(l) * Math.cos(c) * Math.cos(u - a), f = i * Math.atan2(h, g); return f; }; }, { "turf-invariant": 14 }], 14: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-invariant"); }, { "/Users/tmcw/src/turf/packages/turf-invariant": 79 }], 15: [function (t, e, n) { var r = t("turf-helpers").lineString, i = t("./spline.js"); e.exports = function (t, e, n) { var s = r([]); s.properties = t.properties; for (var o = new i({ points: t.geometry.coordinates.map(function (t) { return { x: t[0], y: t[1] }; }), duration: e, sharpness: n }), a = 0; a < o.duration; a += 10) {
                var u = o.pos(a);
                Math.floor(a / 100) % 2 === 0 && s.geometry.coordinates.push([u.x, u.y]);
            } return s; }; }, { "./spline.js": 17, "turf-helpers": 16 }], 16: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 17: [function (t, e, n) { var r = function (t) { this.points = t.points || [], this.duration = t.duration || 1e4, this.sharpness = t.sharpness || .85, this.centers = [], this.controls = [], this.stepLength = t.stepLength || 60, this.length = this.points.length, this.delay = 0; for (var e = 0; e < this.length; e++)
                this.points[e].z = this.points[e].z || 0; for (var e = 0; e < this.length - 1; e++) {
                var n = this.points[e], r = this.points[e + 1];
                this.centers.push({ x: (n.x + r.x) / 2, y: (n.y + r.y) / 2, z: (n.z + r.z) / 2 });
            } this.controls.push([this.points[0], this.points[0]]); for (var e = 0; e < this.centers.length - 1; e++) {
                var n = this.centers[e], r = this.centers[e + 1], i = this.points[e + 1].x - (this.centers[e].x + this.centers[e + 1].x) / 2, s = this.points[e + 1].y - (this.centers[e].y + this.centers[e + 1].y) / 2, o = this.points[e + 1].z - (this.centers[e].y + this.centers[e + 1].z) / 2;
                this.controls.push([{ x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e].x + i), y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e].y + s), z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e].z + o) }, { x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e + 1].x + i), y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e + 1].y + s), z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e + 1].z + o) }]);
            } return this.controls.push([this.points[this.length - 1], this.points[this.length - 1]]), this.steps = this.cacheSteps(this.stepLength), this; }; r.prototype.cacheSteps = function (t) { var e = [], n = this.pos(0); e.push(0); for (var r = 0; r < this.duration; r += 10) {
                var i = this.pos(r), s = Math.sqrt((i.x - n.x) * (i.x - n.x) + (i.y - n.y) * (i.y - n.y) + (i.z - n.z) * (i.z - n.z));
                s > t && (e.push(r), n = i);
            } return e; }, r.prototype.vector = function (t) { var e = this.pos(t + 10), n = this.pos(t - 10); return { angle: 180 * Math.atan2(e.y - n.y, e.x - n.x) / 3.14, speed: Math.sqrt((n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y) + (n.z - e.z) * (n.z - e.z)) }; }, r.prototype.pos = function (t) { function e(t, e, n, r, i) { var s = function (t) { var e = t * t, n = e * t; return [n, 3 * e * (1 - t), 3 * t * (1 - t) * (1 - t), (1 - t) * (1 - t) * (1 - t)]; }, o = s(t), a = { x: i.x * o[0] + r.x * o[1] + n.x * o[2] + e.x * o[3], y: i.y * o[0] + r.y * o[1] + n.y * o[2] + e.y * o[3], z: i.z * o[0] + r.z * o[1] + n.z * o[2] + e.z * o[3] }; return a; } var n = t - this.delay; 0 > n && (n = 0), n > this.duration && (n = this.duration - 1); var r = n / this.duration; if (r >= 1)
                return this.points[this.length - 1]; var i = Math.floor((this.points.length - 1) * r), s = (this.length - 1) * r - i; return e(s, this.points[i], this.controls[i][1], this.controls[i + 1][0], this.points[i + 1]); }, e.exports = r; }, {}], 18: [function (t, e, n) { function r(t, e) { var n = new o.io.GeoJSONReader, r = n.read(t.geometry), i = r.buffer(e), s = new o.io.GeoJSONWriter; return i = s.write(i), { type: "Feature", geometry: i, properties: {} }; } var i = t("turf-helpers"), s = i.featureCollection, o = t("jsts"), a = t("geojson-normalize"); e.exports = function (t, e, n) { var o = i.distanceToDegrees(e, n), u = a(t), l = a(s(u.features.map(function (t) { return r(t, o); }))); return l.features.length > 1 ? l : 1 === l.features.length ? l.features[0] : void 0; }; }, { "geojson-normalize": 19, jsts: 20, "turf-helpers": 21 }], 19: [function (t, e, n) { function r(t) { if (!t || !t.type)
                return null; var e = i[t.type]; return e ? "geometry" === e ? { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: t }] } : "feature" === e ? { type: "FeatureCollection", features: [t] } : "featurecollection" === e ? t : void 0 : null; } e.exports = r; var i = { Point: "geometry", MultiPoint: "geometry", LineString: "geometry", MultiLineString: "geometry", Polygon: "geometry", MultiPolygon: "geometry", GeometryCollection: "geometry", Feature: "feature", FeatureCollection: "featurecollection" }; }, {}], 20: [function (e, n, r) {
                !function (e, i) { "object" == typeof r && "undefined" != typeof n ? i(r) : "function" == typeof t && t.amd ? t(["exports"], i) : i(e.jsts = e.jsts || {}); }(this, function (t) {
                    "use strict";
                    function e(t, e) { for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n]); }
                    function n() { }
                    function r() { }
                    function i() { }
                    function s() { }
                    function o() { }
                    function a() { }
                    function u() { }
                    function l(t) { this.message = t; }
                    function c(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t; }
                    function h() { if (0 === arguments.length)
                        l.call(this);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        l.call(this, t);
                    } }
                    function g() { }
                    function f() { if (this.x = null, this.y = null, this.z = null, 0 === arguments.length)
                        f.call(this, 0, 0);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        f.call(this, t.x, t.y, t.z);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        f.call(this, e, n, f.NULL_ORDINATE);
                    }
                    else if (3 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2];
                        this.x = r, this.y = i, this.z = s;
                    } }
                    function d() { if (this.dimensionsToTest = 2, 0 === arguments.length)
                        d.call(this, 2);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        if (2 !== t && 3 !== t)
                            throw new r("only 2 or 3 dimensions may be specified");
                        this.dimensionsToTest = t;
                    } }
                    function p() { }
                    function m() { }
                    function v(t) { this.message = t || ""; }
                    function y() { }
                    function x(t) { this.message = t || ""; }
                    function E(t) { this.message = t || ""; }
                    function I() { this.array_ = [], arguments[0] instanceof m && this.addAll(arguments[0]); }
                    function N() { if (I.apply(this), 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.ensureCapacity(t.length), this.add(t, !0);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.ensureCapacity(e.length), this.add(e, n);
                    } }
                    function C() { if (this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, 0 === arguments.length)
                        this.init();
                    else if (1 === arguments.length) {
                        if (arguments[0] instanceof f) {
                            var t = arguments[0];
                            this.init(t.x, t.x, t.y, t.y);
                        }
                        else if (arguments[0] instanceof C) {
                            var e = arguments[0];
                            this.init(e);
                        }
                    }
                    else if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        this.init(n.x, r.x, n.y, r.y);
                    }
                    else if (4 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3];
                        this.init(i, s, o, a);
                    } }
                    function w() { }
                    function S() { w.call(this, "Projective point not representable on the Cartesian plane."); }
                    function L() { }
                    function R(t, e) { return t.interfaces_ && t.interfaces_().indexOf(e) > -1; }
                    function b() { }
                    function T(t) { this.str = t; }
                    function P(t) { this.value = t; }
                    function O() { }
                    function M() { if (this.hi = 0, this.lo = 0, 0 === arguments.length)
                        this.init(0);
                    else if (1 === arguments.length) {
                        if ("number" == typeof arguments[0]) {
                            var t = arguments[0];
                            this.init(t);
                        }
                        else if (arguments[0] instanceof M) {
                            var e = arguments[0];
                            this.init(e);
                        }
                        else if ("string" == typeof arguments[0]) {
                            var n = arguments[0];
                            M.call(this, M.parse(n));
                        }
                    }
                    else if (2 === arguments.length) {
                        var r = arguments[0], i = arguments[1];
                        this.init(r, i);
                    } }
                    function _() { }
                    function A() { }
                    function D() { }
                    function F() { if (this.x = null, this.y = null, this.w = null, 0 === arguments.length)
                        this.x = 0, this.y = 0, this.w = 1;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.x = t.x, this.y = t.y, this.w = 1;
                    }
                    else if (2 === arguments.length) {
                        if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                            var e = arguments[0], n = arguments[1];
                            this.x = e, this.y = n, this.w = 1;
                        }
                        else if (arguments[0] instanceof F && arguments[1] instanceof F) {
                            var r = arguments[0], i = arguments[1];
                            this.x = r.y * i.w - i.y * r.w, this.y = i.x * r.w - r.x * i.w, this.w = r.x * i.y - i.x * r.y;
                        }
                        else if (arguments[0] instanceof f && arguments[1] instanceof f) {
                            var s = arguments[0], o = arguments[1];
                            this.x = s.y - o.y, this.y = o.x - s.x, this.w = s.x * o.y - o.x * s.y;
                        }
                    }
                    else if (3 === arguments.length) {
                        var a = arguments[0], u = arguments[1], l = arguments[2];
                        this.x = a, this.y = u, this.w = l;
                    }
                    else if (4 === arguments.length) {
                        var c = arguments[0], h = arguments[1], g = arguments[2], d = arguments[3], p = c.y - h.y, m = h.x - c.x, v = c.x * h.y - h.x * c.y, y = g.y - d.y, x = d.x - g.x, E = g.x * d.y - d.x * g.y;
                        this.x = m * E - x * v, this.y = y * v - p * E, this.w = p * x - y * m;
                    } }
                    function G() { }
                    function k() { }
                    function U() { this.envelope = null, this.factory = null, this.SRID = null, this.userData = null; var t = arguments[0]; this.factory = t, this.SRID = t.getSRID(); }
                    function q() { }
                    function B() { }
                    function z() { }
                    function V() { }
                    function Y() { }
                    function X() { }
                    function H() { }
                    function W() { }
                    function j() { }
                    function Z() { }
                    function J() { }
                    function K() { }
                    function Q() { this.array_ = [], arguments[0] instanceof m && this.addAll(arguments[0]); }
                    function $(t) { return null == t ? $s : t.color; }
                    function tt(t) { return null == t ? null : t.parent; }
                    function et(t, e) { null !== t && (t.color = e); }
                    function nt(t) { return null == t ? null : t.left; }
                    function rt(t) { return null == t ? null : t.right; }
                    function it() { this.root_ = null, this.size_ = 0; }
                    function st() { }
                    function ot() { }
                    function at() { this.array_ = [], arguments[0] instanceof m && this.addAll(arguments[0]); }
                    function ut() { }
                    function lt() { }
                    function ct() { }
                    function ht() { }
                    function gt() { this.geometries = null; var t = arguments[0], e = arguments[1]; if (U.call(this, e), null === t && (t = []), U.hasNullElements(t))
                        throw new r("geometries must not contain null elements"); this.geometries = t; }
                    function ft() { var t = arguments[0], e = arguments[1]; gt.call(this, t, e); }
                    function dt() { if (this.geom = null, this.geomFact = null, this.bnRule = null, this.endpointMap = null, 1 === arguments.length) {
                        var t = arguments[0];
                        dt.call(this, t, B.MOD2_BOUNDARY_RULE);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.geom = e, this.geomFact = e.getFactory(), this.bnRule = n;
                    } }
                    function pt() { this.count = null; }
                    function mt() { }
                    function vt() { }
                    function yt() { }
                    function xt() { }
                    function Et() { }
                    function It() { }
                    function Nt() { }
                    function Ct() { }
                    function wt() { this.points = null; var t = arguments[0], e = arguments[1]; U.call(this, e), this.init(t); }
                    function St() { }
                    function Lt() { this.coordinates = null; var t = arguments[0], e = arguments[1]; U.call(this, e), this.init(t); }
                    function Rt() { }
                    function bt() { this.shell = null, this.holes = null; var t = arguments[0], e = arguments[1], n = arguments[2]; if (U.call(this, n), null === t && (t = this.getFactory().createLinearRing()), null === e && (e = []), U.hasNullElements(e))
                        throw new r("holes must not contain null elements"); if (t.isEmpty() && U.hasNonEmptyElements(e))
                        throw new r("shell is empty but holes are not"); this.shell = t, this.holes = e; }
                    function Tt() { var t = arguments[0], e = arguments[1]; gt.call(this, t, e); }
                    function Pt() { if (arguments[0] instanceof f && arguments[1] instanceof re) {
                        var t = arguments[0], e = arguments[1];
                        Pt.call(this, e.getCoordinateSequenceFactory().create(t), e);
                    }
                    else if (R(arguments[0], A) && arguments[1] instanceof re) {
                        var n = arguments[0], r = arguments[1];
                        wt.call(this, n, r), this.validateConstruction();
                    } }
                    function Ot() { var t = arguments[0], e = arguments[1]; gt.call(this, t, e); }
                    function Mt() { if (this.factory = null, this.isUserDataCopied = !1, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.factory = t;
                    } }
                    function _t() { }
                    function At() { }
                    function Dt() { }
                    function Ft() { }
                    function Gt() { if (this.dimension = 3, this.coordinates = null, 1 === arguments.length) {
                        if (arguments[0] instanceof Array) {
                            var t = arguments[0];
                            Gt.call(this, t, 3);
                        }
                        else if (Number.isInteger(arguments[0])) {
                            var e = arguments[0];
                            this.coordinates = new Array(e).fill(null);
                            for (var n = 0; e > n; n++)
                                this.coordinates[n] = new f;
                        }
                        else if (R(arguments[0], A)) {
                            var r = arguments[0];
                            if (null === r)
                                return this.coordinates = new Array(0).fill(null), null;
                            this.dimension = r.getDimension(), this.coordinates = new Array(r.size()).fill(null);
                            for (var n = 0; n < this.coordinates.length; n++)
                                this.coordinates[n] = r.getCoordinateCopy(n);
                        }
                    }
                    else if (2 === arguments.length)
                        if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
                            var i = arguments[0], s = arguments[1];
                            this.coordinates = i, this.dimension = s, null === i && (this.coordinates = new Array(0).fill(null));
                        }
                        else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                            var o = arguments[0], a = arguments[1];
                            this.coordinates = new Array(o).fill(null), this.dimension = a;
                            for (var n = 0; o > n; n++)
                                this.coordinates[n] = new f;
                        } }
                    function kt() { }
                    function Ut(t, e) { return t === e || t !== t && e !== e; }
                    function qt(t, e) { function n(t) { return this && this.constructor === n ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, void (t && Bt.call(this, t))) : new n(t); } return e || ro(t, "size", { get: Qt }), t.constructor = n, n.prototype = t, n; }
                    function Bt(t) { this.add ? t.forEach(this.add, this) : t.forEach(function (t) { this.set(t[0], t[1]); }, this); }
                    function zt(t) { return this.has(t) && (this._keys.splice(no, 1), this._values.splice(no, 1), this._itp.forEach(function (t) { no < t[0] && t[0]--; })), no > -1; }
                    function Vt(t) { return this.has(t) ? this._values[no] : void 0; }
                    function Yt(t, e) { if (this.objectOnly && e !== Object(e))
                        throw new TypeError("Invalid value used as weak collection key"); if (e !== e || 0 === e)
                        for (no = t.length; no-- && !Ut(t[no], e);)
                            ;
                    else
                        no = t.indexOf(e); return no > -1; }
                    function Xt(t) { return Yt.call(this, this._keys, t); }
                    function Ht(t, e) { return this.has(t) ? this._values[no] = e : this._values[this._keys.push(t) - 1] = e, this; }
                    function Wt() { (this._keys || 0).length = this._values.length = 0; }
                    function jt() { return Kt(this._itp, this._keys); }
                    function Zt() { return Kt(this._itp, this._values); }
                    function Jt() { return Kt(this._itp, this._keys, this._values); }
                    function Kt(t, e, n) { var r = [0], i = !1; return t.push(r), { next: function () { var s, o = r[0]; return !i && o < e.length ? (s = n ? [e[o], n[o]] : e[o], r[0]++) : (i = !0, t.splice(t.indexOf(r), 1)), { done: i, value: s }; } }; }
                    function Qt() { return this._values.length; }
                    function $t(t, e) { for (var n = this.entries();;) {
                        var r = n.next();
                        if (r.done)
                            break;
                        t.call(e, r.value[1], r.value[0], this);
                    } }
                    function te() { this.map_ = new so; }
                    function ee() { if (this.modelType = null, this.scale = null, 0 === arguments.length)
                        this.modelType = ee.FLOATING;
                    else if (1 === arguments.length)
                        if (arguments[0] instanceof ne) {
                            var t = arguments[0];
                            this.modelType = t, t === ee.FIXED && this.setScale(1);
                        }
                        else if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            this.modelType = ee.FIXED, this.setScale(e);
                        }
                        else if (arguments[0] instanceof ee) {
                            var n = arguments[0];
                            this.modelType = n.modelType, this.scale = n.scale;
                        } }
                    function ne() { this.name = null; var t = arguments[0]; this.name = t, ne.nameToTypeMap.put(t, this); }
                    function re() { if (this.precisionModel = null, this.coordinateSequenceFactory = null, this.SRID = null, 0 === arguments.length)
                        re.call(this, new ee, 0);
                    else if (1 === arguments.length) {
                        if (R(arguments[0], G)) {
                            var t = arguments[0];
                            re.call(this, new ee, 0, t);
                        }
                        else if (arguments[0] instanceof ee) {
                            var e = arguments[0];
                            re.call(this, e, 0, re.getDefaultCoordinateSequenceFactory());
                        }
                    }
                    else if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        re.call(this, n, r, re.getDefaultCoordinateSequenceFactory());
                    }
                    else if (3 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2];
                        this.precisionModel = i, this.coordinateSequenceFactory = o, this.SRID = s;
                    } }
                    function ie(t) { this.geometryFactory = t || new re; }
                    function se(t) { this.parser = new ie(t); }
                    function oe() { this.result = null, this.inputLines = Array(2).fill().map(function () { return Array(2); }), this.intPt = new Array(2).fill(null), this.intLineIndex = null, this._isProper = null, this.pa = null, this.pb = null, this.precisionModel = null, this.intPt[0] = new f, this.intPt[1] = new f, this.pa = this.intPt[0], this.pb = this.intPt[1], this.result = 0; }
                    function ae() { oe.apply(this); }
                    function ue() { }
                    function le() { this.p = null, this.crossingCount = 0, this.isPointOnSegment = !1; var t = arguments[0]; this.p = t; }
                    function ce() { }
                    function he() { if (this.p0 = null, this.p1 = null, 0 === arguments.length)
                        he.call(this, new f, new f);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        he.call(this, t.p0, t.p1);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.p0 = e, this.p1 = n;
                    }
                    else if (4 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3];
                        he.call(this, new f(r, i), new f(s, o));
                    } }
                    function ge() { if (this.matrix = null, 0 === arguments.length)
                        this.matrix = Array(3).fill().map(function () { return Array(3); }), this.setAll(lt.FALSE);
                    else if (1 === arguments.length)
                        if ("string" == typeof arguments[0]) {
                            var t = arguments[0];
                            ge.call(this), this.set(t);
                        }
                        else if (arguments[0] instanceof ge) {
                            var e = arguments[0];
                            ge.call(this), this.matrix[L.INTERIOR][L.INTERIOR] = e.matrix[L.INTERIOR][L.INTERIOR], this.matrix[L.INTERIOR][L.BOUNDARY] = e.matrix[L.INTERIOR][L.BOUNDARY], this.matrix[L.INTERIOR][L.EXTERIOR] = e.matrix[L.INTERIOR][L.EXTERIOR], this.matrix[L.BOUNDARY][L.INTERIOR] = e.matrix[L.BOUNDARY][L.INTERIOR], this.matrix[L.BOUNDARY][L.BOUNDARY] = e.matrix[L.BOUNDARY][L.BOUNDARY], this.matrix[L.BOUNDARY][L.EXTERIOR] = e.matrix[L.BOUNDARY][L.EXTERIOR], this.matrix[L.EXTERIOR][L.INTERIOR] = e.matrix[L.EXTERIOR][L.INTERIOR], this.matrix[L.EXTERIOR][L.BOUNDARY] = e.matrix[L.EXTERIOR][L.BOUNDARY], this.matrix[L.EXTERIOR][L.EXTERIOR] = e.matrix[L.EXTERIOR][L.EXTERIOR];
                        } }
                    function fe() { this.areaBasePt = null, this.triangleCent3 = new f, this.areasum2 = 0, this.cg3 = new f, this.lineCentSum = new f, this.totalLength = 0, this.ptCount = 0, this.ptCentSum = new f; var t = arguments[0]; this.areaBasePt = null, this.add(t); }
                    function de(t) { this.message = t || ""; }
                    function pe() { this.array_ = []; }
                    function me() { this.treeSet = new at, this.list = new I; }
                    function ve() { if (this.geomFactory = null, this.inputPts = null, 1 === arguments.length) {
                        var t = arguments[0];
                        ve.call(this, ve.extractCoordinates(t), t.getFactory());
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.inputPts = me.filterCoordinates(e), this.geomFactory = n;
                    } }
                    function ye() { this.origin = null; var t = arguments[0]; this.origin = t; }
                    function xe() { this.inputGeom = null, this.factory = null, this.pruneEmptyGeometry = !0, this.preserveGeometryCollectionType = !0, this.preserveCollections = !1, this.preserveType = !1; }
                    function Ee() { if (this.snapTolerance = 0, this.srcPts = null, this.seg = new he, this.allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof wt && "number" == typeof arguments[1]) {
                        var t = arguments[0], e = arguments[1];
                        Ee.call(this, t.getCoordinates(), e);
                    }
                    else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
                        var n = arguments[0], r = arguments[1];
                        this.srcPts = n, this._isClosed = Ee.isClosed(n), this.snapTolerance = r;
                    } }
                    function Ie() { this.srcGeom = null; var t = arguments[0]; this.srcGeom = t; }
                    function Ne() { if (xe.apply(this), this.snapTolerance = null, this.snapPts = null, this.isSelfSnap = !1, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        this.snapTolerance = t, this.snapPts = e;
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.snapTolerance = n, this.snapPts = r, this.isSelfSnap = i;
                    } }
                    function Ce() { this.isFirst = !0, this.commonMantissaBitsCount = 53, this.commonBits = 0, this.commonSignExp = null; }
                    function we() { this.commonCoord = null, this.ccFilter = new Se; }
                    function Se() { this.commonBitsX = new Ce, this.commonBitsY = new Ce; }
                    function Le() { this.trans = null; var t = arguments[0]; this.trans = t; }
                    function Re() { this.parent = null, this.atStart = null, this.max = null, this.index = null, this.subcollectionIterator = null; var t = arguments[0]; this.parent = t, this.atStart = !0, this.index = 0, this.max = t.getNumGeometries(); }
                    function be() { if (this.boundaryRule = B.OGC_SFS_BOUNDARY_RULE, this.isIn = null, this.numBoundaries = null, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        if (null === t)
                            throw new r("Rule must be non-null");
                        this.boundaryRule = t;
                    } }
                    function Te() { }
                    function Pe() { }
                    function Oe() { this.pts = null, this.data = null; var t = arguments[0], e = arguments[1]; this.pts = t, this.data = e; }
                    function Me() { }
                    function _e() { this.bounds = null, this.item = null; var t = arguments[0], e = arguments[1]; this.bounds = t, this.item = e; }
                    function Ae() { this._size = null, this.items = null, this._size = 0, this.items = new I, this.items.add(null); }
                    function De() { }
                    function Fe() { }
                    function Ge() { if (this.childBoundables = new I, this.bounds = null, this.level = null, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.level = t;
                    } }
                    function ke() { this.boundable1 = null, this.boundable2 = null, this._distance = null, this.itemDistance = null; var t = arguments[0], e = arguments[1], n = arguments[2]; this.boundable1 = t, this.boundable2 = e, this.itemDistance = n, this._distance = this.distance(); }
                    function Ue() { if (this.root = null, this.built = !1, this.itemBoundables = new I, this.nodeCapacity = null, 0 === arguments.length)
                        Ue.call(this, Ue.DEFAULT_NODE_CAPACITY);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        g.isTrue(t > 1, "Node capacity must be greater than 1"), this.nodeCapacity = t;
                    } }
                    function qe() { }
                    function Be() { }
                    function ze() { if (0 === arguments.length)
                        ze.call(this, ze.DEFAULT_NODE_CAPACITY);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        Ue.call(this, t);
                    } }
                    function Ve() { var t = arguments[0]; Ge.call(this, t); }
                    function Ye() { }
                    function Xe() { this.segString = null, this.coord = null, this.segmentIndex = null, this.segmentOctant = null, this._isInterior = null; var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3]; this.segString = t, this.coord = new f(e), this.segmentIndex = n, this.segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n)); }
                    function He() { this.nodeMap = new it, this.edge = null; var t = arguments[0]; this.edge = t; }
                    function We() { this.nodeList = null, this.edge = null, this.nodeIt = null, this.currNode = null, this.nextNode = null, this.currSegIndex = 0; var t = arguments[0]; this.nodeList = t, this.edge = t.getEdge(), this.nodeIt = t.iterator(), this.readNextNode(); }
                    function je() { }
                    function Ze() { this.nodeList = new He(this), this.pts = null, this.data = null; var t = arguments[0], e = arguments[1]; this.pts = t, this.data = e; }
                    function Je() { this.tempEnv1 = new C, this.tempEnv2 = new C, this.overlapSeg1 = new he, this.overlapSeg2 = new he; }
                    function Ke() { this.pts = null, this.start = null, this.end = null, this.env = null, this.context = null, this.id = null; var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3]; this.pts = t, this.start = e, this.end = n, this.context = r; }
                    function Qe() { }
                    function $e() { }
                    function tn() { }
                    function en() { if (this.segInt = null, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.setSegmentIntersector(t);
                    } }
                    function nn() { if (this.monoChains = new I, this.index = new ze, this.idCounter = 0, this.nodedSegStrings = null, this.nOverlaps = 0, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        en.call(this, t);
                    } }
                    function rn() { Je.apply(this), this.si = null; var t = arguments[0]; this.si = t; }
                    function sn() { if (this.pt = null, 1 === arguments.length) {
                        var t = arguments[0];
                        l.call(this, t);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        l.call(this, sn.msgWithCoord(e, n)), this.pt = new f(n);
                    } }
                    function on() { }
                    function an() { this.findAllIntersections = !1, this.isCheckEndSegmentsOnly = !1, this.li = null, this.interiorIntersection = null, this.intSegments = null, this.intersections = new I, this.intersectionCount = 0, this.keepIntersections = !0; var t = arguments[0]; this.li = t, this.interiorIntersection = null; }
                    function un() { this.li = new ae, this.segStrings = null, this.findAllIntersections = !1, this.segInt = null, this._isValid = !0; var t = arguments[0]; this.segStrings = t; }
                    function ln() { this.nv = null; var t = arguments[0]; this.nv = new un(ln.toSegmentStrings(t)); }
                    function cn() { this.mapOp = null; var t = arguments[0]; this.mapOp = t; }
                    function hn() { }
                    function gn() { if (this.location = null, 1 === arguments.length) {
                        if (arguments[0] instanceof Array) {
                            var t = arguments[0];
                            this.init(t.length);
                        }
                        else if (Number.isInteger(arguments[0])) {
                            var e = arguments[0];
                            this.init(1), this.location[hn.ON] = e;
                        }
                        else if (arguments[0] instanceof gn) {
                            var n = arguments[0];
                            if (this.init(n.location.length), null !== n)
                                for (var r = 0; r < this.location.length; r++)
                                    this.location[r] = n.location[r];
                        }
                    }
                    else if (3 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2];
                        this.init(3), this.location[hn.ON] = i, this.location[hn.LEFT] = s, this.location[hn.RIGHT] = o;
                    } }
                    function fn() { if (this.elt = new Array(2).fill(null), 1 === arguments.length) {
                        if (Number.isInteger(arguments[0])) {
                            var t = arguments[0];
                            this.elt[0] = new gn(t), this.elt[1] = new gn(t);
                        }
                        else if (arguments[0] instanceof fn) {
                            var e = arguments[0];
                            this.elt[0] = new gn(e.elt[0]), this.elt[1] = new gn(e.elt[1]);
                        }
                    }
                    else if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        this.elt[0] = new gn(L.NONE), this.elt[1] = new gn(L.NONE), this.elt[n].setLocation(r);
                    }
                    else if (3 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2];
                        this.elt[0] = new gn(i, s, o), this.elt[1] = new gn(i, s, o);
                    }
                    else if (4 === arguments.length) {
                        var a = arguments[0], u = arguments[1], l = arguments[2], c = arguments[3];
                        this.elt[0] = new gn(L.NONE, L.NONE, L.NONE), this.elt[1] = new gn(L.NONE, L.NONE, L.NONE), this.elt[a].setLocations(u, l, c);
                    } }
                    function dn() { this.startDe = null, this.maxNodeDegree = -1, this.edges = new I, this.pts = new I, this.label = new fn(L.NONE), this.ring = null, this._isHole = null, this.shell = null, this.holes = new I, this.geometryFactory = null; var t = arguments[0], e = arguments[1]; this.geometryFactory = e, this.computePoints(t), this.computeRing(); }
                    function pn() { var t = arguments[0], e = arguments[1]; dn.call(this, t, e); }
                    function mn() { var t = arguments[0], e = arguments[1]; dn.call(this, t, e); }
                    function vn() { if (this.label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.label = t;
                    } }
                    function yn() { vn.apply(this), this.coord = null, this.edges = null; var t = arguments[0], e = arguments[1]; this.coord = t, this.edges = e, this.label = new fn(0, L.NONE); }
                    function xn() { this.nodeMap = new it, this.nodeFact = null; var t = arguments[0]; this.nodeFact = t; }
                    function En() { if (this.edge = null, this.label = null, this.node = null, this.p0 = null, this.p1 = null, this.dx = null, this.dy = null, this.quadrant = null, 1 === arguments.length) {
                        var t = arguments[0];
                        this.edge = t;
                    }
                    else if (3 === arguments.length) {
                        var e = arguments[0], n = arguments[1], r = arguments[2];
                        En.call(this, e, n, r, null);
                    }
                    else if (4 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3];
                        En.call(this, i), this.init(s, o), this.label = a;
                    } }
                    function In() { this._isForward = null, this._isInResult = !1, this._isVisited = !1, this.sym = null, this.next = null, this.nextMin = null, this.edgeRing = null, this.minEdgeRing = null, this.depth = [0, -999, -999]; var t = arguments[0], e = arguments[1]; if (En.call(this, t), this._isForward = e, e)
                        this.init(t.getCoordinate(0), t.getCoordinate(1));
                    else {
                        var n = t.getNumPoints() - 1;
                        this.init(t.getCoordinate(n), t.getCoordinate(n - 1));
                    } this.computeDirectedLabel(); }
                    function Nn() { }
                    function Cn() { if (this.edges = new I, this.nodes = null, this.edgeEndList = new I, 0 === arguments.length)
                        this.nodes = new xn(new Nn);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.nodes = new xn(t);
                    } }
                    function wn() { this.geometryFactory = null, this.shellList = new I; var t = arguments[0]; this.geometryFactory = t; }
                    function Sn() { this.op = null, this.geometryFactory = null, this.ptLocator = null, this.lineEdgesList = new I, this.resultLineList = new I; var t = arguments[0], e = arguments[1], n = arguments[2]; this.op = t, this.geometryFactory = e, this.ptLocator = n; }
                    function Ln() { this.op = null, this.geometryFactory = null, this.resultPointList = new I; var t = arguments[0], e = arguments[1]; arguments[2], this.op = t, this.geometryFactory = e; }
                    function Rn() { }
                    function bn() { this.geom = null; var t = arguments[0]; this.geom = t; }
                    function Tn() { this.edgeMap = new it, this.edgeList = null, this.ptInAreaLocation = [L.NONE, L.NONE]; }
                    function Pn() { Tn.apply(this), this.resultAreaEdgeList = null, this.label = null, this.SCANNING_FOR_INCOMING = 1, this.LINKING_TO_OUTGOING = 2; }
                    function On() { Nn.apply(this); }
                    function Mn() { this.mce = null, this.chainIndex = null; var t = arguments[0], e = arguments[1]; this.mce = t, this.chainIndex = e; }
                    function _n() { if (this.label = null, this.xValue = null, this.eventType = null, this.insertEvent = null, this.deleteEventIndex = null, this.obj = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        this.eventType = _n.DELETE, this.xValue = t, this.insertEvent = e;
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.eventType = _n.INSERT, this.label = n, this.xValue = r, this.obj = i;
                    } }
                    function An() { }
                    function Dn() { this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.properIntersectionPoint = null, this.li = null, this.includeProper = null, this.recordIsolated = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numTests = 0, this.bdyNodes = null, this._isDone = !1, this.isDoneWhenProperInt = !1; var t = arguments[0], e = arguments[1], n = arguments[2]; this.li = t, this.includeProper = e, this.recordIsolated = n; }
                    function Fn() { An.apply(this), this.events = new I, this.nOverlaps = null; }
                    function Gn() { this.min = i.POSITIVE_INFINITY, this.max = i.NEGATIVE_INFINITY; }
                    function kn() { }
                    function Un() { Gn.apply(this), this.item = null; var t = arguments[0], e = arguments[1], n = arguments[2]; this.min = t, this.max = e, this.item = n; }
                    function qn() { Gn.apply(this), this.node1 = null, this.node2 = null; var t = arguments[0], e = arguments[1]; this.node1 = t, this.node2 = e, this.buildExtent(this.node1, this.node2); }
                    function Bn() { this.leaves = new I, this.root = null, this.level = 0; }
                    function zn() { if (this.lines = null, this.isForcedToLineString = !1, 1 === arguments.length) {
                        var t = arguments[0];
                        this.lines = t;
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.lines = e, this.isForcedToLineString = n;
                    } }
                    function Vn() { this.items = new I; }
                    function Yn() {
                        this.index = null;
                        var t = arguments[0];
                        if (!R(t, Rt))
                            throw new r("Argument must be Polygonal");
                        this.index = new Hn(t);
                    }
                    function Xn() { this.counter = null; var t = arguments[0]; this.counter = t; }
                    function Hn() { this.index = new Bn; var t = arguments[0]; this.init(t); }
                    function Wn() { this.coord = null, this.segmentIndex = null, this.dist = null; var t = arguments[0], e = arguments[1], n = arguments[2]; this.coord = new f(t), this.segmentIndex = e, this.dist = n; }
                    function jn() { this.nodeMap = new it, this.edge = null; var t = arguments[0]; this.edge = t; }
                    function Zn() { }
                    function Jn() { this.e = null, this.pts = null, this.startIndex = null, this.env1 = new C, this.env2 = new C; var t = arguments[0]; this.e = t, this.pts = t.getCoordinates(); var e = new Zn; this.startIndex = e.getChainStartIndices(this.pts); }
                    function Kn() { this.depth = Array(2).fill().map(function () { return Array(3); }); for (var t = 0; 2 > t; t++)
                        for (var e = 0; 3 > e; e++)
                            this.depth[t][e] = Kn.NULL_VALUE; }
                    function Qn() { if (vn.apply(this), this.pts = null, this.env = null, this.eiList = new jn(this), this.name = null, this.mce = null, this._isIsolated = !0, this.depth = new Kn, this.depthDelta = 0, 1 === arguments.length) {
                        var t = arguments[0];
                        Qn.call(this, t, null);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.pts = e, this.label = n;
                    } }
                    function $n() { if (Cn.apply(this), this.parentGeom = null, this.lineEdgeMap = new te, this.boundaryNodeRule = null, this.useBoundaryDeterminationRule = !0, this.argIndex = null, this.boundaryNodes = null, this._hasTooFewPoints = !1, this.invalidPoint = null, this.areaPtLocator = null, this.ptLocator = new be, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        $n.call(this, t, e, B.OGC_SFS_BOUNDARY_RULE);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.argIndex = n, this.parentGeom = r, this.boundaryNodeRule = i, null !== r && this.add(r);
                    } }
                    function tr() { if (this.li = new ae, this.resultPrecisionModel = null, this.arg = null, 1 === arguments.length) {
                        var t = arguments[0];
                        this.setComputationPrecision(t.getPrecisionModel()), this.arg = new Array(1).fill(null), this.arg[0] = new $n(0, t);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        tr.call(this, e, n, B.OGC_SFS_BOUNDARY_RULE);
                    }
                    else if (3 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2];
                        r.getPrecisionModel().compareTo(i.getPrecisionModel()) >= 0 ? this.setComputationPrecision(r.getPrecisionModel()) : this.setComputationPrecision(i.getPrecisionModel()), this.arg = new Array(2).fill(null), this.arg[0] = new $n(0, r, s), this.arg[1] = new $n(1, i, s);
                    } }
                    function er() { this.pts = null, this._orientation = null; var t = arguments[0]; this.pts = t, this._orientation = er.orientation(t); }
                    function nr() { this.edges = new I, this.ocaMap = new it; }
                    function rr() { this.ptLocator = new be, this.geomFact = null, this.resultGeom = null, this.graph = null, this.edgeList = new nr, this.resultPolyList = new I, this.resultLineList = new I, this.resultPointList = new I; var t = arguments[0], e = arguments[1]; tr.call(this, t, e), this.graph = new Cn(new On), this.geomFact = t.getFactory(); }
                    function ir() { this.geom = new Array(2).fill(null), this.snapTolerance = null, this.cbr = null; var t = arguments[0], e = arguments[1]; this.geom[0] = t, this.geom[1] = e, this.computeSnapTolerance(); }
                    function sr() { this.geom = new Array(2).fill(null); var t = arguments[0], e = arguments[1]; this.geom[0] = t, this.geom[1] = e; }
                    function or() { this.factory = null, this.interiorPoint = null, this.maxWidth = 0; var t = arguments[0]; this.factory = t.getFactory(), this.add(t); }
                    function ar() { this.poly = null, this.centreY = null, this.hiY = i.MAX_VALUE, this.loY = -i.MAX_VALUE; var t = arguments[0]; this.poly = t, this.hiY = t.getEnvelopeInternal().getMaxY(), this.loY = t.getEnvelopeInternal().getMinY(), this.centreY = or.avg(this.loY, this.hiY); }
                    function ur() { this.centroid = null, this.minDistance = i.MAX_VALUE, this.interiorPoint = null; var t = arguments[0]; this.centroid = t.getCentroid().getCoordinate(), this.addInterior(t), null === this.interiorPoint && this.addEndpoints(t); }
                    function lr() { this.centroid = null, this.minDistance = i.MAX_VALUE, this.interiorPoint = null; var t = arguments[0]; this.centroid = t.getCentroid().getCoordinate(), this.add(t); }
                    function cr() { }
                    function hr() { this.p0 = null, this.p1 = null, this.p2 = null; var t = arguments[0], e = arguments[1], n = arguments[2]; this.p0 = t, this.p1 = e, this.p2 = n; }
                    function gr() { this.input = null, this.extremalPts = null, this.centre = null, this.radius = 0; var t = arguments[0]; this.input = t; }
                    function fr() { if (this.inputGeom = null, this.isConvex = null, this.convexHullPts = null, this.minBaseSeg = new he, this.minWidthPt = null, this.minPtIndex = null, this.minWidth = 0, 1 === arguments.length) {
                        var t = arguments[0];
                        fr.call(this, t, !1);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.inputGeom = e, this.isConvex = n;
                    } }
                    function dr() { this.inputGeom = null, this.distanceTolerance = null; var t = arguments[0]; this.inputGeom = t; }
                    function pr() { xe.apply(this), this.distanceTolerance = null; var t = arguments[0]; this.distanceTolerance = t; }
                    function mr() { this._orig = null, this._sym = null, this._next = null; var t = arguments[0]; this._orig = t; }
                    function vr() { this._isMarked = !1; var t = arguments[0]; mr.call(this, t); }
                    function yr() { this.vertexMap = new te; }
                    function xr() { this._isStart = !1; var t = arguments[0]; vr.call(this, t); }
                    function Er() { yr.apply(this); }
                    function Ir() { this.result = null, this.factory = null, this.graph = null, this.lines = new I, this.nodeEdgeStack = new pe, this.ringStartEdge = null, this.graph = new Er; }
                    function Nr() { this.items = new I, this.subnode = new Array(4).fill(null); }
                    function Cr() { }
                    function wr(t, e) { var n, r, i, s, o = { 32: { d: 127, c: 128, b: 0, a: 0 }, 64: { d: 32752, c: 0, b: 0, a: 0 } }, a = { 32: 8, 64: 11 }[t]; if (s || (n = 0 > e || 0 > 1 / e, isFinite(e) || (s = o[t], n && (s.d += 1 << t / 4 - 1), r = Math.pow(2, a) - 1, i = 0)), !s) {
                        for (r = { 32: 127, 64: 1023 }[t], i = Math.abs(e); i >= 2;)
                            r++, i /= 2;
                        for (; 1 > i && r > 0;)
                            r--, i *= 2;
                        0 >= r && (i /= 2), 32 === t && r > 254 && (s = { d: n ? 255 : 127, c: 128, b: 0, a: 0 }, r = Math.pow(2, a) - 1, i = 0);
                    } return r; }
                    function Sr() { this.pt = new f, this.level = 0, this.env = null; var t = arguments[0]; this.computeKey(t); }
                    function Lr() { Nr.apply(this), this.env = null, this.centrex = null, this.centrey = null, this.level = null; var t = arguments[0], e = arguments[1]; this.env = t, this.level = e, this.centrex = (t.getMinX() + t.getMaxX()) / 2, this.centrey = (t.getMinY() + t.getMaxY()) / 2; }
                    function Rr() { }
                    function br() { Nr.apply(this); }
                    function Tr() { this.root = null, this.minExtent = 1, this.root = new br; }
                    function Pr(t) { this.geometryFactory = t || new re; }
                    function Or(t) { this.geometryFactory = t || new re, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new Pr(this.geometryFactory); }
                    function Mr() { this.parser = new Pr(this.geometryFactory); }
                    function _r(t) { this.geometryFactory = t || new re, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new ie(this.geometryFactory); }
                    function Ar(t) { return [t.x, t.y]; }
                    function Dr(t) { this.geometryFactory = t || new re; }
                    function Fr() { if (this.noder = null, this.scaleFactor = null, this.offsetX = null, this.offsetY = null, this.isScaled = !1, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        Fr.call(this, t, e, 0, 0);
                    }
                    else if (4 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        arguments[2], arguments[3], this.noder = n, this.scaleFactor = r, this.isScaled = !this.isIntegerPrecision();
                    } }
                    function Gr() { if (this.inputGeom = null, this.isClosedEndpointsInInterior = !0, this.nonSimpleLocation = null, 1 === arguments.length) {
                        var t = arguments[0];
                        this.inputGeom = t;
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.inputGeom = e, this.isClosedEndpointsInInterior = !n.isInBoundary(2);
                    } }
                    function kr() { this.pt = null, this.isClosed = null, this.degree = null; var t = arguments[0]; this.pt = t, this.isClosed = !1, this.degree = 0; }
                    function Ur() { if (this.quadrantSegments = Ur.DEFAULT_QUADRANT_SEGMENTS, this.endCapStyle = Ur.CAP_ROUND, this.joinStyle = Ur.JOIN_ROUND, this.mitreLimit = Ur.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this.simplifyFactor = Ur.DEFAULT_SIMPLIFY_FACTOR, 0 === arguments.length)
                        ;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.setQuadrantSegments(t);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.setQuadrantSegments(e), this.setEndCapStyle(n);
                    }
                    else if (4 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3];
                        this.setQuadrantSegments(r), this.setEndCapStyle(i), this.setJoinStyle(s), this.setMitreLimit(o);
                    } }
                    function qr() { this.minIndex = -1, this.minCoord = null, this.minDe = null, this.orientedDe = null; }
                    function Br() { this.array_ = []; }
                    function zr() { this.finder = null, this.dirEdgeList = new I, this.nodes = new I, this.rightMostCoord = null, this.env = null, this.finder = new qr; }
                    function Vr() { this.inputLine = null, this.distanceTol = null, this.isDeleted = null, this.angleOrientation = ce.COUNTERCLOCKWISE; var t = arguments[0]; this.inputLine = t; }
                    function Yr() { this.ptList = null, this.precisionModel = null, this.minimimVertexDistance = 0, this.ptList = new I; }
                    function Xr() { this.maxCurveSegmentError = 0, this.filletAngleQuantum = null, this.closingSegLengthFactor = 1, this.segList = null, this.distance = 0, this.precisionModel = null, this.bufParams = null, this.li = null, this.s0 = null, this.s1 = null, this.s2 = null, this.seg0 = new he, this.seg1 = new he, this.offset0 = new he, this.offset1 = new he, this.side = 0, this._hasNarrowConcaveAngle = !1; var t = arguments[0], e = arguments[1], n = arguments[2]; this.precisionModel = t, this.bufParams = e, this.li = new ae, this.filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === Ur.JOIN_ROUND && (this.closingSegLengthFactor = Xr.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n); }
                    function Hr() { this.distance = 0, this.precisionModel = null, this.bufParams = null; var t = arguments[0], e = arguments[1]; this.precisionModel = t, this.bufParams = e; }
                    function Wr() { this.subgraphs = null, this.seg = new he, this.cga = new ce; var t = arguments[0]; this.subgraphs = t; }
                    function jr() { this.upwardSeg = null, this.leftDepth = null; var t = arguments[0], e = arguments[1]; this.upwardSeg = new he(t), this.leftDepth = e; }
                    function Zr() { this.inputGeom = null, this.distance = null, this.curveBuilder = null, this.curveList = new I; var t = arguments[0], e = arguments[1], n = arguments[2]; this.inputGeom = t, this.distance = e, this.curveBuilder = n; }
                    function Jr() { this._hasIntersection = !1, this.hasProper = !1, this.hasProperInterior = !1, this.hasInterior = !1, this.properIntersectionPoint = null, this.li = null, this.isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0; var t = arguments[0]; this.li = t; }
                    function Kr() { this.bufParams = null, this.workingPrecisionModel = null, this.workingNoder = null, this.geomFact = null, this.graph = null, this.edgeList = new nr; var t = arguments[0]; this.bufParams = t; }
                    function Qr() { this.li = new ae, this.segStrings = null; var t = arguments[0]; this.segStrings = t; }
                    function $r() { this.li = null, this.pt = null, this.originalPt = null, this.ptScaled = null, this.p0Scaled = null, this.p1Scaled = null, this.scaleFactor = null, this.minx = null, this.maxx = null, this.miny = null, this.maxy = null, this.corner = new Array(4).fill(null), this.safeEnv = null; var t = arguments[0], e = arguments[1], n = arguments[2]; if (this.originalPt = t, this.pt = t, this.scaleFactor = e, this.li = n, 0 >= e)
                        throw new r("Scale factor must be non-zero"); 1 !== e && (this.pt = new f(this.scale(t.x), this.scale(t.y)), this.p0Scaled = new f, this.p1Scaled = new f), this.initCorners(this.pt); }
                    function ti() { this.tempEnv1 = new C, this.selectedSegment = new he; }
                    function ei() { this.index = null; var t = arguments[0]; this.index = t; }
                    function ni() { ti.apply(this), this.hotPixel = null, this.parentEdge = null, this.hotPixelVertexIndex = null, this._isNodeAdded = !1; var t = arguments[0], e = arguments[1], n = arguments[2]; this.hotPixel = t, this.parentEdge = e, this.hotPixelVertexIndex = n; }
                    function ri() { this.li = null, this.interiorIntersections = null; var t = arguments[0]; this.li = t, this.interiorIntersections = new I; }
                    function ii() { this.pm = null, this.li = null, this.scaleFactor = null, this.noder = null, this.pointSnapper = null, this.nodedSegStrings = null; var t = arguments[0]; this.pm = t, this.li = new ae, this.li.setPrecisionModel(t), this.scaleFactor = t.getScale(); }
                    function si() { if (this.argGeom = null, this.distance = null, this.bufParams = new Ur, this.resultGeometry = null, this.saveException = null, 1 === arguments.length) {
                        var t = arguments[0];
                        this.argGeom = t;
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.argGeom = e, this.bufParams = n;
                    } }
                    function oi() { this.comps = null; var t = arguments[0]; this.comps = t; }
                    function ai() { if (this.component = null, this.segIndex = null, this.pt = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        ai.call(this, t, ai.INSIDE_AREA, e);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.component = n, this.segIndex = r, this.pt = i;
                    } }
                    function ui() { this.pts = null; var t = arguments[0]; this.pts = t; }
                    function li() { this.locations = null; var t = arguments[0]; this.locations = t; }
                    function ci() { if (this.geom = null, this.terminateDistance = 0, this.ptLocator = new be, this.minDistanceLocation = null, this.minDistance = i.MAX_VALUE, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        ci.call(this, t, e, 0);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], s = arguments[2];
                        this.geom = new Array(2).fill(null), this.geom[0] = n, this.geom[1] = r, this.terminateDistance = s;
                    } }
                    function hi() { this.factory = null, this.directedEdges = new I, this.coordinates = null; var t = arguments[0]; this.factory = t; }
                    function gi() { this._isMarked = !1, this._isVisited = !1, this.data = null; }
                    function fi() { gi.apply(this), this.parentEdge = null, this.from = null, this.to = null, this.p0 = null, this.p1 = null, this.sym = null, this.edgeDirection = null, this.quadrant = null, this.angle = null; var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3]; this.from = t, this.to = e, this.edgeDirection = r, this.p0 = t.getCoordinate(), this.p1 = n; var i = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y; this.quadrant = Qe.quadrant(i, s), this.angle = Math.atan2(s, i); }
                    function di() { var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3]; fi.call(this, t, e, n, r); }
                    function pi() { if (gi.apply(this), this.dirEdge = null, 0 === arguments.length)
                        ;
                    else if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        this.setDirectedEdges(t, e);
                    } }
                    function mi() { this.outEdges = new I, this.sorted = !1; }
                    function vi() { if (gi.apply(this), this.pt = null, this.deStar = null, 1 === arguments.length) {
                        var t = arguments[0];
                        vi.call(this, t, new mi);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.pt = e, this.deStar = n;
                    } }
                    function yi() { pi.apply(this), this.line = null; var t = arguments[0]; this.line = t; }
                    function xi() { this.nodeMap = new it; }
                    function Ei() { this.edges = new Q, this.dirEdges = new Q, this.nodeMap = new xi; }
                    function Ii() { Ei.apply(this); }
                    function Ni() { this.graph = new Ii, this.mergedLineStrings = null, this.factory = null, this.edgeStrings = null; }
                    function Ci() { this.edgeRing = null, this.next = null, this.label = -1; var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3]; fi.call(this, t, e, n, r); }
                    function wi() { pi.apply(this), this.line = null; var t = arguments[0]; this.line = t; }
                    function Si() { this.factory = null, this.deList = new I, this.lowestEdge = null, this.ring = null, this.ringPts = null, this.holes = null, this.shell = null, this._isHole = null, this._isProcessed = !1, this._isIncludedSet = !1, this._isIncluded = !1; var t = arguments[0]; this.factory = t; }
                    function Li() { }
                    function Ri() { Ei.apply(this), this.factory = null; var t = arguments[0]; this.factory = t; }
                    function bi() { if (this.lineStringAdder = new Ti(this), this.graph = null, this.dangles = new I, this.cutEdges = new I, this.invalidRingLines = new I, this.holeList = null, this.shellList = null, this.polyList = null, this.isCheckingRingsValid = !0, this.extractOnlyPolygonal = null, this.geomFactory = null, 0 === arguments.length)
                        bi.call(this, !1);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.extractOnlyPolygonal = t;
                    } }
                    function Ti() { this.p = null; var t = arguments[0]; this.p = t; }
                    function Pi() { }
                    function Oi() { if (this.edgeEnds = new I, 1 === arguments.length) {
                        var t = arguments[0];
                        Oi.call(this, null, t);
                    }
                    else if (2 === arguments.length) {
                        var e = (arguments[0], arguments[1]);
                        En.call(this, e.getEdge(), e.getCoordinate(), e.getDirectedCoordinate(), new fn(e.getLabel())), this.insert(e);
                    } }
                    function Mi() { Tn.apply(this); }
                    function _i() { var t = arguments[0], e = arguments[1]; yn.call(this, t, e); }
                    function Ai() { Nn.apply(this); }
                    function Di() { this.li = new ae, this.ptLocator = new be, this.arg = null, this.nodes = new xn(new Ai), this.im = null, this.isolatedEdges = new I, this.invalidPoint = null; var t = arguments[0]; this.arg = t; }
                    function Fi() { this.rectEnv = null; var t = arguments[0]; this.rectEnv = t.getEnvelopeInternal(); }
                    function Gi() { this.li = new ae, this.rectEnv = null, this.diagUp0 = null, this.diagUp1 = null, this.diagDown0 = null, this.diagDown1 = null; var t = arguments[0]; this.rectEnv = t, this.diagUp0 = new f(t.getMinX(), t.getMinY()), this.diagUp1 = new f(t.getMaxX(), t.getMaxY()), this.diagDown0 = new f(t.getMinX(), t.getMaxY()), this.diagDown1 = new f(t.getMaxX(), t.getMinY()); }
                    function ki() { this._isDone = !1; }
                    function Ui() { this.rectangle = null, this.rectEnv = null; var t = arguments[0]; this.rectangle = t, this.rectEnv = t.getEnvelopeInternal(); }
                    function qi() { ki.apply(this), this.rectEnv = null, this._intersects = !1; var t = arguments[0]; this.rectEnv = t; }
                    function Bi() { ki.apply(this), this.rectSeq = null, this.rectEnv = null, this._containsPoint = !1; var t = arguments[0]; this.rectSeq = t.getExteriorRing().getCoordinateSequence(), this.rectEnv = t.getEnvelopeInternal(); }
                    function zi() { ki.apply(this), this.rectEnv = null, this.rectIntersector = null, this.hasIntersection = !1, this.p0 = new f, this.p1 = new f; var t = arguments[0]; this.rectEnv = t.getEnvelopeInternal(), this.rectIntersector = new Gi(this.rectEnv); }
                    function Vi() { if (this._relate = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        tr.call(this, t, e), this._relate = new Di(this.arg);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        tr.call(this, n, r, i), this._relate = new Di(this.arg);
                    } }
                    function Yi() { this.geomFactory = null, this.skipEmpty = !1, this.inputGeoms = null; var t = arguments[0]; this.geomFactory = Yi.extractFactory(t), this.inputGeoms = t; }
                    function Xi() { this.pointGeom = null, this.otherGeom = null, this.geomFact = null; var t = arguments[0], e = arguments[1]; this.pointGeom = t, this.otherGeom = e, this.geomFact = e.getFactory(); }
                    function Hi() { this.sortIndex = -1, this.comps = null; var t = arguments[0], e = arguments[1]; this.sortIndex = t, this.comps = e; }
                    function Wi() { this.inputPolys = null, this.geomFactory = null; var t = arguments[0]; this.inputPolys = t, null === this.inputPolys && (this.inputPolys = new I); }
                    function ji() { if (this.polygons = new I, this.lines = new I, this.points = new I, this.geomFact = null, 1 === arguments.length) {
                        if (R(arguments[0], m)) {
                            var t = arguments[0];
                            this.extract(t);
                        }
                        else if (arguments[0] instanceof U) {
                            var e = arguments[0];
                            this.extract(e);
                        }
                    }
                    else if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        this.geomFact = r, this.extract(n);
                    } }
                    function Zi() { this.geometryFactory = new re, this.geomGraph = null, this.disconnectedRingcoord = null; var t = arguments[0]; this.geomGraph = t; }
                    function Ji() { this.items = new I, this.subnode = [null, null]; }
                    function Ki() { if (this.min = null, this.max = null, 0 === arguments.length)
                        this.min = 0, this.max = 0;
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.init(t.min, t.max);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.init(e, n);
                    } }
                    function Qi() { this.pt = 0, this.level = 0, this.interval = null; var t = arguments[0]; this.computeKey(t); }
                    function $i() { Ji.apply(this), this.interval = null, this.centre = null, this.level = null; var t = arguments[0], e = arguments[1]; this.interval = t, this.level = e, this.centre = (t.getMin() + t.getMax()) / 2; }
                    function ts() { Ji.apply(this); }
                    function es() { this.root = null, this.minExtent = 1, this.root = new ts; }
                    function ns() { }
                    function rs() { this.ring = null, this.tree = null, this.crossings = 0, this.interval = new Ki; var t = arguments[0]; this.ring = t, this.buildIndex(); }
                    function is() { ti.apply(this), this.mcp = null, this.p = null; var t = arguments[0], e = arguments[1]; this.mcp = t, this.p = e; }
                    function ss() { this.nodes = new xn(new Ai); }
                    function os() { this.li = new ae, this.geomGraph = null, this.nodeGraph = new ss, this.invalidPoint = null; var t = arguments[0]; this.geomGraph = t; }
                    function as() { this.graph = null, this.rings = new I, this.totalEnv = new C, this.index = null, this.nestedPt = null; var t = arguments[0]; this.graph = t; }
                    function us() { if (this.errorType = null, this.pt = null, 1 === arguments.length) {
                        var t = arguments[0];
                        us.call(this, t, null);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.errorType = e, null !== n && (this.pt = n.copy());
                    } }
                    function ls() { this.parentGeometry = null, this.isSelfTouchingRingFormingHoleValid = !1, this.validErr = null; var t = arguments[0]; this.parentGeometry = t; }
                    function cs() { Mt.CoordinateOperation.apply(this), this.targetPM = null, this.removeCollapsed = !0; var t = arguments[0], e = arguments[1]; this.targetPM = t, this.removeCollapsed = e; }
                    function hs() { this.targetPM = null, this.removeCollapsed = !0, this.changePrecisionModel = !1, this.isPointwise = !1; var t = arguments[0]; this.targetPM = t; }
                    function gs() { this.pts = null, this.usePt = null, this.distanceTolerance = null, this.seg = new he; var t = arguments[0]; this.pts = t; }
                    function fs() { this.inputGeom = null, this.distanceTolerance = null, this.isEnsureValidTopology = !0; var t = arguments[0]; this.inputGeom = t; }
                    function ds() { xe.apply(this), this.isEnsureValidTopology = !0, this.distanceTolerance = null; var t = arguments[0], e = arguments[1]; this.isEnsureValidTopology = t, this.distanceTolerance = e; }
                    function ps() { if (this.parent = null, this.index = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        ps.call(this, t, e, null, -1);
                    }
                    else if (4 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2], s = arguments[3];
                        he.call(this, n, r), this.parent = i, this.index = s;
                    } }
                    function ms() { if (this.parentLine = null, this.segs = null, this.resultSegs = new I, this.minimumSize = null, 1 === arguments.length) {
                        var t = arguments[0];
                        ms.call(this, t, 2);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.parentLine = e, this.minimumSize = n, this.init();
                    } }
                    function vs() { this.index = new Tr; }
                    function ys() { this.querySeg = null, this.items = new I; var t = arguments[0]; this.querySeg = t; }
                    function xs() { this.li = new ae, this.inputIndex = new vs, this.outputIndex = new vs, this.line = null, this.linePts = null, this.distanceTolerance = 0; var t = arguments[0], e = arguments[1]; this.inputIndex = t, this.outputIndex = e; }
                    function Es() { this.inputIndex = new vs, this.outputIndex = new vs, this.distanceTolerance = 0; }
                    function Is() { this.inputGeom = null, this.lineSimplifier = new Es, this.linestringMap = null; var t = arguments[0]; this.inputGeom = t; }
                    function Ns() { xe.apply(this), this.linestringMap = null; var t = arguments[0]; this.linestringMap = t; }
                    function Cs() { this.tps = null; var t = arguments[0]; this.tps = t; }
                    function ws() { this.seg = null, this.segLen = null, this.splitPt = null, this.minimumLen = 0; var t = arguments[0]; this.seg = t, this.segLen = t.getLength(); }
                    function Ss() { }
                    function Ls() { }
                    function Rs() { }
                    function bs() { if (this.p = null, 1 === arguments.length) {
                        var t = arguments[0];
                        this.p = new f(t);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        this.p = new f(e, n);
                    }
                    else if (3 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2];
                        this.p = new f(r, i, s);
                    } }
                    function Ts() { this._isOnConstraint = null, this.constraint = null; var t = arguments[0]; bs.call(this, t); }
                    function Ps() { this._rot = null, this.vertex = null, this.next = null, this.data = null; }
                    function Os() { this.subdiv = null, this.isUsingTolerance = !1; var t = arguments[0]; this.subdiv = t, this.isUsingTolerance = t.getTolerance() > 0; }
                    function Ms() { }
                    function _s() { this.subdiv = null, this.lastEdge = null; var t = arguments[0]; this.subdiv = t, this.init(); }
                    function As() { if (this.seg = null, 1 === arguments.length) {
                        if ("string" == typeof arguments[0]) {
                            var t = arguments[0];
                            l.call(this, t);
                        }
                        else if (arguments[0] instanceof he) {
                            var e = arguments[0];
                            l.call(this, "Locate failed to converge (at edge: " + e + ").  Possible causes include invalid Subdivision topology or very close sites"), this.seg = new he(e);
                        }
                    }
                    else if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1];
                        l.call(this, As.msgWithSpatial(n, r)), this.seg = new he(r);
                    } }
                    function Ds() { }
                    function Fs() { this.visitedKey = 0, this.quadEdges = new I, this.startingEdge = null, this.tolerance = null, this.edgeCoincidenceTolerance = null, this.frameVertex = new Array(3).fill(null), this.frameEnv = null, this.locator = null, this.seg = new he, this.triEdges = new Array(3).fill(null); var t = arguments[0], e = arguments[1]; this.tolerance = e, this.edgeCoincidenceTolerance = e / Fs.EDGE_COINCIDENCE_TOL_FACTOR, this.createFrame(t), this.startingEdge = this.initSubdiv(), this.locator = new _s(this); }
                    function Gs() { }
                    function ks() { this.triList = new I; }
                    function Us() { this.triList = new I; }
                    function qs() { this.coordList = new N, this.triCoords = new I; }
                    function Bs() { if (this.ls = null, this.data = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        this.ls = new he(t, e);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.ls = new he(n, r), this.data = i;
                    }
                    else if (6 === arguments.length) {
                        var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5];
                        Bs.call(this, new f(s, o, a), new f(u, l, c));
                    }
                    else if (7 === arguments.length) {
                        var h = arguments[0], g = arguments[1], d = arguments[2], p = arguments[3], m = arguments[4], v = arguments[5], y = arguments[6];
                        Bs.call(this, new f(h, g, d), new f(p, m, v), y);
                    } }
                    function zs() { }
                    function Vs() { if (this.p = null, this.data = null, this.left = null, this.right = null, this.count = null, 2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        this.p = new f(t), this.left = null, this.right = null, this.count = 1, this.data = e;
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        this.p = new f(n, r), this.left = null, this.right = null, this.count = 1, this.data = i;
                    } }
                    function Ys() { if (this.root = null, this.numberOfNodes = null, this.tolerance = null, 0 === arguments.length)
                        Ys.call(this, 0);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        this.tolerance = t;
                    } }
                    function Xs() { this.tolerance = null, this.matchNode = null, this.matchDist = 0, this.p = null; var t = arguments[0], e = arguments[1]; this.p = t, this.tolerance = e; }
                    function Hs() { this.initialVertices = null, this.segVertices = null, this.segments = new I, this.subdiv = null, this.incDel = null, this.convexHull = null, this.splitFinder = new Ls, this.kdt = null, this.vertexFactory = null, this.computeAreaEnv = null, this.splitPt = null, this.tolerance = null; var t = arguments[0], e = arguments[1]; this.initialVertices = new I(t), this.tolerance = e, this.kdt = new Ys(e); }
                    function Ws() { this.siteCoords = null, this.tolerance = 0, this.subdiv = null; }
                    function js() { this.siteCoords = null, this.constraintLines = null, this.tolerance = 0, this.subdiv = null, this.constraintVertexMap = new it; }
                    function Zs() { this.siteCoords = null, this.tolerance = 0, this.subdiv = null, this.clipEnv = null, this.diagramEnv = null; }
                    function Js() { }
                    Array.prototype.fill || (Array.prototype.fill = function (t) { for (var e = Object(this), n = parseInt(e.length, 10), r = arguments[1], i = parseInt(r, 10) || 0, s = 0 > i ? Math.max(n + i, 0) : Math.min(i, n), o = arguments[2], a = void 0 === o ? n : parseInt(o, 10) || 0, u = 0 > a ? Math.max(n + a, 0) : Math.min(a, n); u > s; s++)
                        e[s] = t; return e; }), Number.isFinite = Number.isFinite || function (t) { return "number" == typeof t && isFinite(t); }, Number.isInteger = Number.isInteger || function (t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t; }, Number.parseFloat = Number.parseFloat || parseFloat, Number.isNaN = Number.isNaN || function (t) { return t !== t; }, Math.trunc = Math.trunc || function (t) { return 0 > t ? Math.ceil(t) : Math.floor(t); }, e(n.prototype, { interfaces_: function () { return []; }, getClass: function () { return n; } }), n.equalsWithTolerance = function (t, e, n) { return Math.abs(t - e) <= n; }, i.isNaN = function (t) { return Number.isNaN(t); }, i.doubleToLongBits = function (t) { return t; }, i.longBitsToDouble = function (t) { return t; }, i.isInfinite = function (t) { return !Number.isFinite(t); }, i.MAX_VALUE = Number.MAX_VALUE, c(h, l), e(h.prototype, { interfaces_: function () { return []; }, getClass: function () { return h; } }), e(g.prototype, { interfaces_: function () { return []; }, getClass: function () { return g; } }), g.shouldNeverReachHere = function () { if (0 === arguments.length)
                        g.shouldNeverReachHere(null);
                    else if (1 === arguments.length) {
                        var t = arguments[0];
                        throw new h("Should never reach here" + (null !== t ? ": " + t : ""));
                    } }, g.isTrue = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        g.isTrue(t, null);
                    }
                    else if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        if (!e)
                            throw null === n ? new h : new h(n);
                    } }, g.equals = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        g.equals(t, e, null);
                    }
                    else if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        if (!r.equals(n))
                            throw new h("Expected " + n + " but encountered " + r + (null !== i ? ": " + i : ""));
                    } }, e(f.prototype, { setOrdinate: function (t, e) { switch (t) {
                            case f.X:
                                this.x = e;
                                break;
                            case f.Y:
                                this.y = e;
                                break;
                            case f.Z:
                                this.z = e;
                                break;
                            default: throw new r("Invalid ordinate index: " + t);
                        } }, equals2D: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.x !== t.x ? !1 : this.y === t.y;
                        } if (2 === arguments.length) {
                            var e = arguments[0], r = arguments[1];
                            return n.equalsWithTolerance(this.x, e.x, r) ? !!n.equalsWithTolerance(this.y, e.y, r) : !1;
                        } }, getOrdinate: function (t) { switch (t) {
                            case f.X: return this.x;
                            case f.Y: return this.y;
                            case f.Z: return this.z;
                        } throw new r("Invalid ordinate index: " + t); }, equals3D: function (t) { return this.x === t.x && this.y === t.y && (this.z === t.z || i.isNaN(this.z) && i.isNaN(t.z)); }, equals: function (t) { return t instanceof f ? this.equals2D(t) : !1; }, equalInZ: function (t, e) { return n.equalsWithTolerance(this.z, t.z, e); }, compareTo: function (t) { var e = t; return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0; }, clone: function () { try {
                            var t = null;
                            return t;
                        }
                        catch (t) {
                            if (t instanceof CloneNotSupportedException)
                                return g.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
                            throw t;
                        }
                        finally { } }, copy: function () { return new f(this); }, toString: function () { return "(" + this.x + ", " + this.y + ", " + this.z + ")"; }, distance3D: function (t) { var e = this.x - t.x, n = this.y - t.y, r = this.z - t.z; return Math.sqrt(e * e + n * n + r * r); }, distance: function (t) { var e = this.x - t.x, n = this.y - t.y; return Math.sqrt(e * e + n * n); }, hashCode: function () { var t = 17; return t = 37 * t + f.hashCode(this.x), t = 37 * t + f.hashCode(this.y); }, setCoordinate: function (t) { this.x = t.x, this.y = t.y, this.z = t.z; }, interfaces_: function () { return [s, o, u]; }, getClass: function () { return f; } }), f.hashCode = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = i.doubleToLongBits(t);
                        return Math.trunc(e ^ e >>> 32);
                    } }, e(d.prototype, { compare: function (t, e) { var n = t, r = e, i = d.compare(n.x, r.x); if (0 !== i)
                            return i; var s = d.compare(n.y, r.y); if (0 !== s)
                            return s; if (this.dimensionsToTest <= 2)
                            return 0; var o = d.compare(n.z, r.z); return o; }, interfaces_: function () { return [a]; }, getClass: function () { return d; } }), d.compare = function (t, e) { return e > t ? -1 : t > e ? 1 : i.isNaN(t) ? i.isNaN(e) ? 0 : -1 : i.isNaN(e) ? 1 : 0; }, f.DimensionalComparator = d, f.serialVersionUID = 0x5cbf2c235c7e5800, f.NULL_ORDINATE = i.NaN, f.X = 0, f.Y = 1, f.Z = 2, p.prototype.hasNext = function () { }, p.prototype.next = function () { }, p.prototype.remove = function () { }, m.prototype.add = function () { }, m.prototype.addAll = function () { }, m.prototype.isEmpty = function () { }, m.prototype.iterator = function () { }, m.prototype.size = function () { }, m.prototype.toArray = function () { }, m.prototype.remove = function () { }, v.prototype = new Error, v.prototype.name = "IndexOutOfBoundsException", y.prototype = Object.create(m.prototype), y.prototype.constructor = y, y.prototype.get = function () { }, y.prototype.set = function () { }, y.prototype.isEmpty = function () { }, x.prototype = new Error, x.prototype.name = "NoSuchElementException", E.prototype = new Error, E.prototype.name = "OperationNotSupported", I.prototype = Object.create(y.prototype), I.prototype.constructor = I, I.prototype.ensureCapacity = function () { }, I.prototype.interfaces_ = function () { return [y, m]; }, I.prototype.add = function (t) { return this.array_.push(t), !0; }, I.prototype.clear = function () { this.array_ = []; }, I.prototype.addAll = function (t) { for (var e = t.iterator(); e.hasNext();)
                        this.add(e.next()); return !0; }, I.prototype.set = function (t, e) { var n = this.array_[t]; return this.array_[t] = e, n; }, I.prototype.iterator = function () { return new Ks(this); }, I.prototype.get = function (t) { if (0 > t || t >= this.size())
                        throw new v; return this.array_[t]; }, I.prototype.isEmpty = function () { return 0 === this.array_.length; }, I.prototype.size = function () { return this.array_.length; }, I.prototype.toArray = function () { for (var t = [], e = 0, n = this.array_.length; n > e; e++)
                        t.push(this.array_[e]); return t; }, I.prototype.remove = function (t) { for (var e = !1, n = 0, r = this.array_.length; r > n; n++)
                        if (this.array_[n] === t) {
                            this.array_.splice(n, 1), e = !0;
                            break;
                        } return e; };
                    var Ks = function (t) { this.arrayList_ = t, this.position_ = 0; };
                    Ks.prototype.next = function () { if (this.position_ === this.arrayList_.size())
                        throw new x; return this.arrayList_.get(this.position_++); }, Ks.prototype.hasNext = function () { return this.position_ < this.arrayList_.size(); }, Ks.prototype.set = function (t) { return this.arrayList_.set(this.position_ - 1, t); }, Ks.prototype.remove = function () { throw new E; }, c(N, I), e(N.prototype, { getCoordinate: function (t) { return this.get(t); }, addAll: function () { if (2 === arguments.length) {
                            for (var t = arguments[0], e = arguments[1], n = !1, r = t.iterator(); r.hasNext();)
                                this.add(r.next(), e), n = !0;
                            return n;
                        } return I.prototype.addAll.apply(this, arguments); }, clone: function Fo() { for (var Fo = I.prototype.clone.call(this), t = 0; t < this.size(); t++)
                            Fo.add(t, this.get(t).copy()); return Fo; }, toCoordinateArray: function () { return this.toArray(N.coordArrayType); }, add: function () {
                            if (1 === arguments.length) {
                                var t = arguments[0];
                                I.prototype.add.call(this, t);
                            }
                            else if (2 === arguments.length) {
                                if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                                    var e = arguments[0], n = arguments[1];
                                    return this.add(e, n, !0),
                                        !0;
                                }
                                if (arguments[0] instanceof f && "boolean" == typeof arguments[1]) {
                                    var r = arguments[0], i = arguments[1];
                                    if (!i && this.size() >= 1) {
                                        var s = this.get(this.size() - 1);
                                        if (s.equals2D(r))
                                            return null;
                                    }
                                    I.prototype.add.call(this, r);
                                }
                                else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
                                    var o = arguments[0], a = arguments[1];
                                    return this.add(o, a), !0;
                                }
                            }
                            else if (3 === arguments.length) {
                                if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
                                    var u = arguments[0], l = arguments[1], c = arguments[2];
                                    if (c)
                                        for (var h = 0; h < u.length; h++)
                                            this.add(u[h], l);
                                    else
                                        for (var h = u.length - 1; h >= 0; h--)
                                            this.add(u[h], l);
                                    return !0;
                                }
                                if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof f) {
                                    var g = arguments[0], d = arguments[1], p = arguments[2];
                                    if (!p) {
                                        var m = this.size();
                                        if (m > 0) {
                                            if (g > 0) {
                                                var v = this.get(g - 1);
                                                if (v.equals2D(d))
                                                    return null;
                                            }
                                            if (m > g) {
                                                var y = this.get(g);
                                                if (y.equals2D(d))
                                                    return null;
                                            }
                                        }
                                    }
                                    I.prototype.add.call(this, g, d);
                                }
                            }
                            else if (4 === arguments.length) {
                                var x = arguments[0], E = arguments[1], N = arguments[2], C = arguments[3], w = 1;
                                N > C && (w = -1);
                                for (var h = N; h !== C; h += w)
                                    this.add(x[h], E);
                                return !0;
                            }
                        }, closeRing: function () { this.size() > 0 && this.add(new f(this.get(0)), !1); }, interfaces_: function () { return []; }, getClass: function () { return N; } }), N.coordArrayType = new Array(0).fill(null), e(C.prototype, { getArea: function () { return this.getWidth() * this.getHeight(); }, equals: function (t) { if (!(t instanceof C))
                            return !1; var e = t; return this.isNull() ? e.isNull() : this.maxx === e.getMaxX() && this.maxy === e.getMaxY() && this.minx === e.getMinX() && this.miny === e.getMinY(); }, intersection: function (t) { if (this.isNull() || t.isNull() || !this.intersects(t))
                            return new C; var e = this.minx > t.minx ? this.minx : t.minx, n = this.miny > t.miny ? this.miny : t.miny, r = this.maxx < t.maxx ? this.maxx : t.maxx, i = this.maxy < t.maxy ? this.maxy : t.maxy; return new C(e, r, n, i); }, isNull: function () { return this.maxx < this.minx; }, getMaxX: function () { return this.maxx; }, covers: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof f) {
                                var t = arguments[0];
                                return this.covers(t.x, t.y);
                            }
                            if (arguments[0] instanceof C) {
                                var e = arguments[0];
                                return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this.minx && e.getMaxX() <= this.maxx && e.getMinY() >= this.miny && e.getMaxY() <= this.maxy;
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            return this.isNull() ? !1 : n >= this.minx && n <= this.maxx && r >= this.miny && r <= this.maxy;
                        } }, intersects: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof C) {
                                var t = arguments[0];
                                return this.isNull() || t.isNull() ? !1 : !(t.minx > this.maxx || t.maxx < this.minx || t.miny > this.maxy || t.maxy < this.miny);
                            }
                            if (arguments[0] instanceof f) {
                                var e = arguments[0];
                                return this.intersects(e.x, e.y);
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            return this.isNull() ? !1 : !(n > this.maxx || n < this.minx || r > this.maxy || r < this.miny);
                        } }, getMinY: function () { return this.miny; }, getMinX: function () { return this.minx; }, expandToInclude: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof f) {
                                var t = arguments[0];
                                this.expandToInclude(t.x, t.y);
                            }
                            else if (arguments[0] instanceof C) {
                                var e = arguments[0];
                                if (e.isNull())
                                    return null;
                                this.isNull() ? (this.minx = e.getMinX(), this.maxx = e.getMaxX(), this.miny = e.getMinY(), this.maxy = e.getMaxY()) : (e.minx < this.minx && (this.minx = e.minx), e.maxx > this.maxx && (this.maxx = e.maxx), e.miny < this.miny && (this.miny = e.miny), e.maxy > this.maxy && (this.maxy = e.maxy));
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            this.isNull() ? (this.minx = n, this.maxx = n, this.miny = r, this.maxy = r) : (n < this.minx && (this.minx = n), n > this.maxx && (this.maxx = n), r < this.miny && (this.miny = r), r > this.maxy && (this.maxy = r));
                        } }, minExtent: function () { if (this.isNull())
                            return 0; var t = this.getWidth(), e = this.getHeight(); return e > t ? t : e; }, getWidth: function () { return this.isNull() ? 0 : this.maxx - this.minx; }, compareTo: function (t) { var e = t; return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this.minx < e.minx ? -1 : this.minx > e.minx ? 1 : this.miny < e.miny ? -1 : this.miny > e.miny ? 1 : this.maxx < e.maxx ? -1 : this.maxx > e.maxx ? 1 : this.maxy < e.maxy ? -1 : this.maxy > e.maxy ? 1 : 0; }, translate: function (t, e) { return this.isNull() ? null : void this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e); }, toString: function () { return "Env[" + this.minx + " : " + this.maxx + ", " + this.miny + " : " + this.maxy + "]"; }, setToNull: function () { this.minx = 0, this.maxx = -1, this.miny = 0, this.maxy = -1; }, getHeight: function () { return this.isNull() ? 0 : this.maxy - this.miny; }, maxExtent: function () { if (this.isNull())
                            return 0; var t = this.getWidth(), e = this.getHeight(); return t > e ? t : e; }, expandBy: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.expandBy(t, t);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            if (this.isNull())
                                return null;
                            this.minx -= e, this.maxx += e, this.miny -= n, this.maxy += n, (this.minx > this.maxx || this.miny > this.maxy) && this.setToNull();
                        } }, contains: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof C) {
                                var t = arguments[0];
                                return this.covers(t);
                            }
                            if (arguments[0] instanceof f) {
                                var e = arguments[0];
                                return this.covers(e);
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            return this.covers(n, r);
                        } }, centre: function () { return this.isNull() ? null : new f((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2); }, init: function () { if (0 === arguments.length)
                            this.setToNull();
                        else if (1 === arguments.length) {
                            if (arguments[0] instanceof f) {
                                var t = arguments[0];
                                this.init(t.x, t.x, t.y, t.y);
                            }
                            else if (arguments[0] instanceof C) {
                                var e = arguments[0];
                                this.minx = e.minx, this.maxx = e.maxx, this.miny = e.miny, this.maxy = e.maxy;
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            this.init(n.x, r.x, n.y, r.y);
                        }
                        else if (4 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3];
                            s > i ? (this.minx = i, this.maxx = s) : (this.minx = s, this.maxx = i), a > o ? (this.miny = o, this.maxy = a) : (this.miny = a, this.maxy = o);
                        } }, getMaxY: function () { return this.maxy; }, distance: function (t) { if (this.intersects(t))
                            return 0; var e = 0; this.maxx < t.minx ? e = t.minx - this.maxx : this.minx > t.maxx && (e = this.minx - t.maxx); var n = 0; return this.maxy < t.miny ? n = t.miny - this.maxy : this.miny > t.maxy && (n = this.miny - t.maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n); }, hashCode: function () { var t = 17; return t = 37 * t + f.hashCode(this.minx), t = 37 * t + f.hashCode(this.maxx), t = 37 * t + f.hashCode(this.miny), t = 37 * t + f.hashCode(this.maxy); }, interfaces_: function () { return [s, u]; }, getClass: function () { return C; } }), C.intersects = function () { if (3 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = arguments[2];
                        return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
                    } if (4 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], a = Math.min(s.x, o.x), u = Math.max(s.x, o.x), l = Math.min(r.x, i.x), c = Math.max(r.x, i.x);
                        return l > u ? !1 : a > c ? !1 : (a = Math.min(s.y, o.y), u = Math.max(s.y, o.y), l = Math.min(r.y, i.y), c = Math.max(r.y, i.y), l > u ? !1 : !(a > c));
                    } }, C.serialVersionUID = 0x51845cd552189800, c(S, w), e(S.prototype, { interfaces_: function () { return []; }, getClass: function () { return S; } }), e(L.prototype, { interfaces_: function () { return []; }, getClass: function () { return L; } }), L.toLocationSymbol = function (t) { switch (t) {
                        case L.EXTERIOR: return "e";
                        case L.BOUNDARY: return "b";
                        case L.INTERIOR: return "i";
                        case L.NONE: return "-";
                    } throw new r("Unknown location value: " + t); }, L.INTERIOR = 0, L.BOUNDARY = 1, L.EXTERIOR = 2, L.NONE = -1, e(b.prototype, { interfaces_: function () { return []; }, getClass: function () { return b; } }), b.log10 = function (t) { var e = Math.log(t); return i.isInfinite(e) ? e : i.isNaN(e) ? e : e / b.LOG_10; }, b.min = function (t, e, n, r) { var i = t; return i > e && (i = e), i > n && (i = n), i > r && (i = r), i; }, b.clamp = function () { if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                        var t = arguments[0], e = arguments[1], n = arguments[2];
                        return e > t ? e : t > n ? n : t;
                    } if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
                        var r = arguments[0], i = arguments[1], s = arguments[2];
                        return i > r ? i : r > s ? s : r;
                    } }, b.wrap = function (t, e) { return 0 > t ? e - -t % e : t % e; }, b.max = function () { if (3 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = arguments[2], r = t;
                        return e > r && (r = e), n > r && (r = n), r;
                    } if (4 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], r = i;
                        return s > r && (r = s), o > r && (r = o), a > r && (r = a), r;
                    } }, b.average = function (t, e) { return (t + e) / 2; }, b.LOG_10 = Math.log(10), T.prototype.append = function (t) { this.str += t; }, T.prototype.setCharAt = function (t, e) { return this.str.substr(0, t) + e + this.str.substr(t + 1); }, T.prototype.toString = function (t) { return this.str; }, P.prototype.intValue = function () { return this.value; }, P.prototype.compareTo = function (t) { return this.value < t ? -1 : this.value > t ? 1 : 0; }, P.isNaN = function (t) { return Number.isNaN(t); }, O.isWhitespace = function (t) { return 32 >= t && t >= 0 || 127 == t; }, O.toUpperCase = function (t) { return t.toUpperCase(); }, e(M.prototype, { le: function (t) { return this.hi < t.hi || this.hi === t.hi && this.lo <= t.lo; }, extractSignificantDigits: function (t, e) { var n = this.abs(), r = M.magnitude(n.hi), i = M.TEN.pow(r); n = n.divide(i), n.gt(M.TEN) ? (n = n.divide(M.TEN), r += 1) : n.lt(M.ONE) && (n = n.multiply(M.TEN), r -= 1); for (var s = r + 1, o = new T, a = M.MAX_PRINT_DIGITS - 1, u = 0; a >= u; u++) {
                            t && u === s && o.append(".");
                            var l = Math.trunc(n.hi);
                            if (0 > l)
                                break;
                            var c = !1, h = 0;
                            l > 9 ? (c = !0, h = "9") : h = "0" + l, o.append(h), n = n.subtract(M.valueOf(l)).multiply(M.TEN), c && n.selfAdd(M.TEN);
                            var g = !0, f = M.magnitude(n.hi);
                            if (0 > f && Math.abs(f) >= a - u && (g = !1), !g)
                                break;
                        } return e[0] = r, o.toString(); }, sqr: function () { return this.multiply(this); }, doubleValue: function () { return this.hi + this.lo; }, subtract: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0];
                            return this.add(t.negate());
                        } if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            return this.add(-e);
                        } }, equals: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.hi === t.hi && this.lo === t.lo;
                        } }, isZero: function () { return 0 === this.hi && 0 === this.lo; }, selfSubtract: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0];
                            return this.isNaN() ? this : this.selfAdd(-t.hi, -t.lo);
                        } if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            return this.isNaN() ? this : this.selfAdd(-e, 0);
                        } }, getSpecialNumberString: function () { return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null; }, min: function (t) { return this.le(t) ? this : t; }, selfDivide: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof M) {
                                var t = arguments[0];
                                return this.selfDivide(t.hi, t.lo);
                            }
                            if ("number" == typeof arguments[0]) {
                                var e = arguments[0];
                                return this.selfDivide(e, 0);
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = null, s = null, o = null, a = null, u = null, l = null, c = null, h = null;
                            return u = this.hi / n, l = M.SPLIT * u, i = l - u, h = M.SPLIT * n, i = l - i, s = u - i, o = h - n, c = u * n, o = h - o, a = n - o, h = i * o - c + i * a + s * o + s * a, l = (this.hi - c - h + this.lo - u * r) / n, h = u + l, this.hi = h, this.lo = u - h + l, this;
                        } }, dump: function () { return "DD<" + this.hi + ", " + this.lo + ">"; }, divide: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0], e = null, n = null, r = null, s = null, o = null, a = null, u = null, l = null;
                            o = this.hi / t.hi, a = M.SPLIT * o, e = a - o, l = M.SPLIT * t.hi, e = a - e, n = o - e, r = l - t.hi, u = o * t.hi, r = l - r, s = t.hi - r, l = e * r - u + e * s + n * r + n * s, a = (this.hi - u - l + this.lo - o * t.lo) / t.hi, l = o + a;
                            var c = l, h = o - l + a;
                            return new M(c, h);
                        } if ("number" == typeof arguments[0]) {
                            var g = arguments[0];
                            return i.isNaN(g) ? M.createNaN() : M.copy(this).selfDivide(g, 0);
                        } }, ge: function (t) { return this.hi > t.hi || this.hi === t.hi && this.lo >= t.lo; }, pow: function (t) { if (0 === t)
                            return M.valueOf(1); var e = new M(this), n = M.valueOf(1), r = Math.abs(t); if (r > 1)
                            for (; r > 0;)
                                r % 2 === 1 && n.selfMultiply(e), r /= 2, r > 0 && (e = e.sqr());
                        else
                            n = e; return 0 > t ? n.reciprocal() : n; }, ceil: function () { if (this.isNaN())
                            return M.NaN; var t = Math.ceil(this.hi), e = 0; return t === this.hi && (e = Math.ceil(this.lo)), new M(t, e); }, compareTo: function (t) { var e = t; return this.hi < e.hi ? -1 : this.hi > e.hi ? 1 : this.lo < e.lo ? -1 : this.lo > e.lo ? 1 : 0; }, rint: function () { if (this.isNaN())
                            return this; var t = this.add(.5); return t.floor(); }, setValue: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0];
                            return this.init(t), this;
                        } if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            return this.init(e), this;
                        } }, max: function (t) { return this.ge(t) ? this : t; }, sqrt: function () { if (this.isZero())
                            return M.valueOf(0); if (this.isNegative())
                            return M.NaN; var t = 1 / Math.sqrt(this.hi), e = this.hi * t, n = M.valueOf(e), r = this.subtract(n.sqr()), i = r.hi * (.5 * t); return n.add(i); }, selfAdd: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof M) {
                                var t = arguments[0];
                                return this.selfAdd(t.hi, t.lo);
                            }
                            if ("number" == typeof arguments[0]) {
                                var e = arguments[0], n = null, r = null, i = null, s = null, o = null, a = null;
                                return i = this.hi + e, o = i - this.hi, s = i - o, s = e - o + (this.hi - s), a = s + this.lo, n = i + a, r = a + (i - n), this.hi = n + r, this.lo = r + (n - this.hi), this;
                            }
                        }
                        else if (2 === arguments.length) {
                            var u = arguments[0], l = arguments[1], n = null, r = null, c = null, h = null, i = null, s = null, o = null, a = null;
                            i = this.hi + u, c = this.lo + l, o = i - this.hi, a = c - this.lo, s = i - o, h = c - a, s = u - o + (this.hi - s), h = l - a + (this.lo - h), o = s + c, n = i + o, r = o + (i - n), o = h + r;
                            var g = n + o, f = o + (n - g);
                            return this.hi = g, this.lo = f, this;
                        } }, selfMultiply: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof M) {
                                var t = arguments[0];
                                return this.selfMultiply(t.hi, t.lo);
                            }
                            if ("number" == typeof arguments[0]) {
                                var e = arguments[0];
                                return this.selfMultiply(e, 0);
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = null, s = null, o = null, a = null, u = null, l = null;
                            u = M.SPLIT * this.hi, i = u - this.hi, l = M.SPLIT * n, i = u - i, s = this.hi - i, o = l - n, u = this.hi * n, o = l - o, a = n - o, l = i * o - u + i * a + s * o + s * a + (this.hi * r + this.lo * n);
                            var c = u + l;
                            i = u - c;
                            var h = l + i;
                            return this.hi = c, this.lo = h, this;
                        } }, selfSqr: function () { return this.selfMultiply(this); }, floor: function () { if (this.isNaN())
                            return M.NaN; var t = Math.floor(this.hi), e = 0; return t === this.hi && (e = Math.floor(this.lo)), new M(t, e); }, negate: function () { return this.isNaN() ? this : new M(-this.hi, -this.lo); }, clone: function () { try {
                            return null;
                        }
                        catch (t) {
                            if (t instanceof CloneNotSupportedException)
                                return null;
                            throw t;
                        }
                        finally { } }, multiply: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0];
                            return t.isNaN() ? M.createNaN() : M.copy(this).selfMultiply(t);
                        } if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            return i.isNaN(e) ? M.createNaN() : M.copy(this).selfMultiply(e, 0);
                        } }, isNaN: function () { return i.isNaN(this.hi); }, intValue: function () { return Math.trunc(this.hi); }, toString: function () { var t = M.magnitude(this.hi); return t >= -3 && 20 >= t ? this.toStandardNotation() : this.toSciNotation(); }, toStandardNotation: function () { var t = this.getSpecialNumberString(); if (null !== t)
                            return t; var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), r = e[0] + 1, i = n; if ("." === n.charAt(0))
                            i = "0" + n;
                        else if (0 > r)
                            i = "0." + M.stringOfChar("0", -r) + n;
                        else if (-1 === n.indexOf(".")) {
                            var s = r - n.length, o = M.stringOfChar("0", s);
                            i = n + o + ".0";
                        } return this.isNegative() ? "-" + i : i; }, reciprocal: function () { var t = null, e = null, n = null, r = null, i = null, s = null, o = null, a = null; i = 1 / this.hi, s = M.SPLIT * i, t = s - i, a = M.SPLIT * this.hi, t = s - t, e = i - t, n = a - this.hi, o = i * this.hi, n = a - n, r = this.hi - n, a = t * n - o + t * r + e * n + e * r, s = (1 - o - a - i * this.lo) / this.hi; var u = i + s, l = i - u + s; return new M(u, l); }, toSciNotation: function () { if (this.isZero())
                            return M.SCI_NOT_ZERO; var t = this.getSpecialNumberString(); if (null !== t)
                            return t; var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), r = M.SCI_NOT_EXPONENT_CHAR + e[0]; if ("0" === n.charAt(0))
                            throw new IllegalStateException("Found leading zero: " + n); var i = ""; n.length > 1 && (i = n.substring(1)); var s = n.charAt(0) + "." + i; return this.isNegative() ? "-" + s + r : s + r; }, abs: function () { return this.isNaN() ? M.NaN : this.isNegative() ? this.negate() : new M(this); }, isPositive: function () { return this.hi > 0 || 0 === this.hi && this.lo > 0; }, lt: function (t) { return this.hi < t.hi || this.hi === t.hi && this.lo < t.lo; }, add: function () { if (arguments[0] instanceof M) {
                            var t = arguments[0];
                            return M.copy(this).selfAdd(t);
                        } if ("number" == typeof arguments[0]) {
                            var e = arguments[0];
                            return M.copy(this).selfAdd(e);
                        } }, init: function () { if (1 === arguments.length) {
                            if ("number" == typeof arguments[0]) {
                                var t = arguments[0];
                                this.hi = t, this.lo = 0;
                            }
                            else if (arguments[0] instanceof M) {
                                var e = arguments[0];
                                this.hi = e.hi, this.lo = e.lo;
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            this.hi = n, this.lo = r;
                        } }, gt: function (t) { return this.hi > t.hi || this.hi === t.hi && this.lo > t.lo; }, isNegative: function () { return this.hi < 0 || 0 === this.hi && this.lo < 0; }, trunc: function () { return this.isNaN() ? M.NaN : this.isPositive() ? this.floor() : this.ceil(); }, signum: function () { return this.hi > 0 ? 1 : this.hi < 0 ? -1 : this.lo > 0 ? 1 : this.lo < 0 ? -1 : 0; }, interfaces_: function () { return [u, s, o]; }, getClass: function () { return M; } }), M.sqr = function (t) { return M.valueOf(t).selfMultiply(t); }, M.valueOf = function () { if ("string" == typeof arguments[0]) {
                        var t = arguments[0];
                        return M.parse(t);
                    } if ("number" == typeof arguments[0]) {
                        var e = arguments[0];
                        return new M(e);
                    } }, M.sqrt = function (t) { return M.valueOf(t).sqrt(); }, M.parse = function (t) { for (var e = 0, n = t.length; O.isWhitespace(t.charAt(e));)
                        e++; var r = !1; if (n > e) {
                        var i = t.charAt(e);
                        "-" !== i && "+" !== i || (e++, "-" === i && (r = !0));
                    } for (var s = new M, o = 0, a = 0, u = 0; !(e >= n);) {
                        var l = t.charAt(e);
                        if (e++, O.isDigit(l)) {
                            var c = l - "0";
                            s.selfMultiply(M.TEN), s.selfAdd(c), o++;
                        }
                        else {
                            if ("." !== l) {
                                if ("e" === l || "E" === l) {
                                    var h = t.substring(e);
                                    try {
                                        u = P.parseInt(h);
                                    }
                                    catch (e) {
                                        throw e instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + h + " in string " + t) : e;
                                    }
                                    finally { }
                                    break;
                                }
                                throw new NumberFormatException("Unexpected character '" + l + "' at position " + e + " in string " + t);
                            }
                            a = o;
                        }
                    } var g = s, f = o - a - u; if (0 === f)
                        g = s;
                    else if (f > 0) {
                        var d = M.TEN.pow(f);
                        g = s.divide(d);
                    }
                    else if (0 > f) {
                        var d = M.TEN.pow(-f);
                        g = s.multiply(d);
                    } return r ? g.negate() : g; }, M.createNaN = function () { return new M(i.NaN, i.NaN); }, M.copy = function (t) { return new M(t); }, M.magnitude = function (t) { var e = Math.abs(t), n = Math.log(e) / Math.log(10), r = Math.trunc(Math.floor(n)), i = Math.pow(10, r); return e >= 10 * i && (r += 1), r; }, M.stringOfChar = function (t, e) { for (var n = new T, r = 0; e > r; r++)
                        n.append(t); return n.toString(); }, M.PI = new M(3.141592653589793, 1.2246467991473532e-16), M.TWO_PI = new M(6.283185307179586, 2.4492935982947064e-16), M.PI_2 = new M(1.5707963267948966, 6.123233995736766e-17), M.E = new M(2.718281828459045, 1.4456468917292502e-16), M.NaN = new M(i.NaN, i.NaN), M.EPS = 1.23259516440783e-32, M.SPLIT = 134217729, M.MAX_PRINT_DIGITS = 32, M.TEN = M.valueOf(10), M.ONE = M.valueOf(1), M.SCI_NOT_EXPONENT_CHAR = "E", M.SCI_NOT_ZERO = "0.0E0", e(_.prototype, { interfaces_: function () { return []; }, getClass: function () { return _; } }), _.orientationIndex = function (t, e, n) { var r = _.orientationIndexFilter(t, e, n); if (1 >= r)
                        return r; var i = M.valueOf(e.x).selfAdd(-t.x), s = M.valueOf(e.y).selfAdd(-t.y), o = M.valueOf(n.x).selfAdd(-e.x), a = M.valueOf(n.y).selfAdd(-e.y); return i.selfMultiply(a).selfSubtract(s.selfMultiply(o)).signum(); }, _.signOfDet2x2 = function (t, e, n, r) { var i = t.multiply(r).selfSubtract(e.multiply(n)); return i.signum(); }, _.intersection = function (t, e, n, r) { var i = M.valueOf(r.y).selfSubtract(n.y).selfMultiply(M.valueOf(e.x).selfSubtract(t.x)), s = M.valueOf(r.x).selfSubtract(n.x).selfMultiply(M.valueOf(e.y).selfSubtract(t.y)), o = i.subtract(s), a = M.valueOf(r.x).selfSubtract(n.x).selfMultiply(M.valueOf(t.y).selfSubtract(n.y)), u = M.valueOf(r.y).selfSubtract(n.y).selfMultiply(M.valueOf(t.x).selfSubtract(n.x)), l = a.subtract(u), c = l.selfDivide(o).doubleValue(), h = M.valueOf(t.x).selfAdd(M.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(), g = M.valueOf(e.x).selfSubtract(t.x).selfMultiply(M.valueOf(t.y).selfSubtract(n.y)), d = M.valueOf(e.y).selfSubtract(t.y).selfMultiply(M.valueOf(t.x).selfSubtract(n.x)), p = g.subtract(d), m = p.selfDivide(o).doubleValue(), v = M.valueOf(n.y).selfAdd(M.valueOf(r.y).selfSubtract(n.y).selfMultiply(m)).doubleValue(); return new f(h, v); }, _.orientationIndexFilter = function (t, e, n) { var r = null, i = (t.x - n.x) * (e.y - n.y), s = (t.y - n.y) * (e.x - n.x), o = i - s; if (i > 0) {
                        if (0 >= s)
                            return _.signum(o);
                        r = i + s;
                    }
                    else {
                        if (!(0 > i))
                            return _.signum(o);
                        if (s >= 0)
                            return _.signum(o);
                        r = -i - s;
                    } var a = _.DP_SAFE_EPSILON * r; return o >= a || -o >= a ? _.signum(o) : 2; }, _.signum = function (t) { return t > 0 ? 1 : 0 > t ? -1 : 0; }, _.DP_SAFE_EPSILON = 1e-15, e(A.prototype, { setOrdinate: function (t, e, n) { }, size: function () { }, getOrdinate: function (t, e) { }, getCoordinate: function () { 1 === arguments.length ? arguments[0] : 2 === arguments.length && (arguments[0], arguments[1]); }, getCoordinateCopy: function (t) { }, getDimension: function () { }, getX: function (t) { }, clone: function () { }, expandEnvelope: function (t) { }, copy: function () { }, getY: function (t) { }, toCoordinateArray: function () { }, interfaces_: function () { return [o]; }, getClass: function () { return A; } }), A.X = 0, A.Y = 1, A.Z = 2, A.M = 3, D.arraycopy = function (t, e, n, r, i) { for (var s = 0, o = e; e + i > o; o++)
                        n[r + s] = t[o], s++; }, D.getProperty = function (t) { return { "line.separator": "\n" }[t]; }, e(F.prototype, { getY: function () { var t = this.y / this.w; if (i.isNaN(t) || i.isInfinite(t))
                            throw new S; return t; }, getX: function () { var t = this.x / this.w; if (i.isNaN(t) || i.isInfinite(t))
                            throw new S; return t; }, getCoordinate: function () { var t = new f; return t.x = this.getX(), t.y = this.getY(), t; }, interfaces_: function () { return []; }, getClass: function () { return F; } }), F.intersection = function (t, e, n, r) { var s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - r.y, l = r.x - n.x, c = n.x * r.y - r.x * n.y, h = o * c - l * a, g = u * a - s * c, d = s * l - u * o, p = h / d, m = g / d; if (i.isNaN(p) || i.isInfinite(p) || i.isNaN(m) || i.isInfinite(m))
                        throw new S; return new f(p, m); }, e(G.prototype, { create: function () { 1 === arguments.length ? arguments[0] instanceof Array ? arguments[0] : R(arguments[0], A) && arguments[0] : 2 === arguments.length && (arguments[0], arguments[1]); }, interfaces_: function () { return []; }, getClass: function () { return G; } }), e(k.prototype, { filter: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return k; } }), e(U.prototype, { isGeometryCollection: function () { return this.getSortIndex() === U.SORTINDEX_GEOMETRYCOLLECTION; }, getFactory: function () { return this.factory; }, getGeometryN: function (t) { return this; }, getArea: function () { return 0; }, isRectangle: function () { return !1; }, equals: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof U) {
                                var t = arguments[0];
                                return null === t ? !1 : this.equalsTopo(t);
                            }
                            if (arguments[0] instanceof Object) {
                                var e = arguments[0];
                                if (!(e instanceof U))
                                    return !1;
                                var n = e;
                                return this.equalsExact(n);
                            }
                        } }, equalsExact: function (t) { return this === t || this.equalsExact(t, 0); }, geometryChanged: function () { this.apply(U.geometryChangedFilter); }, geometryChangedAction: function () { this.envelope = null; }, equalsNorm: function (t) { return null === t ? !1 : this.norm().equalsExact(t.norm()); }, getLength: function () { return 0; }, getNumGeometries: function () { return 1; }, compareTo: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = t;
                            return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
                        } if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], e = n;
                            return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(n, r);
                        } }, getUserData: function () { return this.userData; }, getSRID: function () { return this.SRID; }, getEnvelope: function () { return this.getFactory().toGeometry(this.getEnvelopeInternal()); }, checkNotGeometryCollection: function (t) { if (t.getSortIndex() === U.SORTINDEX_GEOMETRYCOLLECTION)
                            throw new r("This method does not support GeometryCollection arguments"); }, equal: function (t, e, n) { return 0 === n ? t.equals(e) : t.distance(e) <= n; }, norm: function () { var t = this.copy(); return t.normalize(), t; }, getPrecisionModel: function () { return this.factory.getPrecisionModel(); }, getEnvelopeInternal: function () { return null === this.envelope && (this.envelope = this.computeEnvelopeInternal()), new C(this.envelope); }, setSRID: function (t) { this.SRID = t; }, setUserData: function (t) { this.userData = t; }, compare: function (t, e) { for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext();) {
                            var i = n.next(), s = r.next(), o = i.compareTo(s);
                            if (0 !== o)
                                return o;
                        } return n.hasNext() ? 1 : r.hasNext() ? -1 : 0; }, hashCode: function () { return this.getEnvelopeInternal().hashCode(); }, isGeometryCollectionOrDerived: function () { return this.getSortIndex() === U.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === U.SORTINDEX_MULTIPOINT || this.getSortIndex() === U.SORTINDEX_MULTILINESTRING || this.getSortIndex() === U.SORTINDEX_MULTIPOLYGON; }, interfaces_: function () { return [o, s, u]; }, getClass: function () { return U; } }), U.hasNonEmptyElements = function (t) { for (var e = 0; e < t.length; e++)
                        if (!t[e].isEmpty())
                            return !0; return !1; }, U.hasNullElements = function (t) { for (var e = 0; e < t.length; e++)
                        if (null === t[e])
                            return !0; return !1; }, U.serialVersionUID = 0x799ea46522854c00, U.SORTINDEX_POINT = 0, U.SORTINDEX_MULTIPOINT = 1, U.SORTINDEX_LINESTRING = 2, U.SORTINDEX_LINEARRING = 3, U.SORTINDEX_MULTILINESTRING = 4, U.SORTINDEX_POLYGON = 5, U.SORTINDEX_MULTIPOLYGON = 6, U.SORTINDEX_GEOMETRYCOLLECTION = 7, U.geometryChangedFilter = { interfaces_: function () { return [k]; }, filter: function (t) { t.geometryChangedAction(); } }, e(q.prototype, { filter: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return q; } }), e(B.prototype, { isInBoundary: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return B; } }), e(z.prototype, { isInBoundary: function (t) { return t % 2 === 1; }, interfaces_: function () { return [B]; }, getClass: function () { return z; } }), e(V.prototype, { isInBoundary: function (t) { return t > 0; }, interfaces_: function () { return [B]; }, getClass: function () { return V; } }), e(Y.prototype, { isInBoundary: function (t) { return t > 1; }, interfaces_: function () { return [B]; }, getClass: function () { return Y; } }), e(X.prototype, { isInBoundary: function (t) { return 1 === t; }, interfaces_: function () { return [B]; }, getClass: function () { return X; } }), B.Mod2BoundaryNodeRule = z, B.EndPointBoundaryNodeRule = V, B.MultiValentEndPointBoundaryNodeRule = Y, B.MonoValentEndPointBoundaryNodeRule = X, B.MOD2_BOUNDARY_RULE = new z, B.ENDPOINT_BOUNDARY_RULE = new V, B.MULTIVALENT_ENDPOINT_BOUNDARY_RULE = new Y, B.MONOVALENT_ENDPOINT_BOUNDARY_RULE = new X, B.OGC_SFS_BOUNDARY_RULE = B.MOD2_BOUNDARY_RULE, e(H.prototype, { interfaces_: function () { return []; }, getClass: function () { return H; } }), H.isRing = function (t) { return t.length < 4 ? !1 : !!t[0].equals2D(t[t.length - 1]); }, H.ptNotInList = function (t, e) { for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (H.indexOf(r, e) < 0)
                            return r;
                    } return null; }, H.scroll = function (t, e) { var n = H.indexOf(e, t); if (0 > n)
                        return null; var r = new Array(t.length).fill(null); D.arraycopy(t, n, r, 0, t.length - n), D.arraycopy(t, 0, r, t.length - n, n), D.arraycopy(r, 0, t, 0, t.length); }, H.equals = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        if (t === e)
                            return !0;
                        if (null === t || null === e)
                            return !1;
                        if (t.length !== e.length)
                            return !1;
                        for (var n = 0; n < t.length; n++)
                            if (!t[n].equals(e[n]))
                                return !1;
                        return !0;
                    } if (3 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2];
                        if (r === i)
                            return !0;
                        if (null === r || null === i)
                            return !1;
                        if (r.length !== i.length)
                            return !1;
                        for (var n = 0; n < r.length; n++)
                            if (0 !== s.compare(r[n], i[n]))
                                return !1;
                        return !0;
                    } }, H.intersection = function (t, e) { for (var n = new N, r = 0; r < t.length; r++)
                        e.intersects(t[r]) && n.add(t[r], !0); return n.toCoordinateArray(); }, H.hasRepeatedPoints = function (t) { for (var e = 1; e < t.length; e++)
                        if (t[e - 1].equals(t[e]))
                            return !0; return !1; }, H.removeRepeatedPoints = function (t) { if (!H.hasRepeatedPoints(t))
                        return t; var e = new N(t, !1); return e.toCoordinateArray(); }, H.reverse = function (t) { for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; n >= r; r++) {
                        var i = t[r];
                        t[r] = t[e - r], t[e - r] = i;
                    } }, H.removeNull = function (t) { for (var e = 0, n = 0; n < t.length; n++)
                        null !== t[n] && e++; var r = new Array(e).fill(null); if (0 === e)
                        return r; for (var i = 0, n = 0; n < t.length; n++)
                        null !== t[n] && (r[i++] = t[n]); return r; }, H.copyDeep = function () { if (1 === arguments.length) {
                        for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
                            e[n] = new f(t[n]);
                        return e;
                    } if (5 === arguments.length)
                        for (var r = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], a = arguments[4], n = 0; a > n; n++)
                            s[o + n] = new f(r[i + n]); }, H.isEqualReversed = function (t, e) { for (var n = 0; n < t.length; n++) {
                        var r = t[n], i = e[t.length - n - 1];
                        if (0 !== r.compareTo(i))
                            return !1;
                    } return !0; }, H.envelope = function (t) { for (var e = new C, n = 0; n < t.length; n++)
                        e.expandToInclude(t[n]); return e; }, H.toCoordinateArray = function (t) { return t.toArray(H.coordArrayType); }, H.atLeastNCoordinatesOrNothing = function (t, e) { return e.length >= t ? e : []; }, H.indexOf = function (t, e) { for (var n = 0; n < e.length; n++)
                        if (t.equals(e[n]))
                            return n; return -1; }, H.increasingDirection = function (t) { for (var e = 0; e < Math.trunc(t.length / 2); e++) {
                        var n = t.length - 1 - e, r = t[e].compareTo(t[n]);
                        if (0 !== r)
                            return r;
                    } return 1; }, H.compare = function (t, e) { for (var n = 0; n < t.length && n < e.length;) {
                        var r = t[n].compareTo(e[n]);
                        if (0 !== r)
                            return r;
                        n++;
                    } return n < e.length ? -1 : n < t.length ? 1 : 0; }, H.minCoordinate = function (t) { for (var e = null, n = 0; n < t.length; n++)
                        (null === e || e.compareTo(t[n]) > 0) && (e = t[n]); return e; }, H.extract = function (t, e, n) { e = b.clamp(e, 0, t.length), n = b.clamp(n, -1, t.length); var r = n - e + 1; 0 > n && (r = 0), e >= t.length && (r = 0), e > n && (r = 0); var i = new Array(r).fill(null); if (0 === r)
                        return i; for (var s = 0, o = e; n >= o; o++)
                        i[s++] = t[o]; return i; }, e(W.prototype, { compare: function (t, e) { var n = t, r = e; return H.compare(n, r); }, interfaces_: function () { return [a]; }, getClass: function () { return W; } }), e(j.prototype, { compare: function (t, e) { var n = t, r = e; if (n.length < r.length)
                            return -1; if (n.length > r.length)
                            return 1; if (0 === n.length)
                            return 0; var i = H.compare(n, r), s = H.isEqualReversed(n, r); return s ? 0 : i; }, OLDcompare: function (t, e) { var n = t, r = e; if (n.length < r.length)
                            return -1; if (n.length > r.length)
                            return 1; if (0 === n.length)
                            return 0; for (var i = H.increasingDirection(n), s = H.increasingDirection(r), o = i > 0 ? 0 : n.length - 1, a = s > 0 ? 0 : n.length - 1, u = 0; u < n.length; u++) {
                            var l = n[o].compareTo(r[a]);
                            if (0 !== l)
                                return l;
                            o += i, a += s;
                        } return 0; }, interfaces_: function () { return [a]; }, getClass: function () { return j; } }), H.ForwardComparator = W, H.BidirectionalComparator = j, H.coordArrayType = new Array(0).fill(null), Z.prototype.get = function () { }, Z.prototype.put = function () { }, Z.prototype.size = function () { }, Z.prototype.values = function () { }, Z.prototype.entrySet = function () { }, J.prototype = new Z, K.prototype = new m, K.prototype.contains = function () { }, Q.prototype = new K, Q.prototype.contains = function (t) { for (var e = 0, n = this.array_.length; n > e; e++) {
                        var r = this.array_[e];
                        if (r === t)
                            return !0;
                    } return !1; }, Q.prototype.add = function (t) { return this.contains(t) ? !1 : (this.array_.push(t), !0); }, Q.prototype.addAll = function (t) { for (var e = t.iterator(); e.hasNext();)
                        this.add(e.next()); return !0; }, Q.prototype.remove = function (t) { throw new javascript.util.OperationNotSupported; }, Q.prototype.size = function () { return this.array_.length; }, Q.prototype.isEmpty = function () { return 0 === this.array_.length; }, Q.prototype.toArray = function () { for (var t = [], e = 0, n = this.array_.length; n > e; e++)
                        t.push(this.array_[e]); return t; }, Q.prototype.iterator = function () { return new Qs(this); };
                    var Qs = function (t) { this.hashSet_ = t, this.position_ = 0; };
                    Qs.prototype.next = function () { if (this.position_ === this.hashSet_.size())
                        throw new x; return this.hashSet_.array_[this.position_++]; }, Qs.prototype.hasNext = function () { return this.position_ < this.hashSet_.size(); }, Qs.prototype.remove = function () { throw new E; };
                    var $s = 0, to = 1;
                    it.prototype = new J, it.prototype.get = function (t) { for (var e = this.root_; null !== e;) {
                        var n = t.compareTo(e.key);
                        if (0 > n)
                            e = e.left;
                        else {
                            if (!(n > 0))
                                return e.value;
                            e = e.right;
                        }
                    } return null; }, it.prototype.put = function (t, e) { if (null === this.root_)
                        return this.root_ = { key: t, value: e, left: null, right: null, parent: null, color: $s, getValue: function () { return this.value; }, getKey: function () { return this.key; } }, this.size_ = 1, null; var n, r, i = this.root_; do
                        if (n = i, r = t.compareTo(i.key), 0 > r)
                            i = i.left;
                        else {
                            if (!(r > 0)) {
                                var s = i.value;
                                return i.value = e, s;
                            }
                            i = i.right;
                        }
                    while (null !== i); var o = { key: t, left: null, right: null, value: e, parent: n, color: $s, getValue: function () { return this.value; }, getKey: function () { return this.key; } }; return 0 > r ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null; }, it.prototype.fixAfterInsertion = function (t) { for (t.color = to; null != t && t != this.root_ && t.parent.color == to;)
                        if (tt(t) == nt(tt(tt(t)))) {
                            var e = rt(tt(tt(t)));
                            $(e) == to ? (et(tt(t), $s), et(e, $s), et(tt(tt(t)), to), t = tt(tt(t))) : (t == rt(tt(t)) && (t = tt(t), this.rotateLeft(t)), et(tt(t), $s), et(tt(tt(t)), to), this.rotateRight(tt(tt(t))));
                        }
                        else {
                            var e = nt(tt(tt(t)));
                            $(e) == to ? (et(tt(t), $s), et(e, $s), et(tt(tt(t)), to), t = tt(tt(t))) : (t == nt(tt(t)) && (t = tt(t), this.rotateRight(t)), et(tt(t), $s), et(tt(tt(t)), to), this.rotateLeft(tt(tt(t))));
                        } this.root_.color = $s; }, it.prototype.values = function () { var t = new I, e = this.getFirstEntry(); if (null !== e)
                        for (t.add(e.value); null !== (e = it.successor(e));)
                            t.add(e.value); return t; }, it.prototype.entrySet = function () { var t = new Q, e = this.getFirstEntry(); if (null !== e)
                        for (t.add(e); null !== (e = it.successor(e));)
                            t.add(e); return t; }, it.prototype.rotateLeft = function (t) { if (null != t) {
                        var e = t.right;
                        t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.left == t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e;
                    } }, it.prototype.rotateRight = function (t) { if (null != t) {
                        var e = t.left;
                        t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null == t.parent ? this.root_ = e : t.parent.right == t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e;
                    } }, it.prototype.getFirstEntry = function () {
                        var t = this.root_;
                        if (null != t)
                            for (; null != t.left;)
                                t = t.left;
                        return t;
                    }, it.successor = function (t) { if (null === t)
                        return null; if (null !== t.right) {
                        for (var e = t.right; null !== e.left;)
                            e = e.left;
                        return e;
                    } for (var e = t.parent, n = t; null !== e && n === e.right;)
                        n = e, e = e.parent; return e; }, it.prototype.size = function () { return this.size_; }, e(st.prototype, { interfaces_: function () { return []; }, getClass: function () { return st; } }), ot.prototype = new K, at.prototype = new ot, at.prototype.contains = function (t) { for (var e = 0, n = this.array_.length; n > e; e++) {
                        var r = this.array_[e];
                        if (0 === r.compareTo(t))
                            return !0;
                    } return !1; }, at.prototype.add = function (t) { if (this.contains(t))
                        return !1; for (var e = 0, n = this.array_.length; n > e; e++) {
                        var r = this.array_[e];
                        if (1 === r.compareTo(t))
                            return this.array_.splice(e, 0, t), !0;
                    } return this.array_.push(t), !0; }, at.prototype.addAll = function (t) { for (var e = t.iterator(); e.hasNext();)
                        this.add(e.next()); return !0; }, at.prototype.remove = function (t) { throw new E; }, at.prototype.size = function () { return this.array_.length; }, at.prototype.isEmpty = function () { return 0 === this.array_.length; }, at.prototype.toArray = function () { for (var t = [], e = 0, n = this.array_.length; n > e; e++)
                        t.push(this.array_[e]); return t; }, at.prototype.iterator = function () { return new eo(this); };
                    var eo = function (t) { this.treeSet_ = t, this.position_ = 0; };
                    eo.prototype.next = function () { if (this.position_ === this.treeSet_.size())
                        throw new x; return this.treeSet_.array_[this.position_++]; }, eo.prototype.hasNext = function () { return this.position_ < this.treeSet_.size(); }, eo.prototype.remove = function () { throw new E; }, ut.sort = function () { var t, e, n, r, i = arguments[0]; if (1 === arguments.length)
                        return r = function (t, e) { return t.compareTo(e); }, void i.sort(r); if (2 === arguments.length)
                        n = arguments[1], r = function (t, e) { return n.compare(t, e); }, i.sort(r);
                    else {
                        if (3 === arguments.length) {
                            e = i.slice(arguments[1], arguments[2]), e.sort();
                            var s = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length));
                            for (i.splice(0, i.length), t = 0; t < s.length; t++)
                                i.push(s[t]);
                            return;
                        }
                        if (4 === arguments.length) {
                            for (e = i.slice(arguments[1], arguments[2]), n = arguments[3], r = function (t, e) { return n.compare(t, e); }, e.sort(r), s = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length)), i.splice(0, i.length), t = 0; t < s.length; t++)
                                i.push(s[t]);
                            return;
                        }
                    } }, ut.asList = function (t) { for (var e = new I, n = 0, r = t.length; r > n; n++)
                        e.add(t[n]); return e; }, e(lt.prototype, { interfaces_: function () { return []; }, getClass: function () { return lt; } }), lt.toDimensionSymbol = function (t) { switch (t) {
                        case lt.FALSE: return lt.SYM_FALSE;
                        case lt.TRUE: return lt.SYM_TRUE;
                        case lt.DONTCARE: return lt.SYM_DONTCARE;
                        case lt.P: return lt.SYM_P;
                        case lt.L: return lt.SYM_L;
                        case lt.A: return lt.SYM_A;
                    } throw new r("Unknown dimension value: " + t); }, lt.toDimensionValue = function (t) { switch (O.toUpperCase(t)) {
                        case lt.SYM_FALSE: return lt.FALSE;
                        case lt.SYM_TRUE: return lt.TRUE;
                        case lt.SYM_DONTCARE: return lt.DONTCARE;
                        case lt.SYM_P: return lt.P;
                        case lt.SYM_L: return lt.L;
                        case lt.SYM_A: return lt.A;
                    } throw new r("Unknown dimension symbol: " + t); }, lt.P = 0, lt.L = 1, lt.A = 2, lt.FALSE = -1, lt.TRUE = -2, lt.DONTCARE = -3, lt.SYM_FALSE = "F", lt.SYM_TRUE = "T", lt.SYM_DONTCARE = "*", lt.SYM_P = "0", lt.SYM_L = "1", lt.SYM_A = "2", e(ct.prototype, { filter: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return ct; } }), e(ht.prototype, { filter: function (t, e) { }, isDone: function () { }, isGeometryChanged: function () { }, interfaces_: function () { return []; }, getClass: function () { return ht; } }), c(gt, U), e(gt.prototype, { computeEnvelopeInternal: function () { for (var t = new C, e = 0; e < this.geometries.length; e++)
                            t.expandToInclude(this.geometries[e].getEnvelopeInternal()); return t; }, getGeometryN: function (t) { return this.geometries[t]; }, getSortIndex: function () { return U.SORTINDEX_GEOMETRYCOLLECTION; }, getCoordinates: function () { for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this.geometries.length; n++)
                            for (var r = this.geometries[n].getCoordinates(), i = 0; i < r.length; i++)
                                e++, t[e] = r[i]; return t; }, getArea: function () { for (var t = 0, e = 0; e < this.geometries.length; e++)
                            t += this.geometries[e].getArea(); return t; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            if (!this.isEquivalentClass(t))
                                return !1;
                            var n = t;
                            if (this.geometries.length !== n.geometries.length)
                                return !1;
                            for (var r = 0; r < this.geometries.length; r++)
                                if (!this.geometries[r].equalsExact(n.geometries[r], e))
                                    return !1;
                            return !0;
                        } return U.prototype.equalsExact.apply(this, arguments); }, normalize: function () { for (var t = 0; t < this.geometries.length; t++)
                            this.geometries[t].normalize(); ut.sort(this.geometries); }, getCoordinate: function () { return this.isEmpty() ? null : this.geometries[0].getCoordinate(); }, getBoundaryDimension: function () { for (var t = lt.FALSE, e = 0; e < this.geometries.length; e++)
                            t = Math.max(t, this.geometries[e].getBoundaryDimension()); return t; }, getDimension: function () { for (var t = lt.FALSE, e = 0; e < this.geometries.length; e++)
                            t = Math.max(t, this.geometries[e].getDimension()); return t; }, getLength: function () { for (var t = 0, e = 0; e < this.geometries.length; e++)
                            t += this.geometries[e].getLength(); return t; }, getNumPoints: function () { for (var t = 0, e = 0; e < this.geometries.length; e++)
                            t += this.geometries[e].getNumPoints(); return t; }, getNumGeometries: function () { return this.geometries.length; }, reverse: function () { for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++)
                            e[n] = this.geometries[n].reverse(); return this.getFactory().createGeometryCollection(e); }, compareToSameClass: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = new at(ut.asList(this.geometries)), n = new at(ut.asList(t.geometries));
                            return this.compare(e, n);
                        } if (2 === arguments.length) {
                            for (var r = arguments[0], i = arguments[1], s = r, o = this.getNumGeometries(), a = s.getNumGeometries(), u = 0; o > u && a > u;) {
                                var l = this.getGeometryN(u), c = s.getGeometryN(u), h = l.compareToSameClass(c, i);
                                if (0 !== h)
                                    return h;
                                u++;
                            }
                            return o > u ? 1 : a > u ? -1 : 0;
                        } }, apply: function () { if (R(arguments[0], q))
                            for (var t = arguments[0], e = 0; e < this.geometries.length; e++)
                                this.geometries[e].apply(t);
                        else if (R(arguments[0], ht)) {
                            var n = arguments[0];
                            if (0 === this.geometries.length)
                                return null;
                            for (var e = 0; e < this.geometries.length && (this.geometries[e].apply(n), !n.isDone()); e++)
                                ;
                            n.isGeometryChanged() && this.geometryChanged();
                        }
                        else if (R(arguments[0], ct)) {
                            var r = arguments[0];
                            r.filter(this);
                            for (var e = 0; e < this.geometries.length; e++)
                                this.geometries[e].apply(r);
                        }
                        else if (R(arguments[0], k)) {
                            var i = arguments[0];
                            i.filter(this);
                            for (var e = 0; e < this.geometries.length; e++)
                                this.geometries[e].apply(i);
                        } }, getBoundary: function () { return this.checkNotGeometryCollection(this), g.shouldNeverReachHere(), null; }, clone: function () { var t = U.prototype.clone.call(this); t.geometries = new Array(this.geometries.length).fill(null); for (var e = 0; e < this.geometries.length; e++)
                            t.geometries[e] = this.geometries[e].clone(); return t; }, getGeometryType: function () { return "GeometryCollection"; }, copy: function () { for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++)
                            t[e] = this.geometries[e].copy(); return new gt(t, this.factory); }, isEmpty: function () { for (var t = 0; t < this.geometries.length; t++)
                            if (!this.geometries[t].isEmpty())
                                return !1; return !0; }, interfaces_: function () { return []; }, getClass: function () { return gt; } }), gt.serialVersionUID = -0x4f07bcb1f857d800, c(ft, gt), e(ft.prototype, { getSortIndex: function () { return U.SORTINDEX_MULTILINESTRING; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.isEquivalentClass(t) ? gt.prototype.equalsExact.call(this, t, e) : !1;
                        } return gt.prototype.equalsExact.apply(this, arguments); }, getBoundaryDimension: function () { return this.isClosed() ? lt.FALSE : 0; }, isClosed: function () { if (this.isEmpty())
                            return !1; for (var t = 0; t < this.geometries.length; t++)
                            if (!this.geometries[t].isClosed())
                                return !1; return !0; }, getDimension: function () { return 1; }, reverse: function () { for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++)
                            e[t - 1 - n] = this.geometries[n].reverse(); return this.getFactory().createMultiLineString(e); }, getBoundary: function () { return new dt(this).getBoundary(); }, getGeometryType: function () { return "MultiLineString"; }, copy: function () { for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++)
                            t[e] = this.geometries[e].copy(); return new ft(t, this.factory); }, interfaces_: function () { return [st]; }, getClass: function () { return ft; } }), ft.serialVersionUID = 0x7155d2ab4afa8000, e(dt.prototype, { boundaryMultiLineString: function (t) { if (this.geom.isEmpty())
                            return this.getEmptyMultiPoint(); var e = this.computeBoundaryCoordinates(t); return 1 === e.length ? this.geomFact.createPoint(e[0]) : this.geomFact.createMultiPointFromCoords(e); }, getBoundary: function () { return this.geom instanceof wt ? this.boundaryLineString(this.geom) : this.geom instanceof ft ? this.boundaryMultiLineString(this.geom) : this.geom.getBoundary(); }, boundaryLineString: function (t) { if (this.geom.isEmpty())
                            return this.getEmptyMultiPoint(); if (t.isClosed()) {
                            var e = this.bnRule.isInBoundary(2);
                            return e ? t.getStartPoint() : this.geomFact.createMultiPoint();
                        } return this.geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]); }, getEmptyMultiPoint: function () { return this.geomFact.createMultiPoint(); }, computeBoundaryCoordinates: function (t) { var e = new I; this.endpointMap = new it; for (var n = 0; n < t.getNumGeometries(); n++) {
                            var r = t.getGeometryN(n);
                            0 !== r.getNumPoints() && (this.addEndpoint(r.getCoordinateN(0)), this.addEndpoint(r.getCoordinateN(r.getNumPoints() - 1)));
                        } for (var i = this.endpointMap.entrySet().iterator(); i.hasNext();) {
                            var s = i.next(), o = s.getValue(), a = o.count;
                            this.bnRule.isInBoundary(a) && e.add(s.getKey());
                        } return H.toCoordinateArray(e); }, addEndpoint: function (t) { var e = this.endpointMap.get(t); null === e && (e = new pt, this.endpointMap.put(t, e)), e.count++; }, interfaces_: function () { return []; }, getClass: function () { return dt; } }), dt.getBoundary = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = new dt(t);
                        return e.getBoundary();
                    } if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1], e = new dt(n, r);
                        return e.getBoundary();
                    } }, e(pt.prototype, { interfaces_: function () { return []; }, getClass: function () { return pt; } }), e(Nt.prototype, { interfaces_: function () { return []; }, getClass: function () { return Nt; } }), Nt.chars = function (t, e) { for (var n = new Array(e).fill(null), r = 0; e > r; r++)
                        n[r] = t; return new String(n); }, Nt.getStackTrace = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = new xt, n = new mt(e);
                        return t.printStackTrace(n), e.toString();
                    } if (2 === arguments.length) {
                        for (var r = arguments[0], i = arguments[1], s = "", o = new vt(Nt.getStackTrace(r)), a = new It(o), u = 0; i > u; u++)
                            try {
                                s += a.readLine() + Nt.NEWLINE;
                            }
                            catch (t) {
                                if (!(t instanceof Et))
                                    throw t;
                                g.shouldNeverReachHere();
                            }
                            finally { }
                        return s;
                    } }, Nt.split = function (t, e) { for (var n = e.length, r = new I, i = "" + t, s = i.indexOf(e); s >= 0;) {
                        var o = i.substring(0, s);
                        r.add(o), i = i.substring(s + n), s = i.indexOf(e);
                    } i.length > 0 && r.add(i); for (var a = new Array(r.size()).fill(null), u = 0; u < a.length; u++)
                        a[u] = r.get(u); return a; }, Nt.toString = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return Nt.SIMPLE_ORDINATE_FORMAT.format(t);
                    } }, Nt.spaces = function (t) { return Nt.chars(" ", t); }, Nt.NEWLINE = D.getProperty("line.separator"), Nt.SIMPLE_ORDINATE_FORMAT = new yt("0.#"), e(Ct.prototype, { interfaces_: function () { return []; }, getClass: function () { return Ct; } }), Ct.copyCoord = function (t, e, n, r) { for (var i = Math.min(t.getDimension(), n.getDimension()), s = 0; i > s; s++)
                        n.setOrdinate(r, s, t.getOrdinate(e, s)); }, Ct.isRing = function (t) { var e = t.size(); return 0 === e ? !0 : 3 >= e ? !1 : t.getOrdinate(0, A.X) === t.getOrdinate(e - 1, A.X) && t.getOrdinate(0, A.Y) === t.getOrdinate(e - 1, A.Y); }, Ct.isEqual = function (t, e) { var n = t.size(), r = e.size(); if (n !== r)
                        return !1; for (var s = Math.min(t.getDimension(), e.getDimension()), o = 0; n > o; o++)
                        for (var a = 0; s > a; a++) {
                            var u = t.getOrdinate(o, a), l = e.getOrdinate(o, a);
                            if (!(t.getOrdinate(o, a) === e.getOrdinate(o, a) || i.isNaN(u) && i.isNaN(l)))
                                return !1;
                        } return !0; }, Ct.extend = function (t, e, n) { var r = t.create(n, e.getDimension()), i = e.size(); if (Ct.copy(e, 0, r, 0, i), i > 0)
                        for (var s = i; n > s; s++)
                            Ct.copy(e, i - 1, r, s, 1); return r; }, Ct.reverse = function (t) { for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; n >= r; r++)
                        Ct.swap(t, r, e - r); }, Ct.swap = function (t, e, n) { if (e === n)
                        return null; for (var r = 0; r < t.getDimension(); r++) {
                        var i = t.getOrdinate(e, r);
                        t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, i);
                    } }, Ct.copy = function (t, e, n, r, i) { for (var s = 0; i > s; s++)
                        Ct.copyCoord(t, e + s, n, r + s); }, Ct.toString = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = t.size();
                        if (0 === e)
                            return "()";
                        var n = t.getDimension(), r = new T;
                        r.append("(");
                        for (var i = 0; e > i; i++) {
                            i > 0 && r.append(" ");
                            for (var s = 0; n > s; s++)
                                s > 0 && r.append(","), r.append(Nt.toString(t.getOrdinate(i, s)));
                        }
                        return r.append(")"), r.toString();
                    } }, Ct.ensureValidRing = function (t, e) { var n = e.size(); if (0 === n)
                        return e; if (3 >= n)
                        return Ct.createClosedRing(t, e, 4); var r = e.getOrdinate(0, A.X) === e.getOrdinate(n - 1, A.X) && e.getOrdinate(0, A.Y) === e.getOrdinate(n - 1, A.Y); return r ? e : Ct.createClosedRing(t, e, n + 1); }, Ct.createClosedRing = function (t, e, n) { var r = t.create(n, e.getDimension()), i = e.size(); Ct.copy(e, 0, r, 0, i); for (var s = i; n > s; s++)
                        Ct.copy(e, 0, r, s, 1); return r; }, c(wt, U), e(wt.prototype, { computeEnvelopeInternal: function () { return this.isEmpty() ? new C : this.points.expandEnvelope(new C); }, isRing: function () { return this.isClosed() && this.isSimple(); }, getSortIndex: function () { return U.SORTINDEX_LINESTRING; }, getCoordinates: function () { return this.points.toCoordinateArray(); }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            if (!this.isEquivalentClass(t))
                                return !1;
                            var n = t;
                            if (this.points.size() !== n.points.size())
                                return !1;
                            for (var r = 0; r < this.points.size(); r++)
                                if (!this.equal(this.points.getCoordinate(r), n.points.getCoordinate(r), e))
                                    return !1;
                            return !0;
                        } return U.prototype.equalsExact.apply(this, arguments); }, normalize: function () { for (var t = 0; t < Math.trunc(this.points.size() / 2); t++) {
                            var e = this.points.size() - 1 - t;
                            if (!this.points.getCoordinate(t).equals(this.points.getCoordinate(e)))
                                return this.points.getCoordinate(t).compareTo(this.points.getCoordinate(e)) > 0 && Ct.reverse(this.points), null;
                        } }, getCoordinate: function () { return this.isEmpty() ? null : this.points.getCoordinate(0); }, getBoundaryDimension: function () { return this.isClosed() ? lt.FALSE : 0; }, isClosed: function () { return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1)); }, getEndPoint: function () { return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1); }, getDimension: function () { return 1; }, getLength: function () { return ce.computeLength(this.points); }, getNumPoints: function () { return this.points.size(); }, reverse: function () { var t = this.points.copy(); Ct.reverse(t); var e = this.getFactory().createLineString(t); return e; }, compareToSameClass: function () { if (1 === arguments.length) {
                            for (var t = arguments[0], e = t, n = 0, r = 0; n < this.points.size() && r < e.points.size();) {
                                var i = this.points.getCoordinate(n).compareTo(e.points.getCoordinate(r));
                                if (0 !== i)
                                    return i;
                                n++, r++;
                            }
                            return n < this.points.size() ? 1 : r < e.points.size() ? -1 : 0;
                        } if (2 === arguments.length) {
                            var s = arguments[0], o = arguments[1], e = s;
                            return o.compare(this.points, e.points);
                        } }, apply: function () { if (R(arguments[0], q))
                            for (var t = arguments[0], e = 0; e < this.points.size(); e++)
                                t.filter(this.points.getCoordinate(e));
                        else if (R(arguments[0], ht)) {
                            var n = arguments[0];
                            if (0 === this.points.size())
                                return null;
                            for (var e = 0; e < this.points.size() && (n.filter(this.points, e), !n.isDone()); e++)
                                ;
                            n.isGeometryChanged() && this.geometryChanged();
                        }
                        else if (R(arguments[0], ct)) {
                            var r = arguments[0];
                            r.filter(this);
                        }
                        else if (R(arguments[0], k)) {
                            var i = arguments[0];
                            i.filter(this);
                        } }, getBoundary: function () { return new dt(this).getBoundary(); }, isEquivalentClass: function (t) { return t instanceof wt; }, clone: function () { var t = U.prototype.clone.call(this); return t.points = this.points.clone(), t; }, getCoordinateN: function (t) { return this.points.getCoordinate(t); }, getGeometryType: function () { return "LineString"; }, copy: function () { return new wt(this.points.copy(), this.factory); }, getCoordinateSequence: function () { return this.points; }, isEmpty: function () { return 0 === this.points.size(); }, init: function (t) { if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size())
                            throw new r("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)"); this.points = t; }, isCoordinate: function (t) { for (var e = 0; e < this.points.size(); e++)
                            if (this.points.getCoordinate(e).equals(t))
                                return !0; return !1; }, getStartPoint: function () { return this.isEmpty() ? null : this.getPointN(0); }, getPointN: function (t) { return this.getFactory().createPoint(this.points.getCoordinate(t)); }, interfaces_: function () { return [st]; }, getClass: function () { return wt; } }), wt.serialVersionUID = 0x2b2b51ba435c8e00, e(St.prototype, { interfaces_: function () { return []; }, getClass: function () { return St; } }), c(Lt, U), e(Lt.prototype, { computeEnvelopeInternal: function () { if (this.isEmpty())
                            return new C; var t = new C; return t.expandToInclude(this.coordinates.getX(0), this.coordinates.getY(0)), t; }, getSortIndex: function () { return U.SORTINDEX_POINT; }, getCoordinates: function () { return this.isEmpty() ? [] : [this.getCoordinate()]; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.isEquivalentClass(t) ? this.isEmpty() && t.isEmpty() ? !0 : this.isEmpty() !== t.isEmpty() ? !1 : this.equal(t.getCoordinate(), this.getCoordinate(), e) : !1;
                        } return U.prototype.equalsExact.apply(this, arguments); }, normalize: function () { }, getCoordinate: function () { return 0 !== this.coordinates.size() ? this.coordinates.getCoordinate(0) : null; }, getBoundaryDimension: function () { return lt.FALSE; }, getDimension: function () { return 0; }, getNumPoints: function () { return this.isEmpty() ? 0 : 1; }, reverse: function () { return this.copy(); }, getX: function () { if (null === this.getCoordinate())
                            throw new IllegalStateException("getX called on empty Point"); return this.getCoordinate().x; }, compareToSameClass: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = t;
                            return this.getCoordinate().compareTo(e.getCoordinate());
                        } if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], e = n;
                            return r.compare(this.coordinates, e.coordinates);
                        } }, apply: function () { if (R(arguments[0], q)) {
                            var t = arguments[0];
                            if (this.isEmpty())
                                return null;
                            t.filter(this.getCoordinate());
                        }
                        else if (R(arguments[0], ht)) {
                            var e = arguments[0];
                            if (this.isEmpty())
                                return null;
                            e.filter(this.coordinates, 0), e.isGeometryChanged() && this.geometryChanged();
                        }
                        else if (R(arguments[0], ct)) {
                            var n = arguments[0];
                            n.filter(this);
                        }
                        else if (R(arguments[0], k)) {
                            var r = arguments[0];
                            r.filter(this);
                        } }, getBoundary: function () { return this.getFactory().createGeometryCollection(null); }, clone: function () { var t = U.prototype.clone.call(this); return t.coordinates = this.coordinates.clone(), t; }, getGeometryType: function () { return "Point"; }, copy: function () { return new Lt(this.coordinates.copy(), this.factory); }, getCoordinateSequence: function () { return this.coordinates; }, getY: function () { if (null === this.getCoordinate())
                            throw new IllegalStateException("getY called on empty Point"); return this.getCoordinate().y; }, isEmpty: function () { return 0 === this.coordinates.size(); }, init: function (t) { null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), g.isTrue(t.size() <= 1), this.coordinates = t; }, isSimple: function () { return !0; }, interfaces_: function () { return [St]; }, getClass: function () { return Lt; } }), Lt.serialVersionUID = 0x44077bad161cbc00, e(Rt.prototype, { interfaces_: function () { return []; }, getClass: function () { return Rt; } }), c(bt, U), e(bt.prototype, { computeEnvelopeInternal: function () { return this.shell.getEnvelopeInternal(); }, getSortIndex: function () { return U.SORTINDEX_POLYGON; }, getCoordinates: function () { if (this.isEmpty())
                            return []; for (var t = new Array(this.getNumPoints()).fill(null), e = -1, n = this.shell.getCoordinates(), r = 0; r < n.length; r++)
                            e++, t[e] = n[r]; for (var i = 0; i < this.holes.length; i++)
                            for (var s = this.holes[i].getCoordinates(), o = 0; o < s.length; o++)
                                e++, t[e] = s[o]; return t; }, getArea: function () { var t = 0; t += Math.abs(ce.signedArea(this.shell.getCoordinateSequence())); for (var e = 0; e < this.holes.length; e++)
                            t -= Math.abs(ce.signedArea(this.holes[e].getCoordinateSequence())); return t; }, isRectangle: function () { if (0 !== this.getNumInteriorRing())
                            return !1; if (null === this.shell)
                            return !1; if (5 !== this.shell.getNumPoints())
                            return !1; for (var t = this.shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; 5 > n; n++) {
                            var r = t.getX(n);
                            if (r !== e.getMinX() && r !== e.getMaxX())
                                return !1;
                            var i = t.getY(n);
                            if (i !== e.getMinY() && i !== e.getMaxY())
                                return !1;
                        } for (var s = t.getX(0), o = t.getY(0), n = 1; 4 >= n; n++) {
                            var r = t.getX(n), i = t.getY(n), a = r !== s, u = i !== o;
                            if (a === u)
                                return !1;
                            s = r, o = i;
                        } return !0; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            if (!this.isEquivalentClass(t))
                                return !1;
                            var n = t, r = this.shell, i = n.shell;
                            if (!r.equalsExact(i, e))
                                return !1;
                            if (this.holes.length !== n.holes.length)
                                return !1;
                            for (var s = 0; s < this.holes.length; s++)
                                if (!this.holes[s].equalsExact(n.holes[s], e))
                                    return !1;
                            return !0;
                        } return U.prototype.equalsExact.apply(this, arguments); }, normalize: function () { if (0 === arguments.length) {
                            this.normalize(this.shell, !0);
                            for (var t = 0; t < this.holes.length; t++)
                                this.normalize(this.holes[t], !1);
                            ut.sort(this.holes);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            if (e.isEmpty())
                                return null;
                            var r = new Array(e.getCoordinates().length - 1).fill(null);
                            D.arraycopy(e.getCoordinates(), 0, r, 0, r.length);
                            var i = H.minCoordinate(e.getCoordinates());
                            H.scroll(r, i), D.arraycopy(r, 0, e.getCoordinates(), 0, r.length), e.getCoordinates()[r.length] = r[0], ce.isCCW(e.getCoordinates()) === n && H.reverse(e.getCoordinates());
                        } }, getCoordinate: function () { return this.shell.getCoordinate(); }, getNumInteriorRing: function () { return this.holes.length; }, getBoundaryDimension: function () { return 1; }, getDimension: function () { return 2; }, getLength: function () { var t = 0; t += this.shell.getLength(); for (var e = 0; e < this.holes.length; e++)
                            t += this.holes[e].getLength(); return t; }, getNumPoints: function () { for (var t = this.shell.getNumPoints(), e = 0; e < this.holes.length; e++)
                            t += this.holes[e].getNumPoints(); return t; }, reverse: function () { var t = this.copy(); t.shell = this.shell.copy().reverse(), t.holes = new Array(this.holes.length).fill(null); for (var e = 0; e < this.holes.length; e++)
                            t.holes[e] = this.holes[e].copy().reverse(); return t; }, convexHull: function () { return this.getExteriorRing().convexHull(); }, compareToSameClass: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = this.shell, n = t.shell;
                            return e.compareToSameClass(n);
                        } if (2 === arguments.length) {
                            var r = arguments[0], i = arguments[1], s = r, e = this.shell, n = s.shell, o = e.compareToSameClass(n, i);
                            if (0 !== o)
                                return o;
                            for (var a = this.getNumInteriorRing(), u = s.getNumInteriorRing(), l = 0; a > l && u > l;) {
                                var c = this.getInteriorRingN(l), h = s.getInteriorRingN(l), g = c.compareToSameClass(h, i);
                                if (0 !== g)
                                    return g;
                                l++;
                            }
                            return a > l ? 1 : u > l ? -1 : 0;
                        } }, apply: function () { if (R(arguments[0], q)) {
                            var t = arguments[0];
                            this.shell.apply(t);
                            for (var e = 0; e < this.holes.length; e++)
                                this.holes[e].apply(t);
                        }
                        else if (R(arguments[0], ht)) {
                            var n = arguments[0];
                            if (this.shell.apply(n), !n.isDone())
                                for (var e = 0; e < this.holes.length && (this.holes[e].apply(n), !n.isDone()); e++)
                                    ;
                            n.isGeometryChanged() && this.geometryChanged();
                        }
                        else if (R(arguments[0], ct)) {
                            var r = arguments[0];
                            r.filter(this);
                        }
                        else if (R(arguments[0], k)) {
                            var i = arguments[0];
                            i.filter(this), this.shell.apply(i);
                            for (var e = 0; e < this.holes.length; e++)
                                this.holes[e].apply(i);
                        } }, getBoundary: function () { if (this.isEmpty())
                            return this.getFactory().createMultiLineString(); var t = new Array(this.holes.length + 1).fill(null); t[0] = this.shell; for (var e = 0; e < this.holes.length; e++)
                            t[e + 1] = this.holes[e]; return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t); }, clone: function () { var t = U.prototype.clone.call(this); t.shell = this.shell.clone(), t.holes = new Array(this.holes.length).fill(null); for (var e = 0; e < this.holes.length; e++)
                            t.holes[e] = this.holes[e].clone(); return t; }, getGeometryType: function () { return "Polygon"; }, copy: function () { for (var t = this.shell.copy(), e = new Array(this.holes.length).fill(null), n = 0; n < e.length; n++)
                            e[n] = this.holes[n].copy(); return new bt(t, e, this.factory); }, getExteriorRing: function () { return this.shell; }, isEmpty: function () { return this.shell.isEmpty(); }, getInteriorRingN: function (t) { return this.holes[t]; }, interfaces_: function () { return [Rt]; }, getClass: function () { return bt; } }), bt.serialVersionUID = -0x307ffefd8dc97200, c(Tt, gt), e(Tt.prototype, { getSortIndex: function () { return U.SORTINDEX_MULTIPOINT; }, isValid: function () { return !0; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.isEquivalentClass(t) ? gt.prototype.equalsExact.call(this, t, e) : !1;
                        } return gt.prototype.equalsExact.apply(this, arguments); }, getCoordinate: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.geometries[t].getCoordinate();
                        } return gt.prototype.getCoordinate.apply(this, arguments); }, getBoundaryDimension: function () { return lt.FALSE; }, getDimension: function () { return 0; }, getBoundary: function () { return this.getFactory().createGeometryCollection(null); }, getGeometryType: function () { return "MultiPoint"; }, copy: function () { for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++)
                            t[e] = this.geometries[e].copy(); return new Tt(t, this.factory); }, interfaces_: function () { return [St]; }, getClass: function () { return Tt; } }), Tt.serialVersionUID = -0x6fb1ed4162e0fc00, c(Pt, wt), e(Pt.prototype, { getSortIndex: function () { return U.SORTINDEX_LINEARRING; }, getBoundaryDimension: function () { return lt.FALSE; }, isClosed: function () { return this.isEmpty() ? !0 : wt.prototype.isClosed.call(this); }, reverse: function () { var t = this.points.copy(); Ct.reverse(t); var e = this.getFactory().createLinearRing(t); return e; }, validateConstruction: function () { if (!this.isEmpty() && !wt.prototype.isClosed.call(this))
                            throw new r("Points of LinearRing do not form a closed linestring"); if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < Pt.MINIMUM_VALID_SIZE)
                            throw new r("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)"); }, getGeometryType: function () { return "LinearRing"; }, copy: function () { return new Pt(this.points.copy(), this.factory); }, interfaces_: function () { return []; }, getClass: function () { return Pt; } }), Pt.MINIMUM_VALID_SIZE = 4, Pt.serialVersionUID = -0x3b229e262367a600, c(Ot, gt), e(Ot.prototype, { getSortIndex: function () { return U.SORTINDEX_MULTIPOLYGON; }, equalsExact: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.isEquivalentClass(t) ? gt.prototype.equalsExact.call(this, t, e) : !1;
                        } return gt.prototype.equalsExact.apply(this, arguments); }, getBoundaryDimension: function () { return 1; }, getDimension: function () { return 2; }, reverse: function () { for (var t = this.geometries.length, e = new Array(t).fill(null), n = 0; n < this.geometries.length; n++)
                            e[n] = this.geometries[n].reverse(); return this.getFactory().createMultiPolygon(e); }, getBoundary: function () { if (this.isEmpty())
                            return this.getFactory().createMultiLineString(); for (var t = new I, e = 0; e < this.geometries.length; e++)
                            for (var n = this.geometries[e], r = n.getBoundary(), i = 0; i < r.getNumGeometries(); i++)
                                t.add(r.getGeometryN(i)); var s = new Array(t.size()).fill(null); return this.getFactory().createMultiLineString(t.toArray(s)); }, getGeometryType: function () { return "MultiPolygon"; }, copy: function () { for (var t = new Array(this.geometries.length).fill(null), e = 0; e < t.length; e++)
                            t[e] = this.geometries[e].copy(); return new Ot(t, this.factory); }, interfaces_: function () { return [Rt]; }, getClass: function () { return Ot; } }), Ot.serialVersionUID = -0x7a5aa1369171980, e(Mt.prototype, { setCopyUserData: function (t) { this.isUserDataCopied = t; }, edit: function (t, e) { if (null === t)
                            return null; var n = this.editInternal(t, e); return this.isUserDataCopied && n.setUserData(t.getUserData()), n; }, editInternal: function (t, e) { return null === this.factory && (this.factory = t.getFactory()), t instanceof gt ? this.editGeometryCollection(t, e) : t instanceof bt ? this.editPolygon(t, e) : t instanceof Lt ? e.edit(t, this.factory) : t instanceof wt ? e.edit(t, this.factory) : (g.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null); }, editGeometryCollection: function (t, e) { for (var n = e.edit(t, this.factory), r = new I, i = 0; i < n.getNumGeometries(); i++) {
                            var s = this.edit(n.getGeometryN(i), e);
                            null === s || s.isEmpty() || r.add(s);
                        } return n.getClass() === Tt ? this.factory.createMultiPoint(r.toArray([])) : n.getClass() === ft ? this.factory.createMultiLineString(r.toArray([])) : n.getClass() === Ot ? this.factory.createMultiPolygon(r.toArray([])) : this.factory.createGeometryCollection(r.toArray([])); }, editPolygon: function (t, e) { var n = e.edit(t, this.factory); if (null === n && (n = this.factory.createPolygon(null)), n.isEmpty())
                            return n; var r = this.edit(n.getExteriorRing(), e); if (null === r || r.isEmpty())
                            return this.factory.createPolygon(); for (var i = new I, s = 0; s < n.getNumInteriorRing(); s++) {
                            var o = this.edit(n.getInteriorRingN(s), e);
                            null === o || o.isEmpty() || i.add(o);
                        } return this.factory.createPolygon(r, i.toArray([])); }, interfaces_: function () { return []; }, getClass: function () { return Mt; } }), Mt.GeometryEditorOperation = _t, e(At.prototype, { edit: function (t, e) { return t; }, interfaces_: function () { return [_t]; }, getClass: function () { return At; } }), e(Dt.prototype, { edit: function (t, e) { if (t instanceof Pt)
                            return e.createLinearRing(this.editCoordinates(t.getCoordinates(), t)); if (t instanceof wt)
                            return e.createLineString(this.editCoordinates(t.getCoordinates(), t)); if (t instanceof Lt) {
                            var n = this.editCoordinates(t.getCoordinates(), t);
                            return n.length > 0 ? e.createPoint(n[0]) : e.createPoint();
                        } return t; }, interfaces_: function () { return [_t]; }, getClass: function () { return Dt; } }), e(Ft.prototype, { edit: function (t, e) { return t instanceof Pt ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof wt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof Lt ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t; }, interfaces_: function () { return [_t]; }, getClass: function () { return Ft; } }), Mt.NoOpGeometryOperation = At, Mt.CoordinateOperation = Dt, Mt.CoordinateSequenceOperation = Ft, e(Gt.prototype, { setOrdinate: function (t, e, n) { switch (e) {
                            case A.X:
                                this.coordinates[t].x = n;
                                break;
                            case A.Y:
                                this.coordinates[t].y = n;
                                break;
                            case A.Z:
                                this.coordinates[t].z = n;
                                break;
                            default: throw new r("invalid ordinateIndex");
                        } }, size: function () { return this.coordinates.length; }, getOrdinate: function (t, e) { switch (e) {
                            case A.X: return this.coordinates[t].x;
                            case A.Y: return this.coordinates[t].y;
                            case A.Z: return this.coordinates[t].z;
                        } return i.NaN; }, getCoordinate: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.coordinates[t];
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            n.x = this.coordinates[e].x, n.y = this.coordinates[e].y, n.z = this.coordinates[e].z;
                        } }, getCoordinateCopy: function (t) { return new f(this.coordinates[t]); }, getDimension: function () { return this.dimension; }, getX: function (t) { return this.coordinates[t].x; }, clone: function () { for (var t = new Array(this.size()).fill(null), e = 0; e < this.coordinates.length; e++)
                            t[e] = this.coordinates[e].clone(); return new Gt(t, this.dimension); }, expandEnvelope: function (t) { for (var e = 0; e < this.coordinates.length; e++)
                            t.expandToInclude(this.coordinates[e]); return t; }, copy: function () { for (var t = new Array(this.size()).fill(null), e = 0; e < this.coordinates.length; e++)
                            t[e] = this.coordinates[e].copy(); return new Gt(t, this.dimension); }, toString: function () { if (this.coordinates.length > 0) {
                            var t = new T(17 * this.coordinates.length);
                            t.append("("), t.append(this.coordinates[0]);
                            for (var e = 1; e < this.coordinates.length; e++)
                                t.append(", "), t.append(this.coordinates[e]);
                            return t.append(")"), t.toString();
                        } return "()"; }, getY: function (t) { return this.coordinates[t].y; }, toCoordinateArray: function () { return this.coordinates; }, interfaces_: function () { return [A, u]; }, getClass: function () { return Gt; } }), Gt.serialVersionUID = -0xcb44a778db18e00, e(kt.prototype, { readResolve: function () { return kt.instance(); }, create: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof Array) {
                                var t = arguments[0];
                                return new Gt(t);
                            }
                            if (R(arguments[0], A)) {
                                var e = arguments[0];
                                return new Gt(e);
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            return r > 3 && (r = 3), 2 > r ? new Gt(n) : new Gt(n, r);
                        } }, interfaces_: function () { return [G, u]; }, getClass: function () { return kt; } }), kt.instance = function () { return kt.instanceObject; }, kt.serialVersionUID = -0x38e49fa6cf6f2e00, kt.instanceObject = new kt;
                    var no, ro = Object.defineProperty, io = qt({ "delete": zt, has: Xt, get: Vt, set: Ht, keys: jt, values: Zt, entries: Jt, forEach: $t, clear: Wt }), so = "undefined" != typeof Map && Map.prototype.values ? Map : io;
                    te.prototype = new Z, te.prototype.get = function (t) { return this.map_.get(t) || null; }, te.prototype.put = function (t, e) { return this.map_.set(t, e), e; }, te.prototype.values = function () { for (var t = new I, e = this.map_.values(), n = e.next(); !n.done;)
                        t.add(n.value), n = e.next(); return t; }, te.prototype.entrySet = function () { var t = new Q; return this.map_.entries().forEach(function (e) { return t.add(e); }), t; }, te.prototype.size = function () {
                        return this.map_.size();
                    }, e(ee.prototype, { equals: function (t) { if (!(t instanceof ee))
                            return !1; var e = t; return this.modelType === e.modelType && this.scale === e.scale; }, compareTo: function (t) { var e = t, n = this.getMaximumSignificantDigits(), r = e.getMaximumSignificantDigits(); return new P(n).compareTo(new P(r)); }, getScale: function () { return this.scale; }, isFloating: function () { return this.modelType === ee.FLOATING || this.modelType === ee.FLOATING_SINGLE; }, getType: function () { return this.modelType; }, toString: function () { var t = "UNKNOWN"; return this.modelType === ee.FLOATING ? t = "Floating" : this.modelType === ee.FLOATING_SINGLE ? t = "Floating-Single" : this.modelType === ee.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t; }, makePrecise: function () { if ("number" == typeof arguments[0]) {
                            var t = arguments[0];
                            if (i.isNaN(t))
                                return t;
                            if (this.modelType === ee.FLOATING_SINGLE) {
                                var e = t;
                                return e;
                            }
                            return this.modelType === ee.FIXED ? Math.round(t * this.scale) / this.scale : t;
                        } if (arguments[0] instanceof f) {
                            var n = arguments[0];
                            if (this.modelType === ee.FLOATING)
                                return null;
                            n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
                        } }, getMaximumSignificantDigits: function () { var t = 16; return this.modelType === ee.FLOATING ? t = 16 : this.modelType === ee.FLOATING_SINGLE ? t = 6 : this.modelType === ee.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t; }, setScale: function (t) { this.scale = Math.abs(t); }, interfaces_: function () { return [u, s]; }, getClass: function () { return ee; } }), ee.mostPrecise = function (t, e) { return t.compareTo(e) >= 0 ? t : e; }, e(ne.prototype, { readResolve: function () { return ne.nameToTypeMap.get(this.name); }, toString: function () { return this.name; }, interfaces_: function () { return [u]; }, getClass: function () { return ne; } }), ne.serialVersionUID = -552860263173159e4, ne.nameToTypeMap = new te, ee.Type = ne, ee.serialVersionUID = 0x6bee6404e9a25c00, ee.FIXED = new ne("FIXED"), ee.FLOATING = new ne("FLOATING"), ee.FLOATING_SINGLE = new ne("FLOATING SINGLE"), ee.maximumPreciseValue = 9007199254740992, e(re.prototype, { toGeometry: function (t) { return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new f(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new f(t.getMinX(), t.getMinY()), new f(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new f(t.getMinX(), t.getMinY()), new f(t.getMinX(), t.getMaxY()), new f(t.getMaxX(), t.getMaxY()), new f(t.getMaxX(), t.getMinY()), new f(t.getMinX(), t.getMinY())]), null); }, createLineString: function () { if (0 === arguments.length)
                            return this.createLineString(this.getCoordinateSequenceFactory().create([])); if (1 === arguments.length) {
                            if (arguments[0] instanceof Array) {
                                var t = arguments[0];
                                return this.createLineString(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
                            }
                            if (R(arguments[0], A)) {
                                var e = arguments[0];
                                return new wt(e, this);
                            }
                        } }, createMultiLineString: function () { if (0 === arguments.length)
                            return new ft(null, this); if (1 === arguments.length) {
                            var t = arguments[0];
                            return new ft(t, this);
                        } }, buildGeometry: function (t) { for (var e = null, n = !1, r = !1, i = t.iterator(); i.hasNext();) {
                            var s = i.next(), o = s.getClass();
                            null === e && (e = o), o !== e && (n = !0), s.isGeometryCollectionOrDerived() && (r = !0);
                        } if (null === e)
                            return this.createGeometryCollection(); if (n || r)
                            return this.createGeometryCollection(re.toGeometryArray(t)); var a = t.iterator().next(), u = t.size() > 1; if (u) {
                            if (a instanceof bt)
                                return this.createMultiPolygon(re.toPolygonArray(t));
                            if (a instanceof wt)
                                return this.createMultiLineString(re.toLineStringArray(t));
                            if (a instanceof Lt)
                                return this.createMultiPoint(re.toPointArray(t));
                            g.shouldNeverReachHere("Unhandled class: " + a.getClass().getName());
                        } return a; }, createMultiPointFromCoords: function (t) { return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null); }, createPoint: function () { if (0 === arguments.length)
                            return this.createPoint(this.getCoordinateSequenceFactory().create([])); if (1 === arguments.length) {
                            if (arguments[0] instanceof f) {
                                var t = arguments[0];
                                return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null);
                            }
                            if (R(arguments[0], A)) {
                                var e = arguments[0];
                                return new Lt(e, this);
                            }
                        } }, getCoordinateSequenceFactory: function () { return this.coordinateSequenceFactory; }, createPolygon: function () { if (0 === arguments.length)
                            return new bt(null, null, this); if (1 === arguments.length) {
                            if (R(arguments[0], A)) {
                                var t = arguments[0];
                                return this.createPolygon(this.createLinearRing(t));
                            }
                            if (arguments[0] instanceof Array) {
                                var e = arguments[0];
                                return this.createPolygon(this.createLinearRing(e));
                            }
                            if (arguments[0] instanceof Pt) {
                                var n = arguments[0];
                                return this.createPolygon(n, null);
                            }
                        }
                        else if (2 === arguments.length) {
                            var r = arguments[0], i = arguments[1];
                            return new bt(r, i, this);
                        } }, getSRID: function () { return this.SRID; }, createGeometryCollection: function () { if (0 === arguments.length)
                            return new gt(null, this); if (1 === arguments.length) {
                            var t = arguments[0];
                            return new gt(t, this);
                        } }, createGeometry: function (t) { var e = new Mt(this); return e.edit(t, { edit: function () { if (2 === arguments.length) {
                                var t = arguments[0];
                                return arguments[1], this.coordinateSequenceFactory.create(t);
                            } } }); }, getPrecisionModel: function () { return this.precisionModel; }, createLinearRing: function () { if (0 === arguments.length)
                            return this.createLinearRing(this.getCoordinateSequenceFactory().create([])); if (1 === arguments.length) {
                            if (arguments[0] instanceof Array) {
                                var t = arguments[0];
                                return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null);
                            }
                            if (R(arguments[0], A)) {
                                var e = arguments[0];
                                return new Pt(e, this);
                            }
                        } }, createMultiPolygon: function () { if (0 === arguments.length)
                            return new Ot(null, this); if (1 === arguments.length) {
                            var t = arguments[0];
                            return new Ot(t, this);
                        } }, createMultiPoint: function () { if (0 === arguments.length)
                            return new Tt(null, this); if (1 === arguments.length) {
                            if (arguments[0] instanceof Array) {
                                var t = arguments[0];
                                return new Tt(t, this);
                            }
                            if (arguments[0] instanceof Array) {
                                var e = arguments[0];
                                return this.createMultiPoint(null !== e ? this.getCoordinateSequenceFactory().create(e) : null);
                            }
                            if (R(arguments[0], A)) {
                                var n = arguments[0];
                                if (null === n)
                                    return this.createMultiPoint(new Array(0).fill(null));
                                for (var r = new Array(n.size()).fill(null), i = 0; i < n.size(); i++) {
                                    var s = this.getCoordinateSequenceFactory().create(1, n.getDimension());
                                    Ct.copy(n, i, s, 0, 1), r[i] = this.createPoint(s);
                                }
                                return this.createMultiPoint(r);
                            }
                        } }, interfaces_: function () { return [u]; }, getClass: function () { return re; } }), re.toMultiPolygonArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toGeometryArray = function (t) { if (null === t)
                        return null; var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.getDefaultCoordinateSequenceFactory = function () { return kt.instance(); }, re.toMultiLineStringArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toLineStringArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toMultiPointArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toLinearRingArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toPointArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.toPolygonArray = function (t) { var e = new Array(t.size()).fill(null); return t.toArray(e); }, re.createPointFromInternalCoord = function (t, e) { return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t); }, re.serialVersionUID = -0x5ea75f2051eeb400;
                    var oo = { typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/, emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/, spaces: /\s+/, parenComma: /\)\s*,\s*\(/, doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/, trimParens: /^\s*\(?(.*?)\)?\s*$/ };
                    e(ie.prototype, { read: function (t) { var e, n, r; t = t.replace(/[\n\r]/g, " "); var i = oo.typeStr.exec(t); if (-1 !== t.search("EMPTY") && (i = oo.emptyTypeStr.exec(t), i[2] = void 0), i && (n = i[1].toLowerCase(), r = i[2], uo[n] && (e = uo[n].apply(this, [r]))), void 0 === e)
                            throw new Error("Could not parse WKT " + t); return e; }, write: function (t) { return this.extractGeometry(t); }, extractGeometry: function (t) { var e = t.getGeometryType().toLowerCase(); if (!ao[e])
                            return null; var n, r = e.toUpperCase(); return n = t.isEmpty() ? r + " EMPTY" : r + "(" + ao[e].apply(this, [t]) + ")"; } });
                    var ao = { coordinate: function (t) { return t.x + " " + t.y; }, point: function (t) { return ao.coordinate.call(this, t.coordinates.coordinates[0]); }, multipoint: function (t) { for (var e = [], n = 0, r = t.geometries.length; r > n; ++n)
                            e.push("(" + ao.point.apply(this, [t.geometries[n]]) + ")"); return e.join(","); }, linestring: function (t) { for (var e = [], n = 0, r = t.points.coordinates.length; r > n; ++n)
                            e.push(ao.coordinate.apply(this, [t.points.coordinates[n]])); return e.join(","); }, linearring: function (t) { for (var e = [], n = 0, r = t.points.coordinates.length; r > n; ++n)
                            e.push(ao.coordinate.apply(this, [t.points.coordinates[n]])); return e.join(","); }, multilinestring: function (t) { for (var e = [], n = 0, r = t.geometries.length; r > n; ++n)
                            e.push("(" + ao.linestring.apply(this, [t.geometries[n]]) + ")"); return e.join(","); }, polygon: function (t) { var e = []; e.push("(" + ao.linestring.apply(this, [t.shell]) + ")"); for (var n = 0, r = t.holes.length; r > n; ++n)
                            e.push("(" + ao.linestring.apply(this, [t.holes[n]]) + ")"); return e.join(","); }, multipolygon: function (t) { for (var e = [], n = 0, r = t.geometries.length; r > n; ++n)
                            e.push("(" + ao.polygon.apply(this, [t.geometries[n]]) + ")"); return e.join(","); }, geometrycollection: function (t) { for (var e = [], n = 0, r = t.geometries.length; r > n; ++n)
                            e.push(this.extractGeometry(t.geometries[n])); return e.join(","); } }, uo = { point: function (t) { if (void 0 === t)
                            return this.geometryFactory.createPoint(); var e = t.trim().split(oo.spaces); return this.geometryFactory.createPoint(new f(Number.parseFloat(e[0]), Number.parseFloat(e[1]))); }, multipoint: function (t) { if (void 0 === t)
                            return this.geometryFactory.createMultiPoint(); for (var e, n = t.trim().split(","), r = [], i = 0, s = n.length; s > i; ++i)
                            e = n[i].replace(oo.trimParens, "$1"), r.push(uo.point.apply(this, [e])); return this.geometryFactory.createMultiPoint(r); }, linestring: function (t) { if (void 0 === t)
                            return this.geometryFactory.createLineString(); for (var e, n = t.trim().split(","), r = [], i = 0, s = n.length; s > i; ++i)
                            e = n[i].trim().split(oo.spaces), r.push(new f(Number.parseFloat(e[0]), Number.parseFloat(e[1]))); return this.geometryFactory.createLineString(r); }, linearring: function (t) { if (void 0 === t)
                            return this.geometryFactory.createLinearRing(); for (var e, n = t.trim().split(","), r = [], i = 0, s = n.length; s > i; ++i)
                            e = n[i].trim().split(oo.spaces), r.push(new f(Number.parseFloat(e[0]), Number.parseFloat(e[1]))); return this.geometryFactory.createLinearRing(r); }, multilinestring: function (t) { if (void 0 === t)
                            return this.geometryFactory.createMultiLineString(); for (var e, n = t.trim().split(oo.parenComma), r = [], i = 0, s = n.length; s > i; ++i)
                            e = n[i].replace(oo.trimParens, "$1"), r.push(uo.linestring.apply(this, [e])); return this.geometryFactory.createMultiLineString(r); }, polygon: function (t) { if (void 0 === t)
                            return this.geometryFactory.createPolygon(); for (var e, n, r, i, s = t.trim().split(oo.parenComma), o = [], a = 0, u = s.length; u > a; ++a)
                            e = s[a].replace(oo.trimParens, "$1"), n = uo.linestring.apply(this, [e]), r = this.geometryFactory.createLinearRing(n.points), 0 === a ? i = r : o.push(r); return this.geometryFactory.createPolygon(i, o); }, multipolygon: function (t) { if (void 0 === t)
                            return this.geometryFactory.createMultiPolygon(); for (var e, n = t.trim().split(oo.doubleParenComma), r = [], i = 0, s = n.length; s > i; ++i)
                            e = n[i].replace(oo.trimParens, "$1"), r.push(uo.polygon.apply(this, [e])); return this.geometryFactory.createMultiPolygon(r); }, geometrycollection: function (t) { if (void 0 === t)
                            return this.geometryFactory.createGeometryCollection(); t = t.replace(/,\s*([A-Za-z])/g, "|$1"); for (var e = t.trim().split("|"), n = [], r = 0, i = e.length; i > r; ++r)
                            n.push(this.read(e[r])); return this.geometryFactory.createGeometryCollection(n); } };
                    e(se.prototype, { write: function (t) { return this.parser.write(t); } }), e(se, { toLineString: function (t, e) { if (2 !== arguments.length)
                            throw new Error("Not implemented"); return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )"; } }), e(oe.prototype, { getIndexAlongSegment: function (t, e) { return this.computeIntLineIndex(), this.intLineIndex[t][e]; }, getTopologySummary: function () { var t = new T; return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString(); }, computeIntersection: function (t, e, n, r) { this.inputLines[0][0] = t, this.inputLines[0][1] = e, this.inputLines[1][0] = n, this.inputLines[1][1] = r, this.result = this.computeIntersect(t, e, n, r); }, getIntersectionNum: function () { return this.result; }, computeIntLineIndex: function () { if (0 === arguments.length)
                            null === this.intLineIndex && (this.intLineIndex = Array(2).fill().map(function () { return Array(2); }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
                        else if (1 === arguments.length) {
                            var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
                            e > n ? (this.intLineIndex[t][0] = 0, this.intLineIndex[t][1] = 1) : (this.intLineIndex[t][0] = 1, this.intLineIndex[t][1] = 0);
                        } }, isProper: function () { return this.hasIntersection() && this._isProper; }, setPrecisionModel: function (t) { this.precisionModel = t; }, isInteriorIntersection: function () { if (0 === arguments.length)
                            return this.isInteriorIntersection(0) ? !0 : !!this.isInteriorIntersection(1); if (1 === arguments.length) {
                            for (var t = arguments[0], e = 0; e < this.result; e++)
                                if (!this.intPt[e].equals2D(this.inputLines[t][0]) && !this.intPt[e].equals2D(this.inputLines[t][1]))
                                    return !0;
                            return !1;
                        } }, getIntersection: function (t) { return this.intPt[t]; }, isEndPoint: function () { return this.hasIntersection() && !this._isProper; }, hasIntersection: function () { return this.result !== oe.NO_INTERSECTION; }, getEdgeDistance: function (t, e) { var n = oe.computeEdgeDistance(this.intPt[e], this.inputLines[t][0], this.inputLines[t][1]); return n; }, isCollinear: function () { return this.result === oe.COLLINEAR_INTERSECTION; }, toString: function () { return se.toLineString(this.inputLines[0][0], this.inputLines[0][1]) + " - " + se.toLineString(this.inputLines[1][0], this.inputLines[1][1]) + this.getTopologySummary(); }, getEndpoint: function (t, e) { return this.inputLines[t][e]; }, isIntersection: function (t) { for (var e = 0; e < this.result; e++)
                            if (this.intPt[e].equals2D(t))
                                return !0; return !1; }, getIntersectionAlongSegment: function (t, e) { return this.computeIntLineIndex(), this.intPt[this.intLineIndex[t][e]]; }, interfaces_: function () { return []; }, getClass: function () { return oe; } }), oe.computeEdgeDistance = function (t, e, n) { var r = Math.abs(n.x - e.x), i = Math.abs(n.y - e.y), s = -1; if (t.equals(e))
                        s = 0;
                    else if (t.equals(n))
                        s = r > i ? r : i;
                    else {
                        var o = Math.abs(t.x - e.x), a = Math.abs(t.y - e.y);
                        s = r > i ? o : a, 0 !== s || t.equals(e) || (s = Math.max(o, a));
                    } return g.isTrue(!(0 === s && !t.equals(e)), "Bad distance calculation"), s; }, oe.nonRobustComputeEdgeDistance = function (t, e, n) { var r = t.x - e.x, i = t.y - e.y, s = Math.sqrt(r * r + i * i); return g.isTrue(!(0 === s && !t.equals(e)), "Invalid distance calculation"), s; }, oe.DONT_INTERSECT = 0, oe.DO_INTERSECT = 1, oe.COLLINEAR = 2, oe.NO_INTERSECTION = 0, oe.POINT_INTERSECTION = 1, oe.COLLINEAR_INTERSECTION = 2, c(ae, oe), e(ae.prototype, { isInSegmentEnvelopes: function (t) { var e = new C(this.inputLines[0][0], this.inputLines[0][1]), n = new C(this.inputLines[1][0], this.inputLines[1][1]); return e.contains(t) && n.contains(t); }, computeIntersection: function () { if (3 !== arguments.length)
                            return oe.prototype.computeIntersection.apply(this, arguments); var t = arguments[0], e = arguments[1], n = arguments[2]; return this._isProper = !1, C.intersects(e, n, t) && 0 === ce.orientationIndex(e, n, t) && 0 === ce.orientationIndex(n, e, t) ? (this._isProper = !0, (t.equals(e) || t.equals(n)) && (this._isProper = !1), this.result = oe.POINT_INTERSECTION, null) : void (this.result = oe.NO_INTERSECTION); }, normalizeToMinimum: function (t, e, n, r, i) { i.x = this.smallestInAbsValue(t.x, e.x, n.x, r.x), i.y = this.smallestInAbsValue(t.y, e.y, n.y, r.y), t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y; }, safeHCoordinateIntersection: function (t, e, n, r) { var i = null; try {
                            i = F.intersection(t, e, n, r);
                        }
                        catch (s) {
                            if (!(s instanceof S))
                                throw s;
                            i = ae.nearestEndpoint(t, e, n, r);
                        }
                        finally { } return i; }, intersection: function (t, e, n, r) { var i = this.intersectionWithNormalization(t, e, n, r); return this.isInSegmentEnvelopes(i) || (i = new f(ae.nearestEndpoint(t, e, n, r))), null !== this.precisionModel && this.precisionModel.makePrecise(i), i; }, smallestInAbsValue: function (t, e, n, r) { var i = t, s = Math.abs(i); return Math.abs(e) < s && (i = e, s = Math.abs(e)), Math.abs(n) < s && (i = n, s = Math.abs(n)), Math.abs(r) < s && (i = r), i; }, checkDD: function (t, e, n, r, i) { var s = _.intersection(t, e, n, r), o = this.isInSegmentEnvelopes(s); D.out.println("DD in env = " + o + "  --------------------- " + s), i.distance(s) > 1e-4 && D.out.println("Distance = " + i.distance(s)); }, intersectionWithNormalization: function (t, e, n, r) { var i = new f(t), s = new f(e), o = new f(n), a = new f(r), u = new f; this.normalizeToEnvCentre(i, s, o, a, u); var l = this.safeHCoordinateIntersection(i, s, o, a); return l.x += u.x, l.y += u.y, l; }, computeCollinearIntersection: function (t, e, n, r) { var i = C.intersects(t, e, n), s = C.intersects(t, e, r), o = C.intersects(n, r, t), a = C.intersects(n, r, e); return i && s ? (this.intPt[0] = n, this.intPt[1] = r, oe.COLLINEAR_INTERSECTION) : o && a ? (this.intPt[0] = t, this.intPt[1] = e, oe.COLLINEAR_INTERSECTION) : i && o ? (this.intPt[0] = n, this.intPt[1] = t, !n.equals(t) || s || a ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : i && a ? (this.intPt[0] = n, this.intPt[1] = e, !n.equals(e) || s || o ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : s && o ? (this.intPt[0] = r, this.intPt[1] = t, !r.equals(t) || i || a ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : s && a ? (this.intPt[0] = r, this.intPt[1] = e, !r.equals(e) || i || o ? oe.COLLINEAR_INTERSECTION : oe.POINT_INTERSECTION) : oe.NO_INTERSECTION; }, normalizeToEnvCentre: function (t, e, n, r, i) { var s = t.x < e.x ? t.x : e.x, o = t.y < e.y ? t.y : e.y, a = t.x > e.x ? t.x : e.x, u = t.y > e.y ? t.y : e.y, l = n.x < r.x ? n.x : r.x, c = n.y < r.y ? n.y : r.y, h = n.x > r.x ? n.x : r.x, g = n.y > r.y ? n.y : r.y, f = s > l ? s : l, d = h > a ? a : h, p = o > c ? o : c, m = g > u ? u : g, v = (f + d) / 2, y = (p + m) / 2; i.x = v, i.y = y, t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y; }, computeIntersect: function (t, e, n, r) { if (this._isProper = !1, !C.intersects(t, e, n, r))
                            return oe.NO_INTERSECTION; var i = ce.orientationIndex(t, e, n), s = ce.orientationIndex(t, e, r); if (i > 0 && s > 0 || 0 > i && 0 > s)
                            return oe.NO_INTERSECTION; var o = ce.orientationIndex(n, r, t), a = ce.orientationIndex(n, r, e); if (o > 0 && a > 0 || 0 > o && 0 > a)
                            return oe.NO_INTERSECTION; var u = 0 === i && 0 === s && 0 === o && 0 === a; return u ? this.computeCollinearIntersection(t, e, n, r) : (0 === i || 0 === s || 0 === o || 0 === a ? (this._isProper = !1, t.equals2D(n) || t.equals2D(r) ? this.intPt[0] = t : e.equals2D(n) || e.equals2D(r) ? this.intPt[0] = e : 0 === i ? this.intPt[0] = new f(n) : 0 === s ? this.intPt[0] = new f(r) : 0 === o ? this.intPt[0] = new f(t) : 0 === a && (this.intPt[0] = new f(e))) : (this._isProper = !0, this.intPt[0] = this.intersection(t, e, n, r)), oe.POINT_INTERSECTION); }, interfaces_: function () { return []; }, getClass: function () { return ae; } }), ae.nearestEndpoint = function (t, e, n, r) { var i = t, s = ce.distancePointLine(t, n, r), o = ce.distancePointLine(e, n, r); return s > o && (s = o, i = e), o = ce.distancePointLine(n, t, e), s > o && (s = o, i = n), o = ce.distancePointLine(r, t, e), s > o && (s = o, i = r), i; }, e(ue.prototype, { interfaces_: function () { return []; }, getClass: function () { return ue; } }), ue.orientationIndex = function (t, e, n) { var r = e.x - t.x, i = e.y - t.y, s = n.x - e.x, o = n.y - e.y; return ue.signOfDet2x2(r, i, s, o); }, ue.signOfDet2x2 = function (t, e, n, r) { var i = null, s = null, o = null, a = 0; if (i = 1, 0 === t || 0 === r)
                        return 0 === e || 0 === n ? 0 : e > 0 ? n > 0 ? -i : i : n > 0 ? i : -i; if (0 === e || 0 === n)
                        return r > 0 ? t > 0 ? i : -i : t > 0 ? -i : i; if (e > 0 ? r > 0 ? r >= e || (i = -i, s = t, t = n, n = s, s = e, e = r, r = s) : -r >= e ? (i = -i, n = -n, r = -r) : (s = t, t = -n, n = s, s = e, e = -r, r = s) : r > 0 ? r >= -e ? (i = -i, t = -t, e = -e) : (s = -t, t = n, n = s, s = -e, e = r, r = s) : e >= r ? (t = -t, e = -e, n = -n, r = -r) : (i = -i, s = -t, t = -n, n = s, s = -e, e = -r, r = s), t > 0) {
                        if (!(n > 0))
                            return i;
                        if (!(n >= t))
                            return i;
                    }
                    else {
                        if (n > 0)
                            return -i;
                        if (!(t >= n))
                            return -i;
                        i = -i, t = -t, n = -n;
                    } for (;;) {
                        if (a += 1, o = Math.floor(n / t), n -= o * t, r -= o * e, 0 > r)
                            return -i;
                        if (r > e)
                            return i;
                        if (t > n + n) {
                            if (r + r > e)
                                return i;
                        }
                        else {
                            if (e > r + r)
                                return -i;
                            n = t - n, r = e - r, i = -i;
                        }
                        if (0 === r)
                            return 0 === n ? 0 : -i;
                        if (0 === n)
                            return i;
                        if (o = Math.floor(t / n), t -= o * n, e -= o * r, 0 > e)
                            return i;
                        if (e > r)
                            return -i;
                        if (n > t + t) {
                            if (e + e > r)
                                return -i;
                        }
                        else {
                            if (r > e + e)
                                return i;
                            t = n - t, e = r - e, i = -i;
                        }
                        if (0 === e)
                            return 0 === t ? 0 : i;
                        if (0 === t)
                            return -i;
                    } }, e(le.prototype, { countSegment: function (t, e) { if (t.x < this.p.x && e.x < this.p.x)
                            return null; if (this.p.x === e.x && this.p.y === e.y)
                            return this.isPointOnSegment = !0, null; if (t.y === this.p.y && e.y === this.p.y) {
                            var n = t.x, r = e.x;
                            return n > r && (n = e.x, r = t.x), this.p.x >= n && this.p.x <= r && (this.isPointOnSegment = !0), null;
                        } if (t.y > this.p.y && e.y <= this.p.y || e.y > this.p.y && t.y <= this.p.y) {
                            var i = t.x - this.p.x, s = t.y - this.p.y, o = e.x - this.p.x, a = e.y - this.p.y, u = ue.signOfDet2x2(i, s, o, a);
                            if (0 === u)
                                return this.isPointOnSegment = !0, null;
                            s > a && (u = -u), u > 0 && this.crossingCount++;
                        } }, isPointInPolygon: function () { return this.getLocation() !== L.EXTERIOR; }, getLocation: function () { return this.isPointOnSegment ? L.BOUNDARY : this.crossingCount % 2 === 1 ? L.INTERIOR : L.EXTERIOR; }, isOnSegment: function () { return this.isPointOnSegment; }, interfaces_: function () { return []; }, getClass: function () { return le; } }), le.locatePointInRing = function () { if (arguments[0] instanceof f && R(arguments[1], A)) {
                        for (var t = arguments[0], e = arguments[1], n = new le(t), r = new f, i = new f, s = 1; s < e.size(); s++)
                            if (e.getCoordinate(s, r), e.getCoordinate(s - 1, i), n.countSegment(r, i), n.isOnSegment())
                                return n.getLocation();
                        return n.getLocation();
                    } if (arguments[0] instanceof f && arguments[1] instanceof Array) {
                        for (var o = arguments[0], a = arguments[1], n = new le(o), s = 1; s < a.length; s++) {
                            var r = a[s], i = a[s - 1];
                            if (n.countSegment(r, i), n.isOnSegment())
                                return n.getLocation();
                        }
                        return n.getLocation();
                    } }, e(ce.prototype, { interfaces_: function () { return []; }, getClass: function () { return ce; } }), ce.orientationIndex = function (t, e, n) { return _.orientationIndex(t, e, n); }, ce.signedArea = function () { if (arguments[0] instanceof Array) {
                        var t = arguments[0];
                        if (t.length < 3)
                            return 0;
                        for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
                            var i = t[r].x - n, s = t[r + 1].y, o = t[r - 1].y;
                            e += i * (o - s);
                        }
                        return e / 2;
                    } if (R(arguments[0], A)) {
                        var a = arguments[0], u = a.size();
                        if (3 > u)
                            return 0;
                        var l = new f, c = new f, h = new f;
                        a.getCoordinate(0, c), a.getCoordinate(1, h);
                        var n = c.x;
                        h.x -= n;
                        for (var e = 0, r = 1; u - 1 > r; r++)
                            l.y = c.y, c.x = h.x, c.y = h.y, a.getCoordinate(r + 1, h), h.x -= n, e += c.x * (l.y - h.y);
                        return e / 2;
                    } }, ce.distanceLineLine = function (t, e, n, r) { if (t.equals(e))
                        return ce.distancePointLine(t, n, r); if (n.equals(r))
                        return ce.distancePointLine(r, t, e); var i = !1; if (C.intersects(t, e, n, r)) {
                        var s = (e.x - t.x) * (r.y - n.y) - (e.y - t.y) * (r.x - n.x);
                        if (0 === s)
                            i = !0;
                        else {
                            var o = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y), a = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), u = a / s, l = o / s;
                            (0 > l || l > 1 || 0 > u || u > 1) && (i = !0);
                        }
                    }
                    else
                        i = !0; return i ? b.min(ce.distancePointLine(t, n, r), ce.distancePointLine(e, n, r), ce.distancePointLine(n, t, e), ce.distancePointLine(r, t, e)) : 0; }, ce.isPointInRing = function (t, e) { return ce.locatePointInRing(t, e) !== L.EXTERIOR; }, ce.computeLength = function (t) { var e = t.size(); if (1 >= e)
                        return 0; var n = 0, r = new f; t.getCoordinate(0, r); for (var i = r.x, s = r.y, o = 1; e > o; o++) {
                        t.getCoordinate(o, r);
                        var a = r.x, u = r.y, l = a - i, c = u - s;
                        n += Math.sqrt(l * l + c * c), i = a, s = u;
                    } return n; }, ce.isCCW = function (t) { var e = t.length - 1; if (3 > e)
                        throw new r("Ring has fewer than 4 points, so orientation cannot be determined"); for (var n = t[0], i = 0, s = 1; e >= s; s++) {
                        var o = t[s];
                        o.y > n.y && (n = o, i = s);
                    } var a = i; do
                        a -= 1, 0 > a && (a = e);
                    while (t[a].equals2D(n) && a !== i); var u = i; do
                        u = (u + 1) % e;
                    while (t[u].equals2D(n) && u !== i); var l = t[a], c = t[u]; if (l.equals2D(n) || c.equals2D(n) || l.equals2D(c))
                        return !1; var h = ce.computeOrientation(l, n, c), g = !1; return g = 0 === h ? l.x > c.x : h > 0; }, ce.locatePointInRing = function (t, e) { return le.locatePointInRing(t, e); }, ce.distancePointLinePerpendicular = function (t, e, n) { var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), i = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r; return Math.abs(i) * Math.sqrt(r); }, ce.computeOrientation = function (t, e, n) { return ce.orientationIndex(t, e, n); }, ce.distancePointLine = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        if (0 === e.length)
                            throw new r("Line array must contain at least one vertex");
                        for (var n = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
                            var s = ce.distancePointLine(t, e[i], e[i + 1]);
                            n > s && (n = s);
                        }
                        return n;
                    } if (3 === arguments.length) {
                        var o = arguments[0], a = arguments[1], u = arguments[2];
                        if (a.x === u.x && a.y === u.y)
                            return o.distance(a);
                        var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((o.x - a.x) * (u.x - a.x) + (o.y - a.y) * (u.y - a.y)) / l;
                        if (0 >= c)
                            return o.distance(a);
                        if (c >= 1)
                            return o.distance(u);
                        var h = ((a.y - o.y) * (u.x - a.x) - (a.x - o.x) * (u.y - a.y)) / l;
                        return Math.abs(h) * Math.sqrt(l);
                    } }, ce.isOnLine = function (t, e) { for (var n = new ae, r = 1; r < e.length; r++) {
                        var i = e[r - 1], s = e[r];
                        if (n.computeIntersection(t, i, s), n.hasIntersection())
                            return !0;
                    } return !1; }, ce.CLOCKWISE = -1, ce.RIGHT = ce.CLOCKWISE, ce.COUNTERCLOCKWISE = 1, ce.LEFT = ce.COUNTERCLOCKWISE, ce.COLLINEAR = 0, ce.STRAIGHT = ce.COLLINEAR, e(he.prototype, { minX: function () { return Math.min(this.p0.x, this.p1.x); }, orientationIndex: function () { if (arguments[0] instanceof he) {
                            var t = arguments[0], e = ce.orientationIndex(this.p0, this.p1, t.p0), n = ce.orientationIndex(this.p0, this.p1, t.p1);
                            return e >= 0 && n >= 0 ? Math.max(e, n) : 0 >= e && 0 >= n ? Math.max(e, n) : 0;
                        } if (arguments[0] instanceof f) {
                            var r = arguments[0];
                            return ce.orientationIndex(this.p0, this.p1, r);
                        } }, toGeometry: function (t) { return t.createLineString([this.p0, this.p1]); }, isVertical: function () { return this.p0.x === this.p1.x; }, equals: function (t) { if (!(t instanceof he))
                            return !1; var e = t; return this.p0.equals(e.p0) && this.p1.equals(e.p1); }, intersection: function (t) { var e = new ae; return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null; }, project: function () { if (arguments[0] instanceof f) {
                            var t = arguments[0];
                            if (t.equals(this.p0) || t.equals(this.p1))
                                return new f(t);
                            var e = this.projectionFactor(t), n = new f;
                            return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
                        } if (arguments[0] instanceof he) {
                            var r = arguments[0], i = this.projectionFactor(r.p0), s = this.projectionFactor(r.p1);
                            if (i >= 1 && s >= 1)
                                return null;
                            if (0 >= i && 0 >= s)
                                return null;
                            var o = this.project(r.p0);
                            0 > i && (o = this.p0), i > 1 && (o = this.p1);
                            var a = this.project(r.p1);
                            return 0 > s && (a = this.p0), s > 1 && (a = this.p1), new he(o, a);
                        } }, normalize: function () { this.p1.compareTo(this.p0) < 0 && this.reverse(); }, angle: function () { return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x); }, getCoordinate: function (t) { return 0 === t ? this.p0 : this.p1; }, distancePerpendicular: function (t) { return ce.distancePointLinePerpendicular(t, this.p0, this.p1); }, minY: function () { return Math.min(this.p0.y, this.p1.y); }, midPoint: function () { return he.midPoint(this.p0, this.p1); }, projectionFactor: function (t) { if (t.equals(this.p0))
                            return 0; if (t.equals(this.p1))
                            return 1; var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, r = e * e + n * n; if (0 >= r)
                            return i.NaN; var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r; return s; }, closestPoints: function (t) { var e = this.intersection(t); if (null !== e)
                            return [e, e]; var n = new Array(2).fill(null), r = i.MAX_VALUE, s = null, o = this.closestPoint(t.p0); r = o.distance(t.p0), n[0] = o, n[1] = t.p0; var a = this.closestPoint(t.p1); s = a.distance(t.p1), r > s && (r = s, n[0] = a, n[1] = t.p1); var u = t.closestPoint(this.p0); s = u.distance(this.p0), r > s && (r = s, n[0] = this.p0, n[1] = u); var l = t.closestPoint(this.p1); return s = l.distance(this.p1), r > s && (r = s, n[0] = this.p1, n[1] = l), n; }, closestPoint: function (t) { var e = this.projectionFactor(t); if (e > 0 && 1 > e)
                            return this.project(t); var n = this.p0.distance(t), r = this.p1.distance(t); return r > n ? this.p0 : this.p1; }, maxX: function () { return Math.max(this.p0.x, this.p1.x); }, getLength: function () { return this.p0.distance(this.p1); }, compareTo: function (t) { var e = t, n = this.p0.compareTo(e.p0); return 0 !== n ? n : this.p1.compareTo(e.p1); }, reverse: function () { var t = this.p0; this.p0 = this.p1, this.p1 = t; }, equalsTopo: function (t) { return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0); }, lineIntersection: function (t) { try {
                            var e = F.intersection(this.p0, this.p1, t.p0, t.p1);
                            return e;
                        }
                        catch (t) {
                            if (!(t instanceof S))
                                throw t;
                        }
                        finally { } return null; }, maxY: function () { return Math.max(this.p0.y, this.p1.y); }, pointAlongOffset: function (t, e) { var n = this.p0.x + t * (this.p1.x - this.p0.x), r = this.p0.y + t * (this.p1.y - this.p0.y), i = this.p1.x - this.p0.x, s = this.p1.y - this.p0.y, o = Math.sqrt(i * i + s * s), a = 0, u = 0; if (0 !== e) {
                            if (0 >= o)
                                throw new IllegalStateException("Cannot compute offset from zero-length line segment");
                            a = e * i / o, u = e * s / o;
                        } var l = n - u, c = r + a, h = new f(l, c); return h; }, setCoordinates: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.setCoordinates(t.p0, t.p1);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
                        } }, segmentFraction: function (t) { var e = this.projectionFactor(t); return 0 > e ? e = 0 : (e > 1 || i.isNaN(e)) && (e = 1), e; }, toString: function () { return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")"; }, isHorizontal: function () { return this.p0.y === this.p1.y; }, distance: function () { if (arguments[0] instanceof he) {
                            var t = arguments[0];
                            return ce.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
                        } if (arguments[0] instanceof f) {
                            var e = arguments[0];
                            return ce.distancePointLine(e, this.p0, this.p1);
                        } }, pointAlong: function (t) { var e = new f; return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e; }, hashCode: function () { var t = java.lang.Double.doubleToLongBits(this.p0.x); t ^= 31 * java.lang.Double.doubleToLongBits(this.p0.y); var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = java.lang.Double.doubleToLongBits(this.p1.x); n ^= 31 * java.lang.Double.doubleToLongBits(this.p1.y); var r = Math.trunc(n) ^ Math.trunc(n >> 32); return e ^ r; }, interfaces_: function () { return [s, u]; }, getClass: function () { return he; } }), he.midPoint = function (t, e) { return new f((t.x + e.x) / 2, (t.y + e.y) / 2); }, he.serialVersionUID = 0x2d2172135f411c00, e(ge.prototype, { isIntersects: function () { return !this.isDisjoint(); }, isCovers: function () { var t = ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) || ge.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || ge.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || ge.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY]); return t && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE; }, isCoveredBy: function () { var t = ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) || ge.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || ge.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || ge.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY]); return t && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE; }, set: function () { if (1 === arguments.length)
                            for (var t = arguments[0], e = 0; e < t.length; e++) {
                                var n = Math.trunc(e / 3), r = e % 3;
                                this.matrix[n][r] = lt.toDimensionValue(t.charAt(e));
                            }
                        else if (3 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = arguments[2];
                            this.matrix[i][s] = o;
                        } }, isContains: function () { return ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE; }, setAtLeast: function () { if (1 === arguments.length)
                            for (var t = arguments[0], e = 0; e < t.length; e++) {
                                var n = Math.trunc(e / 3), r = e % 3;
                                this.setAtLeast(n, r, lt.toDimensionValue(t.charAt(e)));
                            }
                        else if (3 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = arguments[2];
                            this.matrix[i][s] < o && (this.matrix[i][s] = o);
                        } }, setAtLeastIfValid: function (t, e, n) { t >= 0 && e >= 0 && this.setAtLeast(t, e, n); }, isWithin: function () { return ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE; }, isTouches: function (t, e) { return t > e ? this.isTouches(e, t) : t === lt.A && e === lt.A || t === lt.L && e === lt.L || t === lt.L && e === lt.A || t === lt.P && e === lt.A || t === lt.P && e === lt.L ? this.matrix[L.INTERIOR][L.INTERIOR] === lt.FALSE && (ge.isTrue(this.matrix[L.INTERIOR][L.BOUNDARY]) || ge.isTrue(this.matrix[L.BOUNDARY][L.INTERIOR]) || ge.isTrue(this.matrix[L.BOUNDARY][L.BOUNDARY])) : !1; }, isOverlaps: function (t, e) { return t === lt.P && e === lt.P || t === lt.A && e === lt.A ? ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && ge.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) && ge.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : t === lt.L && e === lt.L ? 1 === this.matrix[L.INTERIOR][L.INTERIOR] && ge.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) && ge.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : !1; }, isEquals: function (t, e) { return t !== e ? !1 : ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && this.matrix[L.INTERIOR][L.EXTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.EXTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.EXTERIOR][L.BOUNDARY] === lt.FALSE; }, toString: function () { for (var t = new T("123456789"), e = 0; 3 > e; e++)
                            for (var n = 0; 3 > n; n++)
                                t.setCharAt(3 * e + n, lt.toDimensionSymbol(this.matrix[e][n])); return t.toString(); }, setAll: function (t) { for (var e = 0; 3 > e; e++)
                            for (var n = 0; 3 > n; n++)
                                this.matrix[e][n] = t; }, get: function (t, e) { return this.matrix[t][e]; }, transpose: function () { var t = this.matrix[1][0]; return this.matrix[1][0] = this.matrix[0][1], this.matrix[0][1] = t, t = this.matrix[2][0], this.matrix[2][0] = this.matrix[0][2], this.matrix[0][2] = t, t = this.matrix[2][1], this.matrix[2][1] = this.matrix[1][2], this.matrix[1][2] = t, this; }, matches: function (t) {
                            if (9 !== t.length)
                                throw new r("Should be length 9: " + t);
                            for (var e = 0; 3 > e; e++)
                                for (var n = 0; 3 > n; n++)
                                    if (!ge.matches(this.matrix[e][n], t.charAt(3 * e + n)))
                                        return !1;
                            return !0;
                        }, add: function (t) { for (var e = 0; 3 > e; e++)
                            for (var n = 0; 3 > n; n++)
                                this.setAtLeast(e, n, t.get(e, n)); }, isDisjoint: function () { return this.matrix[L.INTERIOR][L.INTERIOR] === lt.FALSE && this.matrix[L.INTERIOR][L.BOUNDARY] === lt.FALSE && this.matrix[L.BOUNDARY][L.INTERIOR] === lt.FALSE && this.matrix[L.BOUNDARY][L.BOUNDARY] === lt.FALSE; }, isCrosses: function (t, e) { return t === lt.P && e === lt.L || t === lt.P && e === lt.A || t === lt.L && e === lt.A ? ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && ge.isTrue(this.matrix[L.INTERIOR][L.EXTERIOR]) : t === lt.L && e === lt.P || t === lt.A && e === lt.P || t === lt.A && e === lt.L ? ge.isTrue(this.matrix[L.INTERIOR][L.INTERIOR]) && ge.isTrue(this.matrix[L.EXTERIOR][L.INTERIOR]) : t === lt.L && e === lt.L ? 0 === this.matrix[L.INTERIOR][L.INTERIOR] : !1; }, interfaces_: function () { return [o]; }, getClass: function () { return ge; } }), ge.matches = function () { if (Number.isInteger(arguments[0]) && "string" == typeof arguments[1]) {
                        var t = arguments[0], e = arguments[1];
                        return e === lt.SYM_DONTCARE ? !0 : e === lt.SYM_TRUE && (t >= 0 || t === lt.TRUE) ? !0 : e === lt.SYM_FALSE && t === lt.FALSE ? !0 : e === lt.SYM_P && t === lt.P ? !0 : e === lt.SYM_L && t === lt.L ? !0 : e === lt.SYM_A && t === lt.A;
                    } if ("string" == typeof arguments[0] && "string" == typeof arguments[1]) {
                        var n = arguments[0], r = arguments[1], i = new ge(n);
                        return i.matches(r);
                    } }, ge.isTrue = function (t) { return t >= 0 || t === lt.TRUE; };
                    var lo = Object.freeze({ Coordinate: f, CoordinateList: N, Envelope: C, LineSegment: he, GeometryFactory: re, Geometry: U, Point: Lt, LineString: wt, LinearRing: Pt, Polygon: bt, GeometryCollection: gt, MultiPoint: Tt, MultiLineString: ft, MultiPolygon: Ot, Dimension: lt, IntersectionMatrix: ge });
                    e(fe.prototype, { addPoint: function (t) { this.ptCount += 1, this.ptCentSum.x += t.x, this.ptCentSum.y += t.y; }, setBasePoint: function (t) { null === this.areaBasePt && (this.areaBasePt = t); }, addLineSegments: function (t) { for (var e = 0, n = 0; n < t.length - 1; n++) {
                            var r = t[n].distance(t[n + 1]);
                            if (0 !== r) {
                                e += r;
                                var i = (t[n].x + t[n + 1].x) / 2;
                                this.lineCentSum.x += r * i;
                                var s = (t[n].y + t[n + 1].y) / 2;
                                this.lineCentSum.y += r * s;
                            }
                        } this.totalLength += e, 0 === e && t.length > 0 && this.addPoint(t[0]); }, addHole: function (t) { for (var e = ce.isCCW(t), n = 0; n < t.length - 1; n++)
                            this.addTriangle(this.areaBasePt, t[n], t[n + 1], e); this.addLineSegments(t); }, getCentroid: function () { var t = new f; if (Math.abs(this.areasum2) > 0)
                            t.x = this.cg3.x / 3 / this.areasum2, t.y = this.cg3.y / 3 / this.areasum2;
                        else if (this.totalLength > 0)
                            t.x = this.lineCentSum.x / this.totalLength, t.y = this.lineCentSum.y / this.totalLength;
                        else {
                            if (!(this.ptCount > 0))
                                return null;
                            t.x = this.ptCentSum.x / this.ptCount, t.y = this.ptCentSum.y / this.ptCount;
                        } return t; }, addShell: function (t) { t.length > 0 && this.setBasePoint(t[0]); for (var e = !ce.isCCW(t), n = 0; n < t.length - 1; n++)
                            this.addTriangle(this.areaBasePt, t[n], t[n + 1], e); this.addLineSegments(t); }, addTriangle: function (t, e, n, r) { var i = r ? 1 : -1; fe.centroid3(t, e, n, this.triangleCent3); var s = fe.area2(t, e, n); this.cg3.x += i * s * this.triangleCent3.x, this.cg3.y += i * s * this.triangleCent3.y, this.areasum2 += i * s; }, add: function () { if (arguments[0] instanceof bt) {
                            var t = arguments[0];
                            this.addShell(t.getExteriorRing().getCoordinates());
                            for (var e = 0; e < t.getNumInteriorRing(); e++)
                                this.addHole(t.getInteriorRingN(e).getCoordinates());
                        }
                        else if (arguments[0] instanceof U) {
                            var n = arguments[0];
                            if (n.isEmpty())
                                return null;
                            if (n instanceof Lt)
                                this.addPoint(n.getCoordinate());
                            else if (n instanceof wt)
                                this.addLineSegments(n.getCoordinates());
                            else if (n instanceof bt) {
                                var r = n;
                                this.add(r);
                            }
                            else if (n instanceof gt)
                                for (var i = n, e = 0; e < i.getNumGeometries(); e++)
                                    this.add(i.getGeometryN(e));
                        } }, interfaces_: function () { return []; }, getClass: function () { return fe; } }), fe.area2 = function (t, e, n) { return (e.x - t.x) * (n.y - t.y) - (n.x - t.x) * (e.y - t.y); }, fe.centroid3 = function (t, e, n, r) { return r.x = t.x + e.x + n.x, r.y = t.y + e.y + n.y, null; }, fe.getCentroid = function (t) { var e = new fe(t); return e.getCentroid(); }, de.prototype = new Error, de.prototype.name = "EmptyStackException", pe.prototype = new y, pe.prototype.add = function (t) { return this.array_.push(t), !0; }, pe.prototype.get = function (t) { if (0 > t || t >= this.size())
                        throw new IndexOutOfBoundsException; return this.array_[t]; }, pe.prototype.push = function (t) { return this.array_.push(t), t; }, pe.prototype.pop = function (t) { if (0 === this.array_.length)
                        throw new de; return this.array_.pop(); }, pe.prototype.peek = function () { if (0 === this.array_.length)
                        throw new de; return this.array_[this.array_.length - 1]; }, pe.prototype.empty = function () { return 0 === this.array_.length; }, pe.prototype.isEmpty = function () { return this.empty(); }, pe.prototype.search = function (t) { return this.array_.indexOf(t); }, pe.prototype.size = function () { return this.array_.length; }, pe.prototype.toArray = function () { for (var t = [], e = 0, n = this.array_.length; n > e; e++)
                        t.push(this.array_[e]); return t; }, e(me.prototype, { filter: function (t) { this.treeSet.contains(t) || (this.list.add(t), this.treeSet.add(t)); }, getCoordinates: function () { var t = new Array(this.list.size()).fill(null); return this.list.toArray(t); }, interfaces_: function () { return [q]; }, getClass: function () { return me; } }), me.filterCoordinates = function (t) { for (var e = new me, n = 0; n < t.length; n++)
                        e.filter(t[n]); return e.getCoordinates(); }, e(ve.prototype, { preSort: function (t) { for (var e = null, n = 1; n < t.length; n++)
                            (t[n].y < t[0].y || t[n].y === t[0].y && t[n].x < t[0].x) && (e = t[0], t[0] = t[n], t[n] = e); return ut.sort(t, 1, t.length, new ye(t[0])), t; }, computeOctRing: function (t) { var e = this.computeOctPts(t), n = new N; return n.add(e, !1), n.size() < 3 ? null : (n.closeRing(), n.toCoordinateArray()); }, lineOrPolygon: function (t) { if (t = this.cleanRing(t), 3 === t.length)
                            return this.geomFactory.createLineString([t[0], t[1]]); var e = this.geomFactory.createLinearRing(t); return this.geomFactory.createPolygon(e, null); }, cleanRing: function (t) { g.equals(t[0], t[t.length - 1]); for (var e = new I, n = null, r = 0; r <= t.length - 2; r++) {
                            var i = t[r], s = t[r + 1];
                            i.equals(s) || null !== n && this.isBetween(n, i, s) || (e.add(i), n = i);
                        } e.add(t[t.length - 1]); var o = new Array(e.size()).fill(null); return e.toArray(o); }, isBetween: function (t, e, n) { if (0 !== ce.computeOrientation(t, e, n))
                            return !1; if (t.x !== n.x) {
                            if (t.x <= e.x && e.x <= n.x)
                                return !0;
                            if (n.x <= e.x && e.x <= t.x)
                                return !0;
                        } if (t.y !== n.y) {
                            if (t.y <= e.y && e.y <= n.y)
                                return !0;
                            if (n.y <= e.y && e.y <= t.y)
                                return !0;
                        } return !1; }, reduce: function (t) { var e = this.computeOctRing(t); if (null === e)
                            return t; for (var n = new at, r = 0; r < e.length; r++)
                            n.add(e[r]); for (var r = 0; r < t.length; r++)
                            ce.isPointInRing(t[r], e) || n.add(t[r]); var i = H.toCoordinateArray(n); return i.length < 3 ? this.padArray3(i) : i; }, getConvexHull: function () { if (0 === this.inputPts.length)
                            return this.geomFactory.createGeometryCollection(null); if (1 === this.inputPts.length)
                            return this.geomFactory.createPoint(this.inputPts[0]); if (2 === this.inputPts.length)
                            return this.geomFactory.createLineString(this.inputPts); var t = this.inputPts; this.inputPts.length > 50 && (t = this.reduce(this.inputPts)); var e = this.preSort(t), n = this.grahamScan(e), r = this.toCoordinateArray(n); return this.lineOrPolygon(r); }, padArray3: function (t) { for (var e = new Array(3).fill(null), n = 0; n < e.length; n++)
                            n < t.length ? e[n] = t[n] : e[n] = t[0]; return e; }, computeOctPts: function (t) { for (var e = new Array(8).fill(null), n = 0; n < e.length; n++)
                            e[n] = t[0]; for (var r = 1; r < t.length; r++)
                            t[r].x < e[0].x && (e[0] = t[r]), t[r].x - t[r].y < e[1].x - e[1].y && (e[1] = t[r]), t[r].y > e[2].y && (e[2] = t[r]), t[r].x + t[r].y > e[3].x + e[3].y && (e[3] = t[r]), t[r].x > e[4].x && (e[4] = t[r]), t[r].x - t[r].y > e[5].x - e[5].y && (e[5] = t[r]), t[r].y < e[6].y && (e[6] = t[r]), t[r].x + t[r].y < e[7].x + e[7].y && (e[7] = t[r]); return e; }, toCoordinateArray: function (t) { for (var e = new Array(t.size()).fill(null), n = 0; n < t.size(); n++) {
                            var r = t.get(n);
                            e[n] = r;
                        } return e; }, grahamScan: function (t) { var e = null, n = new pe; e = n.push(t[0]), e = n.push(t[1]), e = n.push(t[2]); for (var r = 3; r < t.length; r++) {
                            for (e = n.pop(); !n.empty() && ce.computeOrientation(n.peek(), e, t[r]) > 0;)
                                e = n.pop();
                            e = n.push(e), e = n.push(t[r]);
                        } return e = n.push(t[0]), n; }, interfaces_: function () { return []; }, getClass: function () { return ve; } }), ve.extractCoordinates = function (t) { var e = new me; return t.apply(e), e.getCoordinates(); }, e(ye.prototype, { compare: function (t, e) { var n = t, r = e; return ye.polarCompare(this.origin, n, r); }, interfaces_: function () { return [a]; }, getClass: function () { return ye; } }), ye.polarCompare = function (t, e, n) { var r = e.x - t.x, i = e.y - t.y, s = n.x - t.x, o = n.y - t.y, a = ce.computeOrientation(t, e, n); if (a === ce.COUNTERCLOCKWISE)
                        return 1; if (a === ce.CLOCKWISE)
                        return -1; var u = r * r + i * i, l = s * s + o * o; return l > u ? -1 : u > l ? 1 : 0; }, ve.RadialComparator = ye, e(xe.prototype, { transformPoint: function (t, e) { return this.factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t)); }, transformPolygon: function (t, e) { var n = !0, r = this.transformLinearRing(t.getExteriorRing(), t); null !== r && r instanceof Pt && !r.isEmpty() || (n = !1); for (var i = new I, s = 0; s < t.getNumInteriorRing(); s++) {
                            var o = this.transformLinearRing(t.getInteriorRingN(s), t);
                            null === o || o.isEmpty() || (o instanceof Pt || (n = !1), i.add(o));
                        } if (n)
                            return this.factory.createPolygon(r, i.toArray([])); var a = new I; return null !== r && a.add(r), a.addAll(i), this.factory.buildGeometry(a); }, createCoordinateSequence: function (t) { return this.factory.getCoordinateSequenceFactory().create(t); }, getInputGeometry: function () { return this.inputGeom; }, transformMultiLineString: function (t, e) { for (var n = new I, r = 0; r < t.getNumGeometries(); r++) {
                            var i = this.transformLineString(t.getGeometryN(r), t);
                            null !== i && (i.isEmpty() || n.add(i));
                        } return this.factory.buildGeometry(n); }, transformCoordinates: function (t, e) { return this.copy(t); }, transformLineString: function (t, e) { return this.factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t)); }, transformMultiPoint: function (t, e) { for (var n = new I, r = 0; r < t.getNumGeometries(); r++) {
                            var i = this.transformPoint(t.getGeometryN(r), t);
                            null !== i && (i.isEmpty() || n.add(i));
                        } return this.factory.buildGeometry(n); }, transformMultiPolygon: function (t, e) { for (var n = new I, r = 0; r < t.getNumGeometries(); r++) {
                            var i = this.transformPolygon(t.getGeometryN(r), t);
                            null !== i && (i.isEmpty() || n.add(i));
                        } return this.factory.buildGeometry(n); }, copy: function (t) { return t.copy(); }, transformGeometryCollection: function (t, e) { for (var n = new I, r = 0; r < t.getNumGeometries(); r++) {
                            var i = this.transform(t.getGeometryN(r));
                            null !== i && (this.pruneEmptyGeometry && i.isEmpty() || n.add(i));
                        } return this.preserveGeometryCollectionType ? this.factory.createGeometryCollection(re.toGeometryArray(n)) : this.factory.buildGeometry(n); }, transform: function (t) { if (this.inputGeom = t, this.factory = t.getFactory(), t instanceof Lt)
                            return this.transformPoint(t, null); if (t instanceof Tt)
                            return this.transformMultiPoint(t, null); if (t instanceof Pt)
                            return this.transformLinearRing(t, null); if (t instanceof wt)
                            return this.transformLineString(t, null); if (t instanceof ft)
                            return this.transformMultiLineString(t, null); if (t instanceof bt)
                            return this.transformPolygon(t, null); if (t instanceof Ot)
                            return this.transformMultiPolygon(t, null); if (t instanceof gt)
                            return this.transformGeometryCollection(t, null); throw new r("Unknown Geometry subtype: " + t.getClass().getName()); }, transformLinearRing: function (t, e) { var n = this.transformCoordinates(t.getCoordinateSequence(), t); if (null === n)
                            return this.factory.createLinearRing(null); var r = n.size(); return r > 0 && 4 > r && !this.preserveType ? this.factory.createLineString(n) : this.factory.createLinearRing(n); }, interfaces_: function () { return []; }, getClass: function () { return xe; } }), e(Ee.prototype, { snapVertices: function (t, e) { for (var n = this._isClosed ? t.size() - 1 : t.size(), r = 0; n > r; r++) {
                            var i = t.get(r), s = this.findSnapForVertex(i, e);
                            null !== s && (t.set(r, new f(s)), 0 === r && this._isClosed && t.set(t.size() - 1, new f(s)));
                        } }, findSnapForVertex: function (t, e) { for (var n = 0; n < e.length; n++) {
                            if (t.equals2D(e[n]))
                                return null;
                            if (t.distance(e[n]) < this.snapTolerance)
                                return e[n];
                        } return null; }, snapTo: function (t) { var e = new N(this.srcPts); this.snapVertices(e, t), this.snapSegments(e, t); var n = e.toCoordinateArray(); return n; }, snapSegments: function (t, e) { if (0 === e.length)
                            return null; var n = e.length; e[0].equals2D(e[e.length - 1]) && (n = e.length - 1); for (var r = 0; n > r; r++) {
                            var i = e[r], s = this.findSegmentIndexToSnap(i, t);
                            s >= 0 && t.add(s + 1, new f(i), !1);
                        } }, findSegmentIndexToSnap: function (t, e) { for (var n = i.MAX_VALUE, r = -1, s = 0; s < e.size() - 1; s++) {
                            if (this.seg.p0 = e.get(s), this.seg.p1 = e.get(s + 1), this.seg.p0.equals2D(t) || this.seg.p1.equals2D(t)) {
                                if (this.allowSnappingToSourceVertices)
                                    continue;
                                return -1;
                            }
                            var o = this.seg.distance(t);
                            o < this.snapTolerance && n > o && (n = o, r = s);
                        } return r; }, setAllowSnappingToSourceVertices: function (t) { this.allowSnappingToSourceVertices = t; }, interfaces_: function () { return []; }, getClass: function () { return Ee; } }), Ee.isClosed = function (t) { return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]); }, e(Ie.prototype, { snapTo: function (t, e) { var n = this.extractTargetCoordinates(t), r = new Ne(e, n); return r.transform(this.srcGeom); }, snapToSelf: function (t, e) { var n = this.extractTargetCoordinates(this.srcGeom), r = new Ne(t, n, !0), i = r.transform(this.srcGeom), s = i; return e && R(s, Rt) && (s = i.buffer(0)), s; }, computeSnapTolerance: function (t) { var e = this.computeMinimumSegmentLength(t), n = e / 10; return n; }, extractTargetCoordinates: function (t) { for (var e = new at, n = t.getCoordinates(), r = 0; r < n.length; r++)
                            e.add(n[r]); return e.toArray(new Array(0).fill(null)); }, computeMinimumSegmentLength: function (t) { for (var e = i.MAX_VALUE, n = 0; n < t.length - 1; n++) {
                            var r = t[n].distance(t[n + 1]);
                            e > r && (e = r);
                        } return e; }, interfaces_: function () { return []; }, getClass: function () { return Ie; } }), Ie.snap = function (t, e, n) { var r = new Array(2).fill(null), i = new Ie(t); r[0] = i.snapTo(e, n); var s = new Ie(e); return r[1] = s.snapTo(r[0], n), r; }, Ie.computeOverlaySnapTolerance = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = Ie.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
                        if (n.getType() === ee.FIXED) {
                            var r = 1 / n.getScale() * 2 / 1.415;
                            r > e && (e = r);
                        }
                        return e;
                    } if (2 === arguments.length) {
                        var i = arguments[0], s = arguments[1];
                        return Math.min(Ie.computeOverlaySnapTolerance(i), Ie.computeOverlaySnapTolerance(s));
                    } }, Ie.computeSizeBasedSnapTolerance = function (t) { var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), r = n * Ie.SNAP_PRECISION_FACTOR; return r; }, Ie.snapToSelf = function (t, e, n) { var r = new Ie(t); return r.snapToSelf(e, n); }, Ie.SNAP_PRECISION_FACTOR = 1e-9, c(Ne, xe), e(Ne.prototype, { snapLine: function (t, e) { var n = new Ee(t, this.snapTolerance); return n.setAllowSnappingToSourceVertices(this.isSelfSnap), n.snapTo(e); }, transformCoordinates: function (t, e) { var n = t.toCoordinateArray(), r = this.snapLine(n, this.snapPts); return this.factory.getCoordinateSequenceFactory().create(r); }, interfaces_: function () { return []; }, getClass: function () { return Ne; } }), e(Ce.prototype, { getCommon: function () { return i.longBitsToDouble(this.commonBits); }, add: function (t) { var e = i.doubleToLongBits(t); if (this.isFirst)
                            return this.commonBits = e, this.commonSignExp = Ce.signExpBits(this.commonBits), this.isFirst = !1, null; var n = Ce.signExpBits(e); return n !== this.commonSignExp ? (this.commonBits = 0, null) : (this.commonMantissaBitsCount = Ce.numCommonMostSigMantissaBits(this.commonBits, e), void (this.commonBits = Ce.zeroLowerBits(this.commonBits, 64 - (12 + this.commonMantissaBitsCount)))); }, toString: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = i.longBitsToDouble(t), n = Long.toBinaryString(t), r = "0000000000000000000000000000000000000000000000000000000000000000" + n, s = r.substring(r.length - 64), o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
                            return o;
                        } }, interfaces_: function () { return []; }, getClass: function () { return Ce; } }), Ce.getBit = function (t, e) { var n = 1 << e; return 0 !== (t & n) ? 1 : 0; }, Ce.signExpBits = function (t) { return t >> 52; }, Ce.zeroLowerBits = function (t, e) { var n = (1 << e) - 1, r = ~n, i = t & r; return i; }, Ce.numCommonMostSigMantissaBits = function (t, e) { for (var n = 0, r = 52; r >= 0; r--) {
                        if (Ce.getBit(t, r) !== Ce.getBit(e, r))
                            return n;
                        n++;
                    } return 52; }, e(we.prototype, { addCommonBits: function (t) { var e = new Le(this.commonCoord); t.apply(e), t.geometryChanged(); }, removeCommonBits: function (t) { if (0 === this.commonCoord.x && 0 === this.commonCoord.y)
                            return t; var e = new f(this.commonCoord); e.x = -e.x, e.y = -e.y; var n = new Le(e); return t.apply(n), t.geometryChanged(), t; }, getCommonCoordinate: function () { return this.commonCoord; }, add: function (t) { t.apply(this.ccFilter), this.commonCoord = this.ccFilter.getCommonCoordinate(); }, interfaces_: function () { return []; }, getClass: function () { return we; } }), e(Se.prototype, { filter: function (t) { this.commonBitsX.add(t.x), this.commonBitsY.add(t.y); }, getCommonCoordinate: function () { return new f(this.commonBitsX.getCommon(), this.commonBitsY.getCommon()); }, interfaces_: function () { return [q]; }, getClass: function () { return Se; } }), e(Le.prototype, { filter: function (t, e) { var n = t.getOrdinate(e, 0) + this.trans.x, r = t.getOrdinate(e, 1) + this.trans.y; t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r); }, isDone: function () { return !1; }, isGeometryChanged: function () { return !0; }, interfaces_: function () { return [ht]; }, getClass: function () { return Le; } }), we.CommonCoordinateFilter = Se, we.Translater = Le, e(Re.prototype, { next: function () { if (this.atStart)
                            return this.atStart = !1, Re.isAtomic(this.parent) && this.index++, this.parent; if (null !== this.subcollectionIterator) {
                            if (this.subcollectionIterator.hasNext())
                                return this.subcollectionIterator.next();
                            this.subcollectionIterator = null;
                        } if (this.index >= this.max)
                            throw new x; var t = this.parent.getGeometryN(this.index++); return t instanceof gt ? (this.subcollectionIterator = new Re(t), this.subcollectionIterator.next()) : t; }, remove: function () { throw new UnsupportedOperationException(this.getClass().getName()); }, hasNext: function () { if (this.atStart)
                            return !0; if (null !== this.subcollectionIterator) {
                            if (this.subcollectionIterator.hasNext())
                                return !0;
                            this.subcollectionIterator = null;
                        } return !(this.index >= this.max); }, interfaces_: function () { return [p]; }, getClass: function () { return Re; } }), Re.isAtomic = function (t) { return !(t instanceof gt); }, e(be.prototype, { locateInternal: function () { if (arguments[0] instanceof f && arguments[1] instanceof bt) {
                            var t = arguments[0], e = arguments[1];
                            if (e.isEmpty())
                                return L.EXTERIOR;
                            var n = e.getExteriorRing(), r = this.locateInPolygonRing(t, n);
                            if (r === L.EXTERIOR)
                                return L.EXTERIOR;
                            if (r === L.BOUNDARY)
                                return L.BOUNDARY;
                            for (var i = 0; i < e.getNumInteriorRing(); i++) {
                                var s = e.getInteriorRingN(i), o = this.locateInPolygonRing(t, s);
                                if (o === L.INTERIOR)
                                    return L.EXTERIOR;
                                if (o === L.BOUNDARY)
                                    return L.BOUNDARY;
                            }
                            return L.INTERIOR;
                        } if (arguments[0] instanceof f && arguments[1] instanceof wt) {
                            var a = arguments[0], u = arguments[1];
                            if (!u.getEnvelopeInternal().intersects(a))
                                return L.EXTERIOR;
                            var l = u.getCoordinates();
                            return u.isClosed() || !a.equals(l[0]) && !a.equals(l[l.length - 1]) ? ce.isOnLine(a, l) ? L.INTERIOR : L.EXTERIOR : L.BOUNDARY;
                        } if (arguments[0] instanceof f && arguments[1] instanceof Lt) {
                            var c = arguments[0], h = arguments[1], g = h.getCoordinate();
                            return g.equals2D(c) ? L.INTERIOR : L.EXTERIOR;
                        } }, locateInPolygonRing: function (t, e) { return e.getEnvelopeInternal().intersects(t) ? ce.locatePointInRing(t, e.getCoordinates()) : L.EXTERIOR; }, intersects: function (t, e) { return this.locate(t, e) !== L.EXTERIOR; }, updateLocationInfo: function (t) { t === L.INTERIOR && (this.isIn = !0), t === L.BOUNDARY && this.numBoundaries++; }, computeLocation: function (t, e) { if (e instanceof Lt && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof wt)
                            this.updateLocationInfo(this.locateInternal(t, e));
                        else if (e instanceof bt)
                            this.updateLocationInfo(this.locateInternal(t, e));
                        else if (e instanceof ft)
                            for (var n = e, r = 0; r < n.getNumGeometries(); r++) {
                                var i = n.getGeometryN(r);
                                this.updateLocationInfo(this.locateInternal(t, i));
                            }
                        else if (e instanceof Ot)
                            for (var s = e, r = 0; r < s.getNumGeometries(); r++) {
                                var o = s.getGeometryN(r);
                                this.updateLocationInfo(this.locateInternal(t, o));
                            }
                        else if (e instanceof gt)
                            for (var a = new Re(e); a.hasNext();) {
                                var u = a.next();
                                u !== e && this.computeLocation(t, u);
                            } }, locate: function (t, e) { return e.isEmpty() ? L.EXTERIOR : e instanceof wt ? this.locateInternal(t, e) : e instanceof bt ? this.locateInternal(t, e) : (this.isIn = !1, this.numBoundaries = 0, this.computeLocation(t, e), this.boundaryRule.isInBoundary(this.numBoundaries) ? L.BOUNDARY : this.numBoundaries > 0 || this.isIn ? L.INTERIOR : L.EXTERIOR); }, interfaces_: function () { return []; }, getClass: function () { return be; } }), e(Te.prototype, { interfaces_: function () { return []; }, getClass: function () { return Te; } }), Te.octant = function () { if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                        var t = arguments[0], e = arguments[1];
                        if (0 === t && 0 === e)
                            throw new r("Cannot compute the octant for point ( " + t + ", " + e + " )");
                        var n = Math.abs(t), i = Math.abs(e);
                        return t >= 0 ? e >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : e >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
                    } if (arguments[0] instanceof f && arguments[1] instanceof f) {
                        var s = arguments[0], o = arguments[1], a = o.x - s.x, u = o.y - s.y;
                        if (0 === a && 0 === u)
                            throw new r("Cannot compute the octant for two identical points " + s);
                        return Te.octant(a, u);
                    } }, e(Pe.prototype, { getCoordinates: function () { }, size: function () { }, getCoordinate: function (t) { }, isClosed: function () { }, setData: function (t) { }, getData: function () { }, interfaces_: function () { return []; }, getClass: function () { return Pe; } }), e(Oe.prototype, { getCoordinates: function () { return this.pts; }, size: function () { return this.pts.length; }, getCoordinate: function (t) { return this.pts[t]; }, isClosed: function () { return this.pts[0].equals(this.pts[this.pts.length - 1]); }, getSegmentOctant: function (t) { return t === this.pts.length - 1 ? -1 : Te.octant(this.getCoordinate(t), this.getCoordinate(t + 1)); }, setData: function (t) { this.data = t; }, getData: function () { return this.data; }, toString: function () { return se.toLineString(new Gt(this.pts)); }, interfaces_: function () { return [Pe]; }, getClass: function () { return Oe; } }), e(Me.prototype, { getBounds: function () { }, interfaces_: function () { return []; }, getClass: function () { return Me; } }), e(_e.prototype, { getItem: function () { return this.item; }, getBounds: function () { return this.bounds; }, interfaces_: function () { return [Me, u]; }, getClass: function () { return _e; } }), e(Ae.prototype, { poll: function () { if (this.isEmpty())
                            return null; var t = this.items.get(1); return this.items.set(1, this.items.get(this._size)), this._size -= 1, this.reorder(1), t; }, size: function () { return this._size; }, reorder: function (t) { for (var e = null, n = this.items.get(t); 2 * t <= this._size && (e = 2 * t, e !== this._size && this.items.get(e + 1).compareTo(this.items.get(e)) < 0 && e++, this.items.get(e).compareTo(n) < 0); t = e)
                            this.items.set(t, this.items.get(e)); this.items.set(t, n); }, clear: function () { this._size = 0, this.items.clear(); }, isEmpty: function () { return 0 === this._size; }, add: function (t) { this.items.add(null), this._size += 1; var e = this._size; for (this.items.set(0, t); t.compareTo(this.items.get(Math.trunc(e / 2))) < 0; e /= 2)
                            this.items.set(e, this.items.get(Math.trunc(e / 2))); this.items.set(e, t); }, interfaces_: function () { return []; }, getClass: function () { return Ae; } }), e(De.prototype, { visitItem: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return De; } }), e(Fe.prototype, { insert: function (t, e) { }, remove: function (t, e) { }, query: function () { 1 === arguments.length ? arguments[0] : 2 === arguments.length && (arguments[0], arguments[1]); }, interfaces_: function () { return []; }, getClass: function () { return Fe; } }), e(Ge.prototype, { getLevel: function () { return this.level; }, size: function () { return this.childBoundables.size(); }, getChildBoundables: function () { return this.childBoundables; }, addChildBoundable: function (t) { g.isTrue(null === this.bounds), this.childBoundables.add(t); }, isEmpty: function () { return this.childBoundables.isEmpty(); }, getBounds: function () { return null === this.bounds && (this.bounds = this.computeBounds()), this.bounds; }, interfaces_: function () { return [Me, u]; }, getClass: function () { return Ge; } }), Ge.serialVersionUID = 0x5a1e55ec41369800;
                    var co = { reverseOrder: function () { return { compare: function (t, e) { return e.compareTo(t); } }; }, min: function (t) { return co.sort(t), t.get(0); }, sort: function (t, e) { var n = t.toArray(); e ? ut.sort(n, e) : ut.sort(n); for (var r = t.iterator(), i = 0, s = n.length; s > i; i++)
                            r.next(), r.set(n[i]); }, singletonList: function (t) { var e = new I; return e.add(t), e; } };
                    e(ke.prototype, { expandToQueue: function (t, e) { var n = ke.isComposite(this.boundable1), i = ke.isComposite(this.boundable2); if (n && i)
                            return ke.area(this.boundable1) > ke.area(this.boundable2) ? (this.expand(this.boundable1, this.boundable2, t, e), null) : (this.expand(this.boundable2, this.boundable1, t, e), null); if (n)
                            return this.expand(this.boundable1, this.boundable2, t, e), null; if (i)
                            return this.expand(this.boundable2, this.boundable1, t, e), null; throw new r("neither boundable is composite"); }, isLeaves: function () { return !(ke.isComposite(this.boundable1) || ke.isComposite(this.boundable2)); }, compareTo: function (t) { var e = t; return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0; }, expand: function (t, e, n, r) { for (var i = t.getChildBoundables(), s = i.iterator(); s.hasNext();) {
                            var o = s.next(), a = new ke(o, e, this.itemDistance);
                            a.getDistance() < r && n.add(a);
                        } }, getBoundable: function (t) { return 0 === t ? this.boundable1 : this.boundable2; }, getDistance: function () { return this._distance; }, distance: function () { return this.isLeaves() ? this.itemDistance.distance(this.boundable1, this.boundable2) : this.boundable1.getBounds().distance(this.boundable2.getBounds()); }, interfaces_: function () { return [s]; }, getClass: function () { return ke; } }), ke.area = function (t) { return t.getBounds().getArea(); }, ke.isComposite = function (t) { return t instanceof Ge; }, e(Ue.prototype, { getNodeCapacity: function () { return this.nodeCapacity; }, lastNode: function (t) { return t.get(t.size() - 1); }, size: function Go() { if (0 === arguments.length)
                            return this.isEmpty() ? 0 : (this.build(), this.size(this.root)); if (1 === arguments.length) {
                            for (var t = arguments[0], Go = 0, e = t.getChildBoundables().iterator(); e.hasNext();) {
                                var n = e.next();
                                n instanceof Ge ? Go += this.size(n) : n instanceof _e && (Go += 1);
                            }
                            return Go;
                        } }, removeItem: function (t, e) { for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext();) {
                            var i = r.next();
                            i instanceof _e && i.getItem() === e && (n = i);
                        } return null !== n ? (t.getChildBoundables().remove(n), !0) : !1; }, itemsTree: function () { if (0 === arguments.length) {
                            this.build();
                            var t = this.itemsTree(this.root);
                            return null === t ? new I : t;
                        } if (1 === arguments.length) {
                            for (var e = arguments[0], n = new I, r = e.getChildBoundables().iterator(); r.hasNext();) {
                                var i = r.next();
                                if (i instanceof Ge) {
                                    var s = this.itemsTree(i);
                                    null !== s && n.add(s);
                                }
                                else
                                    i instanceof _e ? n.add(i.getItem()) : g.shouldNeverReachHere();
                            }
                            return n.size() <= 0 ? null : n;
                        } }, insert: function (t, e) { g.isTrue(!this.built, "Cannot insert items into an STR packed R-tree after it has been built."), this.itemBoundables.add(new _e(t, e)); }, boundablesAtLevel: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = new I;
                            return this.boundablesAtLevel(t, this.root, e), e;
                        } if (3 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = arguments[2];
                            if (g.isTrue(n > -2), r.getLevel() === n)
                                return i.add(r), null;
                            for (var s = r.getChildBoundables().iterator(); s.hasNext();) {
                                var o = s.next();
                                o instanceof Ge ? this.boundablesAtLevel(n, o, i) : (g.isTrue(o instanceof _e), -1 === n && i.add(o));
                            }
                            return null;
                        } }, query: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.build();
                            var e = new I;
                            return this.isEmpty() ? e : (this.getIntersectsOp().intersects(this.root.getBounds(), t) && this.query(t, this.root, e), e);
                        } if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            if (this.build(), this.isEmpty())
                                return null;
                            this.getIntersectsOp().intersects(this.root.getBounds(), n) && this.query(n, this.root, r);
                        }
                        else if (3 === arguments.length)
                            if (R(arguments[2], De) && arguments[0] instanceof Object && arguments[1] instanceof Ge)
                                for (var i = arguments[0], s = arguments[1], o = arguments[2], a = s.getChildBoundables(), u = 0; u < a.size(); u++) {
                                    var l = a.get(u);
                                    this.getIntersectsOp().intersects(l.getBounds(), i) && (l instanceof Ge ? this.query(i, l, o) : l instanceof _e ? o.visitItem(l.getItem()) : g.shouldNeverReachHere());
                                }
                            else if (R(arguments[2], y) && arguments[0] instanceof Object && arguments[1] instanceof Ge)
                                for (var c = arguments[0], h = arguments[1], f = arguments[2], a = h.getChildBoundables(), u = 0; u < a.size(); u++) {
                                    var l = a.get(u);
                                    this.getIntersectsOp().intersects(l.getBounds(), c) && (l instanceof Ge ? this.query(c, l, f) : l instanceof _e ? f.add(l.getItem()) : g.shouldNeverReachHere());
                                } }, build: function () { return this.built ? null : (this.root = this.itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this.itemBoundables, -1), this.itemBoundables = null, void (this.built = !0)); }, getRoot: function () { return this.build(), this.root; }, remove: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.build(), this.getIntersectsOp().intersects(this.root.getBounds(), t) ? this.remove(t, this.root, e) : !1;
                        } if (3 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = arguments[2], s = this.removeItem(r, i);
                            if (s)
                                return !0;
                            for (var o = null, a = r.getChildBoundables().iterator(); a.hasNext();) {
                                var u = a.next();
                                if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof Ge && (s = this.remove(n, u, i))) {
                                    o = u;
                                    break;
                                }
                            }
                            return null !== o && o.getChildBoundables().isEmpty() && r.getChildBoundables().remove(o), s;
                        } }, createHigherLevels: function (t, e) { g.isTrue(!t.isEmpty()); var n = this.createParentBoundables(t, e + 1); return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1); }, depth: function () { if (0 === arguments.length)
                            return this.isEmpty() ? 0 : (this.build(), this.depth(this.root)); if (1 === arguments.length) {
                            for (var t = arguments[0], e = 0, n = t.getChildBoundables().iterator(); n.hasNext();) {
                                var r = n.next();
                                if (r instanceof Ge) {
                                    var i = this.depth(r);
                                    i > e && (e = i);
                                }
                            }
                            return e + 1;
                        } }, createParentBoundables: function (t, e) { g.isTrue(!t.isEmpty()); var n = new I; n.add(this.createNode(e)); var r = new I(t); co.sort(r, this.getComparator()); for (var i = r.iterator(); i.hasNext();) {
                            var s = i.next();
                            this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(s);
                        } return n; }, isEmpty: function () { return this.built ? this.root.isEmpty() : this.itemBoundables.isEmpty(); }, interfaces_: function () { return [u]; }, getClass: function () { return Ue; } }), Ue.compareDoubles = function (t, e) { return t > e ? 1 : e > t ? -1 : 0; }, Ue.IntersectsOp = qe, Ue.serialVersionUID = -0x35ef64c82d4c5400, Ue.DEFAULT_NODE_CAPACITY = 10, e(Be.prototype, { distance: function (t, e) { }, interfaces_: function () { return []; }, getClass: function () { return Be; } }), c(ze, Ue), e(ze.prototype, { createParentBoundablesFromVerticalSlices: function (t, e) { g.isTrue(t.length > 0); for (var n = new I, r = 0; r < t.length; r++)
                            n.addAll(this.createParentBoundablesFromVerticalSlice(t[r], e)); return n; }, createNode: function (t) { return new Ve(t); }, size: function () { return 0 === arguments.length ? Ue.prototype.size.call(this) : Ue.prototype.size.apply(this, arguments); }, insert: function () { if (2 !== arguments.length)
                            return Ue.prototype.insert.apply(this, arguments); var t = arguments[0], e = arguments[1]; return t.isNull() ? null : void Ue.prototype.insert.call(this, t, e); }, getIntersectsOp: function () { return ze.intersectsOp; }, verticalSlices: function (t, e) { for (var n = Math.trunc(Math.ceil(t.size() / e)), r = new Array(e).fill(null), i = t.iterator(), s = 0; e > s; s++) {
                            r[s] = new I;
                            for (var o = 0; i.hasNext() && n > o;) {
                                var a = i.next();
                                r[s].add(a), o++;
                            }
                        } return r; }, query: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return Ue.prototype.query.call(this, t);
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            Ue.prototype.query.call(this, e, n);
                        }
                        else if (3 === arguments.length)
                            if (R(arguments[2], De) && arguments[0] instanceof Object && arguments[1] instanceof Ge) {
                                var r = arguments[0], i = arguments[1], s = arguments[2];
                                Ue.prototype.query.call(this, r, i, s);
                            }
                            else if (R(arguments[2], y) && arguments[0] instanceof Object && arguments[1] instanceof Ge) {
                                var o = arguments[0], a = arguments[1], u = arguments[2];
                                Ue.prototype.query.call(this, o, a, u);
                            } }, getComparator: function () { return ze.yComparator; }, createParentBoundablesFromVerticalSlice: function (t, e) { return Ue.prototype.createParentBoundables.call(this, t, e); }, remove: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return Ue.prototype.remove.call(this, t, e);
                        } return Ue.prototype.remove.apply(this, arguments); }, depth: function () { return 0 === arguments.length ? Ue.prototype.depth.call(this) : Ue.prototype.depth.apply(this, arguments); }, createParentBoundables: function (t, e) { g.isTrue(!t.isEmpty()); var n = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())), r = new I(t); co.sort(r, ze.xComparator); var i = this.verticalSlices(r, Math.trunc(Math.ceil(Math.sqrt(n)))); return this.createParentBoundablesFromVerticalSlices(i, e); }, nearestNeighbour: function () {
                            if (1 === arguments.length) {
                                if (R(arguments[0], Be)) {
                                    var t = arguments[0], e = new ke(this.getRoot(), this.getRoot(), t);
                                    return this.nearestNeighbour(e);
                                }
                                if (arguments[0] instanceof ke) {
                                    var n = arguments[0];
                                    return this.nearestNeighbour(n, i.POSITIVE_INFINITY);
                                }
                            }
                            else if (2 === arguments.length) {
                                if (arguments[0] instanceof ze && R(arguments[1], Be)) {
                                    var r = arguments[0], s = arguments[1], e = new ke(this.getRoot(), r.getRoot(), s);
                                    return this.nearestNeighbour(e);
                                }
                                if (arguments[0] instanceof ke && "number" == typeof arguments[1]) {
                                    var o = arguments[0], a = arguments[1], u = a, l = null, c = new Ae;
                                    for (c.add(o); !c.isEmpty() && u > 0;) {
                                        var h = c.poll(), g = h.getDistance();
                                        if (g >= u)
                                            break;
                                        h.isLeaves() ? (u = g, l = h) : h.expandToQueue(c, u);
                                    }
                                    return [l.getBoundable(0).getItem(), l.getBoundable(1).getItem()];
                                }
                            }
                            else if (3 === arguments.length) {
                                var f = arguments[0], d = arguments[1], p = arguments[2], m = new _e(f, d), e = new ke(this.getRoot(), m, p);
                                return this.nearestNeighbour(e)[0];
                            }
                        }, interfaces_: function () { return [Fe, u]; }, getClass: function () { return ze; } }), ze.centreX = function (t) { return ze.avg(t.getMinX(), t.getMaxX()); }, ze.avg = function (t, e) { return (t + e) / 2; }, ze.centreY = function (t) { return ze.avg(t.getMinY(), t.getMaxY()); }, c(Ve, Ge), e(Ve.prototype, { computeBounds: function () { for (var t = null, e = this.getChildBoundables().iterator(); e.hasNext();) {
                            var n = e.next();
                            null === t ? t = new C(n.getBounds()) : t.expandToInclude(n.getBounds());
                        } return t; }, interfaces_: function () { return []; }, getClass: function () { return Ve; } }), ze.STRtreeNode = Ve, ze.serialVersionUID = 0x39920f7d5f261e0, ze.xComparator = { interfaces_: function () { return [a]; }, compare: function (t, e) { return Ue.compareDoubles(ze.centreX(t.getBounds()), ze.centreX(e.getBounds())); } }, ze.yComparator = { interfaces_: function () { return [a]; }, compare: function (t, e) { return Ue.compareDoubles(ze.centreY(t.getBounds()), ze.centreY(e.getBounds())); } }, ze.intersectsOp = { interfaces_: function () { return [IntersectsOp]; }, intersects: function (t, e) { return t.intersects(e); } }, ze.DEFAULT_NODE_CAPACITY = 10, e(Ye.prototype, { interfaces_: function () { return []; }, getClass: function () { return Ye; } }), Ye.relativeSign = function (t, e) { return e > t ? -1 : t > e ? 1 : 0; }, Ye.compare = function (t, e, n) { if (e.equals2D(n))
                        return 0; var r = Ye.relativeSign(e.x, n.x), i = Ye.relativeSign(e.y, n.y); switch (t) {
                        case 0: return Ye.compareValue(r, i);
                        case 1: return Ye.compareValue(i, r);
                        case 2: return Ye.compareValue(i, -r);
                        case 3: return Ye.compareValue(-r, i);
                        case 4: return Ye.compareValue(-r, -i);
                        case 5: return Ye.compareValue(-i, -r);
                        case 6: return Ye.compareValue(-i, r);
                        case 7: return Ye.compareValue(r, -i);
                    } return g.shouldNeverReachHere("invalid octant value"), 0; }, Ye.compareValue = function (t, e) { return 0 > t ? -1 : t > 0 ? 1 : 0 > e ? -1 : e > 0 ? 1 : 0; }, e(Xe.prototype, { getCoordinate: function () { return this.coord; }, print: function (t) { t.print(this.coord), t.print(" seg # = " + this.segmentIndex); }, compareTo: function (t) { var e = t; return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : Ye.compare(this.segmentOctant, this.coord, e.coord); }, isEndPoint: function (t) { return 0 !== this.segmentIndex || this._isInterior ? this.segmentIndex === t : !0; }, isInterior: function () { return this._isInterior; }, interfaces_: function () { return [s]; }, getClass: function () { return Xe; } }), e(He.prototype, { getSplitCoordinates: function () { var t = new N; this.addEndpoints(); for (var e = this.iterator(), n = e.next(); e.hasNext();) {
                            var r = e.next();
                            this.addEdgeCoordinates(n, r, t), n = r;
                        } return t.toCoordinateArray(); }, addCollapsedNodes: function () { var t = new I; this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t); for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next().intValue();
                            this.add(this.edge.getCoordinate(n), n);
                        } }, print: function (t) { t.println("Intersections:"); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.print(t);
                        } }, findCollapsesFromExistingVertices: function (t) { for (var e = 0; e < this.edge.size() - 2; e++) {
                            var n = this.edge.getCoordinate(e), r = (this.edge.getCoordinate(e + 1), this.edge.getCoordinate(e + 2));
                            n.equals2D(r) && t.add(new P(e + 1));
                        } }, addEdgeCoordinates: function (t, e, n) { var r = e.segmentIndex - t.segmentIndex + 2, i = this.edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(i); s || r--, n.add(new f(t.coord), !1); for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++)
                            n.add(this.edge.getCoordinate(o)); s && n.add(new f(e.coord)); }, iterator: function () { return this.nodeMap.values().iterator(); }, addSplitEdges: function (t) { this.addEndpoints(), this.addCollapsedNodes(); for (var e = this.iterator(), n = e.next(); e.hasNext();) {
                            var r = e.next(), i = this.createSplitEdge(n, r);
                            t.add(i), n = r;
                        } }, findCollapseIndex: function (t, e, n) { if (!t.coord.equals2D(e.coord))
                            return !1; var r = e.segmentIndex - t.segmentIndex; return e.isInterior() || r--, 1 === r ? (n[0] = t.segmentIndex + 1, !0) : !1; }, findCollapsesFromInsertedNodes: function (t) { for (var e = new Array(1).fill(null), n = this.iterator(), r = n.next(); n.hasNext();) {
                            var i = n.next(), s = this.findCollapseIndex(r, i, e);
                            s && t.add(new P(e[0])), r = i;
                        } }, getEdge: function () { return this.edge; }, addEndpoints: function () { var t = this.edge.size() - 1; this.add(this.edge.getCoordinate(0), 0), this.add(this.edge.getCoordinate(t), t); }, createSplitEdge: function (t, e) { var n = e.segmentIndex - t.segmentIndex + 2, r = this.edge.getCoordinate(e.segmentIndex), i = e.isInterior() || !e.coord.equals2D(r); i || n--; var s = new Array(n).fill(null), o = 0; s[o++] = new f(t.coord); for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
                            s[o++] = this.edge.getCoordinate(a); return i && (s[o] = new f(e.coord)), new Ze(s, this.edge.getData()); }, add: function (t, e) { var n = new Xe(this.edge, t, e, this.edge.getSegmentOctant(e)), r = this.nodeMap.get(n); return null !== r ? (g.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this.nodeMap.put(n, n), n); }, checkSplitEdgesCorrectness: function (t) { var e = this.edge.getCoordinates(), n = t.get(0), r = n.getCoordinate(0); if (!r.equals2D(e[0]))
                            throw new l("bad split edge start point at " + r); var i = t.get(t.size() - 1), s = i.getCoordinates(), o = s[s.length - 1]; if (!o.equals2D(e[e.length - 1]))
                            throw new l("bad split edge end point at " + o); }, interfaces_: function () { return []; }, getClass: function () { return He; } }), e(We.prototype, { next: function () { return null === this.currNode ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : null === this.nextNode ? null : this.nextNode.segmentIndex === this.currNode.segmentIndex ? (this.currNode = this.nextNode, this.currSegIndex = this.currNode.segmentIndex, this.readNextNode(), this.currNode) : (this.nextNode.segmentIndex > this.currNode.segmentIndex, null); }, remove: function () { throw new UnsupportedOperationException(this.getClass().getName()); }, hasNext: function () { return null !== this.nextNode; }, readNextNode: function () { this.nodeIt.hasNext() ? this.nextNode = this.nodeIt.next() : this.nextNode = null; }, interfaces_: function () { return [p]; }, getClass: function () { return We; } }), e(je.prototype, { addIntersection: function (t, e) { }, interfaces_: function () { return [Pe]; }, getClass: function () { return je; } }), e(Ze.prototype, { getCoordinates: function () { return this.pts; }, size: function () { return this.pts.length; }, getCoordinate: function (t) { return this.pts[t]; }, isClosed: function () { return this.pts[0].equals(this.pts[this.pts.length - 1]); }, getSegmentOctant: function (t) { return t === this.pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1)); }, setData: function (t) { this.data = t; }, safeOctant: function (t, e) { return t.equals2D(e) ? 0 : Te.octant(t, e); }, getData: function () { return this.data; }, addIntersection: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            this.addIntersectionNode(t, e);
                        }
                        else if (4 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = (arguments[2], arguments[3]), s = new f(n.getIntersection(i));
                            this.addIntersection(s, r);
                        } }, toString: function () { return se.toLineString(new Gt(this.pts)); }, getNodeList: function () { return this.nodeList; }, addIntersectionNode: function (t, e) { var n = e, r = n + 1; if (r < this.pts.length) {
                            var i = this.pts[r];
                            t.equals2D(i) && (n = r);
                        } var s = this.nodeList.add(t, n); return s; }, addIntersections: function (t, e, n) { for (var r = 0; r < t.getIntersectionNum(); r++)
                            this.addIntersection(t, e, n, r); }, interfaces_: function () { return [je]; }, getClass: function () { return Ze; } }), Ze.getNodedSubstrings = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = new I;
                        return Ze.getNodedSubstrings(t, e), e;
                    } if (2 === arguments.length)
                        for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) {
                            var s = i.next();
                            s.getNodeList().addSplitEdges(r);
                        } }, e(Je.prototype, { overlap: function () { if (2 === arguments.length)
                            arguments[0], arguments[1];
                        else if (4 === arguments.length) {
                            var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
                            t.getLineSegment(e, this.overlapSeg1), n.getLineSegment(r, this.overlapSeg2), this.overlap(this.overlapSeg1, this.overlapSeg2);
                        } }, interfaces_: function () { return []; }, getClass: function () { return Je; } }), e(Ke.prototype, { getLineSegment: function (t, e) { e.p0 = this.pts[t], e.p1 = this.pts[t + 1]; }, computeSelect: function (t, e, n, r) { var i = this.pts[e], s = this.pts[n]; if (r.tempEnv1.init(i, s), n - e === 1)
                            return r.select(this, e), null; if (!t.intersects(r.tempEnv1))
                            return null; var o = Math.trunc((e + n) / 2); o > e && this.computeSelect(t, e, o, r), n > o && this.computeSelect(t, o, n, r); }, getCoordinates: function () { for (var t = new Array(this.end - this.start + 1).fill(null), e = 0, n = this.start; n <= this.end; n++)
                            t[e++] = this.pts[n]; return t; }, computeOverlaps: function (t, e) { this.computeOverlapsInternal(this.start, this.end, t, t.start, t.end, e); }, setId: function (t) { this.id = t; }, select: function (t, e) { this.computeSelect(t, this.start, this.end, e); }, getEnvelope: function () { if (null === this.env) {
                            var t = this.pts[this.start], e = this.pts[this.end];
                            this.env = new C(t, e);
                        } return this.env; }, getEndIndex: function () { return this.end; }, getStartIndex: function () { return this.start; }, getContext: function () { return this.context; }, getId: function () { return this.id; }, computeOverlapsInternal: function (t, e, n, r, i, s) { var o = this.pts[t], a = this.pts[e], u = n.pts[r], l = n.pts[i]; if (e - t === 1 && i - r === 1)
                            return s.overlap(this, t, n, r), null; if (s.tempEnv1.init(o, a), s.tempEnv2.init(u, l), !s.tempEnv1.intersects(s.tempEnv2))
                            return null; var c = Math.trunc((t + e) / 2), h = Math.trunc((r + i) / 2); c > t && (h > r && this.computeOverlapsInternal(t, c, n, r, h, s), i > h && this.computeOverlapsInternal(t, c, n, h, i, s)), e > c && (h > r && this.computeOverlapsInternal(c, e, n, r, h, s), i > h && this.computeOverlapsInternal(c, e, n, h, i, s)); }, interfaces_: function () { return []; }, getClass: function () { return Ke; } }), e(Qe.prototype, { interfaces_: function () { return []; }, getClass: function () { return Qe; } }), Qe.isNorthern = function (t) { return t === Qe.NE || t === Qe.NW; }, Qe.isOpposite = function (t, e) { if (t === e)
                        return !1; var n = (t - e + 4) % 4; return 2 === n; }, Qe.commonHalfPlane = function (t, e) { if (t === e)
                        return t; var n = (t - e + 4) % 4; if (2 === n)
                        return -1; var r = e > t ? t : e, i = t > e ? t : e; return 0 === r && 3 === i ? 3 : r; }, Qe.isInHalfPlane = function (t, e) { return e === Qe.SE ? t === Qe.SE || t === Qe.SW : t === e || t === e + 1; }, Qe.quadrant = function () { if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
                        var t = arguments[0], e = arguments[1];
                        if (0 === t && 0 === e)
                            throw new r("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
                        return t >= 0 ? e >= 0 ? Qe.NE : Qe.SE : e >= 0 ? Qe.NW : Qe.SW;
                    } if (arguments[0] instanceof f && arguments[1] instanceof f) {
                        var n = arguments[0], i = arguments[1];
                        if (i.x === n.x && i.y === n.y)
                            throw new r("Cannot compute the quadrant for two identical points " + n);
                        return i.x >= n.x ? i.y >= n.y ? Qe.NE : Qe.SE : i.y >= n.y ? Qe.NW : Qe.SW;
                    } }, Qe.NE = 0, Qe.NW = 1, Qe.SW = 2, Qe.SE = 3, e($e.prototype, { interfaces_: function () { return []; }, getClass: function () { return $e; } }), $e.getChainStartIndices = function (t) { var e = 0, n = new I; n.add(new P(e)); do {
                        var r = $e.findChainEnd(t, e);
                        n.add(new P(r)), e = r;
                    } while (e < t.length - 1); var i = $e.toIntArray(n); return i; }, $e.findChainEnd = function (t, e) { for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);)
                        n++; if (n >= t.length - 1)
                        return t.length - 1; for (var r = Qe.quadrant(t[n], t[n + 1]), i = e + 1; i < t.length;) {
                        if (!t[i - 1].equals2D(t[i])) {
                            var s = Qe.quadrant(t[i - 1], t[i]);
                            if (s !== r)
                                break;
                        }
                        i++;
                    } return i - 1; }, $e.getChains = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return $e.getChains(t, null);
                    } if (2 === arguments.length) {
                        for (var e = arguments[0], n = arguments[1], r = new I, i = $e.getChainStartIndices(e), s = 0; s < i.length - 1; s++) {
                            var o = new Ke(e, i[s], i[s + 1], n);
                            r.add(o);
                        }
                        return r;
                    } }, $e.toIntArray = function (t) { for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
                        e[n] = t.get(n).intValue(); return e; }, e(tn.prototype, { computeNodes: function (t) { }, getNodedSubstrings: function () { }, interfaces_: function () { return []; }, getClass: function () { return tn; } }), e(en.prototype, { setSegmentIntersector: function (t) { this.segInt = t; }, interfaces_: function () { return [tn]; }, getClass: function () { return en; } }), c(nn, en), e(nn.prototype, { getMonotoneChains: function () { return this.monoChains; }, getNodedSubstrings: function () { return Ze.getNodedSubstrings(this.nodedSegStrings); }, getIndex: function () { return this.index; }, add: function (t) { for (var e = $e.getChains(t.getCoordinates(), t), n = e.iterator(); n.hasNext();) {
                            var r = n.next();
                            r.setId(this.idCounter++), this.index.insert(r.getEnvelope(), r), this.monoChains.add(r);
                        } }, computeNodes: function (t) { this.nodedSegStrings = t; for (var e = t.iterator(); e.hasNext();)
                            this.add(e.next()); this.intersectChains(); }, intersectChains: function () { for (var t = new rn(this.segInt), e = this.monoChains.iterator(); e.hasNext();)
                            for (var n = e.next(), r = this.index.query(n.getEnvelope()), i = r.iterator(); i.hasNext();) {
                                var s = i.next();
                                if (s.getId() > n.getId() && (n.computeOverlaps(s, t), this.nOverlaps++), this.segInt.isDone())
                                    return null;
                            } }, interfaces_: function () { return []; }, getClass: function () { return nn; } }), c(rn, Je), e(rn.prototype, { overlap: function () { if (4 !== arguments.length)
                            return Je.prototype.overlap.apply(this, arguments); var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3], i = t.getContext(), s = n.getContext(); this.si.processIntersections(i, e, s, r); }, interfaces_: function () { return []; }, getClass: function () { return rn; } }), nn.SegmentOverlapAction = rn, c(sn, l), e(sn.prototype, { getCoordinate: function () { return this.pt; }, interfaces_: function () { return []; }, getClass: function () { return sn; } }), sn.msgWithCoord = function (t, e) { return null !== e ? t + " [ " + e + " ]" : t; }, e(on.prototype, { processIntersections: function (t, e, n, r) { }, isDone: function () { }, interfaces_: function () { return []; }, getClass: function () { return on; } }), e(an.prototype, { getInteriorIntersection: function () { return this.interiorIntersection; }, setCheckEndSegmentsOnly: function (t) { this.isCheckEndSegmentsOnly = t; }, getIntersectionSegments: function () { return this.intSegments; }, count: function () { return this.intersectionCount; }, getIntersections: function () { return this.intersections; }, setFindAllIntersections: function (t) { this.findAllIntersections = t; }, setKeepIntersections: function (t) { this.keepIntersections = t; }, processIntersections: function (t, e, n, r) { if (!this.findAllIntersections && this.hasIntersection())
                            return null; if (t === n && e === r)
                            return null; if (this.isCheckEndSegmentsOnly) {
                            var i = this.isEndSegment(t, e) || this.isEndSegment(n, r);
                            if (!i)
                                return null;
                        } var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[r], u = n.getCoordinates()[r + 1]; this.li.computeIntersection(s, o, a, u), this.li.hasIntersection() && this.li.isInteriorIntersection() && (this.intSegments = new Array(4).fill(null), this.intSegments[0] = s, this.intSegments[1] = o, this.intSegments[2] = a, this.intSegments[3] = u, this.interiorIntersection = this.li.getIntersection(0), this.keepIntersections && this.intersections.add(this.interiorIntersection), this.intersectionCount++); }, isEndSegment: function (t, e) { return 0 === e ? !0 : e >= t.size() - 2; }, hasIntersection: function () { return null !== this.interiorIntersection; }, isDone: function () { return this.findAllIntersections ? !1 : null !== this.interiorIntersection; }, interfaces_: function () { return [on]; }, getClass: function () { return an; } }), an.createAllIntersectionsFinder = function (t) { var e = new an(t); return e.setFindAllIntersections(!0), e; }, an.createAnyIntersectionFinder = function (t) { return new an(t); }, an.createIntersectionCounter = function (t) { var e = new an(t); return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e; }, e(un.prototype, { execute: function () { return null !== this.segInt ? null : void this.checkInteriorIntersections(); }, getIntersections: function () { return this.segInt.getIntersections(); }, isValid: function () { return this.execute(), this._isValid; }, setFindAllIntersections: function (t) { this.findAllIntersections = t; }, checkInteriorIntersections: function () { this._isValid = !0, this.segInt = new an(this.li), this.segInt.setFindAllIntersections(this.findAllIntersections); var t = new nn; return t.setSegmentIntersector(this.segInt), t.computeNodes(this.segStrings), this.segInt.hasIntersection() ? (this._isValid = !1, null) : void 0; }, checkValid: function () { if (this.execute(), !this._isValid)
                            throw new sn(this.getErrorMessage(), this.segInt.getInteriorIntersection()); }, getErrorMessage: function () { if (this._isValid)
                            return "no intersections found"; var t = this.segInt.getIntersectionSegments(); return "found non-noded intersection between " + se.toLineString(t[0], t[1]) + " and " + se.toLineString(t[2], t[3]); }, interfaces_: function () { return []; }, getClass: function () { return un; } }), un.computeIntersections = function (t) { var e = new un(t); return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections(); }, e(ln.prototype, { checkValid: function () { this.nv.checkValid(); }, interfaces_: function () { return []; }, getClass: function () { return ln; } }), ln.toSegmentStrings = function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        e.add(new Oe(r.getCoordinates(), r));
                    } return e; }, ln.checkValid = function (t) { var e = new ln(t); e.checkValid(); }, e(cn.prototype, { map: function (t) { for (var e = new I, n = 0; n < t.getNumGeometries(); n++) {
                            var r = this.mapOp.map(t.getGeometryN(n));
                            r.isEmpty() || e.add(r);
                        } return t.getFactory().createGeometryCollection(re.toGeometryArray(e)); }, interfaces_: function () { return []; }, getClass: function () { return cn; } }), cn.map = function (t, e) { var n = new cn(e); return n.map(t); }, e(hn.prototype, { interfaces_: function () { return []; }, getClass: function () { return hn; } }), hn.opposite = function (t) { return t === hn.LEFT ? hn.RIGHT : t === hn.RIGHT ? hn.LEFT : t; }, hn.ON = 0, hn.LEFT = 1, hn.RIGHT = 2, e(gn.prototype, { setAllLocations: function (t) { for (var e = 0; e < this.location.length; e++)
                            this.location[e] = t; }, isNull: function () { for (var t = 0; t < this.location.length; t++)
                            if (this.location[t] !== L.NONE)
                                return !1; return !0; }, setAllLocationsIfNull: function (t) { for (var e = 0; e < this.location.length; e++)
                            this.location[e] === L.NONE && (this.location[e] = t); }, isLine: function () { return 1 === this.location.length; }, merge: function (t) { if (t.location.length > this.location.length) {
                            var e = new Array(3).fill(null);
                            e[hn.ON] = this.location[hn.ON], e[hn.LEFT] = L.NONE, e[hn.RIGHT] = L.NONE, this.location = e;
                        } for (var n = 0; n < this.location.length; n++)
                            this.location[n] === L.NONE && n < t.location.length && (this.location[n] = t.location[n]); }, getLocations: function () { return this.location; }, flip: function () { if (this.location.length <= 1)
                            return null; var t = this.location[hn.LEFT]; this.location[hn.LEFT] = this.location[hn.RIGHT], this.location[hn.RIGHT] = t; }, toString: function () { var t = new T; return this.location.length > 1 && t.append(L.toLocationSymbol(this.location[hn.LEFT])), t.append(L.toLocationSymbol(this.location[hn.ON])), this.location.length > 1 && t.append(L.toLocationSymbol(this.location[hn.RIGHT])), t.toString(); }, setLocations: function (t, e, n) { this.location[hn.ON] = t, this.location[hn.LEFT] = e, this.location[hn.RIGHT] = n; }, get: function (t) { return t < this.location.length ? this.location[t] : L.NONE; }, isArea: function () { return this.location.length > 1; }, isAnyNull: function () { for (var t = 0; t < this.location.length; t++)
                            if (this.location[t] === L.NONE)
                                return !0; return !1; }, setLocation: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.setLocation(hn.ON, t);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            this.location[e] = n;
                        } }, init: function (t) { this.location = new Array(t).fill(null), this.setAllLocations(L.NONE); }, isEqualOnSide: function (t, e) { return this.location[e] === t.location[e]; }, allPositionsEqual: function (t) { for (var e = 0; e < this.location.length; e++)
                            if (this.location[e] !== t)
                                return !1; return !0; }, interfaces_: function () { return []; }, getClass: function () { return gn; } }), e(fn.prototype, { getGeometryCount: function () { var t = 0; return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t; }, setAllLocations: function (t, e) { this.elt[t].setAllLocations(e); }, isNull: function (t) { return this.elt[t].isNull(); }, setAllLocationsIfNull: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            this.elt[e].setAllLocationsIfNull(n);
                        } }, isLine: function (t) { return this.elt[t].isLine(); }, merge: function (t) { for (var e = 0; 2 > e; e++)
                            null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new gn(t.elt[e]) : this.elt[e].merge(t.elt[e]); }, flip: function () { this.elt[0].flip(), this.elt[1].flip(); }, getLocation: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.elt[t].get(hn.ON);
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            return this.elt[e].get(n);
                        } }, toString: function () { var t = new T; return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString(); }, isArea: function () { if (0 === arguments.length)
                            return this.elt[0].isArea() || this.elt[1].isArea(); if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.elt[t].isArea();
                        } }, isAnyNull: function (t) { return this.elt[t].isAnyNull(); }, setLocation: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            this.elt[t].setLocation(hn.ON, e);
                        }
                        else if (3 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = arguments[2];
                            this.elt[n].setLocation(r, i);
                        } }, isEqualOnSide: function (t, e) { return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e); }, allPositionsEqual: function (t, e) { return this.elt[t].allPositionsEqual(e); }, toLine: function (t) { this.elt[t].isArea() && (this.elt[t] = new gn(this.elt[t].location[0])); }, interfaces_: function () { return []; }, getClass: function () { return fn; } }), fn.toLineLabel = function (t) { for (var e = new fn(L.NONE), n = 0; 2 > n; n++)
                        e.setLocation(n, t.getLocation(n)); return e; }, e(dn.prototype, { computeRing: function () { if (null !== this.ring)
                            return null; for (var t = new Array(this.pts.size()).fill(null), e = 0; e < this.pts.size(); e++)
                            t[e] = this.pts.get(e); this.ring = this.geometryFactory.createLinearRing(t), this._isHole = ce.isCCW(this.ring.getCoordinates()); }, isIsolated: function () { return 1 === this.label.getGeometryCount(); }, computePoints: function (t) { this.startDe = t; var e = t, n = !0; do {
                            if (null === e)
                                throw new sn("Found null DirectedEdge");
                            if (e.getEdgeRing() === this)
                                throw new sn("Directed Edge visited twice during ring-building at " + e.getCoordinate());
                            this.edges.add(e);
                            var r = e.getLabel();
                            g.isTrue(r.isArea()), this.mergeLabel(r), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
                        } while (e !== this.startDe); }, getLinearRing: function () { return this.ring; }, getCoordinate: function (t) { return this.pts.get(t); }, computeMaxNodeDegree: function () { this.maxNodeDegree = 0; var t = this.startDe; do {
                            var e = t.getNode(), n = e.getEdges().getOutgoingDegree(this);
                            n > this.maxNodeDegree && (this.maxNodeDegree = n), t = this.getNext(t);
                        } while (t !== this.startDe); this.maxNodeDegree *= 2; }, addPoints: function (t, e, n) { var r = t.getCoordinates(); if (e) {
                            var i = 1;
                            n && (i = 0);
                            for (var s = i; s < r.length; s++)
                                this.pts.add(r[s]);
                        }
                        else {
                            var i = r.length - 2;
                            n && (i = r.length - 1);
                            for (var s = i; s >= 0; s--)
                                this.pts.add(r[s]);
                        } }, isHole: function () { return this._isHole; }, setInResult: function () { var t = this.startDe; do
                            t.getEdge().setInResult(!0), t = t.getNext();
                        while (t !== this.startDe); }, containsPoint: function (t) { var e = this.getLinearRing(), n = e.getEnvelopeInternal(); if (!n.contains(t))
                            return !1; if (!ce.isPointInRing(t, e.getCoordinates()))
                            return !1; for (var r = this.holes.iterator(); r.hasNext();) {
                            var i = r.next();
                            if (i.containsPoint(t))
                                return !1;
                        } return !0; }, addHole: function (t) { this.holes.add(t); }, isShell: function () { return null === this.shell; }, getLabel: function () { return this.label; }, getEdges: function () { return this.edges; }, getMaxNodeDegree: function () { return this.maxNodeDegree < 0 && this.computeMaxNodeDegree(), this.maxNodeDegree; }, getShell: function () { return this.shell; }, mergeLabel: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.mergeLabel(t, 0), this.mergeLabel(t, 1);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1], r = e.getLocation(n, hn.RIGHT);
                            if (r === L.NONE)
                                return null;
                            if (this.label.getLocation(n) === L.NONE)
                                return this.label.setLocation(n, r), null;
                        } }, setShell: function (t) { this.shell = t, null !== t && t.addHole(this); }, toPolygon: function (t) { for (var e = new Array(this.holes.size()).fill(null), n = 0; n < this.holes.size(); n++)
                            e[n] = this.holes.get(n).getLinearRing(); var r = t.createPolygon(this.getLinearRing(), e); return r; }, interfaces_: function () { return []; }, getClass: function () { return dn; } }), c(pn, dn), e(pn.prototype, { setEdgeRing: function (t, e) { t.setMinEdgeRing(e); }, getNext: function (t) { return t.getNextMin(); }, interfaces_: function () { return []; }, getClass: function () { return pn; } }), c(mn, dn), e(mn.prototype, { buildMinimalRings: function () { var t = new I, e = this.startDe; do {
                            if (null === e.getMinEdgeRing()) {
                                var n = new pn(e, this.geometryFactory);
                                t.add(n);
                            }
                            e = e.getNext();
                        } while (e !== this.startDe); return t; }, setEdgeRing: function (t, e) { t.setEdgeRing(e); }, linkDirectedEdgesForMinimalEdgeRings: function () { var t = this.startDe; do {
                            var e = t.getNode();
                            e.getEdges().linkMinimalDirectedEdges(this), t = t.getNext();
                        } while (t !== this.startDe); }, getNext: function (t) { return t.getNext(); }, interfaces_: function () { return []; }, getClass: function () { return mn; } }), e(vn.prototype, { setVisited: function (t) { this._isVisited = t; }, setInResult: function (t) { this._isInResult = t; }, isCovered: function () { return this._isCovered; }, isCoveredSet: function () { return this._isCoveredSet; }, setLabel: function (t) { this.label = t; }, getLabel: function () { return this.label; }, setCovered: function (t) { this._isCovered = t, this._isCoveredSet = !0; }, updateIM: function (t) { g.isTrue(this.label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t); }, isInResult: function () { return this._isInResult; }, isVisited: function () { return this._isVisited; }, interfaces_: function () { return []; }, getClass: function () { return vn; } }), c(yn, vn), e(yn.prototype, { isIncidentEdgeInResult: function () { for (var t = this.getEdges().getEdges().iterator(); t.hasNext();) {
                            var e = t.next();
                            if (e.getEdge().isInResult())
                                return !0;
                        } return !1; }, isIsolated: function () { return 1 === this.label.getGeometryCount(); }, getCoordinate: function () { return this.coord; }, print: function (t) { t.println("node " + this.coord + " lbl: " + this.label); }, computeIM: function (t) { }, computeMergedLocation: function (t, e) { var n = L.NONE; if (n = this.label.getLocation(e), !t.isNull(e)) {
                            var r = t.getLocation(e);
                            n !== L.BOUNDARY && (n = r);
                        } return n; }, setLabel: function () { if (2 !== arguments.length)
                            return vn.prototype.setLabel.apply(this, arguments); var t = arguments[0], e = arguments[1]; null === this.label ? this.label = new fn(t, e) : this.label.setLocation(t, e); }, getEdges: function () { return this.edges; }, mergeLabel: function () { if (arguments[0] instanceof yn) {
                            var t = arguments[0];
                            this.mergeLabel(t.label);
                        }
                        else if (arguments[0] instanceof fn)
                            for (var e = arguments[0], n = 0; 2 > n; n++) {
                                var r = this.computeMergedLocation(e, n), i = this.label.getLocation(n);
                                i === L.NONE && this.label.setLocation(n, r);
                            } }, add: function (t) { this.edges.insert(t), t.setNode(this); }, setLabelBoundary: function (t) { if (null === this.label)
                            return null; var e = L.NONE; null !== this.label && (e = this.label.getLocation(t)); var n = null; switch (e) {
                            case L.BOUNDARY:
                                n = L.INTERIOR;
                                break;
                            case L.INTERIOR:
                                n = L.BOUNDARY;
                                break;
                            default: n = L.BOUNDARY;
                        } this.label.setLocation(t, n); }, interfaces_: function () { return []; }, getClass: function () { return yn; } }), e(xn.prototype, { find: function (t) { return this.nodeMap.get(t); }, addNode: function () { if (arguments[0] instanceof f) {
                            var t = arguments[0], e = this.nodeMap.get(t);
                            return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
                        } if (arguments[0] instanceof yn) {
                            var n = arguments[0], e = this.nodeMap.get(n.getCoordinate());
                            return null === e ? (this.nodeMap.put(n.getCoordinate(), n), n) : (e.mergeLabel(n), e);
                        } }, print: function (t) { for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.print(t);
                        } }, iterator: function () { return this.nodeMap.values().iterator(); }, values: function () { return this.nodeMap.values(); }, getBoundaryNodes: function (t) { for (var e = new I, n = this.iterator(); n.hasNext();) {
                            var r = n.next();
                            r.getLabel().getLocation(t) === L.BOUNDARY && e.add(r);
                        } return e; }, add: function (t) { var e = t.getCoordinate(), n = this.addNode(e); n.add(t); }, interfaces_: function () { return []; }, getClass: function () { return xn; } }), e(En.prototype, { compareDirection: function (t) { return this.dx === t.dx && this.dy === t.dy ? 0 : this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : ce.computeOrientation(t.p0, t.p1, this.p1); }, getDy: function () { return this.dy; }, getCoordinate: function () { return this.p0; }, setNode: function (t) { this.node = t; }, print: function (t) { var e = Math.atan2(this.dy, this.dx), n = this.getClass().getName(), r = n.lastIndexOf("."), i = n.substring(r + 1); t.print("  " + i + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + e + "   " + this.label); }, compareTo: function (t) { var e = t; return this.compareDirection(e); }, getDirectedCoordinate: function () { return this.p1; }, getDx: function () { return this.dx; }, getLabel: function () { return this.label; }, getEdge: function () { return this.edge; }, getQuadrant: function () { return this.quadrant; }, getNode: function () { return this.node; }, toString: function () { var t = Math.atan2(this.dy, this.dx), e = this.getClass().getName(), n = e.lastIndexOf("."), r = e.substring(n + 1); return "  " + r + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + t + "   " + this.label; }, computeLabel: function (t) { }, init: function (t, e) { this.p0 = t, this.p1 = e, this.dx = e.x - t.x, this.dy = e.y - t.y, this.quadrant = Qe.quadrant(this.dx, this.dy), g.isTrue(!(0 === this.dx && 0 === this.dy), "EdgeEnd with identical endpoints found"); }, interfaces_: function () { return [s]; }, getClass: function () { return En; } }), c(In, En), e(In.prototype, { getNextMin: function () { return this.nextMin; }, getDepth: function (t) { return this.depth[t]; }, setVisited: function (t) { this._isVisited = t; }, computeDirectedLabel: function () { this.label = new fn(this.edge.getLabel()), this._isForward || this.label.flip(); }, getNext: function () { return this.next; }, setDepth: function (t, e) { if (-999 !== this.depth[t] && this.depth[t] !== e)
                            throw new sn("assigned depths do not match", this.getCoordinate()); this.depth[t] = e; }, isInteriorAreaEdge: function ko() { for (var ko = !0, t = 0; 2 > t; t++)
                            this.label.isArea(t) && this.label.getLocation(t, hn.LEFT) === L.INTERIOR && this.label.getLocation(t, hn.RIGHT) === L.INTERIOR || (ko = !1); return ko; }, setNextMin: function (t) { this.nextMin = t; }, print: function (t) { En.prototype.print.call(this, t), t.print(" " + this.depth[hn.LEFT] + "/" + this.depth[hn.RIGHT]), t.print(" (" + this.getDepthDelta() + ")"), this._isInResult && t.print(" inResult"); }, setMinEdgeRing: function (t) { this.minEdgeRing = t; }, isLineEdge: function () { var t = this.label.isLine(0) || this.label.isLine(1), e = !this.label.isArea(0) || this.label.allPositionsEqual(0, L.EXTERIOR), n = !this.label.isArea(1) || this.label.allPositionsEqual(1, L.EXTERIOR); return t && e && n; }, setEdgeRing: function (t) { this.edgeRing = t; }, getMinEdgeRing: function () { return this.minEdgeRing; }, getDepthDelta: function () { var t = this.edge.getDepthDelta(); return this._isForward || (t = -t), t; }, setInResult: function (t) { this._isInResult = t; }, getSym: function () { return this.sym; }, isForward: function () { return this._isForward; }, getEdge: function () { return this.edge; }, printEdge: function (t) { this.print(t), t.print(" "), this._isForward ? this.edge.print(t) : this.edge.printReverse(t); }, setSym: function (t) { this.sym = t; }, setVisitedEdge: function (t) { this.setVisited(t), this.sym.setVisited(t); }, setEdgeDepths: function (t, e) { var n = this.getEdge().getDepthDelta(); this._isForward || (n = -n); var r = 1; t === hn.LEFT && (r = -1); var i = hn.opposite(t), s = n * r, o = e + s; this.setDepth(t, e), this.setDepth(i, o); }, getEdgeRing: function () { return this.edgeRing; }, isInResult: function () { return this._isInResult; }, setNext: function (t) { this.next = t; }, isVisited: function () { return this._isVisited; }, interfaces_: function () { return []; }, getClass: function () { return In; } }), In.depthFactor = function (t, e) { return t === L.EXTERIOR && e === L.INTERIOR ? 1 : t === L.INTERIOR && e === L.EXTERIOR ? -1 : 0; }, e(Nn.prototype, { createNode: function (t) { return new yn(t, null); }, interfaces_: function () { return []; }, getClass: function () { return Nn; } }), e(Cn.prototype, { printEdges: function (t) { t.println("Edges:"); for (var e = 0; e < this.edges.size(); e++) {
                            t.println("edge " + e + ":");
                            var n = this.edges.get(e);
                            n.print(t), n.eiList.print(t);
                        } }, find: function (t) { return this.nodes.find(t); }, addNode: function () { if (arguments[0] instanceof yn) {
                            var t = arguments[0];
                            return this.nodes.addNode(t);
                        } if (arguments[0] instanceof f) {
                            var e = arguments[0];
                            return this.nodes.addNode(e);
                        } }, getNodeIterator: function () { return this.nodes.iterator(); }, linkResultDirectedEdges: function () { for (var t = this.nodes.iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().linkResultDirectedEdges();
                        } }, debugPrintln: function (t) { D.out.println(t); }, isBoundaryNode: function (t, e) { var n = this.nodes.find(e); if (null === n)
                            return !1; var r = n.getLabel(); return null !== r && r.getLocation(t) === L.BOUNDARY; }, linkAllDirectedEdges: function () { for (var t = this.nodes.iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().linkAllDirectedEdges();
                        } }, matchInSameDirection: function (t, e, n, r) { return t.equals(n) ? ce.computeOrientation(t, e, r) === ce.COLLINEAR && Qe.quadrant(t, e) === Qe.quadrant(n, r) : !1; }, getEdgeEnds: function () { return this.edgeEndList; }, debugPrint: function (t) { D.out.print(t); }, getEdgeIterator: function () { return this.edges.iterator(); }, findEdgeInSameDirection: function (t, e) { for (var n = 0; n < this.edges.size(); n++) {
                            var r = this.edges.get(n), i = r.getCoordinates();
                            if (this.matchInSameDirection(t, e, i[0], i[1]))
                                return r;
                            if (this.matchInSameDirection(t, e, i[i.length - 1], i[i.length - 2]))
                                return r;
                        } return null; }, insertEdge: function (t) { this.edges.add(t); }, findEdgeEnd: function (t) {
                            for (var e = this.getEdgeEnds().iterator(); e.hasNext();) {
                                var n = e.next();
                                if (n.getEdge() === t)
                                    return n;
                            }
                            return null;
                        }, addEdges: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.edges.add(n);
                            var r = new In(n, !0), i = new In(n, !1);
                            r.setSym(i), i.setSym(r), this.add(r), this.add(i);
                        } }, add: function (t) { this.nodes.add(t), this.edgeEndList.add(t); }, getNodes: function () { return this.nodes.values(); }, findEdge: function (t, e) { for (var n = 0; n < this.edges.size(); n++) {
                            var r = this.edges.get(n), i = r.getCoordinates();
                            if (t.equals(i[0]) && e.equals(i[1]))
                                return r;
                        } return null; }, interfaces_: function () { return []; }, getClass: function () { return Cn; } }), Cn.linkResultDirectedEdges = function (t) { for (var e = t.iterator(); e.hasNext();) {
                        var n = e.next();
                        n.getEdges().linkResultDirectedEdges();
                    } }, e(wn.prototype, { sortShellsAndHoles: function (t, e, n) { for (var r = t.iterator(); r.hasNext();) {
                            var i = r.next();
                            i.isHole() ? n.add(i) : e.add(i);
                        } }, computePolygons: function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.toPolygon(this.geometryFactory);
                            e.add(i);
                        } return e; }, placeFreeHoles: function (t, e) { for (var n = e.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (null === r.getShell()) {
                                var i = this.findEdgeRingContaining(r, t);
                                if (null === i)
                                    throw new sn("unable to assign hole to a shell", r.getCoordinate(0));
                                r.setShell(i);
                            }
                        } }, buildMinimalEdgeRings: function (t, e, n) { for (var r = new I, i = t.iterator(); i.hasNext();) {
                            var s = i.next();
                            if (s.getMaxNodeDegree() > 2) {
                                s.linkDirectedEdgesForMinimalEdgeRings();
                                var o = s.buildMinimalRings(), a = this.findShell(o);
                                null !== a ? (this.placePolygonHoles(a, o), e.add(a)) : n.addAll(o);
                            }
                            else
                                r.add(s);
                        } return r; }, containsPoint: function (t) { for (var e = this.shellList.iterator(); e.hasNext();) {
                            var n = e.next();
                            if (n.containsPoint(t))
                                return !0;
                        } return !1; }, buildMaximalEdgeRings: function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (r.isInResult() && r.getLabel().isArea() && null === r.getEdgeRing()) {
                                var i = new mn(r, this.geometryFactory);
                                e.add(i), i.setInResult();
                            }
                        } return e; }, placePolygonHoles: function (t, e) { for (var n = e.iterator(); n.hasNext();) {
                            var r = n.next();
                            r.isHole() && r.setShell(t);
                        } }, getPolygons: function () { var t = this.computePolygons(this.shellList); return t; }, findEdgeRingContaining: function (t, e) { for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), i = n.getCoordinateN(0), s = null, o = null, a = e.iterator(); a.hasNext();) {
                            var u = a.next(), l = u.getLinearRing(), c = l.getEnvelopeInternal();
                            null !== s && (o = s.getLinearRing().getEnvelopeInternal());
                            var h = !1;
                            c.contains(r) && ce.isPointInRing(i, l.getCoordinates()) && (h = !0), h && (null === s || o.contains(c)) && (s = u);
                        } return s; }, findShell: function (t) { for (var e = 0, n = null, r = t.iterator(); r.hasNext();) {
                            var i = r.next();
                            i.isHole() || (n = i, e++);
                        } return g.isTrue(1 >= e, "found two shells in MinimalEdgeRing list"), n; }, add: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.add(t.getEdgeEnds(), t.getNodes());
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            Cn.linkResultDirectedEdges(n);
                            var r = this.buildMaximalEdgeRings(e), i = new I, s = this.buildMinimalEdgeRings(r, this.shellList, i);
                            this.sortShellsAndHoles(s, this.shellList, i), this.placeFreeHoles(this.shellList, i);
                        } }, interfaces_: function () { return []; }, getClass: function () { return wn; } }), e(Sn.prototype, { collectLines: function (t) { for (var e = this.op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
                            var n = e.next();
                            this.collectLineEdge(n, t, this.lineEdgesList), this.collectBoundaryTouchEdge(n, t, this.lineEdgesList);
                        } }, labelIsolatedLine: function (t, e) { var n = this.ptLocator.locate(t.getCoordinate(), this.op.getArgGeometry(e)); t.getLabel().setLocation(e, n); }, build: function (t) { return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this.resultLineList; }, collectLineEdge: function (t, e, n) { var r = t.getLabel(), i = t.getEdge(); t.isLineEdge() && (t.isVisited() || !rr.isResultOfOp(r, e) || i.isCovered() || (n.add(i), t.setVisitedEdge(!0))); }, findCoveredLineEdges: function () { for (var t = this.op.getGraph().getNodes().iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().findCoveredLineEdges();
                        } for (var n = this.op.getGraph().getEdgeEnds().iterator(); n.hasNext();) {
                            var r = n.next(), i = r.getEdge();
                            if (r.isLineEdge() && !i.isCoveredSet()) {
                                var s = this.op.isCoveredByA(r.getCoordinate());
                                i.setCovered(s);
                            }
                        } }, labelIsolatedLines: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getLabel();
                            n.isIsolated() && (r.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1));
                        } }, buildLines: function (t) { for (var e = this.lineEdgesList.iterator(); e.hasNext();) {
                            var n = e.next(), r = (n.getLabel(), this.geometryFactory.createLineString(n.getCoordinates()));
                            this.resultLineList.add(r), n.setInResult(!0);
                        } }, collectBoundaryTouchEdge: function (t, e, n) { var r = t.getLabel(); return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (g.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void (rr.isResultOfOp(r, e) && e === rr.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0)))); }, interfaces_: function () { return []; }, getClass: function () { return Sn; } }), e(Ln.prototype, { filterCoveredNodeToPoint: function (t) { var e = t.getCoordinate(); if (!this.op.isCoveredByLA(e)) {
                            var n = this.geometryFactory.createPoint(e);
                            this.resultPointList.add(n);
                        } }, extractNonCoveredResultNodes: function (t) { for (var e = this.op.getGraph().getNodes().iterator(); e.hasNext();) {
                            var n = e.next();
                            if (!(n.isInResult() || n.isIncidentEdgeInResult() || 0 !== n.getEdges().getDegree() && t !== rr.INTERSECTION)) {
                                var r = n.getLabel();
                                rr.isResultOfOp(r, t) && this.filterCoveredNodeToPoint(n);
                            }
                        } }, build: function (t) { return this.extractNonCoveredResultNodes(t), this.resultPointList; }, interfaces_: function () { return []; }, getClass: function () { return Ln; } }), e(Rn.prototype, { locate: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return Rn; } }), e(bn.prototype, { locate: function (t) { return bn.locate(t, this.geom); }, interfaces_: function () { return [Rn]; }, getClass: function () { return bn; } }), bn.isPointInRing = function (t, e) { return e.getEnvelopeInternal().intersects(t) ? ce.isPointInRing(t, e.getCoordinates()) : !1; }, bn.containsPointInPolygon = function (t, e) { if (e.isEmpty())
                        return !1; var n = e.getExteriorRing(); if (!bn.isPointInRing(t, n))
                        return !1; for (var r = 0; r < e.getNumInteriorRing(); r++) {
                        var i = e.getInteriorRingN(r);
                        if (bn.isPointInRing(t, i))
                            return !1;
                    } return !0; }, bn.containsPoint = function (t, e) { if (e instanceof bt)
                        return bn.containsPointInPolygon(t, e); if (e instanceof gt)
                        for (var n = new Re(e); n.hasNext();) {
                            var r = n.next();
                            if (r !== e && bn.containsPoint(t, r))
                                return !0;
                        } return !1; }, bn.locate = function (t, e) { return e.isEmpty() ? L.EXTERIOR : bn.containsPoint(t, e) ? L.INTERIOR : L.EXTERIOR; }, e(Tn.prototype, { getNextCW: function (t) { this.getEdges(); var e = this.edgeList.indexOf(t), n = e - 1; return 0 === e && (n = this.edgeList.size() - 1), this.edgeList.get(n); }, propagateSideLabels: function (t) { for (var e = L.NONE, n = this.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.getLabel();
                            i.isArea(t) && i.getLocation(t, hn.LEFT) !== L.NONE && (e = i.getLocation(t, hn.LEFT));
                        } if (e === L.NONE)
                            return null; for (var s = e, n = this.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.getLabel();
                            if (i.getLocation(t, hn.ON) === L.NONE && i.setLocation(t, hn.ON, s), i.isArea(t)) {
                                var o = i.getLocation(t, hn.LEFT), a = i.getLocation(t, hn.RIGHT);
                                if (a !== L.NONE) {
                                    if (a !== s)
                                        throw new sn("side location conflict", r.getCoordinate());
                                    o === L.NONE && g.shouldNeverReachHere("found single null side (at " + r.getCoordinate() + ")"), s = o;
                                }
                                else
                                    g.isTrue(i.getLocation(t, hn.LEFT) === L.NONE, "found single null side"), i.setLocation(t, hn.RIGHT, s), i.setLocation(t, hn.LEFT, s);
                            }
                        } }, getCoordinate: function () { var t = this.iterator(); if (!t.hasNext())
                            return null; var e = t.next(); return e.getCoordinate(); }, print: function (t) { D.out.println("EdgeEndStar:   " + this.getCoordinate()); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.print(t);
                        } }, isAreaLabelsConsistent: function (t) { return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0); }, checkAreaLabelsConsistent: function (t) { var e = this.getEdges(); if (e.size() <= 0)
                            return !0; var n = e.size() - 1, r = e.get(n).getLabel(), i = r.getLocation(t, hn.LEFT); g.isTrue(i !== L.NONE, "Found unlabelled area edge"); for (var s = i, o = this.iterator(); o.hasNext();) {
                            var a = o.next(), u = a.getLabel();
                            g.isTrue(u.isArea(t), "Found non-area edge");
                            var l = u.getLocation(t, hn.LEFT), c = u.getLocation(t, hn.RIGHT);
                            if (l === c)
                                return !1;
                            if (c !== s)
                                return !1;
                            s = l;
                        } return !0; }, findIndex: function (t) { this.iterator(); for (var e = 0; e < this.edgeList.size(); e++) {
                            var n = this.edgeList.get(e);
                            if (n === t)
                                return e;
                        } return -1; }, iterator: function () { return this.getEdges().iterator(); }, getEdges: function () { return null === this.edgeList && (this.edgeList = new I(this.edgeMap.values())), this.edgeList; }, getLocation: function (t, e, n) { return this.ptInAreaLocation[t] === L.NONE && (this.ptInAreaLocation[t] = bn.locate(e, n[t].getGeometry())), this.ptInAreaLocation[t]; }, toString: function () { var t = new T; t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n"); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            t.append(n), t.append("\n");
                        } return t.toString(); }, computeEdgeEndLabels: function (t) { for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.computeLabel(t);
                        } }, computeLabelling: function (t) { this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1); for (var e = [!1, !1], n = this.iterator(); n.hasNext();)
                            for (var r = n.next(), i = r.getLabel(), s = 0; 2 > s; s++)
                                i.isLine(s) && i.getLocation(s) === L.BOUNDARY && (e[s] = !0); for (var n = this.iterator(); n.hasNext();)
                            for (var r = n.next(), i = r.getLabel(), s = 0; 2 > s; s++)
                                if (i.isAnyNull(s)) {
                                    var o = L.NONE;
                                    if (e[s])
                                        o = L.EXTERIOR;
                                    else {
                                        var a = r.getCoordinate();
                                        o = this.getLocation(s, a, t);
                                    }
                                    i.setAllLocationsIfNull(s, o);
                                } }, getDegree: function () { return this.edgeMap.size(); }, insertEdgeEnd: function (t, e) { this.edgeMap.put(t, e), this.edgeList = null; }, interfaces_: function () { return []; }, getClass: function () { return Tn; } }), c(Pn, Tn), e(Pn.prototype, { linkResultDirectedEdges: function () { this.getResultAreaEdges(); for (var t = null, e = null, n = this.SCANNING_FOR_INCOMING, r = 0; r < this.resultAreaEdgeList.size(); r++) {
                            var i = this.resultAreaEdgeList.get(r), s = i.getSym();
                            if (i.getLabel().isArea())
                                switch (null === t && i.isInResult() && (t = i), n) {
                                    case this.SCANNING_FOR_INCOMING:
                                        if (!s.isInResult())
                                            continue;
                                        e = s, n = this.LINKING_TO_OUTGOING;
                                        break;
                                    case this.LINKING_TO_OUTGOING:
                                        if (!i.isInResult())
                                            continue;
                                        e.setNext(i), n = this.SCANNING_FOR_INCOMING;
                                }
                        } if (n === this.LINKING_TO_OUTGOING) {
                            if (null === t)
                                throw new sn("no outgoing dirEdge found", this.getCoordinate());
                            g.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t);
                        } }, insert: function (t) { var e = t; this.insertEdgeEnd(e, e); }, getRightmostEdge: function () { var t = this.getEdges(), e = t.size(); if (1 > e)
                            return null; var n = t.get(0); if (1 === e)
                            return n; var r = t.get(e - 1), i = n.getQuadrant(), s = r.getQuadrant(); return Qe.isNorthern(i) && Qe.isNorthern(s) ? n : Qe.isNorthern(i) || Qe.isNorthern(s) ? 0 !== n.getDy() ? n : 0 !== r.getDy() ? r : (g.shouldNeverReachHere("found two horizontal edges incident on node"), null) : r; }, print: function (t) { D.out.println("DirectedEdgeStar: " + this.getCoordinate()); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println();
                        } }, getResultAreaEdges: function () { if (null !== this.resultAreaEdgeList)
                            return this.resultAreaEdgeList; this.resultAreaEdgeList = new I; for (var t = this.iterator(); t.hasNext();) {
                            var e = t.next();
                            (e.isInResult() || e.getSym().isInResult()) && this.resultAreaEdgeList.add(e);
                        } return this.resultAreaEdgeList; }, updateLabelling: function (t) { for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getLabel();
                            r.setAllLocationsIfNull(0, t.getLocation(0)), r.setAllLocationsIfNull(1, t.getLocation(1));
                        } }, linkAllDirectedEdges: function () { this.getEdges(); for (var t = null, e = null, n = this.edgeList.size() - 1; n >= 0; n--) {
                            var r = this.edgeList.get(n), i = r.getSym();
                            null === e && (e = i), null !== t && i.setNext(t), t = r;
                        } e.setNext(t); }, computeDepths: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = this.findIndex(t), n = (t.getLabel(), t.getDepth(hn.LEFT)), r = t.getDepth(hn.RIGHT), i = this.computeDepths(e + 1, this.edgeList.size(), n), s = this.computeDepths(0, e, i);
                            if (s !== r)
                                throw new sn("depth mismatch at " + t.getCoordinate());
                        }
                        else if (3 === arguments.length) {
                            for (var o = arguments[0], a = arguments[1], u = arguments[2], l = u, c = o; a > c; c++) {
                                var h = this.edgeList.get(c);
                                h.getLabel(), h.setEdgeDepths(hn.RIGHT, l), l = h.getDepth(hn.LEFT);
                            }
                            return l;
                        } }, mergeSymLabels: function () { for (var t = this.iterator(); t.hasNext();) {
                            var e = t.next(), n = e.getLabel();
                            n.merge(e.getSym().getLabel());
                        } }, linkMinimalDirectedEdges: function (t) { for (var e = null, n = null, r = this.SCANNING_FOR_INCOMING, i = this.resultAreaEdgeList.size() - 1; i >= 0; i--) {
                            var s = this.resultAreaEdgeList.get(i), o = s.getSym();
                            switch (null === e && s.getEdgeRing() === t && (e = s), r) {
                                case this.SCANNING_FOR_INCOMING:
                                    if (o.getEdgeRing() !== t)
                                        continue;
                                    n = o, r = this.LINKING_TO_OUTGOING;
                                    break;
                                case this.LINKING_TO_OUTGOING:
                                    if (s.getEdgeRing() !== t)
                                        continue;
                                    n.setNextMin(s), r = this.SCANNING_FOR_INCOMING;
                            }
                        } r === this.LINKING_TO_OUTGOING && (g.isTrue(null !== e, "found null for first outgoing dirEdge"), g.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e)); }, getOutgoingDegree: function () { if (0 === arguments.length) {
                            for (var t = 0, e = this.iterator(); e.hasNext();) {
                                var n = e.next();
                                n.isInResult() && t++;
                            }
                            return t;
                        } if (1 === arguments.length) {
                            for (var r = arguments[0], t = 0, e = this.iterator(); e.hasNext();) {
                                var n = e.next();
                                n.getEdgeRing() === r && t++;
                            }
                            return t;
                        } }, getLabel: function () { return this.label; }, findCoveredLineEdges: function () { for (var t = L.NONE, e = this.iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getSym();
                            if (!n.isLineEdge()) {
                                if (n.isInResult()) {
                                    t = L.INTERIOR;
                                    break;
                                }
                                if (r.isInResult()) {
                                    t = L.EXTERIOR;
                                    break;
                                }
                            }
                        } if (t === L.NONE)
                            return null; for (var i = t, e = this.iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getSym();
                            n.isLineEdge() ? n.getEdge().setCovered(i === L.INTERIOR) : (n.isInResult() && (i = L.EXTERIOR), r.isInResult() && (i = L.INTERIOR));
                        } }, computeLabelling: function (t) { Tn.prototype.computeLabelling.call(this, t), this.label = new fn(L.NONE); for (var e = this.iterator(); e.hasNext();)
                            for (var n = e.next(), r = n.getEdge(), i = r.getLabel(), s = 0; 2 > s; s++) {
                                var o = i.getLocation(s);
                                o !== L.INTERIOR && o !== L.BOUNDARY || this.label.setLocation(s, L.INTERIOR);
                            } }, interfaces_: function () { return []; }, getClass: function () { return Pn; } }), c(On, Nn), e(On.prototype, { createNode: function (t) { return new yn(t, new Pn); }, interfaces_: function () { return []; }, getClass: function () { return On; } }), e(Mn.prototype, { computeIntersections: function (t, e) { this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e); }, interfaces_: function () { return []; }, getClass: function () { return Mn; } }), e(_n.prototype, { isDelete: function () { return this.eventType === _n.DELETE; }, setDeleteEventIndex: function (t) { this.deleteEventIndex = t; }, getObject: function () { return this.obj; }, compareTo: function (t) { var e = t; return this.xValue < e.xValue ? -1 : this.xValue > e.xValue ? 1 : this.eventType < e.eventType ? -1 : this.eventType > e.eventType ? 1 : 0; }, getInsertEvent: function () { return this.insertEvent; }, isInsert: function () { return this.eventType === _n.INSERT; }, isSameLabel: function (t) { return null === this.label ? !1 : this.label === t.label; }, getDeleteEventIndex: function () { return this.deleteEventIndex; }, interfaces_: function () { return [s]; }, getClass: function () { return _n; } }), _n.INSERT = 1, _n.DELETE = 2, e(An.prototype, { interfaces_: function () { return []; }, getClass: function () { return An; } }), e(Dn.prototype, { isTrivialIntersection: function (t, e, n, r) { if (t === n && 1 === this.li.getIntersectionNum()) {
                            if (Dn.isAdjacentSegments(e, r))
                                return !0;
                            if (t.isClosed()) {
                                var i = t.getNumPoints() - 1;
                                if (0 === e && r === i || 0 === r && e === i)
                                    return !0;
                            }
                        } return !1; }, getProperIntersectionPoint: function () { return this.properIntersectionPoint; }, setIsDoneIfProperInt: function (t) { this.isDoneWhenProperInt = t; }, hasProperInteriorIntersection: function () { return this.hasProperInterior; }, isBoundaryPointInternal: function (t, e) { for (var n = e.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.getCoordinate();
                            if (t.isIntersection(i))
                                return !0;
                        } return !1; }, hasProperIntersection: function () { return this.hasProper; }, hasIntersection: function () { return this._hasIntersection; }, isDone: function () { return this._isDone; }, isBoundaryPoint: function (t, e) { return null === e ? !1 : this.isBoundaryPointInternal(t, e[0]) ? !0 : !!this.isBoundaryPointInternal(t, e[1]); }, setBoundaryNodes: function (t, e) { this.bdyNodes = new Array(2).fill(null), this.bdyNodes[0] = t, this.bdyNodes[1] = e; }, addIntersections: function (t, e, n, r) { if (t === n && e === r)
                            return null; this.numTests++; var i = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], o = n.getCoordinates()[r], a = n.getCoordinates()[r + 1]; this.li.computeIntersection(i, s, o, a), this.li.hasIntersection() && (this.recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this.numIntersections++, this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, !this.includeProper && this.li.isProper() || (t.addIntersections(this.li, e, 0), n.addIntersections(this.li, r, 1)), this.li.isProper() && (this.properIntersectionPoint = this.li.getIntersection(0).copy(), this.hasProper = !0, this.isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this.li, this.bdyNodes) || (this.hasProperInterior = !0)))); }, interfaces_: function () { return []; }, getClass: function () { return Dn; } }), Dn.isAdjacentSegments = function (t, e) { return 1 === Math.abs(t - e); }, c(Fn, An), e(Fn.prototype, { prepareEvents: function () { co.sort(this.events); for (var t = 0; t < this.events.size(); t++) {
                            var e = this.events.get(t);
                            e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t);
                        } }, computeIntersections: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            this.nOverlaps = 0, this.prepareEvents();
                            for (var e = 0; e < this.events.size(); e++) {
                                var n = this.events.get(e);
                                if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t), t.isDone())
                                    break;
                            }
                        }
                        else if (3 === arguments.length)
                            if (arguments[2] instanceof Dn && R(arguments[0], y) && R(arguments[1], y)) {
                                var r = arguments[0], i = arguments[1], s = arguments[2];
                                this.addEdges(r, r), this.addEdges(i, i), this.computeIntersections(s);
                            }
                            else if ("boolean" == typeof arguments[2] && R(arguments[0], y) && arguments[1] instanceof Dn) {
                                var o = arguments[0], a = arguments[1], u = arguments[2];
                                u ? this.addEdges(o, null) : this.addEdges(o), this.computeIntersections(a);
                            } }, addEdge: function (t, e) { for (var n = t.getMonotoneChainEdge(), r = n.getStartIndexes(), i = 0; i < r.length - 1; i++) {
                            var s = new Mn(n, i), o = new _n(e, n.getMinX(i), s);
                            this.events.add(o), this.events.add(new _n(n.getMaxX(i), o));
                        } }, processOverlaps: function (t, e, n, r) { for (var i = n.getObject(), s = t; e > s; s++) {
                            var o = this.events.get(s);
                            if (o.isInsert()) {
                                var a = o.getObject();
                                n.isSameLabel(o) || (i.computeIntersections(a, r), this.nOverlaps++);
                            }
                        } }, addEdges: function () { if (1 === arguments.length)
                            for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.addEdge(n, n);
                            }
                        else if (2 === arguments.length)
                            for (var r = arguments[0], i = arguments[1], e = r.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.addEdge(n, i);
                            } }, interfaces_: function () { return []; }, getClass: function () { return Fn; } }), e(Gn.prototype, { getMin: function () { return this.min; }, intersects: function (t, e) { return !(this.min > e || this.max < t); }, getMax: function () { return this.max; }, toString: function () { return se.toLineString(new f(this.min, 0), new f(this.max, 0)); }, interfaces_: function () { return []; }, getClass: function () { return Gn; } }), e(kn.prototype, { compare: function (t, e) { var n = t, r = e, i = (n.min + n.max) / 2, s = (r.min + r.max) / 2; return s > i ? -1 : i > s ? 1 : 0; }, interfaces_: function () { return [a]; }, getClass: function () { return kn; } }), Gn.NodeComparator = kn, c(Un, Gn), e(Un.prototype, { query: function (t, e, n) { return this.intersects(t, e) ? void n.visitItem(this.item) : null; }, interfaces_: function () { return []; }, getClass: function () { return Un; } }), c(qn, Gn), e(qn.prototype, { buildExtent: function (t, e) { this.min = Math.min(t.min, e.min), this.max = Math.max(t.max, e.max); }, query: function (t, e, n) { return this.intersects(t, e) ? (null !== this.node1 && this.node1.query(t, e, n), void (null !== this.node2 && this.node2.query(t, e, n))) : null; }, interfaces_: function () { return []; }, getClass: function () { return qn; } }), e(Bn.prototype, { buildTree: function () { co.sort(this.leaves, new IntervalRTreeNode.NodeComparator); for (var t = this.leaves, e = null, n = new I;;) {
                            if (this.buildLevel(t, n), 1 === n.size())
                                return n.get(0);
                            e = t, t = n, n = e;
                        } }, insert: function (t, e, n) { if (null !== this.root)
                            throw new IllegalStateException("Index cannot be added to once it has been queried"); this.leaves.add(new Un(t, e, n)); }, query: function (t, e, n) { this.init(), this.root.query(t, e, n); }, buildRoot: function () { return null !== this.root ? null : void (this.root = this.buildTree()); }, printNode: function (t) { D.out.println(se.toLineString(new f(t.min, this.level), new f(t.max, this.level))); }, init: function () { return null !== this.root ? null : void this.buildRoot(); }, buildLevel: function (t, e) { this.level++, e.clear(); for (var n = 0; n < t.size(); n += 2) {
                            var r = t.get(n), i = n + 1 < t.size() ? t.get(n) : null;
                            if (null === i)
                                e.add(r);
                            else {
                                var s = new qn(t.get(n), t.get(n + 1));
                                e.add(s);
                            }
                        } }, interfaces_: function () { return []; }, getClass: function () { return Bn; } }), e(zn.prototype, { filter: function (t) { if (this.isForcedToLineString && t instanceof Pt) {
                            var e = t.getFactory().createLineString(t.getCoordinateSequence());
                            return this.lines.add(e), null;
                        } t instanceof wt && this.lines.add(t); }, setForceToLineString: function (t) { this.isForcedToLineString = t; }, interfaces_: function () { return [k]; }, getClass: function () { return zn; } }), zn.getGeometry = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return t.getFactory().buildGeometry(zn.getLines(t));
                    } if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        return e.getFactory().buildGeometry(zn.getLines(e, n));
                    } }, zn.getLines = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return zn.getLines(t, !1);
                    } if (2 === arguments.length) {
                        if (R(arguments[0], m) && R(arguments[1], m)) {
                            for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext();) {
                                var i = r.next();
                                zn.getLines(i, n);
                            }
                            return n;
                        }
                        if (arguments[0] instanceof U && "boolean" == typeof arguments[1]) {
                            var s = arguments[0], o = arguments[1], a = new I;
                            return s.apply(new zn(a, o)), a;
                        }
                        if (arguments[0] instanceof U && R(arguments[1], m)) {
                            var u = arguments[0], l = arguments[1];
                            return u instanceof wt ? l.add(u) : u.apply(new zn(l)), l;
                        }
                    }
                    else if (3 === arguments.length) {
                        if ("boolean" == typeof arguments[2] && R(arguments[0], m) && R(arguments[1], m)) {
                            for (var c = arguments[0], h = arguments[1], g = arguments[2], r = c.iterator(); r.hasNext();) {
                                var i = r.next();
                                zn.getLines(i, h, g);
                            }
                            return h;
                        }
                        if ("boolean" == typeof arguments[2] && arguments[0] instanceof U && R(arguments[1], m)) {
                            var f = arguments[0], d = arguments[1], p = arguments[2];
                            return f.apply(new zn(d, p)), d;
                        }
                    } }, e(Vn.prototype, { visitItem: function (t) { this.items.add(t); }, getItems: function () { return this.items; }, interfaces_: function () { return [De]; }, getClass: function () { return Vn; } }), e(Yn.prototype, { locate: function (t) { var e = new le(t), n = new Xn(e); return this.index.query(t.y, t.y, n), e.getLocation(); }, interfaces_: function () { return [Rn]; }, getClass: function () { return Yn; } }), e(Xn.prototype, { visitItem: function (t) { var e = t; this.counter.countSegment(e.getCoordinate(0), e.getCoordinate(1)); }, interfaces_: function () { return [De]; }, getClass: function () { return Xn; } }), e(Hn.prototype, { init: function (t) { for (var e = zn.getLines(t), n = e.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.getCoordinates();
                            this.addLine(i);
                        } }, addLine: function (t) { for (var e = 1; e < t.length; e++) {
                            var n = new he(t[e - 1], t[e]), r = Math.min(n.p0.y, n.p1.y), i = Math.max(n.p0.y, n.p1.y);
                            this.index.insert(r, i, n);
                        } }, query: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1], n = new Vn;
                            return this.index.query(t, e, n), n.getItems();
                        } if (3 === arguments.length) {
                            var r = arguments[0], i = arguments[1], s = arguments[2];
                            this.index.query(r, i, s);
                        } }, interfaces_: function () { return []; }, getClass: function () { return Hn; } }), Yn.SegmentVisitor = Xn, Yn.IntervalIndexedGeometry = Hn, e(Wn.prototype, { getSegmentIndex: function () { return this.segmentIndex; }, getCoordinate: function () { return this.coord; }, print: function (t) { t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist); }, compareTo: function (t) { var e = t; return this.compare(e.segmentIndex, e.dist); }, isEndPoint: function (t) { return 0 === this.segmentIndex && 0 === this.dist ? !0 : this.segmentIndex === t; }, toString: function () { return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist; }, getDistance: function () { return this.dist; }, compare: function (t, e) { return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0; }, interfaces_: function () { return [s]; }, getClass: function () { return Wn; } }), e(jn.prototype, { print: function (t) { t.println("Intersections:"); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.print(t);
                        } }, iterator: function () { return this.nodeMap.values().iterator(); }, addSplitEdges: function (t) { this.addEndpoints(); for (var e = this.iterator(), n = e.next(); e.hasNext();) {
                            var r = e.next(), i = this.createSplitEdge(n, r);
                            t.add(i), n = r;
                        } }, addEndpoints: function () { var t = this.edge.pts.length - 1; this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0); }, createSplitEdge: function (t, e) { var n = e.segmentIndex - t.segmentIndex + 2, r = this.edge.pts[e.segmentIndex], i = e.dist > 0 || !e.coord.equals2D(r); i || n--; var s = new Array(n).fill(null), o = 0; s[o++] = new f(t.coord); for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
                            s[o++] = this.edge.pts[a]; return i && (s[o] = e.coord), new Qn(s, new fn(this.edge.label)); }, add: function (t, e, n) { var r = new Wn(t, e, n), i = this.nodeMap.get(r); return null !== i ? i : (this.nodeMap.put(r, r), r); }, isIntersection: function (t) { for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            if (n.coord.equals(t))
                                return !0;
                        } return !1; }, interfaces_: function () { return []; }, getClass: function () { return jn; } }), e(Zn.prototype, { getChainStartIndices: function (t) { var e = 0, n = new I; n.add(new P(e)); do {
                            var r = this.findChainEnd(t, e);
                            n.add(new P(r)), e = r;
                        } while (e < t.length - 1); var i = Zn.toIntArray(n); return i; }, findChainEnd: function (t, e) { for (var n = Qe.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length;) {
                            var i = Qe.quadrant(t[r - 1], t[r]);
                            if (i !== n)
                                break;
                            r++;
                        } return r - 1; }, interfaces_: function () { return []; }, getClass: function () { return Zn; } }), Zn.toIntArray = function (t) { for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
                        e[n] = t.get(n).intValue(); return e; }, e(Jn.prototype, { getCoordinates: function () { return this.pts; }, getMaxX: function (t) { var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x; return e > n ? e : n; }, getMinX: function (t) { var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x; return n > e ? e : n; }, computeIntersectsForChain: function () { if (4 === arguments.length) {
                            var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
                            this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r);
                        }
                        else if (6 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = arguments[4], l = arguments[5], c = this.pts[i], h = this.pts[s], g = o.pts[a], f = o.pts[u];
                            if (s - i === 1 && u - a === 1)
                                return l.addIntersections(this.e, i, o.e, a), null;
                            if (this.env1.init(c, h), this.env2.init(g, f), !this.env1.intersects(this.env2))
                                return null;
                            var d = Math.trunc((i + s) / 2), p = Math.trunc((a + u) / 2);
                            d > i && (p > a && this.computeIntersectsForChain(i, d, o, a, p, l), u > p && this.computeIntersectsForChain(i, d, o, p, u, l)), s > d && (p > a && this.computeIntersectsForChain(d, s, o, a, p, l), u > p && this.computeIntersectsForChain(d, s, o, p, u, l));
                        } }, getStartIndexes: function () { return this.startIndex; }, computeIntersects: function (t, e) { for (var n = 0; n < this.startIndex.length - 1; n++)
                            for (var r = 0; r < t.startIndex.length - 1; r++)
                                this.computeIntersectsForChain(n, t, r, e); }, interfaces_: function () { return []; }, getClass: function () { return Jn; } }), e(Kn.prototype, { getDepth: function (t, e) { return this.depth[t][e]; }, setDepth: function (t, e, n) { this.depth[t][e] = n; }, isNull: function () { if (0 === arguments.length) {
                            for (var t = 0; 2 > t; t++)
                                for (var e = 0; 3 > e; e++)
                                    if (this.depth[t][e] !== Kn.NULL_VALUE)
                                        return !1;
                            return !0;
                        } if (1 === arguments.length) {
                            var n = arguments[0];
                            return this.depth[n][1] === Kn.NULL_VALUE;
                        } if (2 === arguments.length) {
                            var r = arguments[0], i = arguments[1];
                            return this.depth[r][i] === Kn.NULL_VALUE;
                        } }, normalize: function () { for (var t = 0; 2 > t; t++)
                            if (!this.isNull(t)) {
                                var e = this.depth[t][1];
                                this.depth[t][2] < e && (e = this.depth[t][2]), 0 > e && (e = 0);
                                for (var n = 1; 3 > n; n++) {
                                    var r = 0;
                                    this.depth[t][n] > e && (r = 1), this.depth[t][n] = r;
                                }
                            } }, getDelta: function (t) { return this.depth[t][hn.RIGHT] - this.depth[t][hn.LEFT]; }, getLocation: function (t, e) { return this.depth[t][e] <= 0 ? L.EXTERIOR : L.INTERIOR; }, toString: function () { return "A: " + this.depth[0][1] + "," + this.depth[0][2] + " B: " + this.depth[1][1] + "," + this.depth[1][2]; }, add: function () { if (1 === arguments.length)
                            for (var t = arguments[0], e = 0; 2 > e; e++)
                                for (var n = 1; 3 > n; n++) {
                                    var r = t.getLocation(e, n);
                                    r !== L.EXTERIOR && r !== L.INTERIOR || (this.isNull(e, n) ? this.depth[e][n] = Kn.depthAtLocation(r) : this.depth[e][n] += Kn.depthAtLocation(r));
                                }
                        else if (3 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = arguments[2];
                            o === L.INTERIOR && this.depth[i][s]++;
                        } }, interfaces_: function () { return []; }, getClass: function () { return Kn; } }), Kn.depthAtLocation = function (t) { return t === L.EXTERIOR ? 0 : t === L.INTERIOR ? 1 : Kn.NULL_VALUE; }, Kn.NULL_VALUE = -1, c(Qn, vn), e(Qn.prototype, { getDepth: function () { return this.depth; }, getCollapsedEdge: function () { var t = new Array(2).fill(null); t[0] = this.pts[0], t[1] = this.pts[1]; var e = new Qn(t, fn.toLineLabel(this.label)); return e; }, isIsolated: function () { return this._isIsolated; }, getCoordinates: function () { return this.pts; }, setIsolated: function (t) { this._isIsolated = t; }, setName: function (t) { this.name = t; }, equals: function (t) { if (!(t instanceof Qn))
                            return !1; var e = t; if (this.pts.length !== e.pts.length)
                            return !1; for (var n = !0, r = !0, i = this.pts.length, s = 0; s < this.pts.length; s++)
                            if (this.pts[s].equals2D(e.pts[s]) || (n = !1), this.pts[s].equals2D(e.pts[--i]) || (r = !1), !n && !r)
                                return !1; return !0; }, getCoordinate: function () { if (0 === arguments.length)
                            return this.pts.length > 0 ? this.pts[0] : null; if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.pts[t];
                        } }, print: function (t) { t.print("edge " + this.name + ": "), t.print("LINESTRING ("); for (var e = 0; e < this.pts.length; e++)
                            e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y); t.print(")  " + this.label + " " + this.depthDelta); }, computeIM: function (t) { Qn.updateIM(this.label, t); }, isCollapsed: function () { return this.label.isArea() ? 3 !== this.pts.length ? !1 : !!this.pts[0].equals(this.pts[2]) : !1; }, isClosed: function () { return this.pts[0].equals(this.pts[this.pts.length - 1]); }, getMaximumSegmentIndex: function () { return this.pts.length - 1; }, getDepthDelta: function () { return this.depthDelta; }, getNumPoints: function () { return this.pts.length; }, printReverse: function (t) { t.print("edge " + this.name + ": "); for (var e = this.pts.length - 1; e >= 0; e--)
                            t.print(this.pts[e] + " "); t.println(""); }, getMonotoneChainEdge: function () { return null === this.mce && (this.mce = new Jn(this)), this.mce; }, getEnvelope: function () { if (null === this.env) {
                            this.env = new C;
                            for (var t = 0; t < this.pts.length; t++)
                                this.env.expandToInclude(this.pts[t]);
                        } return this.env; }, addIntersection: function (t, e, n, r) { var i = new f(t.getIntersection(r)), s = e, o = t.getEdgeDistance(n, r), a = s + 1; if (a < this.pts.length) {
                            var u = this.pts[a];
                            i.equals2D(u) && (s = a, o = 0);
                        } this.eiList.add(i, s, o); }, toString: function () { var t = new T; t.append("edge " + this.name + ": "), t.append("LINESTRING ("); for (var e = 0; e < this.pts.length; e++)
                            e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y); return t.append(")  " + this.label + " " + this.depthDelta), t.toString(); }, isPointwiseEqual: function (t) { if (this.pts.length !== t.pts.length)
                            return !1; for (var e = 0; e < this.pts.length; e++)
                            if (!this.pts[e].equals2D(t.pts[e]))
                                return !1; return !0; }, setDepthDelta: function (t) { this.depthDelta = t; }, getEdgeIntersectionList: function () { return this.eiList; }, addIntersections: function (t, e, n) { for (var r = 0; r < t.getIntersectionNum(); r++)
                            this.addIntersection(t, e, n, r); }, interfaces_: function () { return []; }, getClass: function () { return Qn; } }), Qn.updateIM = function () { if (2 !== arguments.length)
                        return vn.prototype.updateIM.apply(this, arguments); var t = arguments[0], e = arguments[1]; e.setAtLeastIfValid(t.getLocation(0, hn.ON), t.getLocation(1, hn.ON), 1), t.isArea() && (e.setAtLeastIfValid(t.getLocation(0, hn.LEFT), t.getLocation(1, hn.LEFT), 2), e.setAtLeastIfValid(t.getLocation(0, hn.RIGHT), t.getLocation(1, hn.RIGHT), 2)); }, c($n, Cn), e($n.prototype, { insertBoundaryPoint: function (t, e) { var n = this.nodes.addNode(e), r = n.getLabel(), i = 1, s = L.NONE; s = r.getLocation(t, hn.ON), s === L.BOUNDARY && i++; var o = $n.determineBoundary(this.boundaryNodeRule, i); r.setLocation(t, o); }, computeSelfNodes: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this.computeSelfNodes(t, e, !1);
                        } if (3 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = arguments[2], s = new Dn(n, !0, !1);
                            s.setIsDoneIfProperInt(i);
                            var o = this.createEdgeSetIntersector(), a = this.parentGeom instanceof Pt || this.parentGeom instanceof bt || this.parentGeom instanceof Ot, u = r || !a;
                            return o.computeIntersections(this.edges, s, u), this.addSelfIntersectionNodes(this.argIndex), s;
                        } }, computeSplitEdges: function (t) { for (var e = this.edges.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.eiList.addSplitEdges(t);
                        } }, computeEdgeIntersections: function (t, e, n) {
                            var r = new Dn(e, n, !0);
                            r.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes());
                            var i = this.createEdgeSetIntersector();
                            return i.computeIntersections(this.edges, t.edges, r), r;
                        }, getGeometry: function () { return this.parentGeom; }, getBoundaryNodeRule: function () { return this.boundaryNodeRule; }, hasTooFewPoints: function () { return this._hasTooFewPoints; }, addPoint: function () { if (arguments[0] instanceof Lt) {
                            var t = arguments[0], e = t.getCoordinate();
                            this.insertPoint(this.argIndex, e, L.INTERIOR);
                        }
                        else if (arguments[0] instanceof f) {
                            var n = arguments[0];
                            this.insertPoint(this.argIndex, n, L.INTERIOR);
                        } }, addPolygon: function (t) { this.addPolygonRing(t.getExteriorRing(), L.EXTERIOR, L.INTERIOR); for (var e = 0; e < t.getNumInteriorRing(); e++) {
                            var n = t.getInteriorRingN(e);
                            this.addPolygonRing(n, L.INTERIOR, L.EXTERIOR);
                        } }, addEdge: function (t) { this.insertEdge(t); var e = t.getCoordinates(); this.insertPoint(this.argIndex, e[0], L.BOUNDARY), this.insertPoint(this.argIndex, e[e.length - 1], L.BOUNDARY); }, addLineString: function (t) { var e = H.removeRepeatedPoints(t.getCoordinates()); if (e.length < 2)
                            return this._hasTooFewPoints = !0, this.invalidPoint = e[0], null; var n = new Qn(e, new fn(this.argIndex, L.INTERIOR)); this.lineEdgeMap.put(t, n), this.insertEdge(n), g.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this.argIndex, e[0]), this.insertBoundaryPoint(this.argIndex, e[e.length - 1]); }, getInvalidPoint: function () { return this.invalidPoint; }, getBoundaryPoints: function () { for (var t = this.getBoundaryNodes(), e = new Array(t.size()).fill(null), n = 0, r = t.iterator(); r.hasNext();) {
                            var i = r.next();
                            e[n++] = i.getCoordinate().copy();
                        } return e; }, getBoundaryNodes: function () { return null === this.boundaryNodes && (this.boundaryNodes = this.nodes.getBoundaryNodes(this.argIndex)), this.boundaryNodes; }, addSelfIntersectionNode: function (t, e, n) { return this.isBoundaryNode(t, e) ? null : void (n === L.BOUNDARY && this.useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n)); }, addPolygonRing: function (t, e, n) { if (t.isEmpty())
                            return null; var r = H.removeRepeatedPoints(t.getCoordinates()); if (r.length < 4)
                            return this._hasTooFewPoints = !0, this.invalidPoint = r[0], null; var i = e, s = n; ce.isCCW(r) && (i = n, s = e); var o = new Qn(r, new fn(this.argIndex, L.BOUNDARY, i, s)); this.lineEdgeMap.put(t, o), this.insertEdge(o), this.insertPoint(this.argIndex, r[0], L.BOUNDARY); }, insertPoint: function (t, e, n) { var r = this.nodes.addNode(e), i = r.getLabel(); null === i ? r.label = new fn(t, n) : i.setLocation(t, n); }, createEdgeSetIntersector: function () { return new Fn; }, addSelfIntersectionNodes: function (t) { for (var e = this.edges.iterator(); e.hasNext();)
                            for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.eiList.iterator(); i.hasNext();) {
                                var s = i.next();
                                this.addSelfIntersectionNode(t, s.coord, r);
                            } }, add: function () { if (1 !== arguments.length)
                            return Cn.prototype.add.apply(this, arguments); var t = arguments[0]; if (t.isEmpty())
                            return null; if (t instanceof Ot && (this.useBoundaryDeterminationRule = !1), t instanceof bt)
                            this.addPolygon(t);
                        else if (t instanceof wt)
                            this.addLineString(t);
                        else if (t instanceof Lt)
                            this.addPoint(t);
                        else if (t instanceof Tt)
                            this.addCollection(t);
                        else if (t instanceof ft)
                            this.addCollection(t);
                        else if (t instanceof Ot)
                            this.addCollection(t);
                        else {
                            if (!(t instanceof gt))
                                throw new UnsupportedOperationException(t.getClass().getName());
                            this.addCollection(t);
                        } }, addCollection: function (t) { for (var e = 0; e < t.getNumGeometries(); e++) {
                            var n = t.getGeometryN(e);
                            this.add(n);
                        } }, locate: function (t) { return R(this.parentGeom, Rt) && this.parentGeom.getNumGeometries() > 50 ? (null === this.areaPtLocator && (this.areaPtLocator = new Yn(this.parentGeom)), this.areaPtLocator.locate(t)) : this.ptLocator.locate(t, this.parentGeom); }, findEdge: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.lineEdgeMap.get(t);
                        } return Cn.prototype.findEdge.apply(this, arguments); }, interfaces_: function () { return []; }, getClass: function () { return $n; } }), $n.determineBoundary = function (t, e) { return t.isInBoundary(e) ? L.BOUNDARY : L.INTERIOR; }, e(tr.prototype, { getArgGeometry: function (t) { return this.arg[t].getGeometry(); }, setComputationPrecision: function (t) { this.resultPrecisionModel = t, this.li.setPrecisionModel(this.resultPrecisionModel); }, interfaces_: function () { return []; }, getClass: function () { return tr; } }), e(er.prototype, { compareTo: function (t) { var e = t, n = er.compareOriented(this.pts, this._orientation, e.pts, e._orientation); return n; }, interfaces_: function () { return [s]; }, getClass: function () { return er; } }), er.orientation = function (t) { return 1 === H.increasingDirection(t); }, er.compareOriented = function (t, e, n, r) { for (var i = e ? 1 : -1, s = r ? 1 : -1, o = e ? t.length : -1, a = r ? n.length : -1, u = e ? 0 : t.length - 1, l = r ? 0 : n.length - 1;;) {
                        var c = t[u].compareTo(n[l]);
                        if (0 !== c)
                            return c;
                        u += i, l += s;
                        var h = u === o, g = l === a;
                        if (h && !g)
                            return -1;
                        if (!h && g)
                            return 1;
                        if (h && g)
                            return 0;
                    } }, e(nr.prototype, { print: function (t) { t.print("MULTILINESTRING ( "); for (var e = 0; e < this.edges.size(); e++) {
                            var n = this.edges.get(e);
                            e > 0 && t.print(","), t.print("(");
                            for (var r = n.getCoordinates(), i = 0; i < r.length; i++)
                                i > 0 && t.print(","), t.print(r[i].x + " " + r[i].y);
                            t.println(")");
                        } t.print(")  "); }, addAll: function (t) { for (var e = t.iterator(); e.hasNext();)
                            this.add(e.next()); }, findEdgeIndex: function (t) { for (var e = 0; e < this.edges.size(); e++)
                            if (this.edges.get(e).equals(t))
                                return e; return -1; }, iterator: function () { return this.edges.iterator(); }, getEdges: function () { return this.edges; }, get: function (t) { return this.edges.get(t); }, findEqualEdge: function (t) { var e = new er(t.getCoordinates()), n = this.ocaMap.get(e); return n; }, add: function (t) { this.edges.add(t); var e = new er(t.getCoordinates()); this.ocaMap.put(e, t); }, interfaces_: function () { return []; }, getClass: function () { return nr; } }), c(rr, tr), e(rr.prototype, { insertUniqueEdge: function (t) { var e = this.edgeList.findEqualEdge(t); if (null !== e) {
                            var n = e.getLabel(), r = t.getLabel();
                            e.isPointwiseEqual(t) || (r = new fn(t.getLabel()), r.flip());
                            var i = e.getDepth();
                            i.isNull() && i.add(n), i.add(r), n.merge(r);
                        }
                        else
                            this.edgeList.add(t); }, getGraph: function () { return this.graph; }, cancelDuplicateResultEdges: function () { for (var t = this.graph.getEdgeEnds().iterator(); t.hasNext();) {
                            var e = t.next(), n = e.getSym();
                            e.isInResult() && n.isInResult() && (e.setInResult(!1), n.setInResult(!1));
                        } }, isCoveredByLA: function (t) { return this.isCovered(t, this.resultLineList) ? !0 : !!this.isCovered(t, this.resultPolyList); }, computeGeometry: function (t, e, n, r) { var i = new I; return i.addAll(t), i.addAll(e), i.addAll(n), i.isEmpty() ? rr.createEmptyResult(r, this.arg[0].getGeometry(), this.arg[1].getGeometry(), this.geomFact) : this.geomFact.buildGeometry(i); }, mergeSymLabels: function () { for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().mergeSymLabels();
                        } }, isCovered: function (t, e) { for (var n = e.iterator(); n.hasNext();) {
                            var r = n.next(), i = this.ptLocator.locate(t, r);
                            if (i !== L.EXTERIOR)
                                return !0;
                        } return !1; }, replaceCollapsedEdges: function () { for (var t = new I, e = this.edgeList.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()));
                        } this.edgeList.addAll(t); }, updateNodeLabelling: function () { for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
                            var e = t.next(), n = e.getEdges().getLabel();
                            e.getLabel().merge(n);
                        } }, getResultGeometry: function (t) { return this.computeOverlay(t), this.resultGeom; }, insertUniqueEdges: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.insertUniqueEdge(n);
                        } }, computeOverlay: function (t) { this.copyPoints(0), this.copyPoints(1), this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1), this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !0); var e = new I; this.arg[0].computeSplitEdges(e), this.arg[1].computeSplitEdges(e), this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), ln.checkValid(this.edgeList.getEdges()), this.graph.addEdges(this.edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges(); var n = new wn(this.geomFact); n.add(this.graph), this.resultPolyList = n.getPolygons(); var r = new Sn(this, this.geomFact, this.ptLocator); this.resultLineList = r.build(t); var i = new Ln(this, this.geomFact, this.ptLocator); this.resultPointList = i.build(t), this.resultGeom = this.computeGeometry(this.resultPointList, this.resultLineList, this.resultPolyList, t); }, labelIncompleteNode: function (t, e) { var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry()); t.getLabel().setLocation(e, n); }, copyPoints: function (t) { for (var e = this.arg[t].getNodeIterator(); e.hasNext();) {
                            var n = e.next(), r = this.graph.addNode(n.getCoordinate());
                            r.setLabel(t, n.getLabel().getLocation(t));
                        } }, findResultAreaEdges: function (t) { for (var e = this.graph.getEdgeEnds().iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getLabel();
                            r.isArea() && !n.isInteriorAreaEdge() && rr.isResultOfOp(r.getLocation(0, hn.RIGHT), r.getLocation(1, hn.RIGHT), t) && n.setInResult(!0);
                        } }, computeLabelsFromDepths: function () { for (var t = this.edgeList.iterator(); t.hasNext();) {
                            var e = t.next(), n = e.getLabel(), r = e.getDepth();
                            if (!r.isNull()) {
                                r.normalize();
                                for (var i = 0; 2 > i; i++)
                                    n.isNull(i) || !n.isArea() || r.isNull(i) || (0 === r.getDelta(i) ? n.toLine(i) : (g.isTrue(!r.isNull(i, hn.LEFT), "depth of LEFT side has not been initialized"), n.setLocation(i, hn.LEFT, r.getLocation(i, hn.LEFT)), g.isTrue(!r.isNull(i, hn.RIGHT), "depth of RIGHT side has not been initialized"), n.setLocation(i, hn.RIGHT, r.getLocation(i, hn.RIGHT))));
                            }
                        } }, computeLabelling: function () { for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().computeLabelling(this.arg);
                        } this.mergeSymLabels(), this.updateNodeLabelling(); }, labelIncompleteNodes: function () { for (var t = 0, e = this.graph.getNodes().iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getLabel();
                            n.isIsolated() && (t++, r.isNull(0) ? this.labelIncompleteNode(n, 0) : this.labelIncompleteNode(n, 1)), n.getEdges().updateLabelling(r);
                        } }, isCoveredByA: function (t) { return !!this.isCovered(t, this.resultPolyList); }, interfaces_: function () { return []; }, getClass: function () { return rr; } }), rr.overlayOp = function (t, e, n) { var r = new rr(t, e), i = r.getResultGeometry(n); return i; }, rr.intersection = function (t, e) { if (t.isEmpty() || e.isEmpty())
                        return rr.createEmptyResult(rr.INTERSECTION, t, e, t.getFactory()); if (t.isGeometryCollection()) {
                        var n = e;
                        return cn.map(t, { interfaces_: function () { return [MapOp]; }, map: function (t) { return t.intersection(n); } });
                    } return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), sr.overlayOp(t, e, rr.INTERSECTION); }, rr.symDifference = function (t, e) { if (t.isEmpty() || e.isEmpty()) {
                        if (t.isEmpty() && e.isEmpty())
                            return rr.createEmptyResult(rr.SYMDIFFERENCE, t, e, t.getFactory());
                        if (t.isEmpty())
                            return e.copy();
                        if (e.isEmpty())
                            return t.copy();
                    } return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), sr.overlayOp(t, e, rr.SYMDIFFERENCE); }, rr.resultDimension = function (t, e, n) { var r = e.getDimension(), i = n.getDimension(), s = -1; switch (t) {
                        case rr.INTERSECTION:
                            s = Math.min(r, i);
                            break;
                        case rr.UNION:
                            s = Math.max(r, i);
                            break;
                        case rr.DIFFERENCE:
                            s = r;
                            break;
                        case rr.SYMDIFFERENCE: s = Math.max(r, i);
                    } return s; }, rr.createEmptyResult = function (t, e, n, r) { var i = null; switch (rr.resultDimension(t, e, n)) {
                        case -1:
                            i = r.createGeometryCollection(new Array(0).fill(null));
                            break;
                        case 0:
                            i = r.createPoint();
                            break;
                        case 1:
                            i = r.createLineString();
                            break;
                        case 2: i = r.createPolygon();
                    } return i; }, rr.difference = function (t, e) { return t.isEmpty() ? rr.createEmptyResult(rr.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), sr.overlayOp(t, e, rr.DIFFERENCE)); }, rr.isResultOfOp = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = t.getLocation(0), r = t.getLocation(1);
                        return rr.isResultOfOp(n, r, e);
                    } if (3 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2];
                        switch (i === L.BOUNDARY && (i = L.INTERIOR), s === L.BOUNDARY && (s = L.INTERIOR), o) {
                            case rr.INTERSECTION: return i === L.INTERIOR && s === L.INTERIOR;
                            case rr.UNION: return i === L.INTERIOR || s === L.INTERIOR;
                            case rr.DIFFERENCE: return i === L.INTERIOR && s !== L.INTERIOR;
                            case rr.SYMDIFFERENCE: return i === L.INTERIOR && s !== L.INTERIOR || i !== L.INTERIOR && s === L.INTERIOR;
                        }
                        return !1;
                    } }, rr.INTERSECTION = 1, rr.UNION = 2, rr.DIFFERENCE = 3, rr.SYMDIFFERENCE = 4, e(ir.prototype, { selfSnap: function (t) { var e = new Ie(t), n = e.snapTo(t, this.snapTolerance); return n; }, removeCommonBits: function (t) { this.cbr = new we, this.cbr.add(t[0]), this.cbr.add(t[1]); var e = new Array(2).fill(null); return e[0] = this.cbr.removeCommonBits(t[0].copy()), e[1] = this.cbr.removeCommonBits(t[1].copy()), e; }, prepareResult: function (t) { return this.cbr.addCommonBits(t), t; }, getResultGeometry: function (t) { var e = this.snap(this.geom), n = rr.overlayOp(e[0], e[1], t); return this.prepareResult(n); }, checkValid: function (t) { t.isValid() || D.out.println("Snapped geometry is invalid"); }, computeSnapTolerance: function () { this.snapTolerance = Ie.computeOverlaySnapTolerance(this.geom[0], this.geom[1]); }, snap: function (t) { var e = this.removeCommonBits(t), n = Ie.snap(e[0], e[1], this.snapTolerance); return n; }, interfaces_: function () { return []; }, getClass: function () { return ir; } }), ir.overlayOp = function (t, e, n) { var r = new ir(t, e); return r.getResultGeometry(n); }, ir.union = function (t, e) { return ir.overlayOp(t, e, rr.UNION); }, ir.intersection = function (t, e) { return ir.overlayOp(t, e, rr.INTERSECTION); }, ir.symDifference = function (t, e) { return ir.overlayOp(t, e, rr.SYMDIFFERENCE); }, ir.difference = function (t, e) { return ir.overlayOp(t, e, rr.DIFFERENCE); }, e(sr.prototype, { getResultGeometry: function (t) { var e = null, n = !1, r = null; try {
                            e = rr.overlayOp(this.geom[0], this.geom[1], t);
                            var i = !0;
                            i && (n = !0);
                        }
                        catch (t) {
                            if (!(t instanceof l))
                                throw t;
                            r = t;
                        }
                        finally { } if (!n)
                            try {
                                e = ir.overlayOp(this.geom[0], this.geom[1], t);
                            }
                            catch (t) {
                                throw t instanceof l ? r : t;
                            }
                            finally { } return e; }, interfaces_: function () { return []; }, getClass: function () { return sr; } }), sr.overlayOp = function (t, e, n) { var r = new sr(t, e); return r.getResultGeometry(n); }, sr.union = function (t, e) { return sr.overlayOp(t, e, rr.UNION); }, sr.intersection = function (t, e) { return sr.overlayOp(t, e, rr.INTERSECTION); }, sr.symDifference = function (t, e) { return sr.overlayOp(t, e, rr.SYMDIFFERENCE); }, sr.difference = function (t, e) { return sr.overlayOp(t, e, rr.DIFFERENCE); }, e(or.prototype, { addPolygon: function (t) { if (t.isEmpty())
                            return null; var e = null, n = 0, r = this.horizontalBisector(t); if (0 === r.getLength())
                            n = 0, e = r.getCoordinate();
                        else {
                            var i = sr.overlayOp(r, t, rr.INTERSECTION), s = this.widestGeometry(i);
                            n = s.getEnvelopeInternal().getWidth(), e = or.centre(s.getEnvelopeInternal());
                        } (null === this.interiorPoint || n > this.maxWidth) && (this.interiorPoint = e, this.maxWidth = n); }, getInteriorPoint: function () { return this.interiorPoint; }, widestGeometry: function Uo() { if (arguments[0] instanceof gt) {
                            var t = arguments[0];
                            if (t.isEmpty())
                                return t;
                            for (var Uo = t.getGeometryN(0), e = 1; e < t.getNumGeometries(); e++)
                                t.getGeometryN(e).getEnvelopeInternal().getWidth() > Uo.getEnvelopeInternal().getWidth() && (Uo = t.getGeometryN(e));
                            return Uo;
                        } if (arguments[0] instanceof U) {
                            var n = arguments[0];
                            return n instanceof gt ? this.widestGeometry(n) : n;
                        } }, horizontalBisector: function (t) { var e = t.getEnvelopeInternal(), n = ar.getBisectorY(t); return this.factory.createLineString([new f(e.getMinX(), n), new f(e.getMaxX(), n)]); }, add: function (t) { if (t instanceof bt)
                            this.addPolygon(t);
                        else if (t instanceof gt)
                            for (var e = t, n = 0; n < e.getNumGeometries(); n++)
                                this.add(e.getGeometryN(n)); }, interfaces_: function () { return []; }, getClass: function () { return or; } }), or.centre = function (t) { return new f(or.avg(t.getMinX(), t.getMaxX()), or.avg(t.getMinY(), t.getMaxY())); }, or.avg = function (t, e) { return (t + e) / 2; }, e(ar.prototype, { updateInterval: function (t) { t <= this.centreY ? t > this.loY && (this.loY = t) : t > this.centreY && t < this.hiY && (this.hiY = t); }, getBisectorY: function () { this.process(this.poly.getExteriorRing()); for (var t = 0; t < this.poly.getNumInteriorRing(); t++)
                            this.process(this.poly.getInteriorRingN(t)); var e = or.avg(this.hiY, this.loY); return e; }, process: function (t) { for (var e = t.getCoordinateSequence(), n = 0; n < e.size(); n++) {
                            var r = e.getY(n);
                            this.updateInterval(r);
                        } }, interfaces_: function () { return []; }, getClass: function () { return ar; } }), ar.getBisectorY = function (t) { var e = new ar(t); return e.getBisectorY(); }, or.SafeBisectorFinder = ar, e(ur.prototype, { addEndpoints: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            if (t instanceof wt)
                                this.addEndpoints(t.getCoordinates());
                            else if (t instanceof gt)
                                for (var e = t, n = 0; n < e.getNumGeometries(); n++)
                                    this.addEndpoints(e.getGeometryN(n));
                        }
                        else if (arguments[0] instanceof Array) {
                            var r = arguments[0];
                            this.add(r[0]), this.add(r[r.length - 1]);
                        } }, getInteriorPoint: function () { return this.interiorPoint; }, addInterior: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            if (t instanceof wt)
                                this.addInterior(t.getCoordinates());
                            else if (t instanceof gt)
                                for (var e = t, n = 0; n < e.getNumGeometries(); n++)
                                    this.addInterior(e.getGeometryN(n));
                        }
                        else if (arguments[0] instanceof Array)
                            for (var r = arguments[0], n = 1; n < r.length - 1; n++)
                                this.add(r[n]); }, add: function (t) { var e = t.distance(this.centroid); e < this.minDistance && (this.interiorPoint = new f(t), this.minDistance = e); }, interfaces_: function () { return []; }, getClass: function () { return ur; } }), e(lr.prototype, { getInteriorPoint: function () { return this.interiorPoint; }, add: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            if (t instanceof Lt)
                                this.add(t.getCoordinate());
                            else if (t instanceof gt)
                                for (var e = t, n = 0; n < e.getNumGeometries(); n++)
                                    this.add(e.getGeometryN(n));
                        }
                        else if (arguments[0] instanceof f) {
                            var r = arguments[0], i = r.distance(this.centroid);
                            i < this.minDistance && (this.interiorPoint = new f(r), this.minDistance = i);
                        } }, interfaces_: function () { return []; }, getClass: function () { return lr; } }), e(cr.prototype, { interfaces_: function () { return []; }, getClass: function () { return cr; } }), cr.toDegrees = function (t) { return 180 * t / Math.PI; }, cr.normalize = function (t) { for (; t > Math.PI;)
                        t -= cr.PI_TIMES_2; for (; t <= -Math.PI;)
                        t += cr.PI_TIMES_2; return t; }, cr.angle = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return Math.atan2(t.y, t.x);
                    } if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1], r = n.x - e.x, i = n.y - e.y;
                        return Math.atan2(i, r);
                    } }, cr.isAcute = function (t, e, n) { var r = t.x - e.x, i = t.y - e.y, s = n.x - e.x, o = n.y - e.y, a = r * s + i * o; return a > 0; }, cr.isObtuse = function (t, e, n) { var r = t.x - e.x, i = t.y - e.y, s = n.x - e.x, o = n.y - e.y, a = r * s + i * o; return 0 > a; }, cr.interiorAngle = function (t, e, n) { var r = cr.angle(e, t), i = cr.angle(e, n); return Math.abs(i - r); }, cr.normalizePositive = function (t) { if (0 > t) {
                        for (; 0 > t;)
                            t += cr.PI_TIMES_2;
                        t >= cr.PI_TIMES_2 && (t = 0);
                    }
                    else {
                        for (; t >= cr.PI_TIMES_2;)
                            t -= cr.PI_TIMES_2;
                        0 > t && (t = 0);
                    } return t; }, cr.angleBetween = function (t, e, n) { var r = cr.angle(e, t), i = cr.angle(e, n); return cr.diff(r, i); }, cr.diff = function (t, e) { var n = null; return n = e > t ? e - t : t - e, n > Math.PI && (n = 2 * Math.PI - n), n; }, cr.toRadians = function (t) { return t * Math.PI / 180; }, cr.getTurn = function (t, e) { var n = Math.sin(e - t); return n > 0 ? cr.COUNTERCLOCKWISE : 0 > n ? cr.CLOCKWISE : cr.NONE; }, cr.angleBetweenOriented = function (t, e, n) { var r = cr.angle(e, t), i = cr.angle(e, n), s = i - r; return s <= -Math.PI ? s + cr.PI_TIMES_2 : s > Math.PI ? s - cr.PI_TIMES_2 : s; }, cr.PI_TIMES_2 = 2 * Math.PI, cr.PI_OVER_2 = Math.PI / 2, cr.PI_OVER_4 = Math.PI / 4, cr.COUNTERCLOCKWISE = ce.COUNTERCLOCKWISE, cr.CLOCKWISE = ce.CLOCKWISE, cr.NONE = ce.COLLINEAR, e(hr.prototype, { area: function () { return hr.area(this.p0, this.p1, this.p2); }, signedArea: function () { return hr.signedArea(this.p0, this.p1, this.p2); }, interpolateZ: function (t) { if (null === t)
                            throw new r("Supplied point is null."); return hr.interpolateZ(t, this.p0, this.p1, this.p2); }, longestSideLength: function () { return hr.longestSideLength(this.p0, this.p1, this.p2); }, isAcute: function () { return hr.isAcute(this.p0, this.p1, this.p2); }, circumcentre: function () { return hr.circumcentre(this.p0, this.p1, this.p2); }, area3D: function () { return hr.area3D(this.p0, this.p1, this.p2); }, centroid: function () { return hr.centroid(this.p0, this.p1, this.p2); }, inCentre: function () { return hr.inCentre(this.p0, this.p1, this.p2); }, interfaces_: function () { return []; }, getClass: function () { return hr; } }), hr.area = function (t, e, n) { return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2); }, hr.signedArea = function (t, e, n) { return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2; }, hr.det = function (t, e, n, r) { return t * r - e * n; }, hr.interpolateZ = function (t, e, n, r) { var i = e.x, s = e.y, o = n.x - i, a = r.x - i, u = n.y - s, l = r.y - s, c = o * l - a * u, h = t.x - i, g = t.y - s, f = (l * h - a * g) / c, d = (-u * h + o * g) / c, p = e.z + f * (n.z - e.z) + d * (r.z - e.z); return p; }, hr.longestSideLength = function (t, e, n) { var r = t.distance(e), i = e.distance(n), s = n.distance(t), o = r; return i > o && (o = i), s > o && (o = s), o; }, hr.isAcute = function (t, e, n) { return cr.isAcute(t, e, n) && cr.isAcute(e, n, t) ? !!cr.isAcute(n, t, e) : !1; }, hr.circumcentre = function (t, e, n) { var r = n.x, i = n.y, s = t.x - r, o = t.y - i, a = e.x - r, u = e.y - i, l = 2 * hr.det(s, o, a, u), c = hr.det(o, s * s + o * o, u, a * a + u * u), h = hr.det(s, s * s + o * o, a, a * a + u * u), g = r - c / l, d = i + h / l; return new f(g, d); }, hr.perpendicularBisector = function (t, e) { var n = e.x - t.x, r = e.y - t.y, i = new F(t.x + n / 2, t.y + r / 2, 1), s = new F(t.x - r + n / 2, t.y + n + r / 2, 1); return new F(i, s); }, hr.angleBisector = function (t, e, n) { var r = e.distance(t), i = e.distance(n), s = r / (r + i), o = n.x - t.x, a = n.y - t.y, u = new f(t.x + s * o, t.y + s * a); return u; }, hr.area3D = function (t, e, n) { var r = e.x - t.x, i = e.y - t.y, s = e.z - t.z, o = n.x - t.x, a = n.y - t.y, u = n.z - t.z, l = i * u - s * a, c = s * o - r * u, h = r * a - i * o, g = l * l + c * c + h * h, f = Math.sqrt(g) / 2; return f; }, hr.centroid = function (t, e, n) { var r = (t.x + e.x + n.x) / 3, i = (t.y + e.y + n.y) / 3; return new f(r, i); }, hr.inCentre = function (t, e, n) { var r = e.distance(n), i = t.distance(n), s = t.distance(e), o = r + i + s, a = (r * t.x + i * e.x + s * n.x) / o, u = (r * t.y + i * e.y + s * n.y) / o; return new f(a, u); }, e(gr.prototype, { getRadius: function () { return this.compute(), this.radius; }, getDiameter: function () { switch (this.compute(), this.extremalPts.length) {
                            case 0: return this.input.getFactory().createLineString();
                            case 1: return this.input.getFactory().createPoint(this.centre);
                        } var t = this.extremalPts[0], e = this.extremalPts[1]; return this.input.getFactory().createLineString([t, e]); }, getExtremalPoints: function () { return this.compute(), this.extremalPts; }, computeCirclePoints: function () { if (this.input.isEmpty())
                            return this.extremalPts = new Array(0).fill(null), null; if (1 === this.input.getNumPoints()) {
                            var t = this.input.getCoordinates();
                            return this.extremalPts = [new f(t[0])], null;
                        } var e = this.input.convexHull(), n = e.getCoordinates(), t = n; if (n[0].equals2D(n[n.length - 1]) && (t = new Array(n.length - 1).fill(null), H.copyDeep(n, 0, t, 0, n.length - 1)), t.length <= 2)
                            return this.extremalPts = H.copyDeep(t), null; for (var r = gr.lowestPoint(t), i = gr.pointWitMinAngleWithX(t, r), s = 0; s < t.length; s++) {
                            var o = gr.pointWithMinAngleWithSegment(t, r, i);
                            if (cr.isObtuse(r, o, i))
                                return this.extremalPts = [new f(r), new f(i)], null;
                            if (cr.isObtuse(o, r, i))
                                r = o;
                            else {
                                if (!cr.isObtuse(o, i, r))
                                    return this.extremalPts = [new f(r), new f(i), new f(o)], null;
                                i = o;
                            }
                        } g.shouldNeverReachHere("Logic failure in Minimum Bounding Circle algorithm!"); }, compute: function () { return null !== this.extremalPts ? null : (this.computeCirclePoints(), this.computeCentre(), void (null !== this.centre && (this.radius = this.centre.distance(this.extremalPts[0])))); }, getFarthestPoints: function () { switch (this.compute(), this.extremalPts.length) {
                            case 0: return this.input.getFactory().createLineString();
                            case 1: return this.input.getFactory().createPoint(this.centre);
                        } var t = this.extremalPts[0], e = this.extremalPts[this.extremalPts.length - 1]; return this.input.getFactory().createLineString([t, e]); }, getCircle: function () { if (this.compute(), null === this.centre)
                            return this.input.getFactory().createPolygon(); var t = this.input.getFactory().createPoint(this.centre); return 0 === this.radius ? t : t.buffer(this.radius); }, getCentre: function () { return this.compute(), this.centre; }, computeCentre: function () { switch (this.extremalPts.length) {
                            case 0:
                                this.centre = null;
                                break;
                            case 1:
                                this.centre = this.extremalPts[0];
                                break;
                            case 2:
                                this.centre = new f((this.extremalPts[0].x + this.extremalPts[1].x) / 2, (this.extremalPts[0].y + this.extremalPts[1].y) / 2);
                                break;
                            case 3: this.centre = hr.circumcentre(this.extremalPts[0], this.extremalPts[1], this.extremalPts[2]);
                        } }, interfaces_: function () { return []; }, getClass: function () { return gr; } }), gr.pointWitMinAngleWithX = function (t, e) { for (var n = i.MAX_VALUE, r = null, s = 0; s < t.length; s++) {
                        var o = t[s];
                        if (o !== e) {
                            var a = o.x - e.x, u = o.y - e.y;
                            0 > u && (u = -u);
                            var l = Math.sqrt(a * a + u * u), c = u / l;
                            n > c && (n = c, r = o);
                        }
                    } return r; }, gr.lowestPoint = function (t) { for (var e = t[0], n = 1; n < t.length; n++)
                        t[n].y < e.y && (e = t[n]); return e; }, gr.pointWithMinAngleWithSegment = function (t, e, n) { for (var r = i.MAX_VALUE, s = null, o = 0; o < t.length; o++) {
                        var a = t[o];
                        if (a !== e && a !== n) {
                            var u = cr.angleBetween(e, a, n);
                            r > u && (r = u, s = a);
                        }
                    } return s; }, e(fr.prototype, { getWidthCoordinate: function () { return this.computeMinimumDiameter(), this.minWidthPt; }, getSupportingSegment: function () { return this.computeMinimumDiameter(), this.inputGeom.getFactory().createLineString([this.minBaseSeg.p0, this.minBaseSeg.p1]); }, getDiameter: function () { if (this.computeMinimumDiameter(), null === this.minWidthPt)
                            return this.inputGeom.getFactory().createLineString(null); var t = this.minBaseSeg.project(this.minWidthPt); return this.inputGeom.getFactory().createLineString([t, this.minWidthPt]); }, computeWidthConvex: function (t) { t instanceof bt ? this.convexHullPts = t.getExteriorRing().getCoordinates() : this.convexHullPts = t.getCoordinates(), 0 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = null, this.minBaseSeg = null) : 1 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[0]) : 2 === this.convexHullPts.length || 3 === this.convexHullPts.length ? (this.minWidth = 0, this.minWidthPt = this.convexHullPts[0], this.minBaseSeg.p0 = this.convexHullPts[0], this.minBaseSeg.p1 = this.convexHullPts[1]) : this.computeConvexRingMinDiameter(this.convexHullPts); }, computeConvexRingMinDiameter: function (t) { this.minWidth = i.MAX_VALUE; for (var e = 1, n = new he, r = 0; r < t.length - 1; r++)
                            n.p0 = t[r], n.p1 = t[r + 1], e = this.findMaxPerpDistance(t, n, e); }, computeMinimumDiameter: function () { if (null !== this.minWidthPt)
                            return null; if (this.isConvex)
                            this.computeWidthConvex(this.inputGeom);
                        else {
                            var t = new ve(this.inputGeom).getConvexHull();
                            this.computeWidthConvex(t);
                        } }, getLength: function () { return this.computeMinimumDiameter(), this.minWidth; }, findMaxPerpDistance: function (t, e, n) { for (var r = e.distancePerpendicular(t[n]), i = r, s = n, o = s; i >= r;)
                            r = i, s = o, o = fr.nextIndex(t, s), i = e.distancePerpendicular(t[o]); return r < this.minWidth && (this.minPtIndex = s, this.minWidth = r, this.minWidthPt = t[this.minPtIndex], this.minBaseSeg = new he(e)), s; }, getMinimumRectangle: function () { if (this.computeMinimumDiameter(), 0 === this.minWidth)
                            return this.minBaseSeg.p0.equals2D(this.minBaseSeg.p1) ? this.inputGeom.getFactory().createPoint(this.minBaseSeg.p0) : this.minBaseSeg.toGeometry(this.inputGeom.getFactory()); for (var t = this.minBaseSeg.p1.x - this.minBaseSeg.p0.x, e = this.minBaseSeg.p1.y - this.minBaseSeg.p0.y, n = i.MAX_VALUE, r = -i.MAX_VALUE, s = i.MAX_VALUE, o = -i.MAX_VALUE, a = 0; a < this.convexHullPts.length; a++) {
                            var u = fr.computeC(t, e, this.convexHullPts[a]);
                            u > r && (r = u), n > u && (n = u);
                            var l = fr.computeC(-e, t, this.convexHullPts[a]);
                            l > o && (o = l), s > l && (s = l);
                        } var c = fr.computeSegmentForLine(-t, -e, o), h = fr.computeSegmentForLine(-t, -e, s), g = fr.computeSegmentForLine(-e, t, r), f = fr.computeSegmentForLine(-e, t, n), d = g.lineIntersection(c), p = f.lineIntersection(c), m = f.lineIntersection(h), v = g.lineIntersection(h), y = this.inputGeom.getFactory().createLinearRing([d, p, m, v, d]); return this.inputGeom.getFactory().createPolygon(y, null); }, interfaces_: function () { return []; }, getClass: function () { return fr; } }), fr.nextIndex = function (t, e) { return e++, e >= t.length && (e = 0), e; }, fr.computeC = function (t, e, n) { return t * n.y - e * n.x; }, fr.getMinimumDiameter = function (t) { return new fr(t).getDiameter(); }, fr.getMinimumRectangle = function (t) { return new fr(t).getMinimumRectangle(); }, fr.computeSegmentForLine = function (t, e, n) { var r = null, i = null; return Math.abs(e) > Math.abs(t) ? (r = new f(0, n / e), i = new f(1, n / e - t / e)) : (r = new f(n / t, 0), i = new f(n / t - e / t, 1)), new he(r, i); };
                    var ho = Object.freeze({ Centroid: fe, CGAlgorithms: ce, ConvexHull: ve, InteriorPointArea: or, InteriorPointLine: ur, InteriorPointPoint: lr, RobustLineIntersector: ae, MinimumBoundingCircle: gr, MinimumDiameter: fr });
                    e(dr.prototype, { getResultGeometry: function () { return new pr(this.distanceTolerance).transform(this.inputGeom); }, setDistanceTolerance: function (t) { if (0 >= t)
                            throw new r("Tolerance must be positive"); this.distanceTolerance = t; }, interfaces_: function () { return []; }, getClass: function () { return dr; } }), dr.densifyPoints = function (t, e, n) { for (var r = new he, i = new N, s = 0; s < t.length - 1; s++) {
                        r.p0 = t[s], r.p1 = t[s + 1], i.add(r.p0, !1);
                        var o = r.getLength(), a = Math.trunc(o / e) + 1;
                        if (a > 1)
                            for (var u = o / a, l = 1; a > l; l++) {
                                var c = l * u / o, h = r.pointAlong(c);
                                n.makePrecise(h), i.add(h, !1);
                            }
                    } return i.add(t[t.length - 1], !1), i.toCoordinateArray(); }, dr.densify = function (t, e) { var n = new dr(t); return n.setDistanceTolerance(e), n.getResultGeometry(); }, c(pr, xe), e(pr.prototype, { transformMultiPolygon: function (t, e) { var n = xe.prototype.transformMultiPolygon.call(this, t, e); return this.createValidArea(n); }, transformPolygon: function (t, e) { var n = xe.prototype.transformPolygon.call(this, t, e); return e instanceof Ot ? n : this.createValidArea(n); }, transformCoordinates: function (t, e) { var n = t.toCoordinateArray(), r = dr.densifyPoints(n, this.distanceTolerance, e.getPrecisionModel()); return e instanceof wt && 1 === r.length && (r = new Array(0).fill(null)), this.factory.getCoordinateSequenceFactory().create(r); }, createValidArea: function (t) { return t.buffer(0); }, interfaces_: function () { return []; }, getClass: function () { return pr; } }), dr.DensifyTransformer = pr;
                    var go = Object.freeze({ Densifier: dr });
                    e(mr.prototype, { find: function (t) { var e = this; do {
                            if (null === e)
                                return null;
                            if (e.dest().equals2D(t))
                                return e;
                            e = e.oNext();
                        } while (e !== this); return null; }, dest: function () { return this._sym._orig; }, oNext: function () { return this._sym._next; }, insert: function (t) { if (this.oNext() === this)
                            return this.insertAfter(t), null; var e = this.compareTo(t), n = this; do {
                            var r = n.oNext(), i = r.compareTo(t);
                            if (i !== e || r === this)
                                return n.insertAfter(t), null;
                            n = r;
                        } while (n !== this); g.shouldNeverReachHere(); }, insertAfter: function (t) { g.equals(this._orig, t.orig()); var e = this.oNext(); this._sym.setNext(t), t.sym().setNext(e); }, degree: function qo() { var qo = 0, t = this; do
                            qo++, t = t.oNext();
                        while (t !== this); return qo; }, equals: function () { if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            return this._orig.equals2D(t) && this._sym._orig.equals(e);
                        } }, deltaY: function () { return this._sym._orig.y - this._orig.y; }, sym: function () { return this._sym; }, prev: function () { return this._sym.next()._sym; }, compareAngularDirection: function (t) { var e = this.deltaX(), n = this.deltaY(), r = t.deltaX(), i = t.deltaY(); if (e === r && n === i)
                            return 0; var s = Qe.quadrant(e, n), o = Qe.quadrant(r, i); return s > o ? 1 : o > s ? -1 : ce.computeOrientation(t._orig, t.dest(), this.dest()); }, prevNode: function () { for (var t = this; 2 === t.degree();)
                            if (t = t.prev(), t === this)
                                return null; return t; }, compareTo: function (t) { var e = t, n = this.compareAngularDirection(e); return n; }, next: function () { return this._next; }, setSym: function (t) { this._sym = t; }, orig: function () { return this._orig; }, toString: function () { return "HE(" + this._orig.x + " " + this._orig.y + ", " + this._sym._orig.x + " " + this._sym._orig.y + ")"; }, setNext: function (t) { this._next = t; }, init: function (t) { this.setSym(t), t.setSym(this), this.setNext(t), t.setNext(this); }, deltaX: function () { return this._sym._orig.x - this._orig.x; }, interfaces_: function () { return []; }, getClass: function () { return mr; } }), mr.init = function (t, e) { if (null !== t._sym || null !== e._sym || null !== t._next || null !== e._next)
                        throw new IllegalStateException("Edges are already initialized"); return t.init(e), t; }, mr.create = function (t, e) { var n = new mr(t), r = new mr(e); return n.init(r), n; }, c(vr, mr), e(vr.prototype, { mark: function () { this._isMarked = !0; }, setMark: function (t) { this._isMarked = t; }, isMarked: function () { return this._isMarked; }, interfaces_: function () { return []; }, getClass: function () { return vr; } }), vr.setMarkBoth = function (t, e) { t.setMark(e), t.sym().setMark(e); }, vr.isMarked = function (t) { return t.isMarked(); }, vr.setMark = function (t, e) { t.setMark(e); }, vr.markBoth = function (t) { t.mark(), t.sym().mark(); }, vr.mark = function (t) { t.mark(); }, e(yr.prototype, { insert: function (t, e, n) { var r = this.create(t, e); null !== n ? n.insert(r) : this.vertexMap.put(t, r); var i = this.vertexMap.get(e); return null !== i ? i.insert(r.sym()) : this.vertexMap.put(e, r.sym()), r; }, create: function (t, e) { var n = this.createEdge(t), r = this.createEdge(e); return mr.init(n, r), n; }, createEdge: function (t) { return new mr(t); }, addEdge: function (t, e) { if (!yr.isValidEdge(t, e))
                            return null; var n = this.vertexMap.get(t), r = null; if (null !== n && (r = n.find(e)), null !== r)
                            return r; var i = this.insert(t, e, n); return i; }, getVertexEdges: function () { return this.vertexMap.values(); }, findEdge: function (t, e) { var n = this.vertexMap.get(t); return null === n ? null : n.find(e); }, interfaces_: function () { return []; }, getClass: function () { return yr; } }), yr.isValidEdge = function (t, e) { var n = e.compareTo(t); return 0 !== n; }, c(xr, vr), e(xr.prototype, { setStart: function () { this._isStart = !0; }, isStart: function () { return this._isStart; }, interfaces_: function () { return []; }, getClass: function () { return xr; } }), c(Er, yr),
                        e(Er.prototype, { createEdge: function (t) { return new xr(t); }, interfaces_: function () { return []; }, getClass: function () { return Er; } }), e(Ir.prototype, { addLine: function (t) { this.lines.add(this.factory.createLineString(t.toCoordinateArray())); }, updateRingStartEdge: function (t) { return t.isStart() || (t = t.sym(), t.isStart()) ? null === this.ringStartEdge ? (this.ringStartEdge = t, null) : void (t.orig().compareTo(this.ringStartEdge.orig()) < 0 && (this.ringStartEdge = t)) : null; }, getResult: function () { return null === this.result && this.computeResult(), this.result; }, process: function (t) { var e = t.prevNode(); null === e && (e = t), this.stackEdges(e), this.buildLines(); }, buildRing: function (t) { var e = new N, n = t; for (e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
                            var r = n.next();
                            if (r === t)
                                break;
                            e.add(r.orig().copy(), !1), n = r;
                        } e.add(n.dest().copy(), !1), this.addLine(e); }, buildLine: function (t) { var e = new N, n = t; for (this.ringStartEdge = null, vr.markBoth(n), e.add(n.orig().copy(), !1); 2 === n.sym().degree();) {
                            this.updateRingStartEdge(n);
                            var r = n.next();
                            if (r === t)
                                return this.buildRing(this.ringStartEdge), null;
                            e.add(r.orig().copy(), !1), n = r, vr.markBoth(n);
                        } e.add(n.dest().copy(), !1), this.stackEdges(n.sym()), this.addLine(e); }, stackEdges: function (t) { var e = t; do
                            vr.isMarked(e) || this.nodeEdgeStack.add(e), e = e.oNext();
                        while (e !== t); }, computeResult: function () { for (var t = this.graph.getVertexEdges(), e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            vr.isMarked(n) || this.process(n);
                        } this.result = this.factory.buildGeometry(this.lines); }, buildLines: function () { for (; !this.nodeEdgeStack.empty();) {
                            var t = this.nodeEdgeStack.pop();
                            vr.isMarked(t) || this.buildLine(t);
                        } }, add: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            t.apply({ interfaces_: function () { return [k]; }, filter: function (t) { t instanceof wt && this.add(t); } });
                        }
                        else if (R(arguments[0], m))
                            for (var e = arguments[0], n = e.iterator(); n.hasNext();) {
                                var r = n.next();
                                this.add(r);
                            }
                        else if (arguments[0] instanceof wt) {
                            var i = arguments[0];
                            null === this.factory && (this.factory = i.getFactory());
                            for (var s = i.getCoordinateSequence(), o = !1, n = 1; n < s.size(); n++) {
                                var a = this.graph.addEdge(s.getCoordinate(n - 1), s.getCoordinate(n));
                                null !== a && (o || (a.setStart(), o = !0));
                            }
                        } }, interfaces_: function () { return []; }, getClass: function () { return Ir; } }), Ir.dissolve = function (t) { var e = new Ir; return e.add(t), e.getResult(); };
                    var fo = Object.freeze({ LineDissolver: Ir });
                    e(Nr.prototype, { hasChildren: function () { for (var t = 0; 4 > t; t++)
                            if (null !== this.subnode[t])
                                return !0; return !1; }, isPrunable: function () { return !(this.hasChildren() || this.hasItems()); }, addAllItems: function (t) { t.addAll(this.items); for (var e = 0; 4 > e; e++)
                            null !== this.subnode[e] && this.subnode[e].addAllItems(t); return t; }, getNodeCount: function () { for (var t = 0, e = 0; 4 > e; e++)
                            null !== this.subnode[e] && (t += this.subnode[e].size()); return t + 1; }, size: function () { for (var t = 0, e = 0; 4 > e; e++)
                            null !== this.subnode[e] && (t += this.subnode[e].size()); return t + this.items.size(); }, addAllItemsFromOverlapping: function (t, e) { if (!this.isSearchMatch(t))
                            return null; e.addAll(this.items); for (var n = 0; 4 > n; n++)
                            null !== this.subnode[n] && this.subnode[n].addAllItemsFromOverlapping(t, e); }, visitItems: function (t, e) { for (var n = this.items.iterator(); n.hasNext();)
                            e.visitItem(n.next()); }, hasItems: function () { return !this.items.isEmpty(); }, remove: function (t, e) { if (!this.isSearchMatch(t))
                            return !1; for (var n = !1, r = 0; 4 > r; r++)
                            if (null !== this.subnode[r] && (n = this.subnode[r].remove(t, e))) {
                                this.subnode[r].isPrunable() && (this.subnode[r] = null);
                                break;
                            } return n ? n : n = this.items.remove(e); }, visit: function (t, e) { if (!this.isSearchMatch(t))
                            return null; this.visitItems(t, e); for (var n = 0; 4 > n; n++)
                            null !== this.subnode[n] && this.subnode[n].visit(t, e); }, getItems: function () { return this.items; }, depth: function () { for (var t = 0, e = 0; 4 > e; e++)
                            if (null !== this.subnode[e]) {
                                var n = this.subnode[e].depth();
                                n > t && (t = n);
                            } return t + 1; }, isEmpty: function Bo() { var Bo = !0; this.items.isEmpty() || (Bo = !1); for (var t = 0; 4 > t; t++)
                            null !== this.subnode[t] && (this.subnode[t].isEmpty() || (Bo = !1)); return Bo; }, add: function (t) { this.items.add(t); }, interfaces_: function () { return [u]; }, getClass: function () { return Nr; } }), Nr.getSubnodeIndex = function (t, e, n) { var r = -1; return t.getMinX() >= e && (t.getMinY() >= n && (r = 3), t.getMaxY() <= n && (r = 1)), t.getMaxX() <= e && (t.getMinY() >= n && (r = 2), t.getMaxY() <= n && (r = 0)), r; }, Cr.exponent = function (t) { return wr(64, t) - 1023; }, Cr.powerOf2 = function (t) { return Math.pow(2, t); }, e(Sr.prototype, { getLevel: function () { return this.level; }, computeKey: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            for (this.level = Sr.computeQuadLevel(t), this.env = new C, this.computeKey(this.level, t); !this.env.contains(t);)
                                this.level += 1, this.computeKey(this.level, t);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1], r = Cr.powerOf2(e);
                            this.pt.x = Math.floor(n.getMinX() / r) * r, this.pt.y = Math.floor(n.getMinY() / r) * r, this.env.init(this.pt.x, this.pt.x + r, this.pt.y, this.pt.y + r);
                        } }, getEnvelope: function () { return this.env; }, getCentre: function () { return new f((this.env.getMinX() + this.env.getMaxX()) / 2, (this.env.getMinY() + this.env.getMaxY()) / 2); }, getPoint: function () { return this.pt; }, interfaces_: function () { return []; }, getClass: function () { return Sr; } }), Sr.computeQuadLevel = function (t) { var e = t.getWidth(), n = t.getHeight(), r = e > n ? e : n, i = Cr.exponent(r) + 1; return i; }, c(Lr, Nr), e(Lr.prototype, { find: function (t) { var e = Nr.getSubnodeIndex(t, this.centrex, this.centrey); if (-1 === e)
                            return this; if (null !== this.subnode[e]) {
                            var n = this.subnode[e];
                            return n.find(t);
                        } return this; }, isSearchMatch: function (t) { return this.env.intersects(t); }, getSubnode: function (t) { return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t]; }, getEnvelope: function () { return this.env; }, getNode: function (t) { var e = Nr.getSubnodeIndex(t, this.centrex, this.centrey); if (-1 !== e) {
                            var n = this.getSubnode(e);
                            return n.getNode(t);
                        } return this; }, createSubnode: function (t) { var e = 0, n = 0, r = 0, i = 0; switch (t) {
                            case 0:
                                e = this.env.getMinX(), n = this.centrex, r = this.env.getMinY(), i = this.centrey;
                                break;
                            case 1:
                                e = this.centrex, n = this.env.getMaxX(), r = this.env.getMinY(), i = this.centrey;
                                break;
                            case 2:
                                e = this.env.getMinX(), n = this.centrex, r = this.centrey, i = this.env.getMaxY();
                                break;
                            case 3: e = this.centrex, n = this.env.getMaxX(), r = this.centrey, i = this.env.getMaxY();
                        } var s = new C(e, n, r, i), o = new Lr(s, this.level - 1); return o; }, insertNode: function (t) { g.isTrue(null === this.env || this.env.contains(t.env)); var e = Nr.getSubnodeIndex(t.env, this.centrex, this.centrey); if (t.level === this.level - 1)
                            this.subnode[e] = t;
                        else {
                            var n = this.createSubnode(e);
                            n.insertNode(t), this.subnode[e] = n;
                        } }, interfaces_: function () { return []; }, getClass: function () { return Lr; } }), Lr.createNode = function (t) { var e = new Sr(t), n = new Lr(e.getEnvelope(), e.getLevel()); return n; }, Lr.createExpanded = function (t, e) { var n = new C(e); null !== t && n.expandToInclude(t.env); var r = Lr.createNode(n); return null !== t && r.insertNode(t), r; }, e(Rr.prototype, { interfaces_: function () { return []; }, getClass: function () { return Rr; } }), Rr.isZeroWidth = function (t, e) { var n = e - t; if (0 === n)
                        return !0; var r = Math.max(Math.abs(t), Math.abs(e)), i = n / r, s = Cr.exponent(i); return s <= Rr.MIN_BINARY_EXPONENT; }, Rr.MIN_BINARY_EXPONENT = -50, c(br, Nr), e(br.prototype, { insert: function (t, e) { var n = Nr.getSubnodeIndex(t, br.origin.x, br.origin.y); if (-1 === n)
                            return this.add(e), null; var r = this.subnode[n]; if (null === r || !r.getEnvelope().contains(t)) {
                            var i = Lr.createExpanded(r, t);
                            this.subnode[n] = i;
                        } this.insertContained(this.subnode[n], t, e); }, isSearchMatch: function (t) { return !0; }, insertContained: function (t, e, n) { g.isTrue(t.getEnvelope().contains(e)); var r = Rr.isZeroWidth(e.getMinX(), e.getMaxX()), i = Rr.isZeroWidth(e.getMinY(), e.getMaxY()), s = null; s = r || i ? t.find(e) : t.getNode(e), s.add(n); }, interfaces_: function () { return []; }, getClass: function () { return br; } }), br.origin = new f(0, 0), e(Tr.prototype, { size: function () { return null !== this.root ? this.root.size() : 0; }, insert: function (t, e) { this.collectStats(t); var n = Tr.ensureExtent(t, this.minExtent); this.root.insert(n, e); }, query: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = new Vn;
                            return this.query(t, e), e.getItems();
                        } if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            this.root.visit(n, r);
                        } }, queryAll: function () { var t = new I; return this.root.addAllItems(t), t; }, remove: function (t, e) { var n = Tr.ensureExtent(t, this.minExtent); return this.root.remove(n, e); }, collectStats: function (t) { var e = t.getWidth(); e < this.minExtent && e > 0 && (this.minExtent = e); var n = t.getHeight(); n < this.minExtent && n > 0 && (this.minExtent = n); }, depth: function () { return null !== this.root ? this.root.depth() : 0; }, isEmpty: function () { return null === this.root; }, interfaces_: function () { return [Fe, u]; }, getClass: function () { return Tr; } }), Tr.ensureExtent = function (t, e) { var n = t.getMinX(), r = t.getMaxX(), i = t.getMinY(), s = t.getMaxY(); return n !== r && i !== s ? t : (n === r && (n -= e / 2, r = n + e / 2), i === s && (i -= e / 2, s = i + e / 2), new C(n, r, i, s)); }, Tr.serialVersionUID = -0x678b60c967a25400;
                    var po = Object.freeze({ Quadtree: Tr }), mo = Object.freeze({ STRtree: ze }), vo = Object.freeze({ quadtree: po, strtree: mo }), yo = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"];
                    e(Pr.prototype, { read: function (t) { var e = void 0; e = "string" == typeof t ? JSON.parse(t) : t; var n = e.type; if (!xo[n])
                            throw new Error("Unknown GeoJSON type: " + e.type); return -1 !== yo.indexOf(n) ? xo[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? xo[n].apply(this, [e.geometries]) : xo[n].apply(this, [e]); }, write: function (t) { var e = t.getGeometryType(); if (!Eo[e])
                            throw new Error("Geometry is not supported"); return Eo[e].apply(this, [t]); } });
                    var xo = { Feature: function (t) { var e = {}; for (var n in t)
                            e[n] = t[n]; if (t.geometry) {
                            var r = t.geometry.type;
                            if (!xo[r])
                                throw new Error("Unknown GeoJSON type: " + t.type);
                            e.geometry = this.read(t.geometry);
                        } return t.bbox && (e.bbox = xo.bbox.apply(this, [t.bbox])), e; }, FeatureCollection: function (t) { var e = {}; if (t.features) {
                            e.features = [];
                            for (var n = 0; n < t.features.length; ++n)
                                e.features.push(this.read(t.features[n]));
                        } return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])), e; }, coordinates: function zo(t) { for (var zo = [], e = 0; e < t.length; ++e) {
                            var n = t[e];
                            zo.push(new f(n[0], n[1]));
                        } return zo; }, bbox: function (t) { return this.geometryFactory.createLinearRing([new f(t[0], t[1]), new f(t[2], t[1]), new f(t[2], t[3]), new f(t[0], t[3]), new f(t[0], t[1])]); }, Point: function (t) { var e = new f(t[0], t[1]); return this.geometryFactory.createPoint(e); }, MultiPoint: function (t) { for (var e = [], n = 0; n < t.length; ++n)
                            e.push(xo.Point.apply(this, [t[n]])); return this.geometryFactory.createMultiPoint(e); }, LineString: function (t) { var e = xo.coordinates.apply(this, [t]); return this.geometryFactory.createLineString(e); }, MultiLineString: function (t) { for (var e = [], n = 0; n < t.length; ++n)
                            e.push(xo.LineString.apply(this, [t[n]])); return this.geometryFactory.createMultiLineString(e); }, Polygon: function (t) { for (var e = xo.coordinates.apply(this, [t[0]]), n = this.geometryFactory.createLinearRing(e), r = [], i = 1; i < t.length; ++i) {
                            var s = t[i], o = xo.coordinates.apply(this, [s]), a = this.geometryFactory.createLinearRing(o);
                            r.push(a);
                        } return this.geometryFactory.createPolygon(n, r); }, MultiPolygon: function (t) { for (var e = [], n = 0; n < t.length; ++n) {
                            var r = t[n];
                            e.push(xo.Polygon.apply(this, [r]));
                        } return this.geometryFactory.createMultiPolygon(e); }, GeometryCollection: function (t) { for (var e = [], n = 0; n < t.length; ++n) {
                            var r = t[n];
                            e.push(this.read(r));
                        } return this.geometryFactory.createGeometryCollection(e); } }, Eo = { coordinate: function (t) { return [t.x, t.y]; }, Point: function (t) { var e = Eo.coordinate.apply(this, [t.getCoordinate()]); return { type: "Point", coordinates: e }; }, MultiPoint: function (t) { for (var e = [], n = 0; n < t.geometries.length; ++n) {
                            var r = t.geometries[n], i = Eo.Point.apply(this, [r]);
                            e.push(i.coordinates);
                        } return { type: "MultiPoint", coordinates: e }; }, LineString: function (t) { for (var e = [], n = t.getCoordinates(), r = 0; r < n.length; ++r) {
                            var i = n[r];
                            e.push(Eo.coordinate.apply(this, [i]));
                        } return { type: "LineString", coordinates: e }; }, MultiLineString: function (t) { for (var e = [], n = 0; n < t.geometries.length; ++n) {
                            var r = t.geometries[n], i = Eo.LineString.apply(this, [r]);
                            e.push(i.coordinates);
                        } return { type: "MultiLineString", coordinates: e }; }, Polygon: function (t) { var e = [], n = Eo.LineString.apply(this, [t.shell]); e.push(n.coordinates); for (var r = 0; r < t.holes.length; ++r) {
                            var i = t.holes[r], s = Eo.LineString.apply(this, [i]);
                            e.push(s.coordinates);
                        } return { type: "Polygon", coordinates: e }; }, MultiPolygon: function (t) { for (var e = [], n = 0; n < t.geometries.length; ++n) {
                            var r = t.geometries[n], i = Eo.Polygon.apply(this, [r]);
                            e.push(i.coordinates);
                        } return { type: "MultiPolygon", coordinates: e }; }, GeometryCollection: function (t) { for (var e = [], n = 0; n < t.geometries.length; ++n) {
                            var r = t.geometries[n], i = r.getGeometryType();
                            e.push(Eo[i].apply(this, [r]));
                        } return { type: "GeometryCollection", geometries: e }; } };
                    e(Or.prototype, { read: function (t) { var e = this.parser.read(t); return this.precisionModel.getType() === ee.FIXED && this.reducePrecision(e), e; }, reducePrecision: function (t) { var e, n; if (t.coordinate)
                            this.precisionModel.makePrecise(t.coordinate);
                        else if (t.points)
                            for (e = 0, n = t.points.length; n > e; e++)
                                this.precisionModel.makePrecise(t.points[e]);
                        else if (t.geometries)
                            for (e = 0, n = t.geometries.length; n > e; e++)
                                this.reducePrecision(t.geometries[e]); } }), e(Mr.prototype, { write: function (t) { return this.parser.write(t); } }), e(_r.prototype, { read: function (t) { var e = this.parser.read(t); return this.precisionModel.getType() === ee.FIXED && this.reducePrecision(e), e; }, reducePrecision: function (t) { if (t.coordinate)
                            this.precisionModel.makePrecise(t.coordinate);
                        else if (t.points)
                            for (var e = 0, n = t.points.coordinates.length; n > e; e++)
                                this.precisionModel.makePrecise(t.points.coordinates[e]);
                        else if (t.geometries)
                            for (var r = 0, i = t.geometries.length; i > r; r++)
                                this.reducePrecision(t.geometries[r]); } }), e(Dr.prototype, { read: function (t) { return t instanceof ol.geom.Point ? this.convertFromPoint(t) : t instanceof ol.geom.LineString ? this.convertFromLineString(t) : t instanceof ol.geom.LinearRing ? this.convertFromLinearRing(t) : t instanceof ol.geom.Polygon ? this.convertFromPolygon(t) : t instanceof ol.geom.MultiPoint ? this.convertFromMultiPoint(t) : t instanceof ol.geom.MultiLineString ? this.convertFromMultiLineString(t) : t instanceof ol.geom.MultiPolygon ? this.convertFromMultiPolygon(t) : t instanceof ol.geom.GeometryCollection ? this.convertFromCollection(t) : void 0; }, convertFromPoint: function (t) { var e = t.getCoordinates(); return this.geometryFactory.createPoint(new f(e[0], e[1])); }, convertFromLineString: function (t) { return this.geometryFactory.createLineString(t.getCoordinates().map(function (t) { return new f(t[0], t[1]); })); }, convertFromLinearRing: function (t) { return this.geometryFactory.createLinearRing(t.getCoordinates().map(function (t) { return new f(t[0], t[1]); })); }, convertFromPolygon: function (t) { for (var e = t.getLinearRings(), n = null, r = [], i = 0; i < e.length; i++) {
                            var s = this.convertFromLinearRing(e[i]);
                            0 === i ? n = s : r.push(s);
                        } return this.geometryFactory.createPolygon(n, r); }, convertFromMultiPoint: function (t) { var e = t.getPoints().map(function (t) { return this.convertFromPoint(t); }, this); return this.geometryFactory.createMultiPoint(e); }, convertFromMultiLineString: function (t) { var e = t.getLineStrings().map(function (t) { return this.convertFromLineString(t); }, this); return this.geometryFactory.createMultiLineString(e); }, convertFromMultiPolygon: function (t) { var e = t.getPolygons().map(function (t) { return this.convertFromPolygon(t); }, this); return this.geometryFactory.createMultiPolygon(e); }, convertFromCollection: function (t) { var e = t.getGeometries().map(function (t) { return this.read(t); }, this); return this.geometryFactory.createGeometryCollection(e); }, write: function (t) { return "Point" === t.getGeometryType() ? this.convertToPoint(t.getCoordinate()) : "LineString" === t.getGeometryType() ? this.convertToLineString(t) : "LinearRing" === t.getGeometryType() ? this.convertToLinearRing(t) : "Polygon" === t.getGeometryType() ? this.convertToPolygon(t) : "MultiPoint" === t.getGeometryType() ? this.convertToMultiPoint(t) : "MultiLineString" === t.getGeometryType() ? this.convertToMultiLineString(t) : "MultiPolygon" === t.getGeometryType() ? this.convertToMultiPolygon(t) : "GeometryCollection" === t.getGeometryType() ? this.convertToCollection(t) : void 0; }, convertToPoint: function (t) { return new ol.geom.Point([t.x, t.y]); }, convertToLineString: function (t) { var e = t.points.coordinates.map(Ar); return new ol.geom.LineString(e); }, convertToLinearRing: function (t) { var e = t.points.coordinates.map(Ar); return new ol.geom.LinearRing(e); }, convertToPolygon: function (t) { for (var e = [t.shell.points.coordinates.map(Ar)], n = 0; n < t.holes.length; n++)
                            e.push(t.holes[n].points.coordinates.map(Ar)); return new ol.geom.Polygon(e); }, convertToMultiPoint: function (t) { return new ol.geom.MultiPoint(t.getCoordinates().map(Ar)); }, convertToMultiLineString: function (t) { for (var e = [], n = 0; n < t.geometries.length; n++)
                            e.push(this.convertToLineString(t.geometries[n]).getCoordinates()); return new ol.geom.MultiLineString(e); }, convertToMultiPolygon: function (t) { for (var e = [], n = 0; n < t.geometries.length; n++)
                            e.push(this.convertToPolygon(t.geometries[n]).getCoordinates()); return new ol.geom.MultiPolygon(e); }, convertToCollection: function (t) { for (var e = [], n = 0; n < t.geometries.length; n++) {
                            var r = t.geometries[n];
                            e.push(this.write(r));
                        } return new ol.geom.GeometryCollection(e); } });
                    var Io = Object.freeze({ GeoJSONReader: Or, GeoJSONWriter: Mr, OL3Parser: Dr, WKTReader: _r, WKTWriter: se });
                    e(Fr.prototype, { rescale: function () { if (R(arguments[0], m))
                            for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.rescale(n.getCoordinates());
                            }
                        else if (arguments[0] instanceof Array) {
                            var r = arguments[0], i = null, s = null;
                            2 === r.length && (i = new f(r[0]), s = new f(r[1]));
                            for (var e = 0; e < r.length; e++)
                                r[e].x = r[e].x / this.scaleFactor + this.offsetX, r[e].y = r[e].y / this.scaleFactor + this.offsetY;
                            2 === r.length && r[0].equals2D(r[1]) && D.out.println(r);
                        } }, scale: function () { if (R(arguments[0], m)) {
                            for (var t = arguments[0], e = new I, n = t.iterator(); n.hasNext();) {
                                var r = n.next();
                                e.add(new Ze(this.scale(r.getCoordinates()), r.getData()));
                            }
                            return e;
                        } if (arguments[0] instanceof Array) {
                            for (var i = arguments[0], s = new Array(i.length).fill(null), n = 0; n < i.length; n++)
                                s[n] = new f(Math.round((i[n].x - this.offsetX) * this.scaleFactor), Math.round((i[n].y - this.offsetY) * this.scaleFactor), i[n].z);
                            var o = H.removeRepeatedPoints(s);
                            return o;
                        } }, isIntegerPrecision: function () { return 1 === this.scaleFactor; }, getNodedSubstrings: function () { var t = this.noder.getNodedSubstrings(); return this.isScaled && this.rescale(t), t; }, computeNodes: function (t) { var e = t; this.isScaled && (e = this.scale(t)), this.noder.computeNodes(e); }, interfaces_: function () { return [tn]; }, getClass: function () { return Fr; } });
                    var No = Object.freeze({ MCIndexNoder: nn, ScaledNoder: Fr, SegmentString: Pe });
                    e(Gr.prototype, { isSimpleMultiPoint: function (t) { if (t.isEmpty())
                            return !0; for (var e = new at, n = 0; n < t.getNumGeometries(); n++) {
                            var r = t.getGeometryN(n), i = r.getCoordinate();
                            if (e.contains(i))
                                return this.nonSimpleLocation = i, !1;
                            e.add(i);
                        } return !0; }, isSimplePolygonal: function (t) { for (var e = zn.getLines(t), n = e.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (!this.isSimpleLinearGeometry(r))
                                return !1;
                        } return !0; }, hasClosedEndpointIntersection: function (t) { for (var e = new it, n = t.getEdgeIterator(); n.hasNext();) {
                            var r = n.next(), i = (r.getMaximumSegmentIndex(), r.isClosed()), s = r.getCoordinate(0);
                            this.addEndpoint(e, s, i);
                            var o = r.getCoordinate(r.getNumPoints() - 1);
                            this.addEndpoint(e, o, i);
                        } for (var n = e.values().iterator(); n.hasNext();) {
                            var a = n.next();
                            if (a.isClosed && 2 !== a.degree)
                                return this.nonSimpleLocation = a.getCoordinate(), !0;
                        } return !1; }, getNonSimpleLocation: function () { return this.nonSimpleLocation; }, isSimpleLinearGeometry: function (t) { if (t.isEmpty())
                            return !0; var e = new $n(0, t), n = new ae, r = e.computeSelfNodes(n, !0); return r.hasIntersection() ? r.hasProperIntersection() ? (this.nonSimpleLocation = r.getProperIntersectionPoint(), !1) : this.hasNonEndpointIntersection(e) ? !1 : !this.isClosedEndpointsInInterior || !this.hasClosedEndpointIntersection(e) : !0; }, hasNonEndpointIntersection: function (t) { for (var e = t.getEdgeIterator(); e.hasNext();)
                            for (var n = e.next(), r = n.getMaximumSegmentIndex(), i = n.getEdgeIntersectionList().iterator(); i.hasNext();) {
                                var s = i.next();
                                if (!s.isEndPoint(r))
                                    return this.nonSimpleLocation = s.getCoordinate(), !0;
                            } return !1; }, addEndpoint: function (t, e, n) { var r = t.get(e); null === r && (r = new kr(e), t.put(e, r)), r.addEndpoint(n); }, computeSimple: function (t) { return this.nonSimpleLocation = null, t.isEmpty() ? !0 : t instanceof wt ? this.isSimpleLinearGeometry(t) : t instanceof ft ? this.isSimpleLinearGeometry(t) : t instanceof Tt ? this.isSimpleMultiPoint(t) : R(t, Rt) ? this.isSimplePolygonal(t) : t instanceof gt ? this.isSimpleGeometryCollection(t) : !0; }, isSimple: function () { return this.nonSimpleLocation = null, this.computeSimple(this.inputGeom); }, isSimpleGeometryCollection: function (t) { for (var e = 0; e < t.getNumGeometries(); e++) {
                            var n = t.getGeometryN(e);
                            if (!this.computeSimple(n))
                                return !1;
                        } return !0; }, interfaces_: function () { return []; }, getClass: function () { return Gr; } }), e(kr.prototype, { addEndpoint: function (t) { this.degree++, this.isClosed |= t; }, getCoordinate: function () { return this.pt; }, interfaces_: function () { return []; }, getClass: function () { return kr; } }), Gr.EndpointInfo = kr, e(Ur.prototype, { getEndCapStyle: function () { return this.endCapStyle; }, isSingleSided: function () { return this._isSingleSided; }, setQuadrantSegments: function (t) { this.quadrantSegments = t, 0 === this.quadrantSegments && (this.joinStyle = Ur.JOIN_BEVEL), this.quadrantSegments < 0 && (this.joinStyle = Ur.JOIN_MITRE, this.mitreLimit = Math.abs(this.quadrantSegments)), 0 >= t && (this.quadrantSegments = 1), this.joinStyle !== Ur.JOIN_ROUND && (this.quadrantSegments = Ur.DEFAULT_QUADRANT_SEGMENTS); }, getJoinStyle: function () { return this.joinStyle; }, setJoinStyle: function (t) { this.joinStyle = t; }, setSimplifyFactor: function (t) { this.simplifyFactor = 0 > t ? 0 : t; }, getSimplifyFactor: function () { return this.simplifyFactor; }, getQuadrantSegments: function () { return this.quadrantSegments; }, setEndCapStyle: function (t) { this.endCapStyle = t; }, getMitreLimit: function () { return this.mitreLimit; }, setMitreLimit: function (t) { this.mitreLimit = t; }, setSingleSided: function (t) { this._isSingleSided = t; }, interfaces_: function () { return []; }, getClass: function () { return Ur; } }), Ur.bufferDistanceError = function (t) { var e = Math.PI / 2 / t; return 1 - Math.cos(e / 2); }, Ur.CAP_ROUND = 1, Ur.CAP_FLAT = 2, Ur.CAP_SQUARE = 3, Ur.JOIN_ROUND = 1, Ur.JOIN_MITRE = 2, Ur.JOIN_BEVEL = 3, Ur.DEFAULT_QUADRANT_SEGMENTS = 8, Ur.DEFAULT_MITRE_LIMIT = 5, Ur.DEFAULT_SIMPLIFY_FACTOR = .01, e(qr.prototype, { getCoordinate: function () { return this.minCoord; }, getRightmostSide: function (t, e) { var n = this.getRightmostSideOfSegment(t, e); return 0 > n && (n = this.getRightmostSideOfSegment(t, e - 1)), 0 > n && (this.minCoord = null, this.checkForRightmostCoordinate(t)), n; }, findRightmostEdgeAtVertex: function () { var t = this.minDe.getEdge().getCoordinates(); g.isTrue(this.minIndex > 0 && this.minIndex < t.length, "rightmost point expected to be interior vertex of edge"); var e = t[this.minIndex - 1], n = t[this.minIndex + 1], r = ce.computeOrientation(this.minCoord, n, e), i = !1; e.y < this.minCoord.y && n.y < this.minCoord.y && r === ce.COUNTERCLOCKWISE ? i = !0 : e.y > this.minCoord.y && n.y > this.minCoord.y && r === ce.CLOCKWISE && (i = !0), i && (this.minIndex = this.minIndex - 1); }, getRightmostSideOfSegment: function (t, e) { var n = t.getEdge(), r = n.getCoordinates(); if (0 > e || e + 1 >= r.length)
                            return -1; if (r[e].y === r[e + 1].y)
                            return -1; var i = hn.LEFT; return r[e].y < r[e + 1].y && (i = hn.RIGHT), i; }, getEdge: function () { return this.orientedDe; }, checkForRightmostCoordinate: function (t) { for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++)
                            (null === this.minCoord || e[n].x > this.minCoord.x) && (this.minDe = t, this.minIndex = n, this.minCoord = e[n]); }, findRightmostEdgeAtNode: function () { var t = this.minDe.getNode(), e = t.getEdges(); this.minDe = e.getRightmostEdge(), this.minDe.isForward() || (this.minDe = this.minDe.getSym(), this.minIndex = this.minDe.getEdge().getCoordinates().length - 1); }, findEdge: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.isForward() && this.checkForRightmostCoordinate(n);
                        } g.isTrue(0 !== this.minIndex || this.minCoord.equals(this.minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this.minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this.orientedDe = this.minDe; var r = this.getRightmostSide(this.minDe, this.minIndex); r === hn.LEFT && (this.orientedDe = this.minDe.getSym()); }, interfaces_: function () { return []; }, getClass: function () { return qr; } }), Br.prototype.addLast = function (t) { this.array_.push(t); }, Br.prototype.removeFirst = function () { return this.array_.shift(); }, Br.prototype.isEmpty = function () { return 0 === this.array_.length; }, e(zr.prototype, { clearVisitedEdges: function () { for (var t = this.dirEdgeList.iterator(); t.hasNext();) {
                            var e = t.next();
                            e.setVisited(!1);
                        } }, getRightmostCoordinate: function () { return this.rightMostCoord; }, computeNodeDepth: function (t) { for (var e = null, n = t.getEdges().iterator(); n.hasNext();) {
                            var r = n.next();
                            if (r.isVisited() || r.getSym().isVisited()) {
                                e = r;
                                break;
                            }
                        } if (null === e)
                            throw new sn("unable to find edge to compute depths at " + t.getCoordinate()); t.getEdges().computeDepths(e); for (var n = t.getEdges().iterator(); n.hasNext();) {
                            var r = n.next();
                            r.setVisited(!0), this.copySymDepths(r);
                        } }, computeDepth: function (t) { this.clearVisitedEdges(); var e = this.finder.getEdge(); e.getNode(), e.getLabel(), e.setEdgeDepths(hn.RIGHT, t), this.copySymDepths(e), this.computeDepths(e); }, create: function (t) { this.addReachable(t), this.finder.findEdge(this.dirEdgeList), this.rightMostCoord = this.finder.getCoordinate(); }, findResultEdges: function () { for (var t = this.dirEdgeList.iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getDepth(hn.RIGHT) >= 1 && e.getDepth(hn.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
                        } }, computeDepths: function (t) { var e = new Q, n = new Br, r = t.getNode(); for (n.addLast(r), e.add(r), t.setVisited(!0); !n.isEmpty();) {
                            var i = n.removeFirst();
                            e.add(i), this.computeNodeDepth(i);
                            for (var s = i.getEdges().iterator(); s.hasNext();) {
                                var o = s.next(), a = o.getSym();
                                if (!a.isVisited()) {
                                    var u = a.getNode();
                                    e.contains(u) || (n.addLast(u), e.add(u));
                                }
                            }
                        } }, compareTo: function (t) { var e = t; return this.rightMostCoord.x < e.rightMostCoord.x ? -1 : this.rightMostCoord.x > e.rightMostCoord.x ? 1 : 0; }, getEnvelope: function () { if (null === this.env) {
                            for (var t = new C, e = this.dirEdgeList.iterator(); e.hasNext();)
                                for (var n = e.next(), r = n.getEdge().getCoordinates(), i = 0; i < r.length - 1; i++)
                                    t.expandToInclude(r[i]);
                            this.env = t;
                        } return this.env; }, addReachable: function (t) { var e = new pe; for (e.add(t); !e.empty();) {
                            var n = e.pop();
                            this.add(n, e);
                        } }, copySymDepths: function (t) { var e = t.getSym(); e.setDepth(hn.LEFT, t.getDepth(hn.RIGHT)), e.setDepth(hn.RIGHT, t.getDepth(hn.LEFT)); }, add: function (t, e) { t.setVisited(!0), this.nodes.add(t); for (var n = t.getEdges().iterator(); n.hasNext();) {
                            var r = n.next();
                            this.dirEdgeList.add(r);
                            var i = r.getSym(), s = i.getNode();
                            s.isVisited() || e.push(s);
                        } }, getNodes: function () { return this.nodes; }, getDirectedEdges: function () { return this.dirEdgeList; }, interfaces_: function () { return [s]; }, getClass: function () { return zr; } }), e(Vr.prototype, { isDeletable: function (t, e, n, r) { var i = this.inputLine[t], s = this.inputLine[e], o = this.inputLine[n]; return this.isConcave(i, s, o) && this.isShallow(i, s, o, r) ? this.isShallowSampled(i, s, t, n, r) : !1; }, deleteShallowConcavities: function () { for (var t = 1, e = (this.inputLine.length - 1, this.findNextNonDeletedIndex(t)), n = this.findNextNonDeletedIndex(e), r = !1; n < this.inputLine.length;) {
                            var i = !1;
                            this.isDeletable(t, e, n, this.distanceTol) && (this.isDeleted[e] = Vr.DELETE, i = !0, r = !0), t = i ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e);
                        } return r; }, isShallowConcavity: function (t, e, n, r) { var i = ce.computeOrientation(t, e, n), s = i === this.angleOrientation; if (!s)
                            return !1; var o = ce.distancePointLine(e, t, n); return r > o; }, isShallowSampled: function (t, e, n, r, i) { var s = Math.trunc((r - n) / Vr.NUM_PTS_TO_CHECK); 0 >= s && (s = 1); for (var o = n; r > o; o += s)
                            if (!this.isShallow(t, e, this.inputLine[o], i))
                                return !1; return !0; }, isConcave: function Vo(t, e, n) { var r = ce.computeOrientation(t, e, n), Vo = r === this.angleOrientation; return Vo; }, simplify: function (t) { this.distanceTol = Math.abs(t), 0 > t && (this.angleOrientation = ce.CLOCKWISE), this.isDeleted = new Array(this.inputLine.length).fill(null); var e = !1; do
                            e = this.deleteShallowConcavities();
                        while (e); return this.collapseLine(); }, findNextNonDeletedIndex: function (t) { for (var e = t + 1; e < this.inputLine.length && this.isDeleted[e] === Vr.DELETE;)
                            e++; return e; }, isShallow: function (t, e, n, r) { var i = ce.distancePointLine(e, t, n); return r > i; }, collapseLine: function () { for (var t = new N, e = 0; e < this.inputLine.length; e++)
                            this.isDeleted[e] !== Vr.DELETE && t.add(this.inputLine[e]); return t.toCoordinateArray(); }, interfaces_: function () { return []; }, getClass: function () { return Vr; } }), Vr.simplify = function (t, e) { var n = new Vr(t); return n.simplify(e); }, Vr.INIT = 0, Vr.DELETE = 1, Vr.KEEP = 1, Vr.NUM_PTS_TO_CHECK = 10, e(Yr.prototype, { getCoordinates: function () { var t = this.ptList.toArray(Yr.COORDINATE_ARRAY_TYPE); return t; }, setPrecisionModel: function (t) { this.precisionModel = t; }, addPt: function (t) { var e = new f(t); return this.precisionModel.makePrecise(e), this.isRedundant(e) ? null : void this.ptList.add(e); }, reverse: function () { }, addPts: function (t, e) { if (e)
                            for (var n = 0; n < t.length; n++)
                                this.addPt(t[n]);
                        else
                            for (var n = t.length - 1; n >= 0; n--)
                                this.addPt(t[n]); }, isRedundant: function (t) { if (this.ptList.size() < 1)
                            return !1; var e = this.ptList.get(this.ptList.size() - 1), n = t.distance(e); return n < this.minimimVertexDistance; }, toString: function () { var t = new re, e = t.createLineString(this.getCoordinates()); return e.toString(); }, closeRing: function () { if (this.ptList.size() < 1)
                            return null; var t = new f(this.ptList.get(0)), e = this.ptList.get(this.ptList.size() - 1), n = null; return this.ptList.size() >= 2 && (n = this.ptList.get(this.ptList.size() - 2)), t.equals(e) ? null : void this.ptList.add(t); }, setMinimumVertexDistance: function (t) { this.minimimVertexDistance = t; }, interfaces_: function () { return []; }, getClass: function () { return Yr; } }), Yr.COORDINATE_ARRAY_TYPE = new Array(0).fill(null), e(Xr.prototype, { addNextSegment: function (t, e) { if (this.s0 = this.s1, this.s1 = this.s2, this.s2 = t, this.seg0.setCoordinates(this.s0, this.s1), this.computeOffsetSegment(this.seg0, this.side, this.distance, this.offset0), this.seg1.setCoordinates(this.s1, this.s2), this.computeOffsetSegment(this.seg1, this.side, this.distance, this.offset1), this.s1.equals(this.s2))
                            return null; var n = ce.computeOrientation(this.s0, this.s1, this.s2), r = n === ce.CLOCKWISE && this.side === hn.LEFT || n === ce.COUNTERCLOCKWISE && this.side === hn.RIGHT; 0 === n ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e); }, addLineEndCap: function (t, e) { var n = new he(t, e), r = new he; this.computeOffsetSegment(n, hn.LEFT, this.distance, r); var i = new he; this.computeOffsetSegment(n, hn.RIGHT, this.distance, i); var s = e.x - t.x, o = e.y - t.y, a = Math.atan2(o, s); switch (this.bufParams.getEndCapStyle()) {
                            case Ur.CAP_ROUND:
                                this.segList.addPt(r.p1), this.addFilletArc(e, a + Math.PI / 2, a - Math.PI / 2, ce.CLOCKWISE, this.distance), this.segList.addPt(i.p1);
                                break;
                            case Ur.CAP_FLAT:
                                this.segList.addPt(r.p1), this.segList.addPt(i.p1);
                                break;
                            case Ur.CAP_SQUARE:
                                var u = new f;
                                u.x = Math.abs(this.distance) * Math.cos(a), u.y = Math.abs(this.distance) * Math.sin(a);
                                var l = new f(r.p1.x + u.x, r.p1.y + u.y), c = new f(i.p1.x + u.x, i.p1.y + u.y);
                                this.segList.addPt(l), this.segList.addPt(c);
                        } }, getCoordinates: function () { var t = this.segList.getCoordinates(); return t; }, addMitreJoin: function (t, e, n, r) { var i = !0, s = null; try {
                            s = F.intersection(e.p0, e.p1, n.p0, n.p1);
                            var o = 0 >= r ? 1 : s.distance(t) / Math.abs(r);
                            o > this.bufParams.getMitreLimit() && (i = !1);
                        }
                        catch (t) {
                            if (!(t instanceof S))
                                throw t;
                            s = new f(0, 0), i = !1;
                        }
                        finally { } i ? this.segList.addPt(s) : this.addLimitedMitreJoin(e, n, r, this.bufParams.getMitreLimit()); }, addFilletCorner: function (t, e, n, r, i) { var s = e.x - t.x, o = e.y - t.y, a = Math.atan2(o, s), u = n.x - t.x, l = n.y - t.y, c = Math.atan2(l, u); r === ce.CLOCKWISE ? c >= a && (a += 2 * Math.PI) : a >= c && (a -= 2 * Math.PI), this.segList.addPt(e), this.addFilletArc(t, a, c, r, i), this.segList.addPt(n); }, addOutsideTurn: function (t, e) { return this.offset0.p1.distance(this.offset1.p0) < this.distance * Xr.OFFSET_SEGMENT_SEPARATION_FACTOR ? (this.segList.addPt(this.offset0.p1), null) : void (this.bufParams.getJoinStyle() === Ur.JOIN_MITRE ? this.addMitreJoin(this.s1, this.offset0, this.offset1, this.distance) : this.bufParams.getJoinStyle() === Ur.JOIN_BEVEL ? this.addBevelJoin(this.offset0, this.offset1) : (e && this.segList.addPt(this.offset0.p1), this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, t, this.distance), this.segList.addPt(this.offset1.p0))); }, createSquare: function (t) { this.segList.addPt(new f(t.x + this.distance, t.y + this.distance)), this.segList.addPt(new f(t.x + this.distance, t.y - this.distance)), this.segList.addPt(new f(t.x - this.distance, t.y - this.distance)), this.segList.addPt(new f(t.x - this.distance, t.y + this.distance)), this.segList.closeRing(); }, addSegments: function (t, e) { this.segList.addPts(t, e); }, addFirstSegment: function () { this.segList.addPt(this.offset1.p0); }, addLastSegment: function () { this.segList.addPt(this.offset1.p1); }, initSideSegments: function (t, e, n) {
                            this.s1 = t, this.s2 = e, this.side = n, this.seg1.setCoordinates(t, e), this.computeOffsetSegment(this.seg1, n, this.distance, this.offset1);
                        }, addLimitedMitreJoin: function (t, e, n, r) { var i = this.seg0.p1, s = cr.angle(i, this.seg0.p0), o = (cr.angle(i, this.seg1.p1), cr.angleBetweenOriented(this.seg0.p0, i, this.seg1.p1)), a = o / 2, u = cr.normalize(s + a), l = cr.normalize(u + Math.PI), c = r * n, h = c * Math.abs(Math.sin(a)), g = n - h, d = i.x + c * Math.cos(l), p = i.y + c * Math.sin(l), m = new f(d, p), v = new he(i, m), y = v.pointAlongOffset(1, g), x = v.pointAlongOffset(1, -g); this.side === hn.LEFT ? (this.segList.addPt(y), this.segList.addPt(x)) : (this.segList.addPt(x), this.segList.addPt(y)); }, computeOffsetSegment: function (t, e, n, r) { var i = e === hn.LEFT ? 1 : -1, s = t.p1.x - t.p0.x, o = t.p1.y - t.p0.y, a = Math.sqrt(s * s + o * o), u = i * n * s / a, l = i * n * o / a; r.p0.x = t.p0.x - l, r.p0.y = t.p0.y + u, r.p1.x = t.p1.x - l, r.p1.y = t.p1.y + u; }, addFilletArc: function (t, e, n, r, i) { var s = r === ce.CLOCKWISE ? -1 : 1, o = Math.abs(e - n), a = Math.trunc(o / this.filletAngleQuantum + .5); if (1 > a)
                            return null; var u = null, l = null; u = 0, l = o / a; for (var c = u, h = new f; o > c;) {
                            var g = e + s * c;
                            h.x = t.x + i * Math.cos(g), h.y = t.y + i * Math.sin(g), this.segList.addPt(h), c += l;
                        } }, addInsideTurn: function (t, e) { if (this.li.computeIntersection(this.offset0.p0, this.offset0.p1, this.offset1.p0, this.offset1.p1), this.li.hasIntersection())
                            this.segList.addPt(this.li.getIntersection(0));
                        else if (this._hasNarrowConcaveAngle = !0, this.offset0.p1.distance(this.offset1.p0) < this.distance * Xr.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
                            this.segList.addPt(this.offset0.p1);
                        else {
                            if (this.segList.addPt(this.offset0.p1), this.closingSegLengthFactor > 0) {
                                var n = new f((this.closingSegLengthFactor * this.offset0.p1.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset0.p1.y + this.s1.y) / (this.closingSegLengthFactor + 1));
                                this.segList.addPt(n);
                                var r = new f((this.closingSegLengthFactor * this.offset1.p0.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset1.p0.y + this.s1.y) / (this.closingSegLengthFactor + 1));
                                this.segList.addPt(r);
                            }
                            else
                                this.segList.addPt(this.s1);
                            this.segList.addPt(this.offset1.p0);
                        } }, createCircle: function (t) { var e = new f(t.x + this.distance, t.y); this.segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this.distance), this.segList.closeRing(); }, addBevelJoin: function (t, e) { this.segList.addPt(t.p1), this.segList.addPt(e.p0); }, init: function (t) { this.distance = t, this.maxCurveSegmentError = t * (1 - Math.cos(this.filletAngleQuantum / 2)), this.segList = new Yr, this.segList.setPrecisionModel(this.precisionModel), this.segList.setMinimumVertexDistance(t * Xr.CURVE_VERTEX_SNAP_DISTANCE_FACTOR); }, addCollinear: function (t) { this.li.computeIntersection(this.s0, this.s1, this.s1, this.s2); var e = this.li.getIntersectionNum(); e >= 2 && (this.bufParams.getJoinStyle() === Ur.JOIN_BEVEL || this.bufParams.getJoinStyle() === Ur.JOIN_MITRE ? (t && this.segList.addPt(this.offset0.p1), this.segList.addPt(this.offset1.p0)) : this.addFilletCorner(this.s1, this.offset0.p1, this.offset1.p0, ce.CLOCKWISE, this.distance)); }, closeRing: function () { this.segList.closeRing(); }, hasNarrowConcaveAngle: function () { return this._hasNarrowConcaveAngle; }, interfaces_: function () { return []; }, getClass: function () { return Xr; } }), Xr.OFFSET_SEGMENT_SEPARATION_FACTOR = .001, Xr.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001, Xr.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Xr.MAX_CLOSING_SEG_LEN_FACTOR = 80, e(Hr.prototype, { getOffsetCurve: function (t, e) { if (this.distance = e, 0 === e)
                            return null; var n = 0 > e, r = Math.abs(e), i = this.getSegGen(r); t.length <= 1 ? this.computePointCurve(t[0], i) : this.computeOffsetCurve(t, n, i); var s = i.getCoordinates(); return n && H.reverse(s), s; }, computeSingleSidedBufferCurve: function (t, e, n) { var r = this.simplifyTolerance(this.distance); if (e) {
                            n.addSegments(t, !0);
                            var i = Vr.simplify(t, -r), s = i.length - 1;
                            n.initSideSegments(i[s], i[s - 1], hn.LEFT), n.addFirstSegment();
                            for (var o = s - 2; o >= 0; o--)
                                n.addNextSegment(i[o], !0);
                        }
                        else {
                            n.addSegments(t, !1);
                            var a = Vr.simplify(t, r), u = a.length - 1;
                            n.initSideSegments(a[0], a[1], hn.LEFT), n.addFirstSegment();
                            for (var o = 2; u >= o; o++)
                                n.addNextSegment(a[o], !0);
                        } n.addLastSegment(), n.closeRing(); }, computeRingBufferCurve: function (t, e, n) { var r = this.simplifyTolerance(this.distance); e === hn.RIGHT && (r = -r); var i = Vr.simplify(t, r), s = i.length - 1; n.initSideSegments(i[s - 1], i[0], e); for (var o = 1; s >= o; o++) {
                            var a = 1 !== o;
                            n.addNextSegment(i[o], a);
                        } n.closeRing(); }, computeLineBufferCurve: function (t, e) { var n = this.simplifyTolerance(this.distance), r = Vr.simplify(t, n), i = r.length - 1; e.initSideSegments(r[0], r[1], hn.LEFT); for (var s = 2; i >= s; s++)
                            e.addNextSegment(r[s], !0); e.addLastSegment(), e.addLineEndCap(r[i - 1], r[i]); var o = Vr.simplify(t, -n), a = o.length - 1; e.initSideSegments(o[a], o[a - 1], hn.LEFT); for (var s = a - 2; s >= 0; s--)
                            e.addNextSegment(o[s], !0); e.addLastSegment(), e.addLineEndCap(o[1], o[0]), e.closeRing(); }, computePointCurve: function (t, e) { switch (this.bufParams.getEndCapStyle()) {
                            case Ur.CAP_ROUND:
                                e.createCircle(t);
                                break;
                            case Ur.CAP_SQUARE: e.createSquare(t);
                        } }, getLineCurve: function (t, e) { if (this.distance = e, 0 > e && !this.bufParams.isSingleSided())
                            return null; if (0 === e)
                            return null; var n = Math.abs(e), r = this.getSegGen(n); if (t.length <= 1)
                            this.computePointCurve(t[0], r);
                        else if (this.bufParams.isSingleSided()) {
                            var i = 0 > e;
                            this.computeSingleSidedBufferCurve(t, i, r);
                        }
                        else
                            this.computeLineBufferCurve(t, r); var s = r.getCoordinates(); return s; }, getBufferParameters: function () { return this.bufParams; }, simplifyTolerance: function (t) { return t * this.bufParams.getSimplifyFactor(); }, getRingCurve: function (t, e, n) { if (this.distance = n, t.length <= 2)
                            return this.getLineCurve(t, n); if (0 === n)
                            return Hr.copyCoordinates(t); var r = this.getSegGen(n); return this.computeRingBufferCurve(t, e, r), r.getCoordinates(); }, computeOffsetCurve: function (t, e, n) { var r = this.simplifyTolerance(this.distance); if (e) {
                            var i = Vr.simplify(t, -r), s = i.length - 1;
                            n.initSideSegments(i[s], i[s - 1], hn.LEFT), n.addFirstSegment();
                            for (var o = s - 2; o >= 0; o--)
                                n.addNextSegment(i[o], !0);
                        }
                        else {
                            var a = Vr.simplify(t, r), u = a.length - 1;
                            n.initSideSegments(a[0], a[1], hn.LEFT), n.addFirstSegment();
                            for (var o = 2; u >= o; o++)
                                n.addNextSegment(a[o], !0);
                        } n.addLastSegment(); }, getSegGen: function (t) { return new Xr(this.precisionModel, this.bufParams, t); }, interfaces_: function () { return []; }, getClass: function () { return Hr; } }), Hr.copyCoordinates = function (t) { for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
                        e[n] = new f(t[n]); return e; }, e(Wr.prototype, { findStabbedSegments: function () { if (1 === arguments.length) {
                            for (var t = arguments[0], e = new I, n = this.subgraphs.iterator(); n.hasNext();) {
                                var r = n.next(), i = r.getEnvelope();
                                t.y < i.getMinY() || t.y > i.getMaxY() || this.findStabbedSegments(t, r.getDirectedEdges(), e);
                            }
                            return e;
                        } if (3 === arguments.length)
                            if (R(arguments[2], y) && arguments[0] instanceof f && arguments[1] instanceof In)
                                for (var s = arguments[0], o = arguments[1], a = arguments[2], u = o.getEdge().getCoordinates(), n = 0; n < u.length - 1; n++) {
                                    this.seg.p0 = u[n], this.seg.p1 = u[n + 1], this.seg.p0.y > this.seg.p1.y && this.seg.reverse();
                                    var l = Math.max(this.seg.p0.x, this.seg.p1.x);
                                    if (!(l < s.x || this.seg.isHorizontal() || s.y < this.seg.p0.y || s.y > this.seg.p1.y || ce.computeOrientation(this.seg.p0, this.seg.p1, s) === ce.RIGHT)) {
                                        var c = o.getDepth(hn.LEFT);
                                        this.seg.p0.equals(u[n]) || (c = o.getDepth(hn.RIGHT));
                                        var h = new jr(this.seg, c);
                                        a.add(h);
                                    }
                                }
                            else if (R(arguments[2], y) && arguments[0] instanceof f && R(arguments[1], y))
                                for (var g = arguments[0], d = arguments[1], p = arguments[2], n = d.iterator(); n.hasNext();) {
                                    var m = n.next();
                                    m.isForward() && this.findStabbedSegments(g, m, p);
                                } }, getDepth: function (t) { var e = this.findStabbedSegments(t); if (0 === e.size())
                            return 0; var n = co.min(e); return n.leftDepth; }, interfaces_: function () { return []; }, getClass: function () { return Wr; } }), e(jr.prototype, { compareTo: function (t) { var e = t; if (this.upwardSeg.minX() >= e.upwardSeg.maxX())
                            return 1; if (this.upwardSeg.maxX() <= e.upwardSeg.minX())
                            return -1; var n = this.upwardSeg.orientationIndex(e.upwardSeg); return 0 !== n ? n : (n = -1 * e.upwardSeg.orientationIndex(this.upwardSeg), 0 !== n ? n : this.upwardSeg.compareTo(e.upwardSeg)); }, compareX: function (t, e) { var n = t.p0.compareTo(e.p0); return 0 !== n ? n : t.p1.compareTo(e.p1); }, toString: function () { return this.upwardSeg.toString(); }, interfaces_: function () { return [s]; }, getClass: function () { return jr; } }), Wr.DepthSegment = jr, e(Zr.prototype, { addPoint: function (t) { if (this.distance <= 0)
                            return null; var e = t.getCoordinates(), n = this.curveBuilder.getLineCurve(e, this.distance); this.addCurve(n, L.EXTERIOR, L.INTERIOR); }, addPolygon: function (t) { var e = this.distance, n = hn.LEFT; this.distance < 0 && (e = -this.distance, n = hn.RIGHT); var r = t.getExteriorRing(), i = H.removeRepeatedPoints(r.getCoordinates()); if (this.distance < 0 && this.isErodedCompletely(r, this.distance))
                            return null; if (this.distance <= 0 && i.length < 3)
                            return null; this.addPolygonRing(i, e, n, L.EXTERIOR, L.INTERIOR); for (var s = 0; s < t.getNumInteriorRing(); s++) {
                            var o = t.getInteriorRingN(s), a = H.removeRepeatedPoints(o.getCoordinates());
                            this.distance > 0 && this.isErodedCompletely(o, -this.distance) || this.addPolygonRing(a, e, hn.opposite(n), L.INTERIOR, L.EXTERIOR);
                        } }, isTriangleErodedCompletely: function (t, e) { var n = new hr(t[0], t[1], t[2]), r = n.inCentre(), i = ce.distancePointLine(r, n.p0, n.p1); return i < Math.abs(e); }, addLineString: function (t) { if (this.distance <= 0 && !this.curveBuilder.getBufferParameters().isSingleSided())
                            return null; var e = H.removeRepeatedPoints(t.getCoordinates()), n = this.curveBuilder.getLineCurve(e, this.distance); this.addCurve(n, L.EXTERIOR, L.INTERIOR); }, addCurve: function (t, e, n) { if (null === t || t.length < 2)
                            return null; var r = new Ze(t, new fn(0, L.BOUNDARY, e, n)); this.curveList.add(r); }, getCurves: function () { return this.add(this.inputGeom), this.curveList; }, addPolygonRing: function (t, e, n, r, i) { if (0 === e && t.length < Pt.MINIMUM_VALID_SIZE)
                            return null; var s = r, o = i; t.length >= Pt.MINIMUM_VALID_SIZE && ce.isCCW(t) && (s = i, o = r, n = hn.opposite(n)); var a = this.curveBuilder.getRingCurve(t, n, e); this.addCurve(a, s, o); }, add: function (t) { if (t.isEmpty())
                            return null; if (t instanceof bt)
                            this.addPolygon(t);
                        else if (t instanceof wt)
                            this.addLineString(t);
                        else if (t instanceof Lt)
                            this.addPoint(t);
                        else if (t instanceof Tt)
                            this.addCollection(t);
                        else if (t instanceof ft)
                            this.addCollection(t);
                        else if (t instanceof Ot)
                            this.addCollection(t);
                        else {
                            if (!(t instanceof gt))
                                throw new UnsupportedOperationException(t.getClass().getName());
                            this.addCollection(t);
                        } }, isErodedCompletely: function (t, e) { var n = t.getCoordinates(); if (n.length < 4)
                            return 0 > e; if (4 === n.length)
                            return this.isTriangleErodedCompletely(n, e); var r = t.getEnvelopeInternal(), i = Math.min(r.getHeight(), r.getWidth()); return 0 > e && 2 * Math.abs(e) > i; }, addCollection: function (t) { for (var e = 0; e < t.getNumGeometries(); e++) {
                            var n = t.getGeometryN(e);
                            this.add(n);
                        } }, interfaces_: function () { return []; }, getClass: function () { return Zr; } }), e(Jr.prototype, { isTrivialIntersection: function (t, e, n, r) { if (t === n && 1 === this.li.getIntersectionNum()) {
                            if (Jr.isAdjacentSegments(e, r))
                                return !0;
                            if (t.isClosed()) {
                                var i = t.size() - 1;
                                if (0 === e && r === i || 0 === r && e === i)
                                    return !0;
                            }
                        } return !1; }, getProperIntersectionPoint: function () { return this.properIntersectionPoint; }, hasProperInteriorIntersection: function () { return this.hasProperInterior; }, getLineIntersector: function () { return this.li; }, hasProperIntersection: function () { return this.hasProper; }, processIntersections: function (t, e, n, r) { if (t === n && e === r)
                            return null; this.numTests++; var i = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], o = n.getCoordinates()[r], a = n.getCoordinates()[r + 1]; this.li.computeIntersection(i, s, o, a), this.li.hasIntersection() && (this.numIntersections++, this.li.isInteriorIntersection() && (this.numInteriorIntersections++, this.hasInterior = !0), this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, t.addIntersections(this.li, e, 0), n.addIntersections(this.li, r, 1), this.li.isProper() && (this.numProperIntersections++, this.hasProper = !0, this.hasProperInterior = !0))); }, hasIntersection: function () { return this._hasIntersection; }, isDone: function () { return !1; }, hasInteriorIntersection: function () { return this.hasInterior; }, interfaces_: function () { return [on]; }, getClass: function () { return Jr; } }), Jr.isAdjacentSegments = function (t, e) { return 1 === Math.abs(t - e); }, e(Kr.prototype, { setWorkingPrecisionModel: function (t) { this.workingPrecisionModel = t; }, insertUniqueEdge: function (t) { var e = this.edgeList.findEqualEdge(t); if (null !== e) {
                            var n = e.getLabel(), r = t.getLabel();
                            e.isPointwiseEqual(t) || (r = new fn(t.getLabel()), r.flip()), n.merge(r);
                            var i = Kr.depthDelta(r), s = e.getDepthDelta(), o = s + i;
                            e.setDepthDelta(o);
                        }
                        else
                            this.edgeList.add(t), t.setDepthDelta(Kr.depthDelta(t.getLabel())); }, buildSubgraphs: function (t, e) { for (var n = new I, r = t.iterator(); r.hasNext();) {
                            var i = r.next(), s = i.getRightmostCoordinate(), o = new Wr(n), a = o.getDepth(s);
                            i.computeDepth(a), i.findResultEdges(), n.add(i), e.add(i.getDirectedEdges(), i.getNodes());
                        } }, createSubgraphs: function (t) { for (var e = new I, n = t.getNodes().iterator(); n.hasNext();) {
                            var r = n.next();
                            if (!r.isVisited()) {
                                var i = new zr;
                                i.create(r), e.add(i);
                            }
                        } return co.sort(e, co.reverseOrder()), e; }, createEmptyResultGeometry: function () { var t = this.geomFact.createPolygon(); return t; }, getNoder: function (t) { if (null !== this.workingNoder)
                            return this.workingNoder; var e = new nn, n = new ae; return n.setPrecisionModel(t), e.setSegmentIntersector(new Jr(n)), e; }, buffer: function (t, e) { var n = this.workingPrecisionModel; null === n && (n = t.getPrecisionModel()), this.geomFact = t.getFactory(); var r = new Hr(n, this.bufParams), i = new Zr(t, e, r), s = i.getCurves(); if (s.size() <= 0)
                            return this.createEmptyResultGeometry(); this.computeNodedEdges(s, n), this.graph = new Cn(new On), this.graph.addEdges(this.edgeList.getEdges()); var o = this.createSubgraphs(this.graph), a = new wn(this.geomFact); this.buildSubgraphs(o, a); var u = a.getPolygons(); if (u.size() <= 0)
                            return this.createEmptyResultGeometry(); var l = this.geomFact.buildGeometry(u); return l; }, computeNodedEdges: function (t, e) { var n = this.getNoder(e); n.computeNodes(t); for (var r = n.getNodedSubstrings(), i = r.iterator(); i.hasNext();) {
                            var s = i.next(), o = s.getCoordinates();
                            if (2 !== o.length || !o[0].equals2D(o[1])) {
                                var a = s.getData(), u = new Qn(s.getCoordinates(), new fn(a));
                                this.insertUniqueEdge(u);
                            }
                        } }, setNoder: function (t) { this.workingNoder = t; }, interfaces_: function () { return []; }, getClass: function () { return Kr; } }), Kr.depthDelta = function (t) { var e = t.getLocation(0, hn.LEFT), n = t.getLocation(0, hn.RIGHT); return e === L.INTERIOR && n === L.EXTERIOR ? 1 : e === L.EXTERIOR && n === L.INTERIOR ? -1 : 0; }, Kr.convertSegStrings = function (t) { for (var e = new re, n = new I; t.hasNext();) {
                        var r = t.next(), i = e.createLineString(r.getCoordinates());
                        n.add(i);
                    } return e.buildGeometry(n); }, e(Qr.prototype, { checkEndPtVertexIntersections: function () { if (0 === arguments.length)
                            for (var t = this.segStrings.iterator(); t.hasNext();) {
                                var e = t.next(), n = e.getCoordinates();
                                this.checkEndPtVertexIntersections(n[0], this.segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this.segStrings);
                            }
                        else if (2 === arguments.length)
                            for (var r = arguments[0], i = arguments[1], t = i.iterator(); t.hasNext();)
                                for (var e = t.next(), n = e.getCoordinates(), s = 1; s < n.length - 1; s++)
                                    if (n[s].equals(r))
                                        throw new l("found endpt/interior pt intersection at index " + s + " :pt " + r); }, checkInteriorIntersections: function () { if (0 === arguments.length)
                            for (var t = this.segStrings.iterator(); t.hasNext();)
                                for (var e = t.next(), n = this.segStrings.iterator(); n.hasNext();) {
                                    var r = n.next();
                                    this.checkInteriorIntersections(e, r);
                                }
                        else if (2 === arguments.length)
                            for (var i = arguments[0], s = arguments[1], o = i.getCoordinates(), a = s.getCoordinates(), u = 0; u < o.length - 1; u++)
                                for (var c = 0; c < a.length - 1; c++)
                                    this.checkInteriorIntersections(i, u, s, c);
                        else if (4 === arguments.length) {
                            var h = arguments[0], g = arguments[1], f = arguments[2], d = arguments[3];
                            if (h === f && g === d)
                                return null;
                            var p = h.getCoordinates()[g], m = h.getCoordinates()[g + 1], v = f.getCoordinates()[d], y = f.getCoordinates()[d + 1];
                            if (this.li.computeIntersection(p, m, v, y), this.li.hasIntersection() && (this.li.isProper() || this.hasInteriorIntersection(this.li, p, m) || this.hasInteriorIntersection(this.li, v, y)))
                                throw new l("found non-noded intersection at " + p + "-" + m + " and " + v + "-" + y);
                        } }, checkValid: function () { this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses(); }, checkCollapses: function () { if (0 === arguments.length)
                            for (var t = this.segStrings.iterator(); t.hasNext();) {
                                var e = t.next();
                                this.checkCollapses(e);
                            }
                        else if (1 === arguments.length)
                            for (var n = arguments[0], r = n.getCoordinates(), t = 0; t < r.length - 2; t++)
                                this.checkCollapse(r[t], r[t + 1], r[t + 2]); }, hasInteriorIntersection: function (t, e, n) { for (var r = 0; r < t.getIntersectionNum(); r++) {
                            var i = t.getIntersection(r);
                            if (!i.equals(e) && !i.equals(n))
                                return !0;
                        } return !1; }, checkCollapse: function (t, e, n) { if (t.equals(n))
                            throw new l("found non-noded collapse at " + Qr.fact.createLineString([t, e, n])); }, interfaces_: function () { return []; }, getClass: function () { return Qr; } }), Qr.fact = new re, e($r.prototype, { intersectsScaled: function (t, e) { var n = Math.min(t.x, e.x), r = Math.max(t.x, e.x), i = Math.min(t.y, e.y), s = Math.max(t.y, e.y), o = this.maxx < n || this.minx > r || this.maxy < i || this.miny > s; if (o)
                            return !1; var a = this.intersectsToleranceSquare(t, e); return g.isTrue(!(o && a), "Found bad envelope test"), a; }, initCorners: function (t) { var e = .5; this.minx = t.x - e, this.maxx = t.x + e, this.miny = t.y - e, this.maxy = t.y + e, this.corner[0] = new f(this.maxx, this.maxy), this.corner[1] = new f(this.minx, this.maxy), this.corner[2] = new f(this.minx, this.miny), this.corner[3] = new f(this.maxx, this.miny); }, intersects: function (t, e) { return 1 === this.scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this.p0Scaled), this.copyScaled(e, this.p1Scaled), this.intersectsScaled(this.p0Scaled, this.p1Scaled)); }, scale: function (t) { return Math.round(t * this.scaleFactor); }, getCoordinate: function () { return this.originalPt; }, copyScaled: function (t, e) { e.x = this.scale(t.x), e.y = this.scale(t.y); }, getSafeEnvelope: function () { if (null === this.safeEnv) {
                            var t = $r.SAFE_ENV_EXPANSION_FACTOR / this.scaleFactor;
                            this.safeEnv = new C(this.originalPt.x - t, this.originalPt.x + t, this.originalPt.y - t, this.originalPt.y + t);
                        } return this.safeEnv; }, intersectsPixelClosure: function (t, e) { return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), this.li.hasIntersection() ? !0 : (this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), !!this.li.hasIntersection()))); }, intersectsToleranceSquare: function (t, e) { var n = !1, r = !1; return this.li.computeIntersection(t, e, this.corner[0], this.corner[1]), this.li.isProper() ? !0 : (this.li.computeIntersection(t, e, this.corner[1], this.corner[2]), this.li.isProper() ? !0 : (this.li.hasIntersection() && (n = !0), this.li.computeIntersection(t, e, this.corner[2], this.corner[3]), this.li.isProper() ? !0 : (this.li.hasIntersection() && (r = !0), this.li.computeIntersection(t, e, this.corner[3], this.corner[0]), this.li.isProper() ? !0 : n && r ? !0 : t.equals(this.pt) ? !0 : !!e.equals(this.pt)))); }, addSnappedNode: function (t, e) { var n = t.getCoordinate(e), r = t.getCoordinate(e + 1); return this.intersects(n, r) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1; }, interfaces_: function () { return []; }, getClass: function () { return $r; } }), $r.SAFE_ENV_EXPANSION_FACTOR = .75, e(ti.prototype, { select: function () { if (1 === arguments.length)
                            arguments[0];
                        else if (2 === arguments.length) {
                            var t = arguments[0], e = arguments[1];
                            t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
                        } }, interfaces_: function () { return []; }, getClass: function () { return ti; } }), e(ei.prototype, { snap: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.snap(t, null, -1);
                        } if (3 === arguments.length) {
                            var e = arguments[0], n = arguments[1], r = arguments[2], i = e.getSafeEnvelope(), s = new ni(e, n, r);
                            return this.index.query(i, { interfaces_: function () { return [De]; }, visitItem: function (t) { var e = t; e.select(i, s); } }), s.isNodeAdded();
                        } }, interfaces_: function () { return []; }, getClass: function () { return ei; } }), c(ni, ti), e(ni.prototype, { isNodeAdded: function () { return this._isNodeAdded; }, select: function () { if (2 !== arguments.length)
                            return ti.prototype.select.apply(this, arguments); var t = arguments[0], e = arguments[1], n = t.getContext(); return null !== this.parentEdge && n === this.parentEdge && e === this.hotPixelVertexIndex ? null : void (this._isNodeAdded = this.hotPixel.addSnappedNode(n, e)); }, interfaces_: function () { return []; }, getClass: function () { return ni; } }), ei.HotPixelSnapAction = ni, e(ri.prototype, { processIntersections: function (t, e, n, r) { if (t === n && e === r)
                            return null; var i = t.getCoordinates()[e], s = t.getCoordinates()[e + 1], o = n.getCoordinates()[r], a = n.getCoordinates()[r + 1]; if (this.li.computeIntersection(i, s, o, a), this.li.hasIntersection() && this.li.isInteriorIntersection()) {
                            for (var u = 0; u < this.li.getIntersectionNum(); u++)
                                this.interiorIntersections.add(this.li.getIntersection(u));
                            t.addIntersections(this.li, e, 0), n.addIntersections(this.li, r, 1);
                        } }, isDone: function () { return !1; }, getInteriorIntersections: function () { return this.interiorIntersections; }, interfaces_: function () { return [on]; }, getClass: function () { return ri; } }), e(ii.prototype, { checkCorrectness: function (t) { var e = Ze.getNodedSubstrings(t), n = new Qr(e); try {
                            n.checkValid();
                        }
                        catch (t) {
                            if (!(t instanceof w))
                                throw t;
                            t.printStackTrace();
                        }
                        finally { } }, getNodedSubstrings: function () { return Ze.getNodedSubstrings(this.nodedSegStrings); }, snapRound: function (t, e) { var n = this.findInteriorIntersections(t, e); this.computeIntersectionSnaps(n), this.computeVertexSnaps(t); }, findInteriorIntersections: function (t, e) { var n = new ri(e); return this.noder.setSegmentIntersector(n), this.noder.computeNodes(t), n.getInteriorIntersections(); }, computeVertexSnaps: function () { if (R(arguments[0], m))
                            for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.computeVertexSnaps(n);
                            }
                        else if (arguments[0] instanceof Ze)
                            for (var r = arguments[0], i = r.getCoordinates(), s = 0; s < i.length; s++) {
                                var o = new $r(i[s], this.scaleFactor, this.li), a = this.pointSnapper.snap(o, r, s);
                                a && r.addIntersection(i[s], s);
                            } }, computeNodes: function (t) { this.nodedSegStrings = t, this.noder = new nn, this.pointSnapper = new ei(this.noder.getIndex()), this.snapRound(t, this.li); }, computeIntersectionSnaps: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next(), r = new $r(n, this.scaleFactor, this.li);
                            this.pointSnapper.snap(r);
                        } }, interfaces_: function () { return [tn]; }, getClass: function () { return ii; } }), e(si.prototype, { bufferFixedPrecision: function (t) { var e = new Fr(new ii(new ee(1)), t.getScale()), n = new Kr(this.bufParams); n.setWorkingPrecisionModel(t), n.setNoder(e), this.resultGeometry = n.buffer(this.argGeom, this.distance); }, bufferReducedPrecision: function () { if (0 === arguments.length) {
                            for (var t = si.MAX_PRECISION_DIGITS; t >= 0; t--) {
                                try {
                                    this.bufferReducedPrecision(t);
                                }
                                catch (t) {
                                    if (!(t instanceof sn))
                                        throw t;
                                    this.saveException = t;
                                }
                                finally { }
                                if (null !== this.resultGeometry)
                                    return null;
                            }
                            throw this.saveException;
                        } if (1 === arguments.length) {
                            var e = arguments[0], n = si.precisionScaleFactor(this.argGeom, this.distance, e), r = new ee(n);
                            this.bufferFixedPrecision(r);
                        } }, computeGeometry: function () { if (this.bufferOriginalPrecision(), null !== this.resultGeometry)
                            return null; var t = this.argGeom.getFactory().getPrecisionModel(); t.getType() === ee.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision(); }, setQuadrantSegments: function (t) { this.bufParams.setQuadrantSegments(t); }, bufferOriginalPrecision: function () { try {
                            var t = new Kr(this.bufParams);
                            this.resultGeometry = t.buffer(this.argGeom, this.distance);
                        }
                        catch (t) {
                            if (!(t instanceof l))
                                throw t;
                            this.saveException = t;
                        }
                        finally { } }, getResultGeometry: function (t) { return this.distance = t, this.computeGeometry(), this.resultGeometry; }, setEndCapStyle: function (t) { this.bufParams.setEndCapStyle(t); }, interfaces_: function () { return []; }, getClass: function () { return si; } }), si.bufferOp = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = new si(t), r = n.getResultGeometry(e);
                        return r;
                    } if (3 === arguments.length) {
                        if (Number.isInteger(arguments[2]) && arguments[0] instanceof U && "number" == typeof arguments[1]) {
                            var i = arguments[0], s = arguments[1], o = arguments[2], a = new si(i);
                            a.setQuadrantSegments(o);
                            var r = a.getResultGeometry(s);
                            return r;
                        }
                        if (arguments[2] instanceof Ur && arguments[0] instanceof U && "number" == typeof arguments[1]) {
                            var u = arguments[0], l = arguments[1], c = arguments[2], a = new si(u, c), r = a.getResultGeometry(l);
                            return r;
                        }
                    }
                    else if (4 === arguments.length) {
                        var h = arguments[0], g = arguments[1], f = arguments[2], d = arguments[3], a = new si(h);
                        a.setQuadrantSegments(f), a.setEndCapStyle(d);
                        var r = a.getResultGeometry(g);
                        return r;
                    } }, si.precisionScaleFactor = function (t, e, n) { var r = t.getEnvelopeInternal(), i = b.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())), s = e > 0 ? e : 0, o = i + 2 * s, a = Math.trunc(Math.log(o) / Math.log(10) + 1), u = n - a, l = Math.pow(10, u); return l; }, si.CAP_ROUND = Ur.CAP_ROUND, si.CAP_BUTT = Ur.CAP_FLAT, si.CAP_FLAT = Ur.CAP_FLAT, si.CAP_SQUARE = Ur.CAP_SQUARE, si.MAX_PRECISION_DIGITS = 12;
                    var Co = Object.freeze({ BufferOp: si, BufferParameters: Ur });
                    e(oi.prototype, { filter: function (t) { t instanceof bt && this.comps.add(t); }, interfaces_: function () { return [ct]; }, getClass: function () { return oi; } }), oi.getPolygons = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return oi.getPolygons(t, new I);
                    } if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        return e instanceof bt ? n.add(e) : e instanceof gt && e.apply(new oi(n)), n;
                    } }, e(ai.prototype, { isInsideArea: function () { return this.segIndex === ai.INSIDE_AREA; }, getCoordinate: function () { return this.pt; }, getGeometryComponent: function () { return this.component; }, getSegmentIndex: function () { return this.segIndex; }, interfaces_: function () { return []; }, getClass: function () { return ai; } }), ai.INSIDE_AREA = -1, e(ui.prototype, { filter: function (t) { t instanceof Lt && this.pts.add(t); }, interfaces_: function () { return [ct]; }, getClass: function () { return ui; } }), ui.getPoints = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return t instanceof Lt ? co.singletonList(t) : ui.getPoints(t, new I);
                    } if (2 === arguments.length) {
                        var e = arguments[0], n = arguments[1];
                        return e instanceof Lt ? n.add(e) : e instanceof gt && e.apply(new ui(n)), n;
                    } }, e(li.prototype, { filter: function (t) { (t instanceof Lt || t instanceof wt || t instanceof bt) && this.locations.add(new ai(t, 0, t.getCoordinate())); }, interfaces_: function () { return [ct]; }, getClass: function () { return li; } }), li.getLocations = function (t) { var e = new I; return t.apply(new li(e)), e; }, e(ci.prototype, { computeContainmentDistance: function () { if (0 === arguments.length) {
                            var t = new Array(2).fill(null);
                            if (this.computeContainmentDistance(0, t), this.minDistance <= this.terminateDistance)
                                return null;
                            this.computeContainmentDistance(1, t);
                        }
                        else if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1], r = 1 - e, i = oi.getPolygons(this.geom[e]);
                            if (i.size() > 0) {
                                var s = li.getLocations(this.geom[r]);
                                if (this.computeContainmentDistance(s, i, n), this.minDistance <= this.terminateDistance)
                                    return this.minDistanceLocation[r] = n[0], this.minDistanceLocation[e] = n[1], null;
                            }
                        }
                        else if (3 === arguments.length)
                            if (arguments[2] instanceof Array && R(arguments[0], y) && R(arguments[1], y)) {
                                for (var o = arguments[0], a = arguments[1], u = arguments[2], l = 0; l < o.size(); l++)
                                    for (var c = o.get(l), h = 0; h < a.size(); h++)
                                        if (this.computeContainmentDistance(c, a.get(h), u), this.minDistance <= this.terminateDistance)
                                            return null;
                            }
                            else if (arguments[2] instanceof Array && arguments[0] instanceof ai && arguments[1] instanceof bt) {
                                var g = arguments[0], f = arguments[1], d = arguments[2], p = g.getCoordinate();
                                if (L.EXTERIOR !== this.ptLocator.locate(p, f))
                                    return this.minDistance = 0, d[0] = g, d[1] = new ai(f, p), null;
                            } }, computeMinDistanceLinesPoints: function (t, e, n) { for (var r = 0; r < t.size(); r++)
                            for (var i = t.get(r), s = 0; s < e.size(); s++) {
                                var o = e.get(s);
                                if (this.computeMinDistance(i, o, n), this.minDistance <= this.terminateDistance)
                                    return null;
                            } }, computeFacetDistance: function () { var t = new Array(2).fill(null), e = zn.getLines(this.geom[0]), n = zn.getLines(this.geom[1]), r = ui.getPoints(this.geom[0]), i = ui.getPoints(this.geom[1]); return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, i, t), this.updateMinDistance(t, !1), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, r, t), this.updateMinDistance(t, !0), this.minDistance <= this.terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(r, i, t), void this.updateMinDistance(t, !1)))); }, nearestLocations: function () { return this.computeMinDistance(), this.minDistanceLocation; }, updateMinDistance: function (t, e) { return null === t[0] ? null : void (e ? (this.minDistanceLocation[0] = t[1], this.minDistanceLocation[1] = t[0]) : (this.minDistanceLocation[0] = t[0], this.minDistanceLocation[1] = t[1])); }, nearestPoints: function () { this.computeMinDistance(); var t = [this.minDistanceLocation[0].getCoordinate(), this.minDistanceLocation[1].getCoordinate()]; return t; }, computeMinDistance: function () { if (0 === arguments.length) {
                            if (null !== this.minDistanceLocation)
                                return null;
                            if (this.minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this.minDistance <= this.terminateDistance)
                                return null;
                            this.computeFacetDistance();
                        }
                        else if (3 === arguments.length)
                            if (arguments[2] instanceof Array && arguments[0] instanceof wt && arguments[1] instanceof Lt) {
                                var t = arguments[0], e = arguments[1], n = arguments[2];
                                if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this.minDistance)
                                    return null;
                                for (var r = t.getCoordinates(), i = e.getCoordinate(), s = 0; s < r.length - 1; s++) {
                                    var o = ce.distancePointLine(i, r[s], r[s + 1]);
                                    if (o < this.minDistance) {
                                        this.minDistance = o;
                                        var a = new he(r[s], r[s + 1]), u = a.closestPoint(i);
                                        n[0] = new ai(t, s, u), n[1] = new ai(e, 0, i);
                                    }
                                    if (this.minDistance <= this.terminateDistance)
                                        return null;
                                }
                            }
                            else if (arguments[2] instanceof Array && arguments[0] instanceof wt && arguments[1] instanceof wt) {
                                var l = arguments[0], c = arguments[1], h = arguments[2];
                                if (l.getEnvelopeInternal().distance(c.getEnvelopeInternal()) > this.minDistance)
                                    return null;
                                for (var r = l.getCoordinates(), g = c.getCoordinates(), s = 0; s < r.length - 1; s++)
                                    for (var f = 0; f < g.length - 1; f++) {
                                        var o = ce.distanceLineLine(r[s], r[s + 1], g[f], g[f + 1]);
                                        if (o < this.minDistance) {
                                            this.minDistance = o;
                                            var d = new he(r[s], r[s + 1]), p = new he(g[f], g[f + 1]), m = d.closestPoints(p);
                                            h[0] = new ai(l, s, m[0]), h[1] = new ai(c, f, m[1]);
                                        }
                                        if (this.minDistance <= this.terminateDistance)
                                            return null;
                                    }
                            } }, computeMinDistancePoints: function (t, e, n) { for (var r = 0; r < t.size(); r++)
                            for (var i = t.get(r), s = 0; s < e.size(); s++) {
                                var o = e.get(s), a = i.getCoordinate().distance(o.getCoordinate());
                                if (a < this.minDistance && (this.minDistance = a, n[0] = new ai(i, 0, i.getCoordinate()), n[1] = new ai(o, 0, o.getCoordinate())), this.minDistance <= this.terminateDistance)
                                    return null;
                            } }, distance: function () { if (null === this.geom[0] || null === this.geom[1])
                            throw new r("null geometries are not supported"); return this.geom[0].isEmpty() || this.geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this.minDistance); }, computeMinDistanceLines: function (t, e, n) { for (var r = 0; r < t.size(); r++)
                            for (var i = t.get(r), s = 0; s < e.size(); s++) {
                                var o = e.get(s);
                                if (this.computeMinDistance(i, o, n), this.minDistance <= this.terminateDistance)
                                    return null;
                            } }, interfaces_: function () { return []; }, getClass: function () { return ci; } }), ci.distance = function (t, e) { var n = new ci(t, e); return n.distance(); }, ci.isWithinDistance = function (t, e, n) { var r = new ci(t, e, n); return r.distance() <= n; }, ci.nearestPoints = function (t, e) { var n = new ci(t, e); return n.nearestPoints(); };
                    var wo = Object.freeze({ DistanceOp: ci });
                    e(hi.prototype, { getCoordinates: function () { if (null === this.coordinates) {
                            for (var t = 0, e = 0, n = new N, r = this.directedEdges.iterator(); r.hasNext();) {
                                var i = r.next();
                                i.getEdgeDirection() ? t++ : e++, n.add(i.getEdge().getLine().getCoordinates(), !1, i.getEdgeDirection());
                            }
                            this.coordinates = n.toCoordinateArray(), e > t && H.reverse(this.coordinates);
                        } return this.coordinates; }, toLineString: function () { return this.factory.createLineString(this.getCoordinates()); }, add: function (t) { this.directedEdges.add(t); }, interfaces_: function () { return []; }, getClass: function () { return hi; } }), e(gi.prototype, { setVisited: function (t) { this._isVisited = t; }, isMarked: function () { return this._isMarked; }, setData: function (t) { this.data = t; }, getData: function () { return this.data; }, setMarked: function (t) { this._isMarked = t; }, getContext: function () { return this.data; }, isVisited: function () { return this._isVisited; }, setContext: function (t) { this.data = t; }, interfaces_: function () { return []; }, getClass: function () { return gi; } }), gi.getComponentWithVisitedState = function (t, e) { for (; t.hasNext();) {
                        var n = t.next();
                        if (n.isVisited() === e)
                            return n;
                    } return null; }, gi.setVisited = function (t, e) { for (; t.hasNext();) {
                        var n = t.next();
                        n.setVisited(e);
                    } }, gi.setMarked = function (t, e) { for (; t.hasNext();) {
                        var n = t.next();
                        n.setMarked(e);
                    } }, c(fi, gi), e(fi.prototype, { isRemoved: function () { return null === this.parentEdge; }, compareDirection: function (t) { return this.quadrant > t.quadrant ? 1 : this.quadrant < t.quadrant ? -1 : ce.computeOrientation(t.p0, t.p1, this.p1); }, getCoordinate: function () { return this.from.getCoordinate(); }, print: function (t) {
                            var e = this.getClass().getName(), n = e.lastIndexOf("."), r = e.substring(n + 1);
                            t.print("  " + r + ": " + this.p0 + " - " + this.p1 + " " + this.quadrant + ":" + this.angle);
                        }, getDirectionPt: function () { return this.p1; }, getAngle: function () { return this.angle; }, compareTo: function (t) { var e = t; return this.compareDirection(e); }, getFromNode: function () { return this.from; }, getSym: function () { return this.sym; }, setEdge: function (t) { this.parentEdge = t; }, remove: function () { this.sym = null, this.parentEdge = null; }, getEdge: function () { return this.parentEdge; }, getQuadrant: function () { return this.quadrant; }, setSym: function (t) { this.sym = t; }, getToNode: function () { return this.to; }, getEdgeDirection: function () { return this.edgeDirection; }, interfaces_: function () { return [s]; }, getClass: function () { return fi; } }), fi.toEdges = function (t) { for (var e = new I, n = t.iterator(); n.hasNext();)
                        e.add(n.next().parentEdge); return e; }, c(di, fi), e(di.prototype, { getNext: function () { return 2 !== this.getToNode().getDegree() ? null : this.getToNode().getOutEdges().getEdges().get(0) === this.getSym() ? this.getToNode().getOutEdges().getEdges().get(1) : (g.isTrue(this.getToNode().getOutEdges().getEdges().get(1) === this.getSym()), this.getToNode().getOutEdges().getEdges().get(0)); }, interfaces_: function () { return []; }, getClass: function () { return di; } }), c(pi, gi), e(pi.prototype, { isRemoved: function () { return null === this.dirEdge; }, setDirectedEdges: function (t, e) { this.dirEdge = [t, e], t.setEdge(this), e.setEdge(this), t.setSym(e), e.setSym(t), t.getFromNode().addOutEdge(t), e.getFromNode().addOutEdge(e); }, getDirEdge: function () { if (Number.isInteger(arguments[0])) {
                            var t = arguments[0];
                            return this.dirEdge[t];
                        } if (arguments[0] instanceof vi) {
                            var e = arguments[0];
                            return this.dirEdge[0].getFromNode() === e ? this.dirEdge[0] : this.dirEdge[1].getFromNode() === e ? this.dirEdge[1] : null;
                        } }, remove: function () { this.dirEdge = null; }, getOppositeNode: function (t) { return this.dirEdge[0].getFromNode() === t ? this.dirEdge[0].getToNode() : this.dirEdge[1].getFromNode() === t ? this.dirEdge[1].getToNode() : null; }, interfaces_: function () { return []; }, getClass: function () { return pi; } }), e(mi.prototype, { getNextEdge: function (t) { var e = this.getIndex(t); return this.outEdges.get(this.getIndex(e + 1)); }, getCoordinate: function () { var t = this.iterator(); if (!t.hasNext())
                            return null; var e = t.next(); return e.getCoordinate(); }, iterator: function () { return this.sortEdges(), this.outEdges.iterator(); }, sortEdges: function () { this.sorted || (co.sort(this.outEdges), this.sorted = !0); }, remove: function (t) { this.outEdges.remove(t); }, getEdges: function () { return this.sortEdges(), this.outEdges; }, getNextCWEdge: function (t) { var e = this.getIndex(t); return this.outEdges.get(this.getIndex(e - 1)); }, getIndex: function () { if (arguments[0] instanceof pi) {
                            var t = arguments[0];
                            this.sortEdges();
                            for (var e = 0; e < this.outEdges.size(); e++) {
                                var n = this.outEdges.get(e);
                                if (n.getEdge() === t)
                                    return e;
                            }
                            return -1;
                        } if (arguments[0] instanceof fi) {
                            var r = arguments[0];
                            this.sortEdges();
                            for (var e = 0; e < this.outEdges.size(); e++) {
                                var n = this.outEdges.get(e);
                                if (n === r)
                                    return e;
                            }
                            return -1;
                        } if (Number.isInteger(arguments[0])) {
                            var i = arguments[0], s = i % this.outEdges.size();
                            return 0 > s && (s += this.outEdges.size()), s;
                        } }, add: function (t) { this.outEdges.add(t), this.sorted = !1; }, getDegree: function () { return this.outEdges.size(); }, interfaces_: function () { return []; }, getClass: function () { return mi; } }), c(vi, gi), e(vi.prototype, { isRemoved: function () { return null === this.pt; }, addOutEdge: function (t) { this.deStar.add(t); }, getCoordinate: function () { return this.pt; }, getOutEdges: function () { return this.deStar; }, remove: function () { if (0 === arguments.length)
                            this.pt = null;
                        else if (1 === arguments.length) {
                            var t = arguments[0];
                            this.deStar.remove(t);
                        } }, getIndex: function (t) { return this.deStar.getIndex(t); }, getDegree: function () { return this.deStar.getDegree(); }, interfaces_: function () { return []; }, getClass: function () { return vi; } }), vi.getEdgesBetween = function (t, e) { var n = fi.toEdges(t.getOutEdges().getEdges()), r = new Q(n), i = fi.toEdges(e.getOutEdges().getEdges()); return r.retainAll(i), r; }, c(yi, pi), e(yi.prototype, { getLine: function () { return this.line; }, interfaces_: function () { return []; }, getClass: function () { return yi; } }), e(xi.prototype, { find: function (t) { return this.nodeMap.get(t); }, iterator: function () { return this.nodeMap.values().iterator(); }, remove: function (t) { return this.nodeMap.remove(t); }, values: function () { return this.nodeMap.values(); }, add: function (t) { return this.nodeMap.put(t.getCoordinate(), t), t; }, interfaces_: function () { return []; }, getClass: function () { return xi; } }), e(Ei.prototype, { findNodesOfDegree: function (t) { for (var e = new I, n = this.nodeIterator(); n.hasNext();) {
                            var r = n.next();
                            r.getDegree() === t && e.add(r);
                        } return e; }, dirEdgeIterator: function () { return this.dirEdges.iterator(); }, edgeIterator: function () { return this.edges.iterator(); }, remove: function () { if (arguments[0] instanceof pi) {
                            var t = arguments[0];
                            this.remove(t.getDirEdge(0)), this.remove(t.getDirEdge(1)), this.edges.remove(t), t.remove();
                        }
                        else if (arguments[0] instanceof fi) {
                            var e = arguments[0], n = e.getSym();
                            null !== n && n.setSym(null), e.getFromNode().remove(e), e.remove(), this.dirEdges.remove(e);
                        }
                        else if (arguments[0] instanceof vi) {
                            for (var r = arguments[0], i = r.getOutEdges().getEdges(), s = i.iterator(); s.hasNext();) {
                                var o = s.next(), n = o.getSym();
                                null !== n && this.remove(n), this.dirEdges.remove(o);
                                var a = o.getEdge();
                                null !== a && this.edges.remove(a);
                            }
                            this.nodeMap.remove(r.getCoordinate()), r.remove();
                        } }, findNode: function (t) { return this.nodeMap.find(t); }, getEdges: function () { return this.edges; }, nodeIterator: function () { return this.nodeMap.iterator(); }, contains: function () { if (arguments[0] instanceof pi) {
                            var t = arguments[0];
                            return this.edges.contains(t);
                        } if (arguments[0] instanceof fi) {
                            var e = arguments[0];
                            return this.dirEdges.contains(e);
                        } }, add: function () { if (arguments[0] instanceof vi) {
                            var t = arguments[0];
                            this.nodeMap.add(t);
                        }
                        else if (arguments[0] instanceof pi) {
                            var e = arguments[0];
                            this.edges.add(e), this.add(e.getDirEdge(0)), this.add(e.getDirEdge(1));
                        }
                        else if (arguments[0] instanceof fi) {
                            var n = arguments[0];
                            this.dirEdges.add(n);
                        } }, getNodes: function () { return this.nodeMap.values(); }, interfaces_: function () { return []; }, getClass: function () { return Ei; } }), c(Ii, Ei), e(Ii.prototype, { addEdge: function (t) { if (t.isEmpty())
                            return null; var e = H.removeRepeatedPoints(t.getCoordinates()); if (e.length <= 1)
                            return null; var n = e[0], r = e[e.length - 1], i = this.getNode(n), s = this.getNode(r), o = new di(i, s, e[1], !0), a = new di(s, i, e[e.length - 2], !1), u = new yi(t); u.setDirectedEdges(o, a), this.add(u); }, getNode: function (t) { var e = this.findNode(t); return null === e && (e = new vi(t), this.add(e)), e; }, interfaces_: function () { return []; }, getClass: function () { return Ii; } }), e(Ni.prototype, { buildEdgeStringsForUnprocessedNodes: function () { for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
                            var e = t.next();
                            e.isMarked() || (g.isTrue(2 === e.getDegree()), this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
                        } }, buildEdgeStringsForNonDegree2Nodes: function () { for (var t = this.graph.getNodes().iterator(); t.hasNext();) {
                            var e = t.next();
                            2 !== e.getDegree() && (this.buildEdgeStringsStartingAt(e), e.setMarked(!0));
                        } }, buildEdgeStringsForObviousStartNodes: function () { this.buildEdgeStringsForNonDegree2Nodes(); }, getMergedLineStrings: function () { return this.merge(), this.mergedLineStrings; }, buildEdgeStringsStartingAt: function (t) { for (var e = t.getOutEdges().iterator(); e.hasNext();) {
                            var n = e.next();
                            n.getEdge().isMarked() || this.edgeStrings.add(this.buildEdgeStringStartingWith(n));
                        } }, merge: function () { if (null !== this.mergedLineStrings)
                            return null; gi.setMarked(this.graph.nodeIterator(), !1), gi.setMarked(this.graph.edgeIterator(), !1), this.edgeStrings = new I, this.buildEdgeStringsForObviousStartNodes(), this.buildEdgeStringsForIsolatedLoops(), this.mergedLineStrings = new I; for (var t = this.edgeStrings.iterator(); t.hasNext();) {
                            var e = t.next();
                            this.mergedLineStrings.add(e.toLineString());
                        } }, buildEdgeStringStartingWith: function (t) { var e = new hi(this.factory), n = t; do
                            e.add(n), n.getEdge().setMarked(!0), n = n.getNext();
                        while (null !== n && n !== t); return e; }, add: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            t.apply({ interfaces_: function () { return [k]; }, filter: function (t) { t instanceof wt && this.add(t); } });
                        }
                        else if (R(arguments[0], m)) {
                            var e = arguments[0];
                            this.mergedLineStrings = null;
                            for (var n = e.iterator(); n.hasNext();) {
                                var r = n.next();
                                this.add(r);
                            }
                        }
                        else if (arguments[0] instanceof wt) {
                            var i = arguments[0];
                            null === this.factory && (this.factory = i.getFactory()), this.graph.addEdge(i);
                        } }, buildEdgeStringsForIsolatedLoops: function () { this.buildEdgeStringsForUnprocessedNodes(); }, interfaces_: function () { return []; }, getClass: function () { return Ni; } });
                    var So = Object.freeze({ LineMerger: Ni }), Lo = Object.freeze({ OverlayOp: rr });
                    c(Ci, fi), e(Ci.prototype, { getNext: function () { return this.next; }, isInRing: function () { return null !== this.edgeRing; }, setRing: function (t) { this.edgeRing = t; }, setLabel: function (t) { this.label = t; }, getLabel: function () { return this.label; }, setNext: function (t) { this.next = t; }, getRing: function () { return this.edgeRing; }, interfaces_: function () { return []; }, getClass: function () { return Ci; } }), c(wi, pi), e(wi.prototype, { getLine: function () { return this.line; }, interfaces_: function () { return []; }, getClass: function () { return wi; } }), e(Si.prototype, { isIncluded: function () { return this._isIncluded; }, getCoordinates: function () { if (null === this.ringPts) {
                            for (var t = new N, e = this.deList.iterator(); e.hasNext();) {
                                var n = e.next(), r = n.getEdge();
                                Si.addEdge(r.getLine().getCoordinates(), n.getEdgeDirection(), t);
                            }
                            this.ringPts = t.toCoordinateArray();
                        } return this.ringPts; }, isIncludedSet: function () { return this._isIncludedSet; }, isValid: function () { return this.getCoordinates(), this.ringPts.length <= 3 ? !1 : (this.getRing(), this.ring.isValid()); }, build: function (t) { var e = t; do
                            this.add(e), e.setRing(this), e = e.getNext(), g.isTrue(null !== e, "found null DE in ring"), g.isTrue(e === t || !e.isInRing(), "found DE already in ring");
                        while (e !== t); }, isOuterHole: function () { return this._isHole ? !this.hasShell() : !1; }, getPolygon: function () { var t = null; if (null !== this.holes) {
                            t = new Array(this.holes.size()).fill(null);
                            for (var e = 0; e < this.holes.size(); e++)
                                t[e] = this.holes.get(e);
                        } var n = this.factory.createPolygon(this.ring, t); return n; }, isHole: function () { return this._isHole; }, isProcessed: function () { return this._isProcessed; }, addHole: function () { if (arguments[0] instanceof Pt) {
                            var t = arguments[0];
                            null === this.holes && (this.holes = new I), this.holes.add(t);
                        }
                        else if (arguments[0] instanceof Si) {
                            var e = arguments[0];
                            e.setShell(this);
                            var n = e.getRing();
                            null === this.holes && (this.holes = new I), this.holes.add(n);
                        } }, setIncluded: function (t) { this._isIncluded = t, this._isIncludedSet = !0; }, getOuterHole: function () { if (this.isHole())
                            return null; for (var t = 0; t < this.deList.size(); t++) {
                            var e = this.deList.get(t), n = e.getSym().getRing();
                            if (n.isOuterHole())
                                return n;
                        } return null; }, computeHole: function () { var t = this.getRing(); this._isHole = ce.isCCW(t.getCoordinates()); }, hasShell: function () { return null !== this.shell; }, isOuterShell: function () { return null !== this.getOuterHole(); }, getLineString: function () { return this.getCoordinates(), this.factory.createLineString(this.ringPts); }, toString: function () { return se.toLineString(new Gt(this.getCoordinates())); }, getShell: function () { return this.isHole() ? this.shell : this; }, add: function (t) { this.deList.add(t); }, getRing: function () { if (null !== this.ring)
                            return this.ring; this.getCoordinates(), this.ringPts.length < 3 && D.out.println(this.ringPts); try {
                            this.ring = this.factory.createLinearRing(this.ringPts);
                        }
                        catch (t) {
                            if (!(t instanceof w))
                                throw t;
                            D.out.println(this.ringPts);
                        }
                        finally { } return this.ring; }, updateIncluded: function () { if (this.isHole())
                            return null; for (var t = 0; t < this.deList.size(); t++) {
                            var e = this.deList.get(t), n = e.getSym().getRing().getShell();
                            if (null !== n && n.isIncludedSet())
                                return this.setIncluded(!n.isIncluded()), null;
                        } }, setShell: function (t) { this.shell = t; }, setProcessed: function (t) { this._isProcessed = t; }, interfaces_: function () { return []; }, getClass: function () { return Si; } }), Si.findDirEdgesInRing = function (t) { var e = t, n = new I; do
                        n.add(e), e = e.getNext(), g.isTrue(null !== e, "found null DE in ring"), g.isTrue(e === t || !e.isInRing(), "found DE already in ring");
                    while (e !== t); return n; }, Si.addEdge = function (t, e, n) { if (e)
                        for (var r = 0; r < t.length; r++)
                            n.add(t[r], !1);
                    else
                        for (var r = t.length - 1; r >= 0; r--)
                            n.add(t[r], !1); }, Si.findEdgeRingContaining = function (t, e) { for (var n = t.getRing(), r = n.getEnvelopeInternal(), i = n.getCoordinateN(0), s = null, o = null, a = e.iterator(); a.hasNext();) {
                        var u = a.next(), l = u.getRing(), c = l.getEnvelopeInternal();
                        if (!c.equals(r) && c.contains(r)) {
                            i = H.ptNotInList(n.getCoordinates(), l.getCoordinates());
                            var h = !1;
                            ce.isPointInRing(i, l.getCoordinates()) && (h = !0), h && (null === s || o.contains(c)) && (s = u, o = s.getRing().getEnvelopeInternal());
                        }
                    } return s; }, e(Li.prototype, { compare: function (t, e) { var n = t, r = e; return n.getRing().getEnvelope().compareTo(r.getRing().getEnvelope()); }, interfaces_: function () { return [a]; }, getClass: function () { return Li; } }), Si.EnvelopeComparator = Li, c(Ri, Ei), e(Ri.prototype, { findEdgeRing: function (t) { var e = new Si(this.factory); return e.build(t), e; }, computeDepthParity: function () { if (0 === arguments.length)
                            for (;;) {
                                var t = null;
                                if (null === t)
                                    return null;
                                this.computeDepthParity(t);
                            }
                        else
                            1 === arguments.length && arguments[0]; }, computeNextCWEdges: function () { for (var t = this.nodeIterator(); t.hasNext();) {
                            var e = t.next();
                            Ri.computeNextCWEdges(e);
                        } }, addEdge: function (t) { if (t.isEmpty())
                            return null; var e = H.removeRepeatedPoints(t.getCoordinates()); if (e.length < 2)
                            return null; var n = e[0], r = e[e.length - 1], i = this.getNode(n), s = this.getNode(r), o = new Ci(i, s, e[1], !0), a = new Ci(s, i, e[e.length - 2], !1), u = new wi(t); u.setDirectedEdges(o, a), this.add(u); }, deleteCutEdges: function () { this.computeNextCWEdges(), Ri.findLabeledEdgeRings(this.dirEdges); for (var t = new I, e = this.dirEdges.iterator(); e.hasNext();) {
                            var n = e.next();
                            if (!n.isMarked()) {
                                var r = n.getSym();
                                if (n.getLabel() === r.getLabel()) {
                                    n.setMarked(!0), r.setMarked(!0);
                                    var i = n.getEdge();
                                    t.add(i.getLine());
                                }
                            }
                        } return t; }, getEdgeRings: function () { this.computeNextCWEdges(), Ri.label(this.dirEdges, -1); var t = Ri.findLabeledEdgeRings(this.dirEdges); this.convertMaximalToMinimalEdgeRings(t); for (var e = new I, n = this.dirEdges.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (!r.isMarked() && !r.isInRing()) {
                                var i = this.findEdgeRing(r);
                                e.add(i);
                            }
                        } return e; }, getNode: function (t) { var e = this.findNode(t); return null === e && (e = new vi(t), this.add(e)), e; }, convertMaximalToMinimalEdgeRings: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next(), r = n.getLabel(), i = Ri.findIntersectionNodes(n, r);
                            if (null !== i)
                                for (var s = i.iterator(); s.hasNext();) {
                                    var o = s.next();
                                    Ri.computeNextCCWEdges(o, r);
                                }
                        } }, deleteDangles: function () { for (var t = this.findNodesOfDegree(1), e = new Q, n = new pe, r = t.iterator(); r.hasNext();)
                            n.push(r.next()); for (; !n.isEmpty();) {
                            var i = n.pop();
                            Ri.deleteAllEdges(i);
                            for (var s = i.getOutEdges().getEdges(), r = s.iterator(); r.hasNext();) {
                                var o = r.next();
                                o.setMarked(!0);
                                var a = o.getSym();
                                null !== a && a.setMarked(!0);
                                var u = o.getEdge();
                                e.add(u.getLine());
                                var l = o.getToNode();
                                1 === Ri.getDegreeNonDeleted(l) && n.push(l);
                            }
                        } return e; }, interfaces_: function () { return []; }, getClass: function () { return Ri; } }), Ri.findLabeledEdgeRings = function (t) { for (var e = new I, n = 1, r = t.iterator(); r.hasNext();) {
                        var i = r.next();
                        if (!(i.isMarked() || i.getLabel() >= 0)) {
                            e.add(i);
                            var s = Si.findDirEdgesInRing(i);
                            Ri.label(s, n), n++;
                        }
                    } return e; }, Ri.getDegreeNonDeleted = function (t) { for (var e = t.getOutEdges().getEdges(), n = 0, r = e.iterator(); r.hasNext();) {
                        var i = r.next();
                        i.isMarked() || n++;
                    } return n; }, Ri.deleteAllEdges = function (t) { for (var e = t.getOutEdges().getEdges(), n = e.iterator(); n.hasNext();) {
                        var r = n.next();
                        r.setMarked(!0);
                        var i = r.getSym();
                        null !== i && i.setMarked(!0);
                    } }, Ri.label = function (t, e) { for (var n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        r.setLabel(e);
                    } }, Ri.computeNextCWEdges = function (t) { for (var e = t.getOutEdges(), n = null, r = null, i = e.getEdges().iterator(); i.hasNext();) {
                        var s = i.next();
                        if (!s.isMarked()) {
                            if (null === n && (n = s), null !== r) {
                                var o = r.getSym();
                                o.setNext(s);
                            }
                            r = s;
                        }
                    } if (null !== r) {
                        var o = r.getSym();
                        o.setNext(n);
                    } }, Ri.computeNextCCWEdges = function (t, e) { for (var n = t.getOutEdges(), r = null, i = null, s = n.getEdges(), o = s.size() - 1; o >= 0; o--) {
                        var a = s.get(o), u = a.getSym(), l = null;
                        a.getLabel() === e && (l = a);
                        var c = null;
                        u.getLabel() === e && (c = u), null === l && null === c || (null !== c && (i = c), null !== l && (null !== i && (i.setNext(l), i = null), null === r && (r = l)));
                    } null !== i && (g.isTrue(null !== r), i.setNext(r)); }, Ri.getDegree = function (t, e) { for (var n = t.getOutEdges().getEdges(), r = 0, i = n.iterator(); i.hasNext();) {
                        var s = i.next();
                        s.getLabel() === e && r++;
                    } return r; }, Ri.findIntersectionNodes = function (t, e) { var n = t, r = null; do {
                        var i = n.getFromNode();
                        Ri.getDegree(i, e) > 1 && (null === r && (r = new I), r.add(i)), n = n.getNext(), g.isTrue(null !== n, "found null DE in ring"), g.isTrue(n === t || !n.isInRing(), "found DE already in ring");
                    } while (n !== t); return r; }, e(bi.prototype, { getGeometry: function () { return null === this.geomFactory && (this.geomFactory = new re), this.polygonize(), this.extractOnlyPolygonal ? this.geomFactory.buildGeometry(this.polyList) : this.geomFactory.createGeometryCollection(re.toGeometryArray(this.polyList)); }, getInvalidRingLines: function () { return this.polygonize(), this.invalidRingLines; }, findValidRings: function (t, e, n) { for (var r = t.iterator(); r.hasNext();) {
                            var i = r.next();
                            i.isValid() ? e.add(i) : n.add(i.getLineString());
                        } }, polygonize: function () { if (null !== this.polyList)
                            return null; if (this.polyList = new I, null === this.graph)
                            return null; this.dangles = this.graph.deleteDangles(), this.cutEdges = this.graph.deleteCutEdges(); var t = this.graph.getEdgeRings(), e = new I; this.invalidRingLines = new I, this.isCheckingRingsValid ? this.findValidRings(t, e, this.invalidRingLines) : e = t, this.findShellsAndHoles(e), bi.assignHolesToShells(this.holeList, this.shellList), co.sort(this.shellList, new Si.EnvelopeComparator); var n = !0; this.extractOnlyPolygonal && (bi.findDisjointShells(this.shellList), n = !1), this.polyList = bi.extractPolygons(this.shellList, n); }, getDangles: function () { return this.polygonize(), this.dangles; }, getCutEdges: function () { return this.polygonize(), this.cutEdges; }, getPolygons: function () { return this.polygonize(), this.polyList; }, add: function () { if (R(arguments[0], m))
                            for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.add(n);
                            }
                        else if (arguments[0] instanceof wt) {
                            var r = arguments[0];
                            this.geomFactory = r.getFactory(), null === this.graph && (this.graph = new Ri(this.geomFactory)), this.graph.addEdge(r);
                        }
                        else if (arguments[0] instanceof U) {
                            var i = arguments[0];
                            i.apply(this.lineStringAdder);
                        } }, setCheckRingsValid: function (t) { this.isCheckingRingsValid = t; }, findShellsAndHoles: function (t) { this.holeList = new I, this.shellList = new I; for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.computeHole(), n.isHole() ? this.holeList.add(n) : this.shellList.add(n);
                        } }, interfaces_: function () { return []; }, getClass: function () { return bi; } }), bi.findOuterShells = function (t) { for (var e = t.iterator(); e.hasNext();) {
                        var n = e.next(), r = n.getOuterHole();
                        null === r || r.isProcessed() || (n.setIncluded(!0), r.setProcessed(!0));
                    } }, bi.extractPolygons = function (t, e) { for (var n = new I, r = t.iterator(); r.hasNext();) {
                        var i = r.next();
                        (e || i.isIncluded()) && n.add(i.getPolygon());
                    } return n; }, bi.assignHolesToShells = function (t, e) { for (var n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        bi.assignHoleToShell(r, e);
                    } }, bi.assignHoleToShell = function (t, e) { var n = Si.findEdgeRingContaining(t, e); null !== n && n.addHole(t); }, bi.findDisjointShells = function (t) { bi.findOuterShells(t); var e = null; do {
                        e = !1;
                        for (var n = t.iterator(); n.hasNext();) {
                            var r = n.next();
                            r.isIncludedSet() || (r.updateIncluded(), r.isIncludedSet() || (e = !0));
                        }
                    } while (e); }, e(Ti.prototype, { filter: function (t) { t instanceof wt && this.p.add(t); }, interfaces_: function () { return [k]; }, getClass: function () { return Ti; } }), bi.LineStringAdder = Ti;
                    var Ro = Object.freeze({ Polygonizer: bi });
                    e(Pi.prototype, { createEdgeEndForNext: function (t, e, n, r) { var i = n.segmentIndex + 1; if (i >= t.getNumPoints() && null === r)
                            return null; var s = t.getCoordinate(i); null !== r && r.segmentIndex === n.segmentIndex && (s = r.coord); var o = new En(t, n.coord, s, new fn(t.getLabel())); e.add(o); }, createEdgeEndForPrev: function (t, e, n, r) { var i = n.segmentIndex; if (0 === n.dist) {
                            if (0 === i)
                                return null;
                            i--;
                        } var s = t.getCoordinate(i); null !== r && r.segmentIndex >= i && (s = r.coord); var o = new fn(t.getLabel()); o.flip(); var a = new En(t, n.coord, s, o); e.add(a); }, computeEdgeEnds: function () { if (1 === arguments.length) {
                            for (var t = arguments[0], e = new I, n = t; n.hasNext();) {
                                var r = n.next();
                                this.computeEdgeEnds(r, e);
                            }
                            return e;
                        } if (2 === arguments.length) {
                            var i = arguments[0], s = arguments[1], o = i.getEdgeIntersectionList();
                            o.addEndpoints();
                            var a = o.iterator(), u = null, l = null;
                            if (!a.hasNext())
                                return null;
                            var c = a.next();
                            do
                                u = l, l = c, c = null, a.hasNext() && (c = a.next()), null !== l && (this.createEdgeEndForPrev(i, s, l, u), this.createEdgeEndForNext(i, s, l, c));
                            while (null !== l);
                        } }, interfaces_: function () { return []; }, getClass: function () { return Pi; } }), c(Oi, En), e(Oi.prototype, { insert: function (t) { this.edgeEnds.add(t); }, print: function (t) { t.println("EdgeEndBundle--> Label: " + this.label); for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.print(t), t.println();
                        } }, iterator: function () { return this.edgeEnds.iterator(); }, getEdgeEnds: function () { return this.edgeEnds; }, computeLabelOn: function (t, e) { for (var n = 0, r = !1, i = this.iterator(); i.hasNext();) {
                            var s = i.next(), o = s.getLabel().getLocation(t);
                            o === L.BOUNDARY && n++, o === L.INTERIOR && (r = !0);
                        } var o = L.NONE; r && (o = L.INTERIOR), n > 0 && (o = $n.determineBoundary(e, n)), this.label.setLocation(t, o); }, computeLabelSide: function (t, e) { for (var n = this.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (r.getLabel().isArea()) {
                                var i = r.getLabel().getLocation(t, e);
                                if (i === L.INTERIOR)
                                    return this.label.setLocation(t, e, L.INTERIOR), null;
                                i === L.EXTERIOR && this.label.setLocation(t, e, L.EXTERIOR);
                            }
                        } }, getLabel: function () { return this.label; }, computeLabelSides: function (t) { this.computeLabelSide(t, hn.LEFT), this.computeLabelSide(t, hn.RIGHT); }, updateIM: function (t) { Qn.updateIM(this.label, t); }, computeLabel: function (t) { for (var e = !1, n = this.iterator(); n.hasNext();) {
                            var r = n.next();
                            r.getLabel().isArea() && (e = !0);
                        } e ? this.label = new fn(L.NONE, L.NONE, L.NONE) : this.label = new fn(L.NONE); for (var i = 0; 2 > i; i++)
                            this.computeLabelOn(i, t), e && this.computeLabelSides(i); }, interfaces_: function () { return []; }, getClass: function () { return Oi; } }), c(Mi, Tn), e(Mi.prototype, { updateIM: function (t) { for (var e = this.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.updateIM(t);
                        } }, insert: function (t) { var e = this.edgeMap.get(t); null === e ? (e = new Oi(t), this.insertEdgeEnd(t, e)) : e.insert(t); }, interfaces_: function () { return []; }, getClass: function () { return Mi; } }), c(_i, yn), e(_i.prototype, { updateIMFromEdges: function (t) { this.edges.updateIM(t); }, computeIM: function (t) { t.setAtLeastIfValid(this.label.getLocation(0), this.label.getLocation(1), 0); }, interfaces_: function () { return []; }, getClass: function () { return _i; } }), c(Ai, Nn), e(Ai.prototype, { createNode: function (t) { return new _i(t, new Mi); }, interfaces_: function () { return []; }, getClass: function () { return Ai; } }), e(Di.prototype, { insertEdgeEnds: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.nodes.add(n);
                        } }, computeProperIntersectionIM: function (t, e) { var n = this.arg[0].getGeometry().getDimension(), r = this.arg[1].getGeometry().getDimension(), i = t.hasProperIntersection(), s = t.hasProperInteriorIntersection(); 2 === n && 2 === r ? i && e.setAtLeast("212101212") : 2 === n && 1 === r ? (i && e.setAtLeast("FFF0FFFF2"), s && e.setAtLeast("1FFFFF1FF")) : 1 === n && 2 === r ? (i && e.setAtLeast("F0FFFFFF2"), s && e.setAtLeast("1F1FFFFFF")) : 1 === n && 1 === r && s && e.setAtLeast("0FFFFFFFF"); }, labelIsolatedEdges: function (t, e) { for (var n = this.arg[t].getEdgeIterator(); n.hasNext();) {
                            var r = n.next();
                            r.isIsolated() && (this.labelIsolatedEdge(r, e, this.arg[e].getGeometry()), this.isolatedEdges.add(r));
                        } }, labelIsolatedEdge: function (t, e, n) { if (n.getDimension() > 0) {
                            var r = this.ptLocator.locate(t.getCoordinate(), n);
                            t.getLabel().setAllLocations(e, r);
                        }
                        else
                            t.getLabel().setAllLocations(e, L.EXTERIOR); }, computeIM: function () { var t = new ge; if (t.set(L.EXTERIOR, L.EXTERIOR, 2), !this.arg[0].getGeometry().getEnvelopeInternal().intersects(this.arg[1].getGeometry().getEnvelopeInternal()))
                            return this.computeDisjointIM(t), t; this.arg[0].computeSelfNodes(this.li, !1), this.arg[1].computeSelfNodes(this.li, !1); var e = this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !1); this.computeIntersectionNodes(0), this.computeIntersectionNodes(1), this.copyNodesAndLabels(0), this.copyNodesAndLabels(1), this.labelIsolatedNodes(), this.computeProperIntersectionIM(e, t); var n = new Pi, r = n.computeEdgeEnds(this.arg[0].getEdgeIterator()); this.insertEdgeEnds(r); var i = n.computeEdgeEnds(this.arg[1].getEdgeIterator()); return this.insertEdgeEnds(i), this.labelNodeEdges(), this.labelIsolatedEdges(0, 1), this.labelIsolatedEdges(1, 0), this.updateIM(t), t; }, labelNodeEdges: function () { for (var t = this.nodes.iterator(); t.hasNext();) {
                            var e = t.next();
                            e.getEdges().computeLabelling(this.arg);
                        } }, copyNodesAndLabels: function (t) { for (var e = this.arg[t].getNodeIterator(); e.hasNext();) {
                            var n = e.next(), r = this.nodes.addNode(n.getCoordinate());
                            r.setLabel(t, n.getLabel().getLocation(t));
                        } }, labelIntersectionNodes: function (t) { for (var e = this.arg[t].getEdgeIterator(); e.hasNext();)
                            for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.getEdgeIntersectionList().iterator(); i.hasNext();) {
                                var s = i.next(), o = this.nodes.find(s.coord);
                                o.getLabel().isNull(t) && (r === L.BOUNDARY ? o.setLabelBoundary(t) : o.setLabel(t, L.INTERIOR));
                            } }, labelIsolatedNode: function (t, e) { var n = this.ptLocator.locate(t.getCoordinate(), this.arg[e].getGeometry()); t.getLabel().setAllLocations(e, n); }, computeIntersectionNodes: function (t) { for (var e = this.arg[t].getEdgeIterator(); e.hasNext();)
                            for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.getEdgeIntersectionList().iterator(); i.hasNext();) {
                                var s = i.next(), o = this.nodes.addNode(s.coord);
                                r === L.BOUNDARY ? o.setLabelBoundary(t) : o.getLabel().isNull(t) && o.setLabel(t, L.INTERIOR);
                            } }, labelIsolatedNodes: function () { for (var t = this.nodes.iterator(); t.hasNext();) {
                            var e = t.next(), n = e.getLabel();
                            g.isTrue(n.getGeometryCount() > 0, "node with empty label found"), e.isIsolated() && (n.isNull(0) ? this.labelIsolatedNode(e, 0) : this.labelIsolatedNode(e, 1));
                        } }, updateIM: function (t) { for (var e = this.isolatedEdges.iterator(); e.hasNext();) {
                            var n = e.next();
                            n.updateIM(t);
                        } for (var r = this.nodes.iterator(); r.hasNext();) {
                            var i = r.next();
                            i.updateIM(t), i.updateIMFromEdges(t);
                        } }, computeDisjointIM: function (t) { var e = this.arg[0].getGeometry(); e.isEmpty() || (t.set(L.INTERIOR, L.EXTERIOR, e.getDimension()), t.set(L.BOUNDARY, L.EXTERIOR, e.getBoundaryDimension())); var n = this.arg[1].getGeometry(); n.isEmpty() || (t.set(L.EXTERIOR, L.INTERIOR, n.getDimension()), t.set(L.EXTERIOR, L.BOUNDARY, n.getBoundaryDimension())); }, interfaces_: function () { return []; }, getClass: function () { return Di; } }), e(Fi.prototype, { isContainedInBoundary: function (t) { if (t instanceof bt)
                            return !1; if (t instanceof Lt)
                            return this.isPointContainedInBoundary(t); if (t instanceof wt)
                            return this.isLineStringContainedInBoundary(t); for (var e = 0; e < t.getNumGeometries(); e++) {
                            var n = t.getGeometryN(e);
                            if (!this.isContainedInBoundary(n))
                                return !1;
                        } return !0; }, isLineSegmentContainedInBoundary: function (t, e) { if (t.equals(e))
                            return this.isPointContainedInBoundary(t); if (t.x === e.x) {
                            if (t.x === this.rectEnv.getMinX() || t.x === this.rectEnv.getMaxX())
                                return !0;
                        }
                        else if (t.y === e.y && (t.y === this.rectEnv.getMinY() || t.y === this.rectEnv.getMaxY()))
                            return !0; return !1; }, isLineStringContainedInBoundary: function (t) { for (var e = t.getCoordinateSequence(), n = new f, r = new f, i = 0; i < e.size() - 1; i++)
                            if (e.getCoordinate(i, n), e.getCoordinate(i + 1, r), !this.isLineSegmentContainedInBoundary(n, r))
                                return !1; return !0; }, isPointContainedInBoundary: function () { if (arguments[0] instanceof Lt) {
                            var t = arguments[0];
                            return this.isPointContainedInBoundary(t.getCoordinate());
                        } if (arguments[0] instanceof f) {
                            var e = arguments[0];
                            return e.x === this.rectEnv.getMinX() || e.x === this.rectEnv.getMaxX() || e.y === this.rectEnv.getMinY() || e.y === this.rectEnv.getMaxY();
                        } }, contains: function (t) { return this.rectEnv.contains(t.getEnvelopeInternal()) ? !this.isContainedInBoundary(t) : !1; }, interfaces_: function () { return []; }, getClass: function () { return Fi; } }), Fi.contains = function (t, e) { var n = new Fi(t); return n.contains(e); }, e(Gi.prototype, { intersects: function (t, e) { var n = new C(t, e); if (!this.rectEnv.intersects(n))
                            return !1; if (this.rectEnv.intersects(t))
                            return !0; if (this.rectEnv.intersects(e))
                            return !0; if (t.compareTo(e) > 0) {
                            var r = t;
                            t = e, e = r;
                        } var i = !1; return e.y > t.y && (i = !0), i ? this.li.computeIntersection(t, e, this.diagDown0, this.diagDown1) : this.li.computeIntersection(t, e, this.diagUp0, this.diagUp1), !!this.li.hasIntersection(); }, interfaces_: function () { return []; }, getClass: function () { return Gi; } }), e(ki.prototype, { applyTo: function (t) { for (var e = 0; e < t.getNumGeometries() && !this._isDone; e++) {
                            var n = t.getGeometryN(e);
                            if (n instanceof gt)
                                this.applyTo(n);
                            else if (this.visit(n), this.isDone())
                                return this._isDone = !0, null;
                        } }, interfaces_: function () { return []; }, getClass: function () { return ki; } }), e(Ui.prototype, { intersects: function (t) { if (!this.rectEnv.intersects(t.getEnvelopeInternal()))
                            return !1; var e = new qi(this.rectEnv); if (e.applyTo(t), e.intersects())
                            return !0; var n = new Bi(this.rectangle); if (n.applyTo(t), n.containsPoint())
                            return !0; var r = new zi(this.rectangle); return r.applyTo(t), !!r.intersects(); }, interfaces_: function () { return []; }, getClass: function () { return Ui; } }), Ui.intersects = function (t, e) { var n = new Ui(t); return n.intersects(e); }, c(qi, ki), e(qi.prototype, { isDone: function () { return this._intersects === !0; }, visit: function (t) { var e = t.getEnvelopeInternal(); return this.rectEnv.intersects(e) ? this.rectEnv.contains(e) ? (this._intersects = !0, null) : e.getMinX() >= this.rectEnv.getMinX() && e.getMaxX() <= this.rectEnv.getMaxX() ? (this._intersects = !0, null) : e.getMinY() >= this.rectEnv.getMinY() && e.getMaxY() <= this.rectEnv.getMaxY() ? (this._intersects = !0, null) : void 0 : null; }, intersects: function () { return this._intersects; }, interfaces_: function () { return []; }, getClass: function () { return qi; } }), c(Bi, ki), e(Bi.prototype, { isDone: function () { return this._containsPoint === !0; }, visit: function (t) { if (!(t instanceof bt))
                            return null; var e = t.getEnvelopeInternal(); if (!this.rectEnv.intersects(e))
                            return null; for (var n = new f, r = 0; 4 > r; r++)
                            if (this.rectSeq.getCoordinate(r, n), e.contains(n) && bn.containsPointInPolygon(n, t))
                                return this._containsPoint = !0, null; }, containsPoint: function () { return this._containsPoint; }, interfaces_: function () { return []; }, getClass: function () { return Bi; } }), c(zi, ki), e(zi.prototype, { intersects: function () { return this.hasIntersection; }, isDone: function () { return this.hasIntersection === !0; }, visit: function (t) { var e = t.getEnvelopeInternal(); if (!this.rectEnv.intersects(e))
                            return null; var n = zn.getLines(t); this.checkIntersectionWithLineStrings(n); }, checkIntersectionWithLineStrings: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            if (this.checkIntersectionWithSegments(n), this.hasIntersection)
                                return null;
                        } }, checkIntersectionWithSegments: function (t) { for (var e = t.getCoordinateSequence(), n = 1; n < e.size(); n++)
                            if (e.getCoordinate(n - 1, this.p0), e.getCoordinate(n, this.p1), this.rectIntersector.intersects(this.p0, this.p1))
                                return this.hasIntersection = !0, null; }, interfaces_: function () { return []; }, getClass: function () { return zi; } }), c(Vi, tr), e(Vi.prototype, { getIntersectionMatrix: function () { return this._relate.computeIM(); }, interfaces_: function () { return []; }, getClass: function () { return Vi; } }), Vi.covers = function (t, e) { return t.getEnvelopeInternal().covers(e.getEnvelopeInternal()) ? t.isRectangle() ? !0 : Vi.relate(t, e).isCovers() : !1; }, Vi.intersects = function (t, e) { return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? t.isRectangle() ? Ui.intersects(t, e) : e.isRectangle() ? Ui.intersects(e, t) : Vi.relate(t, e).isIntersects() : !1; }, Vi.touches = function (t, e) { return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Vi.relate(t, e).isTouches(t.getDimension(), e.getDimension()) : !1; }, Vi.within = function (t, e) { return e.contains(t); }, Vi.coveredBy = function (t, e) { return Vi.covers(e, t); }, Vi.relate = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = new Vi(t, e), r = n.getIntersectionMatrix();
                        return r;
                    } if (3 === arguments.length) {
                        if ("string" == typeof arguments[2] && arguments[0] instanceof U && arguments[1] instanceof U) {
                            var i = arguments[0], s = arguments[1], o = arguments[2];
                            return Vi.relateWithCheck(i, s).matches(o);
                        }
                        if (R(arguments[2], B) && arguments[0] instanceof U && arguments[1] instanceof U) {
                            var a = arguments[0], u = arguments[1], l = arguments[2], n = new Vi(a, u, l), r = n.getIntersectionMatrix();
                            return r;
                        }
                    } }, Vi.overlaps = function (t, e) { return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Vi.relate(t, e).isOverlaps(t.getDimension(), e.getDimension()) : !1; }, Vi.disjoint = function (t, e) { return !t.intersects(e); }, Vi.relateWithCheck = function (t, e) { return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), Vi.relate(t, e); }, Vi.crosses = function (t, e) { return t.getEnvelopeInternal().intersects(e.getEnvelopeInternal()) ? Vi.relate(t, e).isCrosses(t.getDimension(), e.getDimension()) : !1; }, Vi.contains = function (t, e) {
                        return t.getEnvelopeInternal().contains(e.getEnvelopeInternal()) ? t.isRectangle() ? Fi.contains(t, e) : Vi.relate(t, e).isContains() : !1;
                    };
                    var bo = Object.freeze({ RelateOp: Vi });
                    e(Yi.prototype, { extractElements: function (t, e) { if (null === t)
                            return null; for (var n = 0; n < t.getNumGeometries(); n++) {
                            var r = t.getGeometryN(n);
                            this.skipEmpty && r.isEmpty() || e.add(r);
                        } }, combine: function () { for (var t = new I, e = this.inputGeoms.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.extractElements(n, t);
                        } return 0 === t.size() ? null !== this.geomFactory ? this.geomFactory.createGeometryCollection(null) : null : this.geomFactory.buildGeometry(t); }, interfaces_: function () { return []; }, getClass: function () { return Yi; } }), Yi.combine = function () { if (1 === arguments.length) {
                        var t = arguments[0], e = new Yi(t);
                        return e.combine();
                    } if (2 === arguments.length) {
                        var n = arguments[0], r = arguments[1], e = new Yi(Yi.createList(n, r));
                        return e.combine();
                    } if (3 === arguments.length) {
                        var i = arguments[0], s = arguments[1], o = arguments[2], e = new Yi(Yi.createList(i, s, o));
                        return e.combine();
                    } }, Yi.extractFactory = function (t) { return t.isEmpty() ? null : t.iterator().next().getFactory(); }, Yi.createList = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = new I;
                        return n.add(t), n.add(e), n;
                    } if (3 === arguments.length) {
                        var r = arguments[0], i = arguments[1], s = arguments[2], n = new I;
                        return n.add(r), n.add(i), n.add(s), n;
                    } }, e(Xi.prototype, { union: function () { for (var t = new be, e = new at, n = 0; n < this.pointGeom.getNumGeometries(); n++) {
                            var r = this.pointGeom.getGeometryN(n), i = r.getCoordinate(), s = t.locate(i, this.otherGeom);
                            s === L.EXTERIOR && e.add(i);
                        } if (0 === e.size())
                            return this.otherGeom; var o = null, a = H.toCoordinateArray(e); return o = 1 === a.length ? this.geomFact.createPoint(a[0]) : this.geomFact.createMultiPointFromCoords(a), Yi.combine(o, this.otherGeom); }, interfaces_: function () { return []; }, getClass: function () { return Xi; } }), Xi.union = function (t, e) { var n = new Xi(t, e); return n.union(); }, e(Hi.prototype, { filter: function (t) { -1 !== this.sortIndex && t.getSortIndex() !== this.sortIndex || this.comps.add(t); }, interfaces_: function () { return [ct]; }, getClass: function () { return Hi; } }), Hi.extract = function () { if (2 === arguments.length) {
                        var t = arguments[0], e = arguments[1];
                        return Hi.extract(t, e, new I);
                    } if (3 === arguments.length) {
                        var n = arguments[0], r = arguments[1], i = arguments[2];
                        return n.getSortIndex() === r ? i.add(n) : n instanceof gt && n.apply(new Hi(r, i)), i;
                    } }, e(Wi.prototype, { reduceToGeometries: function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                            var r = n.next(), i = null;
                            R(r, y) ? i = this.unionTree(r) : r instanceof U && (i = r), e.add(i);
                        } return e; }, extractByEnvelope: function (t, e, n) { for (var r = new I, i = 0; i < e.getNumGeometries(); i++) {
                            var s = e.getGeometryN(i);
                            s.getEnvelopeInternal().intersects(t) ? r.add(s) : n.add(s);
                        } return this.geomFactory.buildGeometry(r); }, unionOptimized: function (t, e) { var n = t.getEnvelopeInternal(), r = e.getEnvelopeInternal(); if (!n.intersects(r)) {
                            var i = Yi.combine(t, e);
                            return i;
                        } if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
                            return this.unionActual(t, e); var s = n.intersection(r); return this.unionUsingEnvelopeIntersection(t, e, s); }, union: function () { if (null === this.inputPolys)
                            throw new IllegalStateException("union() method cannot be called twice"); if (this.inputPolys.isEmpty())
                            return null; this.geomFactory = this.inputPolys.iterator().next().getFactory(); for (var t = new ze(Wi.STRTREE_NODE_CAPACITY), e = this.inputPolys.iterator(); e.hasNext();) {
                            var n = e.next();
                            t.insert(n.getEnvelopeInternal(), n);
                        } this.inputPolys = null; var r = t.itemsTree(), i = this.unionTree(r); return i; }, binaryUnion: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.binaryUnion(t, 0, t.size());
                        } if (3 === arguments.length) {
                            var e = arguments[0], n = arguments[1], r = arguments[2];
                            if (1 >= r - n) {
                                var i = Wi.getGeometry(e, n);
                                return this.unionSafe(i, null);
                            }
                            if (r - n === 2)
                                return this.unionSafe(Wi.getGeometry(e, n), Wi.getGeometry(e, n + 1));
                            var s = Math.trunc((r + n) / 2), i = this.binaryUnion(e, n, s), o = this.binaryUnion(e, s, r);
                            return this.unionSafe(i, o);
                        } }, repeatedUnion: function (t) { for (var e = null, n = t.iterator(); n.hasNext();) {
                            var r = n.next();
                            e = null === e ? r.copy() : e.union(r);
                        } return e; }, unionSafe: function (t, e) { return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e); }, unionActual: function (t, e) { return Wi.restrictToPolygons(t.union(e)); }, unionTree: function (t) { var e = this.reduceToGeometries(t), n = this.binaryUnion(e); return n; }, unionUsingEnvelopeIntersection: function (t, e, n) { var r = new I, i = this.extractByEnvelope(n, t, r), s = this.extractByEnvelope(n, e, r), o = this.unionActual(i, s); r.add(o); var a = Yi.combine(r); return a; }, bufferUnion: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), r = n.buffer(0);
                            return r;
                        } if (2 === arguments.length) {
                            var i = arguments[0], s = arguments[1], e = i.getFactory(), n = e.createGeometryCollection([i, s]), r = n.buffer(0);
                            return r;
                        } }, interfaces_: function () { return []; }, getClass: function () { return Wi; } }), Wi.restrictToPolygons = function (t) { if (R(t, Rt))
                        return t; var e = oi.getPolygons(t); return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(re.toPolygonArray(e)); }, Wi.getGeometry = function (t, e) { return e >= t.size() ? null : t.get(e); }, Wi.union = function (t) { var e = new Wi(t); return e.union(); }, Wi.STRTREE_NODE_CAPACITY = 4, e(ji.prototype, { unionNoOpt: function (t) { var e = this.geomFact.createPoint(); return sr.overlayOp(t, e, rr.UNION); }, unionWithNull: function (t, e) { return null === t && null === e ? null : null === e ? t : null === t ? e : t.union(e); }, extract: function () { if (R(arguments[0], m))
                            for (var t = arguments[0], e = t.iterator(); e.hasNext();) {
                                var n = e.next();
                                this.extract(n);
                            }
                        else if (arguments[0] instanceof U) {
                            var r = arguments[0];
                            null === this.geomFact && (this.geomFact = r.getFactory()), Hi.extract(r, U.SORTINDEX_POLYGON, this.polygons), Hi.extract(r, U.SORTINDEX_LINESTRING, this.lines), Hi.extract(r, U.SORTINDEX_POINT, this.points);
                        } }, union: function Yo() { if (null === this.geomFact)
                            return null; var t = null; if (this.points.size() > 0) {
                            var e = this.geomFact.buildGeometry(this.points);
                            t = this.unionNoOpt(e);
                        } var n = null; if (this.lines.size() > 0) {
                            var r = this.geomFact.buildGeometry(this.lines);
                            n = this.unionNoOpt(r);
                        } var i = null; this.polygons.size() > 0 && (i = Wi.union(this.polygons)); var s = this.unionWithNull(n, i), Yo = null; return Yo = null === t ? s : null === s ? t : Xi.union(t, s), null === Yo ? this.geomFact.createGeometryCollection() : Yo; }, interfaces_: function () { return []; }, getClass: function () { return ji; } }), ji.union = function () { if (1 === arguments.length) {
                        if (R(arguments[0], m)) {
                            var t = arguments[0], e = new ji(t);
                            return e.union();
                        }
                        if (arguments[0] instanceof U) {
                            var n = arguments[0], e = new ji(n);
                            return e.union();
                        }
                    }
                    else if (2 === arguments.length) {
                        var r = arguments[0], i = arguments[1], e = new ji(r, i);
                        return e.union();
                    } };
                    var To = Object.freeze({ UnaryUnionOp: ji });
                    e(Zi.prototype, { visitInteriorRing: function (t, e) { var n = t.getCoordinates(), r = n[0], i = Zi.findDifferentPoint(n, r), s = e.findEdgeInSameDirection(r, i), o = e.findEdgeEnd(s), a = null; o.getLabel().getLocation(0, hn.RIGHT) === L.INTERIOR ? a = o : o.getSym().getLabel().getLocation(0, hn.RIGHT) === L.INTERIOR && (a = o.getSym()), g.isTrue(null !== a, "unable to find dirEdge with Interior on RHS"), this.visitLinkedDirectedEdges(a); }, visitShellInteriors: function (t, e) { if (t instanceof bt) {
                            var n = t;
                            this.visitInteriorRing(n.getExteriorRing(), e);
                        } if (t instanceof Ot)
                            for (var r = t, i = 0; i < r.getNumGeometries(); i++) {
                                var n = r.getGeometryN(i);
                                this.visitInteriorRing(n.getExteriorRing(), e);
                            } }, getCoordinate: function () { return this.disconnectedRingcoord; }, setInteriorEdgesInResult: function (t) { for (var e = t.getEdgeEnds().iterator(); e.hasNext();) {
                            var n = e.next();
                            n.getLabel().getLocation(0, hn.RIGHT) === L.INTERIOR && n.setInResult(!0);
                        } }, visitLinkedDirectedEdges: function (t) { var e = t, n = t; do
                            g.isTrue(null !== n, "found null Directed Edge"), n.setVisited(!0), n = n.getNext();
                        while (n !== e); }, buildEdgeRings: function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (r.isInResult() && null === r.getEdgeRing()) {
                                var i = new mn(r, this.geometryFactory);
                                i.linkDirectedEdgesForMinimalEdgeRings();
                                var s = i.buildMinimalRings();
                                e.addAll(s);
                            }
                        } return e; }, hasUnvisitedShellEdge: function (t) { for (var e = 0; e < t.size(); e++) {
                            var n = t.get(e);
                            if (!n.isHole()) {
                                var r = n.getEdges(), i = r.get(0);
                                if (i.getLabel().getLocation(0, hn.RIGHT) === L.INTERIOR)
                                    for (var s = 0; s < r.size(); s++)
                                        if (i = r.get(s), !i.isVisited())
                                            return this.disconnectedRingcoord = i.getCoordinate(), !0;
                            }
                        } return !1; }, isInteriorsConnected: function () { var t = new I; this.geomGraph.computeSplitEdges(t); var e = new Cn(new On); e.addEdges(t), this.setInteriorEdgesInResult(e), e.linkResultDirectedEdges(); var n = this.buildEdgeRings(e.getEdgeEnds()); return this.visitShellInteriors(this.geomGraph.getGeometry(), e), !this.hasUnvisitedShellEdge(n); }, interfaces_: function () { return []; }, getClass: function () { return Zi; } }), Zi.findDifferentPoint = function (t, e) { for (var n = 0; n < t.length; n++)
                        if (!t[n].equals(e))
                            return t[n]; return null; }, e(Ji.prototype, { hasChildren: function () { for (var t = 0; 2 > t; t++)
                            if (null !== this.subnode[t])
                                return !0; return !1; }, isPrunable: function () { return !(this.hasChildren() || this.hasItems()); }, addAllItems: function (t) { t.addAll(this.items); for (var e = 0; 2 > e; e++)
                            null !== this.subnode[e] && this.subnode[e].addAllItems(t); return t; }, size: function () { for (var t = 0, e = 0; 2 > e; e++)
                            null !== this.subnode[e] && (t += this.subnode[e].size()); return t + this.items.size(); }, addAllItemsFromOverlapping: function (t, e) { return null === t || this.isSearchMatch(t) ? (e.addAll(this.items), null !== this.subnode[0] && this.subnode[0].addAllItemsFromOverlapping(t, e), void (null !== this.subnode[1] && this.subnode[1].addAllItemsFromOverlapping(t, e))) : null; }, hasItems: function () { return !this.items.isEmpty(); }, remove: function (t, e) { if (!this.isSearchMatch(t))
                            return !1; for (var n = !1, r = 0; 2 > r; r++)
                            if (null !== this.subnode[r] && (n = this.subnode[r].remove(t, e))) {
                                this.subnode[r].isPrunable() && (this.subnode[r] = null);
                                break;
                            } return n ? n : n = this.items.remove(e); }, getItems: function () { return this.items; }, depth: function () { for (var t = 0, e = 0; 2 > e; e++)
                            if (null !== this.subnode[e]) {
                                var n = this.subnode[e].depth();
                                n > t && (t = n);
                            } return t + 1; }, nodeSize: function () { for (var t = 0, e = 0; 2 > e; e++)
                            null !== this.subnode[e] && (t += this.subnode[e].nodeSize()); return t + 1; }, add: function (t) { this.items.add(t); }, interfaces_: function () { return []; }, getClass: function () { return Ji; } }), Ji.getSubnodeIndex = function (t, e) { var n = -1; return t.min >= e && (n = 1), t.max <= e && (n = 0), n; }, e(Ki.prototype, { expandToInclude: function (t) { t.max > this.max && (this.max = t.max), t.min < this.min && (this.min = t.min); }, getWidth: function () { return this.max - this.min; }, overlaps: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.overlaps(t.min, t.max);
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            return !(this.min > n || this.max < e);
                        } }, getMin: function () { return this.min; }, toString: function () { return "[" + this.min + ", " + this.max + "]"; }, contains: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof Ki) {
                                var t = arguments[0];
                                return this.contains(t.min, t.max);
                            }
                            if ("number" == typeof arguments[0]) {
                                var e = arguments[0];
                                return e >= this.min && e <= this.max;
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1];
                            return n >= this.min && r <= this.max;
                        } }, init: function (t, e) { this.min = t, this.max = e, t > e && (this.min = e, this.max = t); }, getMax: function () { return this.max; }, interfaces_: function () { return []; }, getClass: function () { return Ki; } }), e(Qi.prototype, { getInterval: function () { return this.interval; }, getLevel: function () { return this.level; }, computeKey: function (t) { for (this.level = Qi.computeLevel(t), this.interval = new Ki, this.computeInterval(this.level, t); !this.interval.contains(t);)
                            this.level += 1, this.computeInterval(this.level, t); }, computeInterval: function (t, e) { var n = Cr.powerOf2(t); this.pt = Math.floor(e.getMin() / n) * n, this.interval.init(this.pt, this.pt + n); }, getPoint: function () { return this.pt; }, interfaces_: function () { return []; }, getClass: function () { return Qi; } }), Qi.computeLevel = function (t) { var e = t.getWidth(), n = Cr.exponent(e) + 1; return n; }, c($i, Ji), e($i.prototype, { getInterval: function () { return this.interval; }, find: function (t) { var e = Ji.getSubnodeIndex(t, this.centre); if (-1 === e)
                            return this; if (null !== this.subnode[e]) {
                            var n = this.subnode[e];
                            return n.find(t);
                        } return this; }, insert: function (t) { g.isTrue(null === this.interval || this.interval.contains(t.interval)); var e = Ji.getSubnodeIndex(t.interval, this.centre); if (t.level === this.level - 1)
                            this.subnode[e] = t;
                        else {
                            var n = this.createSubnode(e);
                            n.insert(t), this.subnode[e] = n;
                        } }, isSearchMatch: function (t) { return t.overlaps(this.interval); }, getSubnode: function (t) { return null === this.subnode[t] && (this.subnode[t] = this.createSubnode(t)), this.subnode[t]; }, getNode: function (t) { var e = Ji.getSubnodeIndex(t, this.centre); if (-1 !== e) {
                            var n = this.getSubnode(e);
                            return n.getNode(t);
                        } return this; }, createSubnode: function (t) { var e = 0, n = 0; switch (t) {
                            case 0:
                                e = this.interval.getMin(), n = this.centre;
                                break;
                            case 1: e = this.centre, n = this.interval.getMax();
                        } var r = new Ki(e, n), i = new $i(r, this.level - 1); return i; }, interfaces_: function () { return []; }, getClass: function () { return $i; } }), $i.createNode = function (t) { var e = new Qi(t), n = new $i(e.getInterval(), e.getLevel()); return n; }, $i.createExpanded = function (t, e) { var n = new Ki(e); null !== t && n.expandToInclude(t.interval); var r = $i.createNode(n); return null !== t && r.insert(t), r; }, c(ts, Ji), e(ts.prototype, { insert: function (t, e) { var n = Ji.getSubnodeIndex(t, ts.origin); if (-1 === n)
                            return this.add(e), null; var r = this.subnode[n]; if (null === r || !r.getInterval().contains(t)) {
                            var i = $i.createExpanded(r, t);
                            this.subnode[n] = i;
                        } this.insertContained(this.subnode[n], t, e); }, isSearchMatch: function (t) { return !0; }, insertContained: function (t, e, n) { g.isTrue(t.getInterval().contains(e)); var r = Rr.isZeroWidth(e.getMin(), e.getMax()), i = null; i = r ? t.find(e) : t.getNode(e), i.add(n); }, interfaces_: function () { return []; }, getClass: function () { return ts; } }), ts.origin = 0, e(es.prototype, { size: function () { return null !== this.root ? this.root.size() : 0; }, insert: function (t, e) { this.collectStats(t); var n = es.ensureExtent(t, this.minExtent); this.root.insert(n, e); }, query: function () { if (1 === arguments.length) {
                            if ("number" == typeof arguments[0]) {
                                var t = arguments[0];
                                return this.query(new Ki(t, t));
                            }
                            if (arguments[0] instanceof Ki) {
                                var e = arguments[0], n = new I;
                                return this.query(e, n), n;
                            }
                        }
                        else if (2 === arguments.length) {
                            var r = arguments[0], i = arguments[1];
                            this.root.addAllItemsFromOverlapping(r, i);
                        } }, iterator: function () { var t = new I; return this.root.addAllItems(t), t.iterator(); }, remove: function (t, e) { var n = es.ensureExtent(t, this.minExtent); return this.root.remove(n, e); }, collectStats: function (t) { var e = t.getWidth(); e < this.minExtent && e > 0 && (this.minExtent = e); }, depth: function () { return null !== this.root ? this.root.depth() : 0; }, nodeSize: function () { return null !== this.root ? this.root.nodeSize() : 0; }, interfaces_: function () { return []; }, getClass: function () { return es; } }), es.ensureExtent = function (t, e) { var n = t.getMin(), r = t.getMax(); return n !== r ? t : (n === r && (n -= e / 2, r = n + e / 2), new Ki(n, r)); }, e(ns.prototype, { isInside: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return ns; } }), e(rs.prototype, { testLineSegment: function (t, e) { var n = null, r = null, i = null, s = null, o = null, a = e.p0, u = e.p1; r = a.x - t.x, i = a.y - t.y, s = u.x - t.x, o = u.y - t.y, (i > 0 && 0 >= o || o > 0 && 0 >= i) && (n = ue.signOfDet2x2(r, i, s, o) / (o - i), n > 0 && this.crossings++); }, buildIndex: function () { this.tree = new es; for (var t = H.removeRepeatedPoints(this.ring.getCoordinates()), e = $e.getChains(t), n = 0; n < e.size(); n++) {
                            var r = e.get(n), i = r.getEnvelope();
                            this.interval.min = i.getMinY(), this.interval.max = i.getMaxY(), this.tree.insert(this.interval, r);
                        } }, testMonotoneChain: function (t, e, n) { n.select(t, e); }, isInside: function (t) { this.crossings = 0; var e = new C(i.NEGATIVE_INFINITY, i.POSITIVE_INFINITY, t.y, t.y); this.interval.min = t.y, this.interval.max = t.y; for (var n = this.tree.query(this.interval), r = new is(this, t), s = n.iterator(); s.hasNext();) {
                            var o = s.next();
                            this.testMonotoneChain(e, r, o);
                        } return this.crossings % 2 === 1; }, interfaces_: function () { return [ns]; }, getClass: function () { return rs; } }), c(is, ti), e(is.prototype, { select: function () { if (1 !== arguments.length)
                            return ti.prototype.select.apply(this, arguments); var t = arguments[0]; this.mcp.testLineSegment(this.p, t); }, interfaces_: function () { return []; }, getClass: function () { return is; } }), rs.MCSelecter = is, e(ss.prototype, { insertEdgeEnds: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.nodes.add(n);
                        } }, getNodeIterator: function () { return this.nodes.iterator(); }, copyNodesAndLabels: function (t, e) { for (var n = t.getNodeIterator(); n.hasNext();) {
                            var r = n.next(), i = this.nodes.addNode(r.getCoordinate());
                            i.setLabel(e, r.getLabel().getLocation(e));
                        } }, build: function (t) { this.computeIntersectionNodes(t, 0), this.copyNodesAndLabels(t, 0); var e = new Pi, n = e.computeEdgeEnds(t.getEdgeIterator()); this.insertEdgeEnds(n); }, computeIntersectionNodes: function (t, e) { for (var n = t.getEdgeIterator(); n.hasNext();)
                            for (var r = n.next(), i = r.getLabel().getLocation(e), s = r.getEdgeIntersectionList().iterator(); s.hasNext();) {
                                var o = s.next(), a = this.nodes.addNode(o.coord);
                                i === L.BOUNDARY ? a.setLabelBoundary(e) : a.getLabel().isNull(e) && a.setLabel(e, L.INTERIOR);
                            } }, interfaces_: function () { return []; }, getClass: function () { return ss; } }), e(os.prototype, { isNodeEdgeAreaLabelsConsistent: function () { for (var t = this.nodeGraph.getNodeIterator(); t.hasNext();) {
                            var e = t.next();
                            if (!e.getEdges().isAreaLabelsConsistent(this.geomGraph))
                                return this.invalidPoint = e.getCoordinate().copy(), !1;
                        } return !0; }, getInvalidPoint: function () { return this.invalidPoint; }, hasDuplicateRings: function () { for (var t = this.nodeGraph.getNodeIterator(); t.hasNext();)
                            for (var e = t.next(), n = e.getEdges().iterator(); n.hasNext();) {
                                var r = n.next();
                                if (r.getEdgeEnds().size() > 1)
                                    return this.invalidPoint = r.getEdge().getCoordinate(0), !0;
                            } return !1; }, isNodeConsistentArea: function () { var t = this.geomGraph.computeSelfNodes(this.li, !0, !0); return t.hasProperIntersection() ? (this.invalidPoint = t.getProperIntersectionPoint(), !1) : (this.nodeGraph.build(this.geomGraph), this.isNodeEdgeAreaLabelsConsistent()); }, interfaces_: function () { return []; }, getClass: function () { return os; } }), e(as.prototype, { buildIndex: function () { this.index = new ze; for (var t = 0; t < this.rings.size(); t++) {
                            var e = this.rings.get(t), n = e.getEnvelopeInternal();
                            this.index.insert(n, e);
                        } }, getNestedPoint: function () { return this.nestedPt; }, isNonNested: function () { this.buildIndex(); for (var t = 0; t < this.rings.size(); t++)
                            for (var e = this.rings.get(t), n = e.getCoordinates(), r = this.index.query(e.getEnvelopeInternal()), i = 0; i < r.size(); i++) {
                                var s = r.get(i), o = s.getCoordinates();
                                if (e !== s && e.getEnvelopeInternal().intersects(s.getEnvelopeInternal())) {
                                    var a = ls.findPtNotNode(n, s, this.graph);
                                    if (null !== a) {
                                        var u = ce.isPointInRing(a, o);
                                        if (u)
                                            return this.nestedPt = a, !1;
                                    }
                                }
                            } return !0; }, add: function (t) { this.rings.add(t), this.totalEnv.expandToInclude(t.getEnvelopeInternal()); }, interfaces_: function () { return []; }, getClass: function () { return as; } }), e(us.prototype, { getErrorType: function () { return this.errorType; }, getMessage: function () { return us.errMsg[this.errorType]; }, getCoordinate: function () { return this.pt; }, toString: function () { var t = ""; return null !== this.pt && (t = " at or near point " + this.pt), this.getMessage() + t; }, interfaces_: function () { return []; }, getClass: function () { return us; } }), us.ERROR = 0, us.REPEATED_POINT = 1, us.HOLE_OUTSIDE_SHELL = 2, us.NESTED_HOLES = 3, us.DISCONNECTED_INTERIOR = 4, us.SELF_INTERSECTION = 5, us.RING_SELF_INTERSECTION = 6, us.NESTED_SHELLS = 7, us.DUPLICATE_RINGS = 8, us.TOO_FEW_POINTS = 9, us.INVALID_COORDINATE = 10, us.RING_NOT_CLOSED = 11, us.errMsg = ["Topology Validation Error", "Repeated Point", "Hole lies outside shell", "Holes are nested", "Interior is disconnected", "Self-intersection", "Ring Self-intersection", "Nested shells", "Duplicate Rings", "Too few distinct points in geometry component", "Invalid Coordinate", "Ring is not closed"], e(ls.prototype, { checkInvalidCoordinates: function () { if (arguments[0] instanceof Array) {
                            for (var t = arguments[0], e = 0; e < t.length; e++)
                                if (!ls.isValid(t[e]))
                                    return this.validErr = new us(us.INVALID_COORDINATE, t[e]), null;
                        }
                        else if (arguments[0] instanceof bt) {
                            var n = arguments[0];
                            if (this.checkInvalidCoordinates(n.getExteriorRing().getCoordinates()), null !== this.validErr)
                                return null;
                            for (var e = 0; e < n.getNumInteriorRing(); e++)
                                if (this.checkInvalidCoordinates(n.getInteriorRingN(e).getCoordinates()), null !== this.validErr)
                                    return null;
                        } }, checkHolesNotNested: function (t, e) { for (var n = new as(e), r = 0; r < t.getNumInteriorRing(); r++) {
                            var i = t.getInteriorRingN(r);
                            n.add(i);
                        } var s = n.isNonNested(); s || (this.validErr = new us(us.NESTED_HOLES, n.getNestedPoint())); }, checkConsistentArea: function (t) { var e = new os(t), n = e.isNodeConsistentArea(); return n ? void (e.hasDuplicateRings() && (this.validErr = new us(us.DUPLICATE_RINGS, e.getInvalidPoint()))) : (this.validErr = new us(us.SELF_INTERSECTION, e.getInvalidPoint()), null); }, isValid: function () { return this.checkValid(this.parentGeometry), null === this.validErr; }, checkShellInsideHole: function (t, e, n) { var r = t.getCoordinates(), i = e.getCoordinates(), s = ls.findPtNotNode(r, e, n); if (null !== s) {
                            var o = ce.isPointInRing(s, i);
                            if (!o)
                                return s;
                        } var a = ls.findPtNotNode(i, t, n); if (null !== a) {
                            var u = ce.isPointInRing(a, r);
                            return u ? a : null;
                        } return g.shouldNeverReachHere("points in shell and hole appear to be equal"), null; }, checkNoSelfIntersectingRings: function (t) { for (var e = t.getEdgeIterator(); e.hasNext();) {
                            var n = e.next();
                            if (this.checkNoSelfIntersectingRing(n.getEdgeIntersectionList()), null !== this.validErr)
                                return null;
                        } }, checkConnectedInteriors: function (t) { var e = new Zi(t); e.isInteriorsConnected() || (this.validErr = new us(us.DISCONNECTED_INTERIOR, e.getCoordinate())); }, checkNoSelfIntersectingRing: function (t) { for (var e = new at, n = !0, r = t.iterator(); r.hasNext();) {
                            var i = r.next();
                            if (n)
                                n = !1;
                            else {
                                if (e.contains(i.coord))
                                    return this.validErr = new us(us.RING_SELF_INTERSECTION, i.coord), null;
                                e.add(i.coord);
                            }
                        } }, checkHolesInShell: function (t, e) { for (var n = t.getExteriorRing(), r = new rs(n), i = 0; i < t.getNumInteriorRing(); i++) {
                            var s = t.getInteriorRingN(i), o = ls.findPtNotNode(s.getCoordinates(), n, e);
                            if (null === o)
                                return null;
                            var a = !r.isInside(o);
                            if (a)
                                return this.validErr = new us(us.HOLE_OUTSIDE_SHELL, o), null;
                        } }, checkTooFewPoints: function (t) { return t.hasTooFewPoints() ? (this.validErr = new us(us.TOO_FEW_POINTS, t.getInvalidPoint()), null) : void 0; }, getValidationError: function () { return this.checkValid(this.parentGeometry), this.validErr; }, checkValid: function () { if (arguments[0] instanceof Lt) {
                            var t = arguments[0];
                            this.checkInvalidCoordinates(t.getCoordinates());
                        }
                        else if (arguments[0] instanceof Tt) {
                            var e = arguments[0];
                            this.checkInvalidCoordinates(e.getCoordinates());
                        }
                        else if (arguments[0] instanceof Pt) {
                            var n = arguments[0];
                            if (this.checkInvalidCoordinates(n.getCoordinates()), null !== this.validErr)
                                return null;
                            if (this.checkClosedRing(n), null !== this.validErr)
                                return null;
                            var r = new $n(0, n);
                            if (this.checkTooFewPoints(r), null !== this.validErr)
                                return null;
                            var i = new ae;
                            r.computeSelfNodes(i, !0, !0), this.checkNoSelfIntersectingRings(r);
                        }
                        else if (arguments[0] instanceof wt) {
                            var s = arguments[0];
                            if (this.checkInvalidCoordinates(s.getCoordinates()), null !== this.validErr)
                                return null;
                            var r = new $n(0, s);
                            this.checkTooFewPoints(r);
                        }
                        else if (arguments[0] instanceof bt) {
                            var o = arguments[0];
                            if (this.checkInvalidCoordinates(o), null !== this.validErr)
                                return null;
                            if (this.checkClosedRings(o), null !== this.validErr)
                                return null;
                            var r = new $n(0, o);
                            if (this.checkTooFewPoints(r), null !== this.validErr)
                                return null;
                            if (this.checkConsistentArea(r), null !== this.validErr)
                                return null;
                            if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(r), null !== this.validErr))
                                return null;
                            if (this.checkHolesInShell(o, r), null !== this.validErr)
                                return null;
                            if (this.checkHolesNotNested(o, r), null !== this.validErr)
                                return null;
                            this.checkConnectedInteriors(r);
                        }
                        else if (arguments[0] instanceof Ot) {
                            for (var a = arguments[0], u = 0; u < a.getNumGeometries(); u++) {
                                var l = a.getGeometryN(u);
                                if (this.checkInvalidCoordinates(l), null !== this.validErr)
                                    return null;
                                if (this.checkClosedRings(l), null !== this.validErr)
                                    return null;
                            }
                            var r = new $n(0, a);
                            if (this.checkTooFewPoints(r), null !== this.validErr)
                                return null;
                            if (this.checkConsistentArea(r), null !== this.validErr)
                                return null;
                            if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(r), null !== this.validErr))
                                return null;
                            for (var u = 0; u < a.getNumGeometries(); u++) {
                                var l = a.getGeometryN(u);
                                if (this.checkHolesInShell(l, r), null !== this.validErr)
                                    return null;
                            }
                            for (var u = 0; u < a.getNumGeometries(); u++) {
                                var l = a.getGeometryN(u);
                                if (this.checkHolesNotNested(l, r), null !== this.validErr)
                                    return null;
                            }
                            if (this.checkShellsNotNested(a, r), null !== this.validErr)
                                return null;
                            this.checkConnectedInteriors(r);
                        }
                        else if (arguments[0] instanceof gt)
                            for (var c = arguments[0], u = 0; u < c.getNumGeometries(); u++) {
                                var h = c.getGeometryN(u);
                                if (this.checkValid(h), null !== this.validErr)
                                    return null;
                            }
                        else if (arguments[0] instanceof U) {
                            var g = arguments[0];
                            if (this.validErr = null, g.isEmpty())
                                return null;
                            if (g instanceof Lt)
                                this.checkValid(g);
                            else if (g instanceof Tt)
                                this.checkValid(g);
                            else if (g instanceof Pt)
                                this.checkValid(g);
                            else if (g instanceof wt)
                                this.checkValid(g);
                            else if (g instanceof bt)
                                this.checkValid(g);
                            else if (g instanceof Ot)
                                this.checkValid(g);
                            else {
                                if (!(g instanceof gt))
                                    throw new UnsupportedOperationException(g.getClass().getName());
                                this.checkValid(g);
                            }
                        } }, setSelfTouchingRingFormingHoleValid: function (t) { this.isSelfTouchingRingFormingHoleValid = t; }, checkShellNotNested: function (t, e, n) { var r = t.getCoordinates(), i = e.getExteriorRing(), s = i.getCoordinates(), o = ls.findPtNotNode(r, i, n); if (null === o)
                            return null; var a = ce.isPointInRing(o, s); if (!a)
                            return null; if (e.getNumInteriorRing() <= 0)
                            return this.validErr = new us(us.NESTED_SHELLS, o), null; for (var u = null, l = 0; l < e.getNumInteriorRing(); l++) {
                            var c = e.getInteriorRingN(l);
                            if (u = this.checkShellInsideHole(t, c, n), null === u)
                                return null;
                        } this.validErr = new us(us.NESTED_SHELLS, u); }, checkClosedRings: function (t) { if (this.checkClosedRing(t.getExteriorRing()), null !== this.validErr)
                            return null; for (var e = 0; e < t.getNumInteriorRing(); e++)
                            if (this.checkClosedRing(t.getInteriorRingN(e)), null !== this.validErr)
                                return null; }, checkClosedRing: function (t) { if (!t.isClosed()) {
                            var e = null;
                            t.getNumPoints() >= 1 && (e = t.getCoordinateN(0)), this.validErr = new us(us.RING_NOT_CLOSED, e);
                        } }, checkShellsNotNested: function (t, e) { for (var n = 0; n < t.getNumGeometries(); n++)
                            for (var r = t.getGeometryN(n), i = r.getExteriorRing(), s = 0; s < t.getNumGeometries(); s++)
                                if (n !== s) {
                                    var o = t.getGeometryN(s);
                                    if (this.checkShellNotNested(i, o, e), null !== this.validErr)
                                        return null;
                                } }, interfaces_: function () { return []; }, getClass: function () { return ls; } }), ls.findPtNotNode = function (t, e, n) { for (var r = n.findEdge(e), i = r.getEdgeIntersectionList(), s = 0; s < t.length; s++) {
                        var o = t[s];
                        if (!i.isIntersection(o))
                            return o;
                    } return null; }, ls.isValid = function () { if (arguments[0] instanceof U) {
                        var t = arguments[0], e = new ls(t);
                        return e.isValid();
                    } if (arguments[0] instanceof f) {
                        var n = arguments[0];
                        return i.isNaN(n.x) ? !1 : i.isInfinite(n.x) ? !1 : i.isNaN(n.y) ? !1 : !i.isInfinite(n.y);
                    } };
                    var Po = Object.freeze({ IsValidOp: ls }), Oo = Object.freeze({ BoundaryOp: dt, IsSimpleOp: Gr, buffer: Co, distance: wo, linemerge: So, overlay: Lo, polygonize: Ro, relate: bo, union: To, valid: Po });
                    c(cs, Mt.CoordinateOperation), e(cs.prototype, { editCoordinates: function (t, e) { if (0 === t.length)
                            return null; for (var n = new Array(t.length).fill(null), r = 0; r < t.length; r++) {
                            var i = new f(t[r]);
                            this.targetPM.makePrecise(i), n[r] = i;
                        } var s = new N(n, !1), o = s.toCoordinateArray(), a = 0; e instanceof wt && (a = 2), e instanceof Pt && (a = 4); var u = n; return this.removeCollapsed && (u = null), o.length < a ? u : o; }, interfaces_: function () { return []; }, getClass: function () { return cs; } }), e(hs.prototype, { fixPolygonalTopology: function (t) { var e = t; this.changePrecisionModel || (e = this.changePM(t, this.targetPM)); var n = e.buffer(0), r = n; return this.changePrecisionModel || (r = t.getFactory().createGeometry(n)), r; }, reducePointwise: function (t) { var e = null; if (this.changePrecisionModel) {
                            var n = this.createFactory(t.getFactory(), this.targetPM);
                            e = new Mt(n);
                        }
                        else
                            e = new Mt; var r = this.removeCollapsed; t.getDimension() >= 2 && (r = !0); var i = e.edit(t, new cs(this.targetPM, r)); return i; }, changePM: function (t, e) { var n = this.createEditor(t.getFactory(), e); return n.edit(t, new Mt.NoOpGeometryOperation); }, setRemoveCollapsedComponents: function (t) { this.removeCollapsed = t; }, createFactory: function (t, e) { var n = new re(e, t.getSRID(), t.getCoordinateSequenceFactory()); return n; }, setChangePrecisionModel: function (t) { this.changePrecisionModel = t; }, reduce: function (t) { var e = this.reducePointwise(t); return this.isPointwise ? e : R(e, Rt) ? e.isValid() ? e : this.fixPolygonalTopology(e) : e; }, setPointwise: function (t) { this.isPointwise = t; }, createEditor: function (t, e) { if (t.getPrecisionModel() === e)
                            return new Mt; var n = this.createFactory(t, e), r = new Mt(n); return r; }, interfaces_: function () { return []; }, getClass: function () { return hs; } }), hs.reduce = function (t, e) { var n = new hs(e); return n.reduce(t); }, hs.reducePointwise = function (t, e) { var n = new hs(e); return n.setPointwise(!0), n.reduce(t); };
                    var Mo = Object.freeze({ GeometryPrecisionReducer: hs });
                    e(gs.prototype, { simplifySection: function (t, e) { if (t + 1 === e)
                            return null; this.seg.p0 = this.pts[t], this.seg.p1 = this.pts[e]; for (var n = -1, r = t, i = t + 1; e > i; i++) {
                            var s = this.seg.distance(this.pts[i]);
                            s > n && (n = s, r = i);
                        } if (n <= this.distanceTolerance)
                            for (var i = t + 1; e > i; i++)
                                this.usePt[i] = !1;
                        else
                            this.simplifySection(t, r), this.simplifySection(r, e); }, setDistanceTolerance: function (t) { this.distanceTolerance = t; }, simplify: function () { this.usePt = new Array(this.pts.length).fill(null); for (var t = 0; t < this.pts.length; t++)
                            this.usePt[t] = !0; this.simplifySection(0, this.pts.length - 1); for (var e = new N, t = 0; t < this.pts.length; t++)
                            this.usePt[t] && e.add(new f(this.pts[t])); return e.toCoordinateArray(); }, interfaces_: function () { return []; }, getClass: function () { return gs; } }), gs.simplify = function (t, e) { var n = new gs(t); return n.setDistanceTolerance(e), n.simplify(); }, e(fs.prototype, { setEnsureValid: function (t) { this.isEnsureValidTopology = t; }, getResultGeometry: function () { return this.inputGeom.isEmpty() ? this.inputGeom.copy() : new ds(this.isEnsureValidTopology, this.distanceTolerance).transform(this.inputGeom); }, setDistanceTolerance: function (t) { if (0 > t)
                            throw new r("Tolerance must be non-negative"); this.distanceTolerance = t; }, interfaces_: function () { return []; }, getClass: function () { return fs; } }), fs.simplify = function (t, e) { var n = new fs(t); return n.setDistanceTolerance(e), n.getResultGeometry(); }, c(ds, xe), e(ds.prototype, { transformPolygon: function (t, e) { if (t.isEmpty())
                            return null; var n = xe.prototype.transformPolygon.call(this, t, e); return e instanceof Ot ? n : this.createValidArea(n); }, createValidArea: function (t) { return this.isEnsureValidTopology ? t.buffer(0) : t; }, transformCoordinates: function (t, e) { var n = t.toCoordinateArray(), r = null; return r = 0 === n.length ? new Array(0).fill(null) : gs.simplify(n, this.distanceTolerance), this.factory.getCoordinateSequenceFactory().create(r); }, transformMultiPolygon: function (t, e) { var n = xe.prototype.transformMultiPolygon.call(this, t, e); return this.createValidArea(n); }, transformLinearRing: function (t, e) { var n = e instanceof bt, r = xe.prototype.transformLinearRing.call(this, t, e); return !n || r instanceof Pt ? r : null; }, interfaces_: function () { return []; }, getClass: function () { return ds; } }), fs.DPTransformer = ds, c(ps, he), e(ps.prototype, { getIndex: function () { return this.index; }, getParent: function () { return this.parent; }, interfaces_: function () { return []; }, getClass: function () { return ps; } }), e(ms.prototype, { addToResult: function (t) { this.resultSegs.add(t); }, asLineString: function () { return this.parentLine.getFactory().createLineString(ms.extractCoordinates(this.resultSegs)); }, getResultSize: function () { var t = this.resultSegs.size(); return 0 === t ? 0 : t + 1; }, getParent: function () { return this.parentLine; }, getSegment: function (t) { return this.segs[t]; }, getParentCoordinates: function () { return this.parentLine.getCoordinates(); }, getMinimumSize: function () { return this.minimumSize; }, asLinearRing: function () { return this.parentLine.getFactory().createLinearRing(ms.extractCoordinates(this.resultSegs)); }, getSegments: function () { return this.segs; }, init: function () { var t = this.parentLine.getCoordinates(); this.segs = new Array(t.length - 1).fill(null); for (var e = 0; e < t.length - 1; e++) {
                            var n = new ps(t[e], t[e + 1], this.parentLine, e);
                            this.segs[e] = n;
                        } }, getResultCoordinates: function () { return ms.extractCoordinates(this.resultSegs); }, interfaces_: function () { return []; }, getClass: function () { return ms; } }), ms.extractCoordinates = function (t) { for (var e = new Array(t.size() + 1).fill(null), n = null, r = 0; r < t.size(); r++)
                        n = t.get(r), e[r] = n.p0; return e[e.length - 1] = n.p1, e; }, e(vs.prototype, { remove: function (t) { this.index.remove(new C(t.p0, t.p1), t); }, add: function () { if (arguments[0] instanceof ms)
                            for (var t = arguments[0], e = t.getSegments(), n = 0; n < e.length; n++) {
                                var r = e[n];
                                this.add(r);
                            }
                        else if (arguments[0] instanceof he) {
                            var i = arguments[0];
                            this.index.insert(new C(i.p0, i.p1), i);
                        } }, query: function (t) { var e = new C(t.p0, t.p1), n = new ys(t); this.index.query(e, n); var r = n.getItems(); return r; }, interfaces_: function () { return []; }, getClass: function () { return vs; } }), e(ys.prototype, { visitItem: function (t) { var e = t; C.intersects(e.p0, e.p1, this.querySeg.p0, this.querySeg.p1) && this.items.add(t); }, getItems: function () { return this.items; },
                        interfaces_: function () { return [De]; }, getClass: function () { return ys; } }), e(xs.prototype, { flatten: function (t, e) { var n = this.linePts[t], r = this.linePts[e], i = new he(n, r); return this.remove(this.line, t, e), this.outputIndex.add(i), i; }, hasBadIntersection: function (t, e, n) { return this.hasBadOutputIntersection(n) ? !0 : !!this.hasBadInputIntersection(t, e, n); }, setDistanceTolerance: function (t) { this.distanceTolerance = t; }, simplifySection: function (t, e, n) { n += 1; var r = new Array(2).fill(null); if (t + 1 === e) {
                            var i = this.line.getSegment(t);
                            return this.line.addToResult(i), null;
                        } var s = !0; if (this.line.getResultSize() < this.line.getMinimumSize()) {
                            var o = n + 1;
                            o < this.line.getMinimumSize() && (s = !1);
                        } var a = new Array(1).fill(null), u = this.findFurthestPoint(this.linePts, t, e, a); a[0] > this.distanceTolerance && (s = !1); var l = new he; if (l.p0 = this.linePts[t], l.p1 = this.linePts[e], r[0] = t, r[1] = e, this.hasBadIntersection(this.line, r, l) && (s = !1), s) {
                            var i = this.flatten(t, e);
                            return this.line.addToResult(i), null;
                        } this.simplifySection(t, u, n), this.simplifySection(u, e, n); }, hasBadOutputIntersection: function (t) { for (var e = this.outputIndex.query(t), n = e.iterator(); n.hasNext();) {
                            var r = n.next();
                            if (this.hasInteriorIntersection(r, t))
                                return !0;
                        } return !1; }, findFurthestPoint: function (t, e, n, r) { var i = new he; i.p0 = t[e], i.p1 = t[n]; for (var s = -1, o = e, a = e + 1; n > a; a++) {
                            var u = t[a], l = i.distance(u);
                            l > s && (s = l, o = a);
                        } return r[0] = s, o; }, simplify: function (t) { this.line = t, this.linePts = t.getParentCoordinates(), this.simplifySection(0, this.linePts.length - 1, 0); }, remove: function (t, e, n) { for (var r = e; n > r; r++) {
                            var i = t.getSegment(r);
                            this.inputIndex.remove(i);
                        } }, hasInteriorIntersection: function (t, e) { return this.li.computeIntersection(t.p0, t.p1, e.p0, e.p1), this.li.isInteriorIntersection(); }, hasBadInputIntersection: function (t, e, n) { for (var r = this.inputIndex.query(n), i = r.iterator(); i.hasNext();) {
                            var s = i.next();
                            if (this.hasInteriorIntersection(s, n)) {
                                if (xs.isInLineSection(t, e, s))
                                    continue;
                                return !0;
                            }
                        } return !1; }, interfaces_: function () { return []; }, getClass: function () { return xs; } }), xs.isInLineSection = function (t, e, n) { if (n.getParent() !== t.getParent())
                        return !1; var r = n.getIndex(); return r >= e[0] && r < e[1]; }, e(Es.prototype, { setDistanceTolerance: function (t) { this.distanceTolerance = t; }, simplify: function (t) { for (var e = t.iterator(); e.hasNext();)
                            this.inputIndex.add(e.next()); for (var e = t.iterator(); e.hasNext();) {
                            var n = new xs(this.inputIndex, this.outputIndex);
                            n.setDistanceTolerance(this.distanceTolerance), n.simplify(e.next());
                        } }, interfaces_: function () { return []; }, getClass: function () { return Es; } }), e(Is.prototype, { getResultGeometry: function () { if (this.inputGeom.isEmpty())
                            return this.inputGeom.copy(); this.linestringMap = new te, this.inputGeom.apply(new Cs(this)), this.lineSimplifier.simplify(this.linestringMap.values()); var t = new Ns(this.linestringMap).transform(this.inputGeom); return t; }, setDistanceTolerance: function (t) { if (0 > t)
                            throw new r("Tolerance must be non-negative"); this.lineSimplifier.setDistanceTolerance(t); }, interfaces_: function () { return []; }, getClass: function () { return Is; } }), Is.simplify = function (t, e) { var n = new Is(t); return n.setDistanceTolerance(e), n.getResultGeometry(); }, c(Ns, xe), e(Ns.prototype, { transformCoordinates: function (t, e) { if (0 === t.size())
                            return null; if (e instanceof wt) {
                            var n = this.linestringMap.get(e);
                            return this.createCoordinateSequence(n.getResultCoordinates());
                        } return xe.prototype.transformCoordinates.call(this, t, e); }, interfaces_: function () { return []; }, getClass: function () { return Ns; } }), e(Cs.prototype, { filter: function (t) { if (t instanceof wt) {
                            var e = t;
                            if (e.isEmpty())
                                return null;
                            var n = e.isClosed() ? 4 : 2, r = new ms(e, n);
                            this.tps.linestringMap.put(e, r);
                        } }, interfaces_: function () { return [k]; }, getClass: function () { return Cs; } }), Is.LineStringTransformer = Ns, Is.LineStringMapBuilderFilter = Cs;
                    var _o = Object.freeze({ DouglasPeuckerSimplifier: fs, TopologyPreservingSimplifier: Is });
                    e(ws.prototype, { splitAt: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = this.minimumLen / this.segLen;
                            if (t.distance(this.seg.p0) < this.minimumLen)
                                return this.splitPt = this.seg.pointAlong(e), null;
                            if (t.distance(this.seg.p1) < this.minimumLen)
                                return this.splitPt = ws.pointAlongReverse(this.seg, e), null;
                            this.splitPt = t;
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = this.getConstrainedLength(n), s = i / this.segLen;
                            r.equals2D(this.seg.p0) ? this.splitPt = this.seg.pointAlong(s) : this.splitPt = ws.pointAlongReverse(this.seg, s);
                        } }, setMinimumLength: function (t) { this.minimumLen = t; }, getConstrainedLength: function (t) { return t < this.minimumLen ? this.minimumLen : t; }, getSplitPoint: function () { return this.splitPt; }, interfaces_: function () { return []; }, getClass: function () { return ws; } }), ws.pointAlongReverse = function (t, e) { var n = new f; return n.x = t.p1.x - e * (t.p1.x - t.p0.x), n.y = t.p1.y - e * (t.p1.y - t.p0.y), n; }, e(Ss.prototype, { findSplitPoint: function (t, e) { }, interfaces_: function () { return []; }, getClass: function () { return Ss; } }), e(Ls.prototype, { findSplitPoint: function (t, e) { var n = t.getLineSegment(), r = n.getLength(), i = r / 2, s = new ws(n), o = Ls.projectedSplitPoint(t, e), a = 2 * o.distance(e) * .8, u = a; return u > i && (u = i), s.setMinimumLength(u), s.splitAt(o), s.getSplitPoint(); }, interfaces_: function () { return [Ss]; }, getClass: function () { return Ls; } }), Ls.projectedSplitPoint = function (t, e) { var n = t.getLineSegment(), r = n.project(e); return r; }, e(Rs.prototype, { interfaces_: function () { return []; }, getClass: function () { return Rs; } }), Rs.triArea = function (t, e, n) { return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x); }, Rs.isInCircleDDNormalized = function (t, e, n, r) { var i = M.valueOf(t.x).selfSubtract(r.x), s = M.valueOf(t.y).selfSubtract(r.y), o = M.valueOf(e.x).selfSubtract(r.x), a = M.valueOf(e.y).selfSubtract(r.y), u = M.valueOf(n.x).selfSubtract(r.x), l = M.valueOf(n.y).selfSubtract(r.y), c = i.multiply(a).selfSubtract(o.multiply(s)), h = o.multiply(l).selfSubtract(u.multiply(a)), g = u.multiply(s).selfSubtract(i.multiply(l)), f = i.multiply(i).selfAdd(s.multiply(s)), d = o.multiply(o).selfAdd(a.multiply(a)), p = u.multiply(u).selfAdd(l.multiply(l)), m = f.selfMultiply(h).selfAdd(d.selfMultiply(g)).selfAdd(p.selfMultiply(c)), v = m.doubleValue() > 0; return v; }, Rs.checkRobustInCircle = function (t, e, n, r) { var i = Rs.isInCircleNonRobust(t, e, n, r), s = Rs.isInCircleDDSlow(t, e, n, r), o = Rs.isInCircleCC(t, e, n, r), a = hr.circumcentre(t, e, n); D.out.println("p radius diff a = " + Math.abs(r.distance(a) - t.distance(a)) / t.distance(a)), i === s && i === o || (D.out.println("inCircle robustness failure (double result = " + i + ", DD result = " + s + ", CC result = " + o + ")"), D.out.println(se.toLineString(new Gt([t, e, n, r]))), D.out.println("Circumcentre = " + se.toPoint(a) + " radius = " + t.distance(a)), D.out.println("p radius diff a = " + Math.abs(r.distance(a) / t.distance(a) - 1)), D.out.println("p radius diff b = " + Math.abs(r.distance(a) / e.distance(a) - 1)), D.out.println("p radius diff c = " + Math.abs(r.distance(a) / n.distance(a) - 1)), D.out.println()); }, Rs.isInCircleDDFast = function (t, e, n, r) { var i = M.sqr(t.x).selfAdd(M.sqr(t.y)).selfMultiply(Rs.triAreaDDFast(e, n, r)), s = M.sqr(e.x).selfAdd(M.sqr(e.y)).selfMultiply(Rs.triAreaDDFast(t, n, r)), o = M.sqr(n.x).selfAdd(M.sqr(n.y)).selfMultiply(Rs.triAreaDDFast(t, e, r)), a = M.sqr(r.x).selfAdd(M.sqr(r.y)).selfMultiply(Rs.triAreaDDFast(t, e, n)), u = i.selfSubtract(s).selfAdd(o).selfSubtract(a), l = u.doubleValue() > 0; return l; }, Rs.isInCircleCC = function (t, e, n, r) { var i = hr.circumcentre(t, e, n), s = t.distance(i), o = r.distance(i) - s; return 0 >= o; }, Rs.isInCircleNormalized = function (t, e, n, r) { var i = t.x - r.x, s = t.y - r.y, o = e.x - r.x, a = e.y - r.y, u = n.x - r.x, l = n.y - r.y, c = i * a - o * s, h = o * l - u * a, g = u * s - i * l, f = i * i + s * s, d = o * o + a * a, p = u * u + l * l, m = f * h + d * g + p * c; return m > 0; }, Rs.isInCircleDDSlow = function (t, e, n, r) { var i = M.valueOf(r.x), s = M.valueOf(r.y), o = M.valueOf(t.x), a = M.valueOf(t.y), u = M.valueOf(e.x), l = M.valueOf(e.y), c = M.valueOf(n.x), h = M.valueOf(n.y), g = o.multiply(o).add(a.multiply(a)).multiply(Rs.triAreaDDSlow(u, l, c, h, i, s)), f = u.multiply(u).add(l.multiply(l)).multiply(Rs.triAreaDDSlow(o, a, c, h, i, s)), d = c.multiply(c).add(h.multiply(h)).multiply(Rs.triAreaDDSlow(o, a, u, l, i, s)), p = i.multiply(i).add(s.multiply(s)).multiply(Rs.triAreaDDSlow(o, a, u, l, c, h)), m = g.subtract(f).add(d).subtract(p), v = m.doubleValue() > 0; return v; }, Rs.isInCircleNonRobust = function (t, e, n, r) { var i = (t.x * t.x + t.y * t.y) * Rs.triArea(e, n, r) - (e.x * e.x + e.y * e.y) * Rs.triArea(t, n, r) + (n.x * n.x + n.y * n.y) * Rs.triArea(t, e, r) - (r.x * r.x + r.y * r.y) * Rs.triArea(t, e, n) > 0; return i; }, Rs.isInCircleRobust = function (t, e, n, r) { return Rs.isInCircleNormalized(t, e, n, r); }, Rs.triAreaDDSlow = function (t, e, n, r, i, s) { return n.subtract(t).multiply(s.subtract(e)).subtract(r.subtract(e).multiply(i.subtract(t))); }, Rs.triAreaDDFast = function (t, e, n) { var r = M.valueOf(e.x).selfSubtract(t.x).selfMultiply(M.valueOf(n.y).selfSubtract(t.y)), i = M.valueOf(e.y).selfSubtract(t.y).selfMultiply(M.valueOf(n.x).selfSubtract(t.x)); return r.selfSubtract(i); }, e(bs.prototype, { circleCenter: function (t, e) { var n = new bs(this.getX(), this.getY()), r = this.bisector(n, t), i = this.bisector(t, e), s = new F(r, i), o = null; try {
                            o = new bs(s.getX(), s.getY());
                        }
                        catch (r) {
                            if (!(r instanceof S))
                                throw r;
                            D.err.println("a: " + n + "  b: " + t + "  c: " + e), D.err.println(r);
                        }
                        finally { } return o; }, dot: function (t) { return this.p.x * t.getX() + this.p.y * t.getY(); }, magn: function () { return Math.sqrt(this.p.x * this.p.x + this.p.y * this.p.y); }, getZ: function () { return this.p.z; }, bisector: function (t, e) { var n = e.getX() - t.getX(), r = e.getY() - t.getY(), i = new F(t.getX() + n / 2, t.getY() + r / 2, 1), s = new F(t.getX() - r + n / 2, t.getY() + n + r / 2, 1); return new F(i, s); }, equals: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.p.x === t.getX() && this.p.y === t.getY();
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            return this.p.distance(e.getCoordinate()) < n;
                        } }, getCoordinate: function () { return this.p; }, isInCircle: function (t, e, n) { return Rs.isInCircleRobust(t.p, e.p, n.p, this.p); }, interpolateZValue: function (t, e, n) { var r = t.getX(), i = t.getY(), s = e.getX() - r, o = n.getX() - r, a = e.getY() - i, u = n.getY() - i, l = s * u - o * a, c = this.getX() - r, h = this.getY() - i, g = (u * c - o * h) / l, f = (-a * c + s * h) / l, d = t.getZ() + g * (e.getZ() - t.getZ()) + f * (n.getZ() - t.getZ()); return d; }, midPoint: function (t) { var e = (this.p.x + t.getX()) / 2, n = (this.p.y + t.getY()) / 2, r = (this.p.z + t.getZ()) / 2; return new bs(e, n, r); }, rightOf: function (t) { return this.isCCW(t.dest(), t.orig()); }, isCCW: function (t, e) { return (t.p.x - this.p.x) * (e.p.y - this.p.y) - (t.p.y - this.p.y) * (e.p.x - this.p.x) > 0; }, getX: function () { return this.p.x; }, crossProduct: function (t) { return this.p.x * t.getY() - this.p.y * t.getX(); }, setZ: function (t) { this.p.z = t; }, times: function (t) { return new bs(t * this.p.x, t * this.p.y); }, cross: function () { return new bs(this.p.y, -this.p.x); }, leftOf: function (t) { return this.isCCW(t.orig(), t.dest()); }, toString: function () { return "POINT (" + this.p.x + " " + this.p.y + ")"; }, sub: function (t) { return new bs(this.p.x - t.getX(), this.p.y - t.getY()); }, getY: function () { return this.p.y; }, classify: function (t, e) { var n = this, r = e.sub(t), i = n.sub(t), s = r.crossProduct(i); return s > 0 ? bs.LEFT : 0 > s ? bs.RIGHT : r.getX() * i.getX() < 0 || r.getY() * i.getY() < 0 ? bs.BEHIND : r.magn() < i.magn() ? bs.BEYOND : t.equals(n) ? bs.ORIGIN : e.equals(n) ? bs.DESTINATION : bs.BETWEEN; }, sum: function (t) { return new bs(this.p.x + t.getX(), this.p.y + t.getY()); }, distance: function (t, e) { return Math.sqrt(Math.pow(e.getX() - t.getX(), 2) + Math.pow(e.getY() - t.getY(), 2)); }, circumRadiusRatio: function (t, e) { var n = this.circleCenter(t, e), r = this.distance(n, t), i = this.distance(this, t), s = this.distance(t, e); return i > s && (i = s), s = this.distance(e, this), i > s && (i = s), r / i; }, interfaces_: function () { return []; }, getClass: function () { return bs; } }), bs.interpolateZ = function () { if (3 === arguments.length) {
                        var t = arguments[0], e = arguments[1], n = arguments[2], r = e.distance(n), i = t.distance(e), s = n.z - e.z, o = e.z + s * (i / r);
                        return o;
                    } if (4 === arguments.length) {
                        var a = arguments[0], u = arguments[1], l = arguments[2], c = arguments[3], h = u.x, g = u.y, f = l.x - h, d = c.x - h, p = l.y - g, m = c.y - g, v = f * m - d * p, y = a.x - h, x = a.y - g, E = (m * y - d * x) / v, I = (-p * y + f * x) / v, N = u.z + E * (l.z - u.z) + I * (c.z - u.z);
                        return N;
                    } }, bs.LEFT = 0, bs.RIGHT = 1, bs.BEYOND = 2, bs.BEHIND = 3, bs.BETWEEN = 4, bs.ORIGIN = 5, bs.DESTINATION = 6, c(Ts, bs), e(Ts.prototype, { getConstraint: function () { return this.constraint; }, setOnConstraint: function (t) { this._isOnConstraint = t; }, merge: function (t) { t._isOnConstraint && (this._isOnConstraint = !0, this.constraint = t.constraint); }, isOnConstraint: function () { return this._isOnConstraint; }, setConstraint: function (t) { this._isOnConstraint = !0, this.constraint = t; }, interfaces_: function () { return []; }, getClass: function () { return Ts; } }), e(Ps.prototype, { equalsNonOriented: function (t) { return this.equalsOriented(t) ? !0 : !!this.equalsOriented(t.sym()); }, toLineSegment: function () { return new he(this.vertex.getCoordinate(), this.dest().getCoordinate()); }, dest: function () { return this.sym().orig(); }, oNext: function () { return this.next; }, equalsOriented: function (t) { return !(!this.orig().getCoordinate().equals2D(t.orig().getCoordinate()) || !this.dest().getCoordinate().equals2D(t.dest().getCoordinate())); }, dNext: function () { return this.sym().oNext().sym(); }, lPrev: function () { return this.next.sym(); }, rPrev: function () { return this.sym().oNext(); }, rot: function () { return this._rot; }, oPrev: function () { return this._rot.next._rot; }, sym: function () { return this._rot._rot; }, setOrig: function (t) { this.vertex = t; }, lNext: function () { return this.invRot().oNext().rot(); }, getLength: function () { return this.orig().getCoordinate().distance(this.dest().getCoordinate()); }, invRot: function () { return this._rot.sym(); }, setDest: function (t) { this.sym().setOrig(t); }, setData: function (t) { this.data = t; }, getData: function () { return this.data; }, "delete": function () { this._rot = null; }, orig: function () { return this.vertex; }, rNext: function () { return this._rot.next.invRot(); }, toString: function () { var t = this.vertex.getCoordinate(), e = this.dest().getCoordinate(); return se.toLineString(t, e); }, isLive: function () { return null !== this._rot; }, getPrimary: function () { return this.orig().getCoordinate().compareTo(this.dest().getCoordinate()) <= 0 ? this : this.sym(); }, dPrev: function () { return this.invRot().oNext().invRot(); }, setNext: function (t) { this.next = t; }, interfaces_: function () { return []; }, getClass: function () { return Ps; } }), Ps.makeEdge = function (t, e) { var n = new Ps, r = new Ps, i = new Ps, s = new Ps; n._rot = r, r._rot = i, i._rot = s, s._rot = n, n.setNext(n), r.setNext(s), i.setNext(i), s.setNext(r); var o = n; return o.setOrig(t), o.setDest(e), o; }, Ps.swap = function (t) { var e = t.oPrev(), n = t.sym().oPrev(); Ps.splice(t, e), Ps.splice(t.sym(), n), Ps.splice(t, e.lNext()), Ps.splice(t.sym(), n.lNext()), t.setOrig(e.dest()), t.setDest(n.dest()); }, Ps.splice = function (t, e) { var n = t.oNext().rot(), r = e.oNext().rot(), i = e.oNext(), s = t.oNext(), o = r.oNext(), a = n.oNext(); t.setNext(i), e.setNext(s), n.setNext(o), r.setNext(a); }, Ps.connect = function (t, e) { var n = Ps.makeEdge(t.dest(), e.orig()); return Ps.splice(n, t.lNext()), Ps.splice(n.sym(), e), n; }, e(Os.prototype, { insertSite: function (t) { var e = this.subdiv.locate(t); if (this.subdiv.isVertexOfEdge(e, t))
                            return e; this.subdiv.isOnEdge(e, t.getCoordinate()) && (e = e.oPrev(), this.subdiv["delete"](e.oNext())); var n = this.subdiv.makeEdge(e.orig(), t); Ps.splice(n, e); var r = n; do
                            n = this.subdiv.connect(e, n.sym()), e = n.oPrev();
                        while (e.lNext() !== r); for (;;) {
                            var i = e.oPrev();
                            if (i.dest().rightOf(e) && t.isInCircle(e.orig(), i.dest(), e.dest()))
                                Ps.swap(e), e = e.oPrev();
                            else {
                                if (e.oNext() === r)
                                    return n;
                                e = e.oNext().lPrev();
                            }
                        } }, insertSites: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.insertSite(n);
                        } }, interfaces_: function () { return []; }, getClass: function () { return Os; } }), e(Ms.prototype, { locate: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return Ms; } }), e(_s.prototype, { init: function () { this.lastEdge = this.findEdge(); }, locate: function (t) { this.lastEdge.isLive() || this.init(); var e = this.subdiv.locateFromEdge(t, this.lastEdge); return this.lastEdge = e, e; }, findEdge: function () { var t = this.subdiv.getEdges(); return t.iterator().next(); }, interfaces_: function () { return [Ms]; }, getClass: function () { return _s; } }), c(As, l), e(As.prototype, { getSegment: function () { return this.seg; }, interfaces_: function () { return []; }, getClass: function () { return As; } }), As.msgWithSpatial = function (t, e) { return null !== e ? t + " [ " + e + " ]" : t; }, e(Ds.prototype, { visit: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return Ds; } }), e(Fs.prototype, { getTriangleVertices: function (t) { var e = new Us; return this.visitTriangles(e, t), e.getTriangleVertices(); }, isFrameVertex: function (t) { return t.equals(this.frameVertex[0]) ? !0 : t.equals(this.frameVertex[1]) ? !0 : !!t.equals(this.frameVertex[2]); }, isVertexOfEdge: function (t, e) { return !(!e.equals(t.orig(), this.tolerance) && !e.equals(t.dest(), this.tolerance)); }, connect: function (t, e) { var n = Ps.connect(t, e); return this.quadEdges.add(n), n; }, getVoronoiCellPolygon: function (t, e) { var n = new I, r = t; do {
                            var i = t.rot().orig().getCoordinate();
                            n.add(i), t = t.oPrev();
                        } while (t !== r); var s = new N; s.addAll(n, !1), s.closeRing(), s.size() < 4 && (D.out.println(s), s.add(s.get(s.size() - 1), !0)); var o = s.toCoordinateArray(), a = e.createPolygon(e.createLinearRing(o), null), u = r.orig(); return a.setUserData(u.getCoordinate()), a; }, setLocator: function (t) { this.locator = t; }, initSubdiv: function () { var t = this.makeEdge(this.frameVertex[0], this.frameVertex[1]), e = this.makeEdge(this.frameVertex[1], this.frameVertex[2]); Ps.splice(t.sym(), e); var n = this.makeEdge(this.frameVertex[2], this.frameVertex[0]); return Ps.splice(e.sym(), n), Ps.splice(n.sym(), t), t; }, isFrameBorderEdge: function (t) { var e = new Array(3).fill(null); Fs.getTriangleEdges(t, e); var n = new Array(3).fill(null); Fs.getTriangleEdges(t.sym(), n); var r = t.lNext().dest(); if (this.isFrameVertex(r))
                            return !0; var i = t.sym().lNext().dest(); return !!this.isFrameVertex(i); }, makeEdge: function (t, e) { var n = Ps.makeEdge(t, e); return this.quadEdges.add(n), n; }, visitTriangles: function (t, e) { this.visitedKey++; var n = new pe; n.push(this.startingEdge); for (var r = new Q; !n.empty();) {
                            var i = n.pop();
                            if (!r.contains(i)) {
                                var s = this.fetchTriangleToVisit(i, n, e, r);
                                null !== s && t.visit(s);
                            }
                        } }, isFrameEdge: function (t) { return !(!this.isFrameVertex(t.orig()) && !this.isFrameVertex(t.dest())); }, isOnEdge: function (t, e) { this.seg.setCoordinates(t.orig().getCoordinate(), t.dest().getCoordinate()); var n = this.seg.distance(e); return n < this.edgeCoincidenceTolerance; }, getEnvelope: function () { return new C(this.frameEnv); }, createFrame: function (t) { var e = t.getWidth(), n = t.getHeight(), r = 0; r = e > n ? 10 * e : 10 * n, this.frameVertex[0] = new bs((t.getMaxX() + t.getMinX()) / 2, t.getMaxY() + r), this.frameVertex[1] = new bs(t.getMinX() - r, t.getMinY() - r), this.frameVertex[2] = new bs(t.getMaxX() + r, t.getMinY() - r), this.frameEnv = new C(this.frameVertex[0].getCoordinate(), this.frameVertex[1].getCoordinate()), this.frameEnv.expandToInclude(this.frameVertex[2].getCoordinate()); }, getTriangleCoordinates: function (t) { var e = new qs; return this.visitTriangles(e, t), e.getTriangles(); }, getVertices: function (t) { for (var e = new Q, n = this.quadEdges.iterator(); n.hasNext();) {
                            var r = n.next(), i = r.orig();
                            !t && this.isFrameVertex(i) || e.add(i);
                            var s = r.dest();
                            !t && this.isFrameVertex(s) || e.add(s);
                        } return e; }, fetchTriangleToVisit: function (t, e, n, r) { var i = t, s = 0, o = !1; do {
                            this.triEdges[s] = i, this.isFrameEdge(i) && (o = !0);
                            var a = i.sym();
                            r.contains(a) || e.push(a), r.add(i), s++, i = i.lNext();
                        } while (i !== t); return o && !n ? null : this.triEdges; }, getEdges: function () { if (0 === arguments.length)
                            return this.quadEdges; if (1 === arguments.length) {
                            for (var t = arguments[0], e = this.getPrimaryEdges(!1), n = new Array(e.size()).fill(null), r = 0, i = e.iterator(); i.hasNext();) {
                                var s = i.next();
                                n[r++] = t.createLineString([s.orig().getCoordinate(), s.dest().getCoordinate()]);
                            }
                            return t.createMultiLineString(n);
                        } }, getVertexUniqueEdges: function (t) { for (var e = new I, n = new Q, r = this.quadEdges.iterator(); r.hasNext();) {
                            var i = r.next(), s = i.orig();
                            n.contains(s) || (n.add(s), !t && this.isFrameVertex(s) || e.add(i));
                            var o = i.sym(), a = o.orig();
                            n.contains(a) || (n.add(a), !t && this.isFrameVertex(a) || e.add(o));
                        } return e; }, getTriangleEdges: function (t) { var e = new ks; return this.visitTriangles(e, t), e.getTriangleEdges(); }, getPrimaryEdges: function (t) { this.visitedKey++; var e = new I, n = new pe; n.push(this.startingEdge); for (var r = new Q; !n.empty();) {
                            var i = n.pop();
                            if (!r.contains(i)) {
                                var s = i.getPrimary();
                                !t && this.isFrameEdge(s) || e.add(s), n.push(i.oNext()), n.push(i.sym().oNext()), r.add(i), r.add(i.sym());
                            }
                        } return e; }, "delete": function (t) { Ps.splice(t, t.oPrev()), Ps.splice(t.sym(), t.sym().oPrev()); var e = t.sym(), n = t.rot(), r = t.rot().sym(); this.quadEdges.remove(t), this.quadEdges.remove(e), this.quadEdges.remove(n), this.quadEdges.remove(r), t["delete"](), e["delete"](), n["delete"](), r["delete"](); }, locateFromEdge: function (t, e) { for (var n = 0, r = this.quadEdges.size(), i = e;;) {
                            if (n++, n > r)
                                throw new As(i.toLineSegment());
                            if (t.equals(i.orig()) || t.equals(i.dest()))
                                break;
                            if (t.rightOf(i))
                                i = i.sym();
                            else if (t.rightOf(i.oNext())) {
                                if (t.rightOf(i.dPrev()))
                                    break;
                                i = i.dPrev();
                            }
                            else
                                i = i.oNext();
                        } return i; }, getTolerance: function () { return this.tolerance; }, getVoronoiCellPolygons: function (t) { this.visitTriangles(new Gs, !0); for (var e = new I, n = this.getVertexUniqueEdges(!1), r = n.iterator(); r.hasNext();) {
                            var i = r.next();
                            e.add(this.getVoronoiCellPolygon(i, t));
                        } return e; }, getVoronoiDiagram: function (t) { var e = this.getVoronoiCellPolygons(t); return t.createGeometryCollection(re.toGeometryArray(e)); }, getTriangles: function (t) { for (var e = this.getTriangleCoordinates(!1), n = new Array(e.size()).fill(null), r = 0, i = e.iterator(); i.hasNext();) {
                            var s = i.next();
                            n[r++] = t.createPolygon(t.createLinearRing(s), null);
                        } return t.createGeometryCollection(n); }, insertSite: function (t) { var e = this.locate(t); if (t.equals(e.orig(), this.tolerance) || t.equals(e.dest(), this.tolerance))
                            return e; var n = this.makeEdge(e.orig(), t); Ps.splice(n, e); var r = n; do
                            n = this.connect(e, n.sym()), e = n.oPrev();
                        while (e.lNext() !== r); return r; }, locate: function () { if (1 === arguments.length) {
                            if (arguments[0] instanceof bs) {
                                var t = arguments[0];
                                return this.locator.locate(t);
                            }
                            if (arguments[0] instanceof f) {
                                var e = arguments[0];
                                return this.locator.locate(new bs(e));
                            }
                        }
                        else if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], i = this.locator.locate(new bs(n));
                            if (null === i)
                                return null;
                            var s = i;
                            i.dest().getCoordinate().equals2D(n) && (s = i.sym());
                            var o = s;
                            do {
                                if (o.dest().getCoordinate().equals2D(r))
                                    return o;
                                o = o.oNext();
                            } while (o !== s);
                            return null;
                        } }, interfaces_: function () { return []; }, getClass: function () { return Fs; } }), Fs.getTriangleEdges = function (t, e) { if (e[0] = t, e[1] = e[0].lNext(), e[2] = e[1].lNext(), e[2].lNext() !== e[0])
                        throw new r("Edges do not form a triangle"); }, e(Gs.prototype, { visit: function (t) { for (var e = t[0].orig().getCoordinate(), n = t[1].orig().getCoordinate(), r = t[2].orig().getCoordinate(), i = hr.circumcentre(e, n, r), s = new bs(i), o = 0; 3 > o; o++)
                            t[o].rot().setOrig(s); }, interfaces_: function () { return [Ds]; }, getClass: function () { return Gs; } }), e(ks.prototype, { getTriangleEdges: function () { return this.triList; }, visit: function (t) { this.triList.add(t.clone()); }, interfaces_: function () { return [Ds]; }, getClass: function () { return ks; } }), e(Us.prototype, { visit: function (t) { this.triList.add([t[0].orig(), t[1].orig(), t[2].orig()]); }, getTriangleVertices: function () { return this.triList; }, interfaces_: function () { return [Ds]; }, getClass: function () { return Us; } }), e(qs.prototype, { checkTriangleSize: function (t) { var e = ""; t.length >= 2 ? e = se.toLineString(t[0], t[1]) : t.length >= 1 && (e = se.toPoint(t[0])); }, visit: function (t) { this.coordList.clear(); for (var e = 0; 3 > e; e++) {
                            var n = t[e].orig();
                            this.coordList.add(n.getCoordinate());
                        } if (this.coordList.size() > 0) {
                            this.coordList.closeRing();
                            var r = this.coordList.toCoordinateArray();
                            if (4 !== r.length)
                                return null;
                            this.triCoords.add(r);
                        } }, getTriangles: function () { return this.triCoords; }, interfaces_: function () { return [Ds]; }, getClass: function () { return qs; } }), Fs.TriangleCircumcentreVisitor = Gs, Fs.TriangleEdgesListVisitor = ks, Fs.TriangleVertexListVisitor = Us, Fs.TriangleCoordinatesVisitor = qs, Fs.EDGE_COINCIDENCE_TOL_FACTOR = 1e3, e(Bs.prototype, { getLineSegment: function () { return this.ls; }, getEndZ: function () { var t = this.ls.getCoordinate(1); return t.z; }, getStartZ: function () { var t = this.ls.getCoordinate(0); return t.z; }, intersection: function (t) { return this.ls.intersection(t.getLineSegment()); }, getStart: function () { return this.ls.getCoordinate(0); }, getEnd: function () { return this.ls.getCoordinate(1); }, getEndY: function () { var t = this.ls.getCoordinate(1); return t.y; }, getStartX: function () { var t = this.ls.getCoordinate(0); return t.x; }, equalsTopo: function (t) { return this.ls.equalsTopo(t.getLineSegment()); }, getStartY: function () { var t = this.ls.getCoordinate(0); return t.y; }, setData: function (t) { this.data = t; }, getData: function () { return this.data; }, getEndX: function () { var t = this.ls.getCoordinate(1); return t.x; }, toString: function () { return this.ls.toString(); }, interfaces_: function () { return []; }, getClass: function () { return Bs; } }), e(zs.prototype, { visit: function (t) { }, interfaces_: function () { return []; }, getClass: function () { return zs; } }), e(Vs.prototype, { isRepeated: function () { return this.count > 1; }, getRight: function () { return this.right; }, getCoordinate: function () { return this.p; }, setLeft: function (t) { this.left = t; }, getX: function () { return this.p.x; }, getData: function () { return this.data; }, getCount: function () { return this.count; }, getLeft: function () { return this.left; }, getY: function () { return this.p.y; }, increment: function () { this.count = this.count + 1; }, setRight: function (t) { this.right = t; }, interfaces_: function () { return []; }, getClass: function () { return Vs; } }), e(Ys.prototype, { insert: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return this.insert(t, null);
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            if (null === this.root)
                                return this.root = new Vs(e, n), this.root;
                            if (this.tolerance > 0) {
                                var r = this.findBestMatchNode(e);
                                if (null !== r)
                                    return r.increment(), r;
                            }
                            return this.insertExact(e, n);
                        } }, query: function () { var t = arguments, e = this; if (1 === arguments.length) {
                            var n = arguments[0], r = new I;
                            return this.query(n, r), r;
                        } if (2 === arguments.length)
                            if (arguments[0] instanceof C && R(arguments[1], y))
                                !function () { var n = t[0], r = t[1]; e.queryNode(e.root, n, !0, { interfaces_: function () { return [zs]; }, visit: function (t) { r.add(t); } }); }();
                            else if (arguments[0] instanceof C && R(arguments[1], zs)) {
                                var i = arguments[0], s = arguments[1];
                                this.queryNode(this.root, i, !0, s);
                            } }, queryNode: function (t, e, n, r) { if (null === t)
                            return null; var i = null, s = null, o = null; n ? (i = e.getMinX(), s = e.getMaxX(), o = t.getX()) : (i = e.getMinY(), s = e.getMaxY(), o = t.getY()); var a = o > i, u = s >= o; a && this.queryNode(t.getLeft(), e, !n, r), e.contains(t.getCoordinate()) && r.visit(t), u && this.queryNode(t.getRight(), e, !n, r); }, findBestMatchNode: function (t) { var e = new Xs(t, this.tolerance); return this.query(e.queryEnvelope(), e), e.getNode(); }, isEmpty: function () { return null === this.root; }, insertExact: function (t, e) { for (var n = this.root, r = this.root, i = !0, s = !0; null !== n;) {
                            if (null !== n) {
                                var o = t.distance(n.getCoordinate()) <= this.tolerance;
                                if (o)
                                    return n.increment(), n;
                            }
                            s = i ? t.x < n.getX() : t.y < n.getY(), r = n, n = s ? n.getLeft() : n.getRight(), i = !i;
                        } this.numberOfNodes = this.numberOfNodes + 1; var a = new Vs(t, e); return s ? r.setLeft(a) : r.setRight(a), a; }, interfaces_: function () { return []; }, getClass: function () { return Ys; } }), Ys.toCoordinates = function () { if (1 === arguments.length) {
                        var t = arguments[0];
                        return Ys.toCoordinates(t, !1);
                    } if (2 === arguments.length) {
                        for (var e = arguments[0], n = arguments[1], r = new N, i = e.iterator(); i.hasNext();)
                            for (var s = i.next(), o = n ? s.getCount() : 1, a = 0; o > a; a++)
                                r.add(s.getCoordinate(), !0);
                        return r.toCoordinateArray();
                    } }, e(Xs.prototype, { visit: function (t) { var e = this.p.distance(t.getCoordinate()), n = e <= this.tolerance; if (!n)
                            return null; var r = !1; (null === this.matchNode || e < this.matchDist || null !== this.matchNode && e === this.matchDist && t.getCoordinate().compareTo(this.matchNode.getCoordinate()) < 1) && (r = !0), r && (this.matchNode = t, this.matchDist = e); }, queryEnvelope: function () { var t = new C(this.p); return t.expandBy(this.tolerance), t; }, getNode: function () { return this.matchNode; }, interfaces_: function () { return [zs]; }, getClass: function () { return Xs; } }), Ys.BestMatchVisitor = Xs, e(Hs.prototype, { getInitialVertices: function () { return this.initialVertices; }, getKDT: function () { return this.kdt; }, enforceConstraints: function () { this.addConstraintVertices(); var t = 0, e = 0; do
                            e = this.enforceGabriel(this.segments), t++;
                        while (e > 0 && t < Hs.MAX_SPLIT_ITER); }, insertSites: function (t) { for (var e = t.iterator(); e.hasNext();) {
                            var n = e.next();
                            this.insertSite(n);
                        } }, getVertexFactory: function () { return this.vertexFactory; }, getPointArray: function () { for (var t = new Array(this.initialVertices.size() + this.segVertices.size()).fill(null), e = 0, n = this.initialVertices.iterator(); n.hasNext();) {
                            var r = n.next();
                            t[e++] = r.getCoordinate();
                        } for (var i = this.segVertices.iterator(); i.hasNext();) {
                            var r = i.next();
                            t[e++] = r.getCoordinate();
                        } return t; }, setConstraints: function (t, e) { this.segments = t, this.segVertices = e; }, computeConvexHull: function () { var t = new re, e = this.getPointArray(), n = new ve(e, t); this.convexHull = n.getConvexHull(); }, addConstraintVertices: function () { this.computeConvexHull(), this.insertSites(this.segVertices); }, findNonGabrielPoint: function (t) { var e = t.getStart(), n = t.getEnd(), r = new f((e.x + n.x) / 2, (e.y + n.y) / 2), s = e.distance(r), o = new C(r); o.expandBy(s); for (var a = this.kdt.query(o), u = null, l = i.MAX_VALUE, c = a.iterator(); c.hasNext();) {
                            var h = c.next(), g = h.getCoordinate();
                            if (!g.equals2D(e) && !g.equals2D(n)) {
                                var d = r.distance(g);
                                if (s > d) {
                                    var p = d;
                                    (null === u || l > p) && (u = g, l = p);
                                }
                            }
                        } return u; }, getConstraintSegments: function () { return this.segments; }, setSplitPointFinder: function (t) { this.splitFinder = t; }, getConvexHull: function () { return this.convexHull; }, getTolerance: function () { return this.tolerance; }, enforceGabriel: function (t) { for (var e = new I, n = 0, r = new I, i = t.iterator(); i.hasNext();) {
                            var s = i.next(), o = this.findNonGabrielPoint(s);
                            if (null !== o) {
                                this.splitPt = this.splitFinder.findSplitPoint(s, o);
                                var a = this.createVertex(this.splitPt, s), u = (this.insertSite(a), new Bs(s.getStartX(), s.getStartY(), s.getStartZ(), a.getX(), a.getY(), a.getZ(), s.getData())), l = new Bs(a.getX(), a.getY(), a.getZ(), s.getEndX(), s.getEndY(), s.getEndZ(), s.getData());
                                e.add(u), e.add(l), r.add(s), n += 1;
                            }
                        } return t.removeAll(r), t.addAll(e), n; }, createVertex: function () { if (1 === arguments.length) {
                            var t = arguments[0], e = null;
                            return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(t, null) : new Ts(t);
                        } if (2 === arguments.length) {
                            var n = arguments[0], r = arguments[1], e = null;
                            return e = null !== this.vertexFactory ? this.vertexFactory.createVertex(n, r) : new Ts(n), e.setOnConstraint(!0), e;
                        } }, getSubdivision: function () { return this.subdiv; }, computeBoundingBox: function () { var t = Hs.computeVertexEnvelope(this.initialVertices), e = Hs.computeVertexEnvelope(this.segVertices), n = new C(t); n.expandToInclude(e); var r = .2 * n.getWidth(), i = .2 * n.getHeight(), s = Math.max(r, i); this.computeAreaEnv = new C(n), this.computeAreaEnv.expandBy(s); }, setVertexFactory: function (t) { this.vertexFactory = t; }, formInitialDelaunay: function () { this.computeBoundingBox(), this.subdiv = new Fs(this.computeAreaEnv, this.tolerance), this.subdiv.setLocator(new _s(this.subdiv)), this.incDel = new Os(this.subdiv), this.insertSites(this.initialVertices); }, insertSite: function () { if (arguments[0] instanceof Ts) {
                            var t = arguments[0], e = this.kdt.insert(t.getCoordinate(), t);
                            if (e.isRepeated()) {
                                var n = e.getData();
                                return n.merge(t), n;
                            }
                            return this.incDel.insertSite(t), t;
                        } if (arguments[0] instanceof f) {
                            var r = arguments[0];
                            this.insertSite(this.createVertex(r));
                        } }, interfaces_: function () { return []; }, getClass: function () { return Hs; } }), Hs.computeVertexEnvelope = function (t) { for (var e = new C, n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        e.expandToInclude(r.getCoordinate());
                    } return e; }, Hs.MAX_SPLIT_ITER = 99, e(Ws.prototype, { create: function () { if (null !== this.subdiv)
                            return null; var t = Ws.envelope(this.siteCoords), e = Ws.toVertices(this.siteCoords); this.subdiv = new Fs(t, this.tolerance); var n = new Os(this.subdiv); n.insertSites(e); }, setTolerance: function (t) { this.tolerance = t; }, setSites: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            this.siteCoords = Ws.extractUniqueCoordinates(t);
                        }
                        else if (R(arguments[0], m)) {
                            var e = arguments[0];
                            this.siteCoords = Ws.unique(H.toCoordinateArray(e));
                        } }, getEdges: function (t) { return this.create(), this.subdiv.getEdges(t); }, getSubdivision: function () { return this.create(), this.subdiv; }, getTriangles: function (t) { return this.create(), this.subdiv.getTriangles(t); }, interfaces_: function () { return []; }, getClass: function () { return Ws; } }), Ws.extractUniqueCoordinates = function (t) { if (null === t)
                        return new N; var e = t.getCoordinates(); return Ws.unique(e); }, Ws.envelope = function (t) { for (var e = new C, n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        e.expandToInclude(r);
                    } return e; }, Ws.unique = function (t) { var e = H.copyDeep(t); ut.sort(e); var n = new N(e, !1); return n; }, Ws.toVertices = function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                        var r = n.next();
                        e.add(new bs(r));
                    } return e; }, e(js.prototype, { createSiteVertices: function (t) { for (var e = new I, n = t.iterator(); n.hasNext();) {
                            var r = n.next();
                            this.constraintVertexMap.containsKey(r) || e.add(new Ts(r));
                        } return e; }, create: function () {
                            if (null !== this.subdiv)
                                return null;
                            var t = Ws.envelope(this.siteCoords), e = new I;
                            null !== this.constraintLines && (t.expandToInclude(this.constraintLines.getEnvelopeInternal()),
                                this.createVertices(this.constraintLines), e = js.createConstraintSegments(this.constraintLines));
                            var n = this.createSiteVertices(this.siteCoords), r = new Hs(n, this.tolerance);
                            r.setConstraints(e, new I(this.constraintVertexMap.values())), r.formInitialDelaunay(), r.enforceConstraints(), this.subdiv = r.getSubdivision();
                        }, setTolerance: function (t) { this.tolerance = t; }, setConstraints: function (t) { this.constraintLines = t; }, setSites: function (t) { this.siteCoords = Ws.extractUniqueCoordinates(t); }, getEdges: function (t) { return this.create(), this.subdiv.getEdges(t); }, getSubdivision: function () { return this.create(), this.subdiv; }, getTriangles: function (t) { return this.create(), this.subdiv.getTriangles(t); }, createVertices: function (t) { for (var e = t.getCoordinates(), n = 0; n < e.length; n++) {
                            var r = new Ts(e[n]);
                            this.constraintVertexMap.put(e[n], r);
                        } }, interfaces_: function () { return []; }, getClass: function () { return js; } }), js.createConstraintSegments = function () { if (1 === arguments.length) {
                        for (var t = arguments[0], e = zn.getLines(t), n = new I, r = e.iterator(); r.hasNext();) {
                            var i = r.next();
                            js.createConstraintSegments(i, n);
                        }
                        return n;
                    } if (2 === arguments.length)
                        for (var s = arguments[0], o = arguments[1], a = s.getCoordinates(), r = 1; r < a.length; r++)
                            o.add(new Bs(a[r - 1], a[r])); }, e(Zs.prototype, { create: function () { if (null !== this.subdiv)
                            return null; var t = Ws.envelope(this.siteCoords); this.diagramEnv = t; var e = Math.max(this.diagramEnv.getWidth(), this.diagramEnv.getHeight()); this.diagramEnv.expandBy(e), null !== this.clipEnv && this.diagramEnv.expandToInclude(this.clipEnv); var n = Ws.toVertices(this.siteCoords); this.subdiv = new Fs(t, this.tolerance); var r = new Os(this.subdiv); r.insertSites(n); }, getDiagram: function (t) { this.create(); var e = this.subdiv.getVoronoiDiagram(t); return Zs.clipGeometryCollection(e, this.diagramEnv); }, setTolerance: function (t) { this.tolerance = t; }, setSites: function () { if (arguments[0] instanceof U) {
                            var t = arguments[0];
                            this.siteCoords = Ws.extractUniqueCoordinates(t);
                        }
                        else if (R(arguments[0], m)) {
                            var e = arguments[0];
                            this.siteCoords = Ws.unique(H.toCoordinateArray(e));
                        } }, setClipEnvelope: function (t) { this.clipEnv = t; }, getSubdivision: function () { return this.create(), this.subdiv; }, interfaces_: function () { return []; }, getClass: function () { return Zs; } }), Zs.clipGeometryCollection = function (t, e) { for (var n = t.getFactory().toGeometry(e), r = new I, i = 0; i < t.getNumGeometries(); i++) {
                        var s = t.getGeometryN(i), o = null;
                        e.contains(s.getEnvelopeInternal()) ? o = s : e.intersects(s.getEnvelopeInternal()) && (o = n.intersection(s), o.setUserData(s.getUserData())), null === o || o.isEmpty() || r.add(o);
                    } return t.getFactory().createGeometryCollection(re.toGeometryArray(r)); };
                    var Ao = Object.freeze({ ConformingDelaunayTriangulationBuilder: js, DelaunayTriangulationBuilder: Ws, VoronoiDiagramBuilder: Zs });
                    e(Js.prototype, { interfaces_: function () { return []; }, getClass: function () { return Js; } }), Js.union = function (t, e) { if (t.isEmpty() || e.isEmpty()) {
                        if (t.isEmpty() && e.isEmpty())
                            return rr.createEmptyResult(rr.UNION, t, e, t.getFactory());
                        if (t.isEmpty())
                            return e.copy();
                        if (e.isEmpty())
                            return t.copy();
                    } return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), sr.overlayOp(t, e, rr.UNION); }, e(U.prototype, { equalsTopo: function (t) { return this.getEnvelopeInternal().equals(t.getEnvelopeInternal()) ? Vi.relate(this, t).isEquals(this.getDimension(), t.getDimension()) : !1; }, union: function () { if (0 === arguments.length)
                            return ji.union(this); if (1 === arguments.length) {
                            var t = arguments[0];
                            return Js.union(this, t);
                        } }, isValid: function () { return ls.isValid(this); }, intersection: function (t) { if (this.isEmpty() || t.isEmpty())
                            return rr.createEmptyResult(rr.INTERSECTION, this, t, this.factory); if (this.isGeometryCollection()) {
                            var e = t;
                            return cn.map(this, { interfaces_: function () { return [MapOp]; }, map: function (t) { return t.intersection(e); } });
                        } return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), sr.overlayOp(this, t, rr.INTERSECTION); }, covers: function (t) { return Vi.covers(this, t); }, coveredBy: function (t) { return Vi.coveredBy(this, t); }, touches: function (t) { return Vi.touches(this, t); }, intersects: function (t) { return Vi.intersects(this, t); }, within: function (t) { return Vi.within(this, t); }, overlaps: function (t) { return Vi.overlaps(this, t); }, disjoint: function (t) { return Vi.disjoint(this, t); }, crosses: function (t) { return Vi.crosses(this, t); }, buffer: function () { if (1 === arguments.length) {
                            var t = arguments[0];
                            return si.bufferOp(this, t);
                        } if (2 === arguments.length) {
                            var e = arguments[0], n = arguments[1];
                            return si.bufferOp(this, e, n);
                        } if (3 === arguments.length) {
                            var r = arguments[0], i = arguments[1], s = arguments[2];
                            return si.bufferOp(this, r, i, s);
                        } }, convexHull: function () { return new ve(this).getConvexHull(); }, relate: function () { for (var t = arguments.length, e = Array(t), n = 0; t > n; n++)
                            e[n] = arguments[n]; return Vi.relate.apply(Vi, [this].concat(e)); }, getCentroid: function () { if (this.isEmpty())
                            return this.factory.createPoint(); var t = fe.getCentroid(this); return this.createPointFromInternalCoord(t, this); }, getInteriorPoint: function () { if (this.isEmpty())
                            return this.factory.createPoint(); var t = null, e = this.getDimension(); if (0 === e) {
                            var n = new lr(this);
                            t = n.getInteriorPoint();
                        }
                        else if (1 === e) {
                            var n = new ur(this);
                            t = n.getInteriorPoint();
                        }
                        else {
                            var n = new or(this);
                            t = n.getInteriorPoint();
                        } return this.createPointFromInternalCoord(t, this); }, symDifference: function (t) { if (this.isEmpty() || t.isEmpty()) {
                            if (this.isEmpty() && t.isEmpty())
                                return rr.createEmptyResult(rr.SYMDIFFERENCE, this, t, this.factory);
                            if (this.isEmpty())
                                return t.copy();
                            if (t.isEmpty())
                                return this.copy();
                        } return this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), sr.overlayOp(this, t, rr.SYMDIFFERENCE); }, createPointFromInternalCoord: function (t, e) { return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t); }, toText: function () { var t = new se; return t.write(this); }, toString: function () { this.toText(); }, contains: function (t) { return Vi.contains(this, t); }, difference: function (t) { return this.isEmpty() ? rr.createEmptyResult(rr.DIFFERENCE, this, t, this.factory) : t.isEmpty() ? this.copy() : (this.checkNotGeometryCollection(this), this.checkNotGeometryCollection(t), sr.overlayOp(this, t, rr.DIFFERENCE)); }, isSimple: function () { var t = new Gr(this); return t.isSimple(); }, isWithinDistance: function (t, e) { var n = this.getEnvelopeInternal().distance(t.getEnvelopeInternal()); return n > e ? !1 : ci.isWithinDistance(this, t, e); }, distance: function (t) { return ci.distance(this, t); }, isEquivalentClass: function (t) { return this.getClass() === t.getClass(); } });
                    var Do = "1.1.2 (248dab8)";
                    t.version = Do, t.algorithm = ho, t.densify = go, t.dissolve = fo, t.geom = lo, t.index = vo, t.io = Io, t.noding = No, t.operation = Oo, t.precision = Mo, t.simplify = _o, t.triangulate = Ao;
                });
            }, {}], 21: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 22: [function (t, e, n) { var r = t("turf-bbox"), i = t("turf-helpers").point; e.exports = function (t) { var e = r(t), n = (e[0] + e[2]) / 2, s = (e[1] + e[3]) / 2; return i([n, s]); }; }, { "turf-bbox": 23, "turf-helpers": 24 }], 23: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-bbox"); }, { "/Users/tmcw/src/turf/packages/turf-bbox": 11 }], 24: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 25: [function (t, e, n) { var r = t("turf-meta").coordEach, i = t("turf-helpers").point; e.exports = function (t) { var e = 0, n = 0, s = 0; return r(t, function (t) { e += t[0], n += t[1], s++; }, !0), i([e / s, n / s]); }; }, { "turf-helpers": 26, "turf-meta": 27 }], 26: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 27: [function (t, e, n) { arguments[4][12][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98, dup: 12 }], 28: [function (t, e, n) { var r = t("turf-inside"); e.exports = function (t, e, n, i) { return t.features.forEach(function (t) { var s = e.features.filter(function (e) { return r(e, t); }).map(function (t) { return t.properties[n]; }); t.properties || (t.properties = {}), t.properties[i] = s; }), t; }; }, { "turf-inside": 29 }], 29: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-inside"); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75 }], 30: [function (t, e, n) { var r = t("turf-meta"); e.exports = function (t) { function e(t, e, r) { r ? n[e].coordinates = n[e].coordinates.concat(t.geometry.coordinates) : n[e].coordinates.push(t.geometry.coordinates), n[e].properties.push(t.properties); } var n = { MultiPoint: { coordinates: [], properties: [] }, MultiLineString: { coordinates: [], properties: [] }, MultiPolygon: { coordinates: [], properties: [] } }, i = Object.keys(n).reduce(function (t, e) { return t[e.replace("Multi", "")] = e, t; }, {}); return r.featureEach(t, function (t) { t.geometry && (n[t.geometry.type] ? e(t, t.geometry.type, !0) : i[t.geometry.type] && e(t, i[t.geometry.type], !1)); }), { type: "FeatureCollection", features: Object.keys(n).filter(function (t) { return n[t].coordinates.length; }).sort().map(function (t) { return { type: "Feature", properties: { collectedProperties: n[t].properties }, geometry: { type: t, coordinates: n[t].coordinates } }; }) }; }; }, { "turf-meta": 31 }], 31: [function (t, e, n) { arguments[4][12][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98, dup: 12 }], 32: [function (t, e, n) { function r(t, e, n) { function r(t) { var r = t.geometry.coordinates[0][0], i = t.geometry.coordinates[0][1], s = t.geometry.coordinates[0][2], o = a(r, i, n), u = a(i, s, n), l = a(r, s, n); return e >= o && e >= u && e >= l; } if ("number" != typeof e)
                throw new Error("maxEdge parameter is required"); if ("string" != typeof n)
                throw new Error("units parameter is required"); var o = s(t), u = o.features.filter(r); return o.features = u, i(o); } function i(t) { for (var e = JSON.parse(JSON.stringify(t.features[0])), n = t.features, r = 0, i = n.length; i > r; r++) {
                var s = n[r];
                s.geometry && (e = o(e, s));
            } return e; } var s = t("turf-tin"), o = t("turf-union"), a = t("turf-distance"); e.exports = r; }, { "turf-distance": 33, "turf-tin": 34, "turf-union": 35 }], 33: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 34: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-tin"); }, { "/Users/tmcw/src/turf/packages/turf-tin": 136 }], 35: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-union"); }, { "/Users/tmcw/src/turf/packages/turf-union": 141 }], 36: [function (t, e, n) { var r = t("turf-meta").coordEach, i = t("convex-hull"), s = t("turf-helpers").polygon; e.exports = function (t) { var e = []; r(t, function (t) { e.push(t); }); var n = i(e); if (n.length > 0) {
                for (var o = [], a = 0; a < n.length; a++)
                    o.push(e[n[a][0]]);
                return o.push(e[n[n.length - 1][1]]), s([o]);
            } return void 0; }; }, { "convex-hull": 39, "turf-helpers": 50, "turf-meta": 51 }], 37: [function (t, e, n) {
                "use strict";
                function r(t, e) { for (var n = new Array(e + 1), r = 0; r < t.length; ++r)
                    n[r] = t[r]; for (var r = 0; r <= t.length; ++r) {
                    for (var i = t.length; e >= i; ++i) {
                        for (var o = new Array(e), a = 0; e > a; ++a)
                            o[a] = Math.pow(i + 1 - r, a);
                        n[i] = o;
                    }
                    var u = s.apply(void 0, n);
                    if (u)
                        return !0;
                } return !1; }
                function i(t) { var e = t.length; if (0 === e)
                    return []; if (1 === e)
                    return [0]; for (var n = t[0].length, i = [t[0]], s = [0], o = 1; e > o; ++o)
                    if (i.push(t[o]), r(i, n)) {
                        if (s.push(o), s.length === n + 1)
                            return s;
                    }
                    else
                        i.pop(); return s; }
                e.exports = i;
                var s = t("robust-orientation");
            }, { "robust-orientation": 45 }], 38: [function (t, e, n) {
                "use strict";
                "use restrict";
                function r(t) { var e = 32; return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e; }
                var i = 32;
                n.INT_BITS = i, n.INT_MAX = 2147483647, n.INT_MIN = -1 << i - 1, n.sign = function (t) { return (t > 0) - (0 > t); }, n.abs = function (t) { var e = t >> i - 1; return (t ^ e) - e; }, n.min = function (t, e) { return e ^ (t ^ e) & -(e > t); }, n.max = function (t, e) { return t ^ (t ^ e) & -(e > t); }, n.isPow2 = function (t) { return !(t & t - 1 || !t); }, n.log2 = function (t) { var e, n; return e = (t > 65535) << 4, t >>>= e, n = (t > 255) << 3, t >>>= n, e |= n, n = (t > 15) << 2, t >>>= n, e |= n, n = (t > 3) << 1, t >>>= n, e |= n, e | t >> 1; }, n.log10 = function (t) { return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0; }, n.popCount = function (t) { return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24; }, n.countTrailingZeros = r, n.nextPow2 = function (t) { return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1; }, n.prevPow2 = function (t) { return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1); }, n.parity = function (t) { return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1; };
                var s = new Array(256);
                !function (t) { for (var e = 0; 256 > e; ++e) {
                    var n = e, r = e, i = 7;
                    for (n >>>= 1; n; n >>>= 1)
                        r <<= 1, r |= 1 & n, --i;
                    t[e] = r << i & 255;
                } }(s), n.reverse = function (t) { return s[255 & t] << 24 | s[t >>> 8 & 255] << 16 | s[t >>> 16 & 255] << 8 | s[t >>> 24 & 255]; }, n.interleave2 = function (t, e) { return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1; }, n.deinterleave2 = function (t, e) { return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16; }, n.interleave3 = function (t, e, n) { return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, n &= 1023, n = 4278190335 & (n | n << 16), n = 251719695 & (n | n << 8), n = 3272356035 & (n | n << 4), n = 1227133513 & (n | n << 2), t | n << 2; }, n.deinterleave3 = function (t, e) { return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22; }, n.nextCombination = function (t) { var e = t | t - 1; return e + 1 | (~e & -~e) - 1 >>> r(t) + 1; };
            }, {}], 39: [function (t, e, n) {
                "use strict";
                function r(t) { var e = t.length; if (0 === e)
                    return []; if (1 === e)
                    return [[0]]; var n = t[0].length; return 0 === n ? [] : 1 === n ? i(t) : 2 === n ? s(t) : o(t, n); }
                var i = t("./lib/ch1d"), s = t("./lib/ch2d"), o = t("./lib/chnd");
                e.exports = r;
            }, { "./lib/ch1d": 40, "./lib/ch2d": 41, "./lib/chnd": 42 }], 40: [function (t, e, n) {
                "use strict";
                function r(t) { for (var e = 0, n = 0, r = 1; r < t.length; ++r)
                    t[r][0] < t[e][0] && (e = r), t[r][0] > t[n][0] && (n = r); return n > e ? [[e], [n]] : e > n ? [[n], [e]] : [[e]]; }
                e.exports = r;
            }, {}], 41: [function (t, e, n) {
                "use strict";
                function r(t) { var e = i(t), n = e.length; if (2 >= n)
                    return []; for (var r = new Array(n), s = e[n - 1], o = 0; n > o; ++o) {
                    var a = e[o];
                    r[o] = [s, a], s = a;
                } return r; }
                e.exports = r;
                var i = t("monotone-convex-hull-2d");
            }, { "monotone-convex-hull-2d": 44 }], 42: [function (t, e, n) {
                "use strict";
                function r(t, e) { for (var n = t.length, r = new Array(n), i = 0; i < e.length; ++i)
                    r[i] = t[e[i]]; for (var s = e.length, i = 0; n > i; ++i)
                    e.indexOf(i) < 0 && (r[s++] = t[i]); return r; }
                function i(t, e) { for (var n = t.length, r = e.length, i = 0; n > i; ++i)
                    for (var s = t[i], o = 0; o < s.length; ++o) {
                        var a = s[o];
                        if (r > a)
                            s[o] = e[a];
                        else {
                            a -= r;
                            for (var u = 0; r > u; ++u)
                                a >= e[u] && (a += 1);
                            s[o] = a;
                        }
                    } return t; }
                function s(t, e) { try {
                    return o(t, !0);
                }
                catch (n) {
                    var s = a(t);
                    if (s.length <= e)
                        return [];
                    var u = r(t, s), l = o(u, !0);
                    return i(l, s);
                } }
                e.exports = s;
                var o = t("incremental-convex-hull"), a = t("affine-hull");
            }, { "affine-hull": 37, "incremental-convex-hull": 43 }], 43: [function (t, e, n) {
                "use strict";
                function r(t, e, n) { this.vertices = t, this.adjacent = e, this.boundary = n, this.lastVisited = -1; }
                function i(t, e, n) { this.vertices = t, this.cell = e, this.index = n; }
                function s(t, e) { return c(t.vertices, e.vertices); }
                function o(t) { for (var e = ["function orient(){var tuple=this.tuple;return test("], n = 0; t >= n; ++n)
                    n > 0 && e.push(","), e.push("tuple[", n, "]"); e.push(")}return orient"); var r = new Function("test", e.join("")), i = l[t + 1]; return i || (i = l), r(i); }
                function a(t, e, n) { this.dimension = t, this.vertices = e, this.simplices = n, this.interior = n.filter(function (t) { return !t.boundary; }), this.tuple = new Array(t + 1); for (var r = 0; t >= r; ++r)
                    this.tuple[r] = this.vertices[r]; var i = h[t]; i || (i = h[t] = o(t)), this.orient = i; }
                function u(t, e) { var n = t.length; if (0 === n)
                    throw new Error("Must have at least d+1 points"); var i = t[0].length; if (i >= n)
                    throw new Error("Must input at least d+1 points"); var s = t.slice(0, i + 1), o = l.apply(void 0, s); if (0 === o)
                    throw new Error("Input not in general position"); for (var u = new Array(i + 1), c = 0; i >= c; ++c)
                    u[c] = c; 0 > o && (u[0] = 1, u[1] = 0); for (var h = new r(u, new Array(i + 1), !1), g = h.adjacent, f = new Array(i + 2), c = 0; i >= c; ++c) {
                    for (var d = u.slice(), p = 0; i >= p; ++p)
                        p === c && (d[p] = -1);
                    var m = d[0];
                    d[0] = d[1], d[1] = m;
                    var v = new r(d, new Array(i + 1), !0);
                    g[c] = v, f[c] = v;
                } f[i + 1] = h; for (var c = 0; i >= c; ++c)
                    for (var d = g[c].vertices, y = g[c].adjacent, p = 0; i >= p; ++p) {
                        var x = d[p];
                        if (0 > x)
                            y[p] = h;
                        else
                            for (var E = 0; i >= E; ++E)
                                g[E].vertices.indexOf(x) < 0 && (y[p] = g[E]);
                    } for (var I = new a(i, s, f), N = !!e, c = i + 1; n > c; ++c)
                    I.insert(t[c], N); return I.boundary(); }
                e.exports = u;
                var l = t("robust-orientation"), c = t("simplicial-complex").compareCells;
                r.prototype.flip = function () { var t = this.vertices[0]; this.vertices[0] = this.vertices[1], this.vertices[1] = t; var e = this.adjacent[0]; this.adjacent[0] = this.adjacent[1], this.adjacent[1] = e; };
                var h = [], g = a.prototype;
                g.handleBoundaryDegeneracy = function (t, e) { var n = this.dimension, r = this.vertices.length - 1, i = this.tuple, s = this.vertices, o = [t]; for (t.lastVisited = -r; o.length > 0;) {
                    t = o.pop();
                    for (var a = (t.vertices, t.adjacent), u = 0; n >= u; ++u) {
                        var l = a[u];
                        if (l.boundary && !(l.lastVisited <= -r)) {
                            for (var c = l.vertices, h = 0; n >= h; ++h) {
                                var g = c[h];
                                0 > g ? i[h] = e : i[h] = s[g];
                            }
                            var f = this.orient();
                            if (f > 0)
                                return l;
                            l.lastVisited = -r, 0 === f && o.push(l);
                        }
                    }
                } return null; }, g.walk = function (t, e) { var n = this.vertices.length - 1, r = this.dimension, i = this.vertices, s = this.tuple, o = e ? this.interior.length * Math.random() | 0 : this.interior.length - 1, a = this.interior[o]; t: for (; !a.boundary;) {
                    for (var u = a.vertices, l = a.adjacent, c = 0; r >= c; ++c)
                        s[c] = i[u[c]];
                    a.lastVisited = n;
                    for (var c = 0; r >= c; ++c) {
                        var h = l[c];
                        if (!(h.lastVisited >= n)) {
                            var g = s[c];
                            s[c] = t;
                            var f = this.orient();
                            if (s[c] = g, 0 > f) {
                                a = h;
                                continue t;
                            }
                            h.boundary ? h.lastVisited = -n : h.lastVisited = n;
                        }
                    }
                    return;
                } return a; }, g.addPeaks = function (t, e) { var n = this.vertices.length - 1, o = this.dimension, a = this.vertices, u = this.tuple, l = this.interior, c = this.simplices, h = [e]; e.lastVisited = n, e.vertices[e.vertices.indexOf(-1)] = n, e.boundary = !1, l.push(e); for (var g = []; h.length > 0;) {
                    var e = h.pop(), f = e.vertices, d = e.adjacent, p = f.indexOf(n);
                    if (!(0 > p))
                        for (var m = 0; o >= m; ++m)
                            if (m !== p) {
                                var v = d[m];
                                if (v.boundary && !(v.lastVisited >= n)) {
                                    var y = v.vertices;
                                    if (v.lastVisited !== -n) {
                                        for (var x = 0, E = 0; o >= E; ++E)
                                            y[E] < 0 ? (x = E, u[E] = t) : u[E] = a[y[E]];
                                        var I = this.orient();
                                        if (I > 0) {
                                            y[x] = n, v.boundary = !1, l.push(v), h.push(v), v.lastVisited = n;
                                            continue;
                                        }
                                        v.lastVisited = -n;
                                    }
                                    var N = v.adjacent, C = f.slice(), w = d.slice(), S = new r(C, w, !0);
                                    c.push(S);
                                    var L = N.indexOf(e);
                                    if (!(0 > L)) {
                                        N[L] = S, w[p] = v, C[m] = -1, w[m] = e, d[m] = S, S.flip();
                                        for (var E = 0; o >= E; ++E) {
                                            var R = C[E];
                                            if (!(0 > R || R === n)) {
                                                for (var b = new Array(o - 1), T = 0, P = 0; o >= P; ++P) {
                                                    var O = C[P];
                                                    0 > O || P === E || (b[T++] = O);
                                                }
                                                g.push(new i(b, S, E));
                                            }
                                        }
                                    }
                                }
                            }
                } g.sort(s); for (var m = 0; m + 1 < g.length; m += 2) {
                    var M = g[m], _ = g[m + 1], A = M.index, D = _.index;
                    0 > A || 0 > D || (M.cell.adjacent[M.index] = _.cell, _.cell.adjacent[_.index] = M.cell);
                } }, g.insert = function (t, e) { var n = this.vertices; n.push(t); var r = this.walk(t, e); if (r) {
                    for (var i = this.dimension, s = this.tuple, o = 0; i >= o; ++o) {
                        var a = r.vertices[o];
                        0 > a ? s[o] = t : s[o] = n[a];
                    }
                    var u = this.orient(s);
                    0 > u || (0 !== u || (r = this.handleBoundaryDegeneracy(r, t))) && this.addPeaks(t, r);
                } }, g.boundary = function () { for (var t = this.dimension, e = [], n = this.simplices, r = n.length, i = 0; r > i; ++i) {
                    var s = n[i];
                    if (s.boundary) {
                        for (var o = new Array(t), a = s.vertices, u = 0, l = 0, c = 0; t >= c; ++c)
                            a[c] >= 0 ? o[u++] = a[c] : l = 1 & c;
                        if (l === (1 & t)) {
                            var h = o[0];
                            o[0] = o[1], o[1] = h;
                        }
                        e.push(o);
                    }
                } return e; };
            }, { "robust-orientation": 45, "simplicial-complex": 49 }], 44: [function (t, e, n) {
                "use strict";
                function r(t) { var e = t.length; if (3 > e) {
                    for (var n = new Array(e), r = 0; e > r; ++r)
                        n[r] = r;
                    return 2 === e && t[0][0] === t[1][0] && t[0][1] === t[1][1] ? [0] : n;
                } for (var s = new Array(e), r = 0; e > r; ++r)
                    s[r] = r; s.sort(function (e, n) { var r = t[e][0] - t[n][0]; return r ? r : t[e][1] - t[n][1]; }); for (var o = [s[0], s[1]], a = [s[0], s[1]], r = 2; e > r; ++r) {
                    for (var u = s[r], l = t[u], c = o.length; c > 1 && i(t[o[c - 2]], t[o[c - 1]], l) <= 0;)
                        c -= 1, o.pop();
                    for (o.push(u), c = a.length; c > 1 && i(t[a[c - 2]], t[a[c - 1]], l) >= 0;)
                        c -= 1, a.pop();
                    a.push(u);
                } for (var n = new Array(a.length + o.length - 2), h = 0, r = 0, g = o.length; g > r; ++r)
                    n[h++] = o[r]; for (var f = a.length - 2; f > 0; --f)
                    n[h++] = a[f]; return n; }
                e.exports = r;
                var i = t("robust-orientation")[3];
            }, { "robust-orientation": 45 }], 45: [function (t, e, n) {
                "use strict";
                function r(t, e) { for (var n = new Array(t.length - 1), r = 1; r < t.length; ++r)
                    for (var i = n[r - 1] = new Array(t.length - 1), s = 0, o = 0; s < t.length; ++s)
                        s !== e && (i[o++] = t[r][s]); return n; }
                function i(t) { for (var e = new Array(t), n = 0; t > n; ++n) {
                    e[n] = new Array(t);
                    for (var r = 0; t > r; ++r)
                        e[n][r] = ["m", r, "[", t - n - 1, "]"].join("");
                } return e; }
                function s(t) { return 1 & t ? "-" : ""; }
                function o(t) { if (1 === t.length)
                    return t[0]; if (2 === t.length)
                    return ["sum(", t[0], ",", t[1], ")"].join(""); var e = t.length >> 1; return ["sum(", o(t.slice(0, e)), ",", o(t.slice(e)), ")"].join(""); }
                function a(t) { if (2 === t.length)
                    return [["sum(prod(", t[0][0], ",", t[1][1], "),prod(-", t[0][1], ",", t[1][0], "))"].join("")]; for (var e = [], n = 0; n < t.length; ++n)
                    e.push(["scale(", o(a(r(t, n))), ",", s(n), t[0][n], ")"].join("")); return e; }
                function u(t) { for (var e = [], n = [], s = i(t), u = [], l = 0; t > l; ++l)
                    0 === (1 & l) ? e.push.apply(e, a(r(s, l))) : n.push.apply(n, a(r(s, l))), u.push("m" + l); var c = o(e), p = o(n), m = "orientation" + t + "Exact", v = ["function ", m, "(", u.join(), "){var p=", c, ",n=", p, ",d=sub(p,n);return d[d.length-1];};return ", m].join(""), y = new Function("sum", "prod", "scale", "sub", v); return y(g, h, f, d); }
                function l(t) { var e = I[t.length]; return e || (e = I[t.length] = u(t.length)), e.apply(void 0, t); }
                function c() { for (; I.length <= p;)
                    I.push(u(I.length)); for (var t = [], n = ["slow"], r = 0; p >= r; ++r)
                    t.push("a" + r), n.push("o" + r); for (var i = ["function getOrientation(", t.join(), "){switch(arguments.length){case 0:case 1:return 0;"], r = 2; p >= r; ++r)
                    i.push("case ", r, ":return o", r, "(", t.slice(0, r).join(), ");"); i.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"), n.push(i.join("")); var s = Function.apply(void 0, n); e.exports = s.apply(void 0, [l].concat(I)); for (var r = 0; p >= r; ++r)
                    e.exports[r] = I[r]; }
                var h = t("two-product"), g = t("robust-sum"), f = t("robust-scale"), d = t("robust-subtract"), p = 5, m = 1.1102230246251565e-16, v = (3 + 16 * m) * m, y = (7 + 56 * m) * m, x = u(3), E = u(4), I = [function () { return 0; }, function () { return 0; }, function (t, e) { return e[0] - t[0]; }, function (t, e, n) { var r, i = (t[1] - n[1]) * (e[0] - n[0]), s = (t[0] - n[0]) * (e[1] - n[1]), o = i - s; if (i > 0) {
                        if (0 >= s)
                            return o;
                        r = i + s;
                    }
                    else {
                        if (!(0 > i))
                            return o;
                        if (s >= 0)
                            return o;
                        r = -(i + s);
                    } var a = v * r; return o >= a || -a >= o ? o : x(t, e, n); }, function (t, e, n, r) { var i = t[0] - r[0], s = e[0] - r[0], o = n[0] - r[0], a = t[1] - r[1], u = e[1] - r[1], l = n[1] - r[1], c = t[2] - r[2], h = e[2] - r[2], g = n[2] - r[2], f = s * l, d = o * u, p = o * a, m = i * l, v = i * u, x = s * a, I = c * (f - d) + h * (p - m) + g * (v - x), N = (Math.abs(f) + Math.abs(d)) * Math.abs(c) + (Math.abs(p) + Math.abs(m)) * Math.abs(h) + (Math.abs(v) + Math.abs(x)) * Math.abs(g), C = y * N; return I > C || -I > C ? I : E(t, e, n, r); }];
                c();
            }, { "robust-scale": 46, "robust-subtract": 47, "robust-sum": 48, "two-product": 52 }], 46: [function (t, e, n) {
                "use strict";
                function r(t, e) { var n = t.length; if (1 === n) {
                    var r = i(t[0], e);
                    return r[0] ? r : [r[1]];
                } var o = new Array(2 * n), a = [.1, .1], u = [.1, .1], l = 0; i(t[0], e, a), a[0] && (o[l++] = a[0]); for (var c = 1; n > c; ++c) {
                    i(t[c], e, u);
                    var h = a[1];
                    s(h, u[0], a), a[0] && (o[l++] = a[0]);
                    var g = u[1], f = a[1], d = g + f, p = d - g, m = f - p;
                    a[1] = d, m && (o[l++] = m);
                } return a[1] && (o[l++] = a[1]), 0 === l && (o[l++] = 0), o.length = l, o; }
                var i = t("two-product"), s = t("two-sum");
                e.exports = r;
            }, { "two-product": 52, "two-sum": 53 }], 47: [function (t, e, n) {
                "use strict";
                function r(t, e) { var n = t + e, r = n - t, i = n - r, s = e - r, o = t - i, a = o + s; return a ? [a, n] : [n]; }
                function i(t, e) { var n = 0 | t.length, i = 0 | e.length; if (1 === n && 1 === i)
                    return r(t[0], -e[0]); var s, o, a = n + i, u = new Array(a), l = 0, c = 0, h = 0, g = Math.abs, f = t[c], d = g(f), p = -e[h], m = g(p); m > d ? (o = f, c += 1, n > c && (f = t[c], d = g(f))) : (o = p, h += 1, i > h && (p = -e[h], m = g(p))), n > c && m > d || h >= i ? (s = f, c += 1, n > c && (f = t[c], d = g(f))) : (s = p, h += 1, i > h && (p = -e[h], m = g(p))); for (var v, y, x, E, I, N = s + o, C = N - s, w = o - C, S = w, L = N; n > c && i > h;)
                    m > d ? (s = f, c += 1, n > c && (f = t[c], d = g(f))) : (s = p, h += 1, i > h && (p = -e[h], m = g(p))), o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v; for (; n > c;)
                    s = f, o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v, c += 1, n > c && (f = t[c]); for (; i > h;)
                    s = p, o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v, h += 1, i > h && (p = -e[h]); return S && (u[l++] = S), L && (u[l++] = L), l || (u[l++] = 0), u.length = l, u; }
                e.exports = i;
            }, {}], 48: [function (t, e, n) {
                "use strict";
                function r(t, e) { var n = t + e, r = n - t, i = n - r, s = e - r, o = t - i, a = o + s; return a ? [a, n] : [n]; }
                function i(t, e) { var n = 0 | t.length, i = 0 | e.length; if (1 === n && 1 === i)
                    return r(t[0], e[0]); var s, o, a = n + i, u = new Array(a), l = 0, c = 0, h = 0, g = Math.abs, f = t[c], d = g(f), p = e[h], m = g(p); m > d ? (o = f, c += 1, n > c && (f = t[c], d = g(f))) : (o = p, h += 1, i > h && (p = e[h], m = g(p))), n > c && m > d || h >= i ? (s = f, c += 1, n > c && (f = t[c], d = g(f))) : (s = p, h += 1, i > h && (p = e[h], m = g(p))); for (var v, y, x, E, I, N = s + o, C = N - s, w = o - C, S = w, L = N; n > c && i > h;)
                    m > d ? (s = f, c += 1, n > c && (f = t[c], d = g(f))) : (s = p, h += 1, i > h && (p = e[h], m = g(p))), o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v; for (; n > c;)
                    s = f, o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v, c += 1, n > c && (f = t[c]); for (; i > h;)
                    s = p, o = S, N = s + o, C = N - s, w = o - C, w && (u[l++] = w), v = L + N, y = v - L, x = v - y, E = N - y, I = L - x, S = I + E, L = v, h += 1, i > h && (p = e[h]); return S && (u[l++] = S), L && (u[l++] = L), l || (u[l++] = 0), u.length = l, u; }
                e.exports = i;
            }, {}], 49: [function (t, e, n) {
                "use strict";
                "use restrict";
                function r(t) { for (var e = 0, n = Math.max, r = 0, i = t.length; i > r; ++r)
                    e = n(e, t[r].length); return e - 1; }
                function i(t) { for (var e = -1, n = Math.max, r = 0, i = t.length; i > r; ++r)
                    for (var s = t[r], o = 0, a = s.length; a > o; ++o)
                        e = n(e, s[o]); return e + 1; }
                function s(t) { for (var e = new Array(t.length), n = 0, r = t.length; r > n; ++n)
                    e[n] = t[n].slice(0); return e; }
                function o(t, e) { var n = t.length, r = t.length - e.length, i = Math.min; if (r)
                    return r; switch (n) {
                    case 0: return 0;
                    case 1: return t[0] - e[0];
                    case 2:
                        var s = t[0] + t[1] - e[0] - e[1];
                        return s ? s : i(t[0], t[1]) - i(e[0], e[1]);
                    case 3:
                        var o = t[0] + t[1], a = e[0] + e[1];
                        if (s = o + t[2] - (a + e[2]))
                            return s;
                        var u = i(t[0], t[1]), l = i(e[0], e[1]), s = i(u, t[2]) - i(l, e[2]);
                        return s ? s : i(u + t[2], o) - i(l + e[2], a);
                    default:
                        var c = t.slice(0);
                        c.sort();
                        var h = e.slice(0);
                        h.sort();
                        for (var g = 0; n > g; ++g)
                            if (r = c[g] - h[g])
                                return r;
                        return 0;
                } }
                function a(t, e) { return o(t[0], e[0]); }
                function u(t, e) { if (e) {
                    for (var n = t.length, r = new Array(n), i = 0; n > i; ++i)
                        r[i] = [t[i], e[i]];
                    r.sort(a);
                    for (var i = 0; n > i; ++i)
                        t[i] = r[i][0], e[i] = r[i][1];
                    return t;
                } return t.sort(o), t; }
                function l(t) { if (0 === t.length)
                    return []; for (var e = 1, n = t.length, r = 1; n > r; ++r) {
                    var i = t[r];
                    if (o(i, t[r - 1])) {
                        if (r === e) {
                            e++;
                            continue;
                        }
                        t[e++] = i;
                    }
                } return t.length = e, t; }
                function c(t, e) { for (var n = 0, r = t.length - 1, i = -1; r >= n;) {
                    var s = n + r >> 1, a = o(t[s], e);
                    0 >= a ? (0 === a && (i = s), n = s + 1) : a > 0 && (r = s - 1);
                } return i; }
                function h(t, e) { for (var n = new Array(t.length), r = 0, i = n.length; i > r; ++r)
                    n[r] = []; for (var s = [], r = 0, a = e.length; a > r; ++r)
                    for (var u = e[r], l = u.length, h = 1, g = 1 << l; g > h; ++h) {
                        s.length = x.popCount(h);
                        for (var f = 0, d = 0; l > d; ++d)
                            h & 1 << d && (s[f++] = u[d]);
                        var p = c(t, s);
                        if (!(0 > p))
                            for (;;)
                                if (n[p++].push(r), p >= t.length || 0 !== o(t[p], s))
                                    break;
                    } return n; }
                function g(t, e) { if (!e)
                    return h(l(d(t, 0)), t, 0); for (var n = new Array(e), r = 0; e > r; ++r)
                    n[r] = []; for (var r = 0, i = t.length; i > r; ++r)
                    for (var s = t[r], o = 0, a = s.length; a > o; ++o)
                        n[s[o]].push(r); return n; }
                function f(t) { for (var e = [], n = 0, r = t.length; r > n; ++n)
                    for (var i = t[n], s = 0 | i.length, o = 1, a = 1 << s; a > o; ++o) {
                        for (var l = [], c = 0; s > c; ++c)
                            o >>> c & 1 && l.push(i[c]);
                        e.push(l);
                    } return u(e); }
                function d(t, e) { if (0 > e)
                    return []; for (var n = [], r = (1 << e + 1) - 1, i = 0; i < t.length; ++i)
                    for (var s = t[i], o = r; o < 1 << s.length; o = x.nextCombination(o)) {
                        for (var a = new Array(e + 1), l = 0, c = 0; c < s.length; ++c)
                            o & 1 << c && (a[l++] = s[c]);
                        n.push(a);
                    } return u(n); }
                function p(t) { for (var e = [], n = 0, r = t.length; r > n; ++n)
                    for (var i = t[n], s = 0, o = i.length; o > s; ++s) {
                        for (var a = new Array(i.length - 1), l = 0, c = 0; o > l; ++l)
                            l !== s && (a[c++] = i[l]);
                        e.push(a);
                    } return u(e); }
                function m(t, e) { for (var n = new E(e), r = 0; r < t.length; ++r)
                    for (var i = t[r], s = 0; s < i.length; ++s)
                        for (var o = s + 1; o < i.length; ++o)
                            n.link(i[s], i[o]); for (var a = [], u = n.ranks, r = 0; r < u.length; ++r)
                    u[r] = -1; for (var r = 0; r < t.length; ++r) {
                    var l = n.find(t[r][0]);
                    u[l] < 0 ? (u[l] = a.length, a.push([t[r].slice(0)])) : a[u[l]].push(t[r].slice(0));
                } return a; }
                function v(t) { for (var e = l(u(d(t, 0))), n = new E(e.length), r = 0; r < t.length; ++r)
                    for (var i = t[r], s = 0; s < i.length; ++s)
                        for (var o = c(e, [i[s]]), a = s + 1; a < i.length; ++a)
                            n.link(o, c(e, [i[a]])); for (var h = [], g = n.ranks, r = 0; r < g.length; ++r)
                    g[r] = -1; for (var r = 0; r < t.length; ++r) {
                    var f = n.find(c(e, [t[r][0]]));
                    g[f] < 0 ? (g[f] = h.length, h.push([t[r].slice(0)])) : h[g[f]].push(t[r].slice(0));
                } return h; }
                function y(t, e) { return e ? m(t, e) : v(t); }
                var x = t("bit-twiddle"), E = t("union-find");
                n.dimension = r, n.countVertices = i, n.cloneCells = s, n.compareCells = o, n.normalize = u, n.unique = l, n.findCell = c, n.incidence = h, n.dual = g, n.explode = f, n.skeleton = d, n.boundary = p, n.connectedComponents = y;
            }, { "bit-twiddle": 38, "union-find": 54 }], 50: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 51: [function (t, e, n) { arguments[4][12][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98, dup: 12 }], 52: [function (t, e, n) {
                "use strict";
                function r(t, e, n) { var r = t * e, s = i * t, o = s - t, a = s - o, u = t - a, l = i * e, c = l - e, h = l - c, g = e - h, f = r - a * h, d = f - u * h, p = d - a * g, m = u * g - p; return n ? (n[0] = m, n[1] = r, n) : [m, r]; }
                e.exports = r;
                var i = +(Math.pow(2, 27) + 1);
            }, {}], 53: [function (t, e, n) {
                "use strict";
                function r(t, e, n) { var r = t + e, i = r - t, s = r - i, o = e - i, a = t - s; return n ? (n[0] = a + o, n[1] = r, n) : [a + o, r]; }
                e.exports = r;
            }, {}], 54: [function (t, e, n) {
                "use strict";
                "use restrict";
                function r(t) { this.roots = new Array(t), this.ranks = new Array(t); for (var e = 0; t > e; ++e)
                    this.roots[e] = e, this.ranks[e] = 0; }
                e.exports = r;
                var i = r.prototype;
                Object.defineProperty(i, "length", { get: function () { return this.roots.length; } }), i.makeSet = function () { var t = this.roots.length; return this.roots.push(t), this.ranks.push(0), t; }, i.find = function (t) { for (var e = t, n = this.roots; n[t] !== t;)
                    t = n[t]; for (; n[e] !== t;) {
                    var r = n[e];
                    n[e] = t, e = r;
                } return t; }, i.link = function (t, e) { var n = this.find(t), r = this.find(e); if (n !== r) {
                    var i = this.ranks, s = this.roots, o = i[n], a = i[r];
                    a > o ? s[n] = r : o > a ? s[r] = n : (s[r] = n, ++i[n]);
                } };
            }, {}], 55: [function (t, e, n) { var r = t("turf-invariant").getCoord, i = t("turf-helpers"), s = i.point, o = i.distanceToRadians; e.exports = function (t, e, n, i) { var a = Math.PI / 180, u = 180 / Math.PI, l = r(t), c = a * l[0], h = a * l[1], g = a * n, f = o(e, i), d = Math.asin(Math.sin(h) * Math.cos(f) + Math.cos(h) * Math.sin(f) * Math.cos(g)), p = c + Math.atan2(Math.sin(g) * Math.sin(f) * Math.cos(h), Math.cos(f) - Math.sin(h) * Math.sin(d)); return s([u * p, u * d]); }; }, { "turf-helpers": 56, "turf-invariant": 57 }], 56: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 57: [function (t, e, n) { arguments[4][14][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-invariant": 79, dup: 14 }], 58: [function (t, e, n) { var r = t("jsts"); e.exports = function (t, e) { var n = JSON.parse(JSON.stringify(t)), i = JSON.parse(JSON.stringify(e)); "Feature" !== n.type && (n = { type: "Feature", properties: {}, geometry: n }), "Feature" !== i.type && (i = { type: "Feature", properties: {}, geometry: i }); var s = new r.io.GeoJSONReader, o = s.read(JSON.stringify(n.geometry)), a = s.read(JSON.stringify(i.geometry)), u = o.difference(a); if (u.isEmpty())
                return void 0; var l = new r.io.GeoJSONWriter, c = l.write(u); return n.geometry = u, { type: "Feature", properties: n.properties, geometry: c }; }; }, { jsts: 59 }], 59: [function (t, e, n) { arguments[4][20][0].apply(n, arguments); }, { dup: 20 }], 60: [function (t, e, n) { var r = t("turf-invariant").getCoord, i = t("turf-helpers").radiansToDistance; e.exports = function (t, e, n) { var s = Math.PI / 180, o = r(t), a = r(e), u = s * (a[1] - o[1]), l = s * (a[0] - o[0]), c = s * o[1], h = s * a[1], g = Math.pow(Math.sin(u / 2), 2) + Math.pow(Math.sin(l / 2), 2) * Math.cos(c) * Math.cos(h); return i(2 * Math.atan2(Math.sqrt(g), Math.sqrt(1 - g)), n); }; }, { "turf-helpers": 61, "turf-invariant": 62 }], 61: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 62: [function (t, e, n) { arguments[4][14][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-invariant": 79, dup: 14 }], 63: [function (t, e, n) { var r = t("turf-bbox"), i = t("turf-bbox-polygon"); e.exports = function (t) { return i(r(t)); }; }, { "turf-bbox": 65, "turf-bbox-polygon": 64 }], 64: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-bbox-polygon"); }, { "/Users/tmcw/src/turf/packages/turf-bbox-polygon": 9 }], 65: [function (t, e, n) { arguments[4][23][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bbox": 11, dup: 23 }], 66: [function (t, e, n) { var r = t("turf-helpers").featureCollection, i = t("turf-meta").coordEach, s = t("turf-helpers").point; e.exports = function (t) { var e = []; return i(t, function (t) { e.push(s(t)); }), r(e); }; }, { "turf-helpers": 67, "turf-meta": 68 }], 67: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 68: [function (t, e, n) { arguments[4][12][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98, dup: 12 }], 69: [function (t, e, n) { var r = t("turf-meta").coordEach; e.exports = function (t) { return t = JSON.parse(JSON.stringify(t)), r(t, function (t) { t.reverse(); }), t; }; }, { "turf-meta": 70 }], 70: [function (t, e, n) { arguments[4][12][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-meta": 98, dup: 12 }], 71: [function (t, e, n) {
                function r(t, e) { return { type: "Feature", properties: e || {}, geometry: t }; }
                e.exports.feature = r, e.exports.point = function (t, e) {
                    if (!Array.isArray(t))
                        throw new Error("Coordinates must be an array");
                    if (t.length < 2)
                        throw new Error("Coordinates must be at least 2 numbers long");
                    return r({ type: "Point", coordinates: t.slice() }, e);
                }, e.exports.polygon = function (t, e) { if (!t)
                    throw new Error("No coordinates passed"); for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i.length < 4)
                        throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
                    for (var s = 0; s < i[i.length - 1].length; s++)
                        if (i[i.length - 1][s] !== i[0][s])
                            throw new Error("First and last Position are not equivalent.");
                } return r({ type: "Polygon", coordinates: t }, e); }, e.exports.lineString = function (t, e) { if (!t)
                    throw new Error("No coordinates passed"); return r({ type: "LineString", coordinates: t }, e); }, e.exports.featureCollection = function (t) { return { type: "FeatureCollection", features: t }; }, e.exports.multiLineString = function (t, e) { if (!t)
                    throw new Error("No coordinates passed"); return r({ type: "MultiLineString", coordinates: t }, e); }, e.exports.multiPoint = function (t, e) { if (!t)
                    throw new Error("No coordinates passed"); return r({ type: "MultiPoint", coordinates: t }, e); }, e.exports.multiPolygon = function (t, e) { if (!t)
                    throw new Error("No coordinates passed"); return r({ type: "MultiPolygon", coordinates: t }, e); }, e.exports.geometryCollection = function (t, e) { return r({ type: "GeometryCollection", geometries: t }, e); };
                var i = { miles: 3960, nauticalmiles: 3441.145, degrees: 57.2957795, radians: 1, inches: 250905600, yards: 6969600, meters: 6373e3, metres: 6373e3, kilometers: 6373, kilometres: 6373 };
                e.exports.radiansToDistance = function (t, e) { var n = i[e || "kilometers"]; if (void 0 === n)
                    throw new Error("Invalid unit"); return t * n; }, e.exports.distanceToRadians = function (t, e) { var n = i[e || "kilometers"]; if (void 0 === n)
                    throw new Error("Invalid unit"); return t / n; }, e.exports.distanceToDegrees = function (t, e) { var n = i[e || "kilometers"]; if (void 0 === n)
                    throw new Error("Invalid unit"); return t / n * 57.2958; };
            }, {}], 72: [function (t, e, n) { function r(t, e, n) { for (var r = [], i = 0; 6 > i; i++) {
                var s = t[0] + e * l[i], a = t[1] + n * c[i];
                r.push([s, a]);
            } return r.push(r[0]), o([r]); } function i(t, e, n) { for (var r = [], i = 0; 6 > i; i++) {
                var s = [];
                s.push(t), s.push([t[0] + e * l[i], t[1] + n * c[i]]), s.push([t[0] + e * l[(i + 1) % 6], t[1] + n * c[(i + 1) % 6]]), s.push(t), r.push(o([s]));
            } return r; } for (var s = t("turf-helpers").point, o = t("turf-helpers").polygon, a = t("turf-distance"), u = t("turf-helpers").featureCollection, l = [], c = [], h = 0; 6 > h; h++) {
                var g = 2 * Math.PI / 6 * h;
                l.push(Math.cos(g)), c.push(Math.sin(g));
            } e.exports = function (t, e, n, o) { var l = e / a(s([t[0], t[1]]), s([t[2], t[1]]), n), c = l * (t[2] - t[0]), h = e / a(s([t[0], t[1]]), s([t[0], t[3]]), n), g = h * (t[3] - t[1]), f = c / 2, d = 2 * f, p = Math.sqrt(3) / 2 * g, m = t[2] - t[0], v = t[3] - t[1], y = .75 * d, x = p, E = m / (d - f / 2), I = Math.ceil(E); Math.round(E) === I && I++; var N = (I * y - f / 2 - m) / 2 - f / 2, C = Math.ceil(v / p), w = (v - C * p) / 2, S = C * p - v > p / 2; S && (w -= p / 4); for (var L = u([]), R = 0; I > R; R++)
                for (var b = 0; C >= b; b++) {
                    var T = R % 2 === 1;
                    if (!(0 === b && T || 0 === b && S)) {
                        var P = R * y + t[0] - N, O = b * x + t[1] + w;
                        T && (O -= p / 2), o ? L.features.push.apply(L.features, i([P, O], c / 2, g / 2)) : L.features.push(r([P, O], c / 2, g / 2));
                    }
                } return L; }; }, { "turf-distance": 73, "turf-helpers": 74 }], 73: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 74: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 75: [function (t, e, n) { function r(t, e) { for (var n = !1, r = 0, i = e.length - 1; r < e.length; i = r++) {
                var s = e[r][0], o = e[r][1], a = e[i][0], u = e[i][1], l = o > t[1] != u > t[1] && t[0] < (a - s) * (t[1] - o) / (u - o) + s;
                l && (n = !n);
            } return n; } var i = t("turf-invariant"); e.exports = function (t, e) { var n = i.getCoord(t), s = e.geometry.coordinates; "Polygon" === e.geometry.type && (s = [s]); for (var o = 0, a = !1; o < s.length && !a; o++)
                if (r(n, s[o][0])) {
                    for (var u = !1, l = 1; l < s[o].length && !u;)
                        r(n, s[o][l]) && (u = !0), l++;
                    u || (a = !0);
                } return a; }; }, { "turf-invariant": 76 }], 76: [function (t, e, n) { arguments[4][14][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-invariant": 79, dup: 14 }], 77: [function (t, e, n) { var r = t("jsts"); e.exports = function (t, e) { var n, i; n = "Feature" === t.type ? t.geometry : t, i = "Feature" === e.type ? e.geometry : e; var s = new r.io.GeoJSONReader, o = s.read(JSON.stringify(n)), a = s.read(JSON.stringify(i)), u = o.intersection(a); if (u.isEmpty())
                return void 0; var l = new r.io.GeoJSONWriter, c = l.write(u); return { type: "Feature", properties: {}, geometry: c }; }; }, { jsts: 78 }], 78: [function (t, e, n) { arguments[4][20][0].apply(n, arguments); }, { dup: 20 }], 79: [function (t, e, n) { function r(t) { if (Array.isArray(t) && "number" == typeof t[0] && "number" == typeof t[1])
                return t; if (t) {
                if ("Feature" === t.type && t.geometry && "Point" === t.geometry.type && Array.isArray(t.geometry.coordinates))
                    return t.geometry.coordinates;
                if ("Point" === t.type && Array.isArray(t.coordinates))
                    return t.coordinates;
            } throw new Error("A coordinate, feature, or point geometry is required"); } function i(t, e, n) { if (!e || !n)
                throw new Error("type and name required"); if (!t || t.type !== e)
                throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.type); } function s(t, e, n) { if (!n)
                throw new Error(".featureOf() requires a name"); if (!t || "Feature" !== t.type || !t.geometry)
                throw new Error("Invalid input to " + n + ", Feature with geometry required"); if (!t.geometry || t.geometry.type !== e)
                throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.geometry.type); } function o(t, e, n) { if (!n)
                throw new Error(".collectionOf() requires a name"); if (!t || "FeatureCollection" !== t.type)
                throw new Error("Invalid input to " + n + ", FeatureCollection required"); for (var r = 0; r < t.features.length; r++) {
                var i = t.features[r];
                if (!i || "Feature" !== i.type || !i.geometry)
                    throw new Error("Invalid input to " + n + ", Feature with geometry required");
                if (!i.geometry || i.geometry.type !== e)
                    throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + i.geometry.type);
            } } e.exports.geojsonType = i, e.exports.collectionOf = o, e.exports.featureOf = s, e.exports.getCoord = r; }, {}], 80: [function (t, e, n) { function r(t, e) { var n = t.x - e.x, r = t.y - e.y; return a > n * n + r * r; } function i(t) { for (var e = t.head; e;) {
                var n = e.next;
                e.next = e.prev, e.prev = n, e = n;
            } var n = t.head; t.head = t.tail, t.tail = n; } function s(t) { this.level = t, this.s = null, this.count = 0; } function o(t) { if (t)
                this.drawContour = t;
            else {
                var e = this;
                e.contours = {}, this.drawContour = function (t, n, r, i, o, a) { var u = e.contours[a]; u || (u = e.contours[a] = new s(o)), u.addSegment({ x: t, y: n }, { x: r, y: i }); }, this.contourList = function () { var t = [], n = e.contours; for (var r in n)
                    for (var i = n[r].s, s = n[r].level; i;) {
                        var o = i.head, a = [];
                        for (a.level = s, a.k = r; o && o.p;)
                            a.push(o.p), o = o.next;
                        t.push(a), i = i.next;
                    } return t.sort(function (t, e) { return t.k - e.k; }), t; };
            } this.h = new Array(5), this.sh = new Array(5), this.xh = new Array(5), this.yh = new Array(5); } e.exports = o; var a = 1e-10; s.prototype.remove_seq = function (t) { t.prev ? t.prev.next = t.next : this.s = t.next, t.next && (t.next.prev = t.prev), --this.count; }, s.prototype.addSegment = function (t, e) { for (var n = this.s, s = null, o = null, a = !1, u = !1; n && (null == s && (r(t, n.head.p) ? (s = n, a = !0) : r(t, n.tail.p) && (s = n)), null == o && (r(e, n.head.p) ? (o = n, u = !0) : r(e, n.tail.p) && (o = n)), null == o || null == s);)
                n = n.next; var l = (null != s ? 1 : 0) | (null != o ? 2 : 0); switch (l) {
                case 0:
                    var c = { p: t, prev: null }, h = { p: e, next: null };
                    c.next = h, h.prev = c, s = { head: c, tail: h, next: this.s, prev: null, closed: !1 }, this.s && (this.s.prev = s), this.s = s, ++this.count;
                    break;
                case 1:
                    var g = { p: e };
                    a ? (g.next = s.head, g.prev = null, s.head.prev = g, s.head = g) : (g.next = null, g.prev = s.tail, s.tail.next = g, s.tail = g);
                    break;
                case 2:
                    var g = { p: t };
                    u ? (g.next = o.head, g.prev = null, o.head.prev = g, o.head = g) : (g.next = null, g.prev = o.tail, o.tail.next = g, o.tail = g);
                    break;
                case 3:
                    if (s === o) {
                        var g = { p: s.tail.p, next: s.head, prev: null };
                        s.head.prev = g, s.head = g, s.closed = !0;
                        break;
                    }
                    switch ((a ? 1 : 0) | (u ? 2 : 0)) {
                        case 0: i(s);
                        case 1:
                            o.tail.next = s.head, s.head.prev = o.tail, o.tail = s.tail, this.remove_seq(s);
                            break;
                        case 3: i(s);
                        case 2: s.tail.next = o.head, o.head.prev = s.tail, s.tail = o.tail, this.remove_seq(o);
                    }
            } }, o.prototype.contour = function (t, e, n, r, i, s, o, u, l) { var c = this.h, h = this.sh, g = this.xh, f = this.yh, d = this.drawContour; this.contours = {}; for (var p, m, v, y, x, E, I = function (t, e) { return (c[e] * g[t] - c[t] * g[e]) / (c[e] - c[t]); }, N = function (t, e) { return (c[e] * f[t] - c[t] * f[e]) / (c[e] - c[t]); }, C = 0, w = 0, S = 0, L = 0, R = [0, 1, 1, 0], b = [0, 0, 1, 1], T = [[[0, 0, 8], [0, 2, 5], [7, 6, 9]], [[0, 3, 4], [1, 3, 1], [4, 3, 0]], [[9, 6, 7], [5, 2, 0], [8, 0, 0]]], P = i - 1; P >= r; P--)
                for (var O = e; n - 1 >= O; O++) {
                    var M, _;
                    if (M = Math.min(t[O][P], t[O][P + 1]), _ = Math.min(t[O + 1][P], t[O + 1][P + 1]), x = Math.min(M, _), M = Math.max(t[O][P], t[O][P + 1]), _ = Math.max(t[O + 1][P], t[O + 1][P + 1]), E = Math.max(M, _), E >= l[0] && x <= l[u - 1])
                        for (var A = 0; u > A; A++)
                            if (l[A] >= x && l[A] <= E) {
                                for (var D = 4; D >= 0; D--)
                                    D > 0 ? (c[D] = t[O + R[D - 1]][P + b[D - 1]] - l[A], g[D] = s[O + R[D - 1]], f[D] = o[P + b[D - 1]]) : (c[0] = .25 * (c[1] + c[2] + c[3] + c[4]), g[0] = .5 * (s[O] + s[O + 1]), f[0] = .5 * (o[P] + o[P + 1])), c[D] > a ? h[D] = 1 : c[D] < -a ? h[D] = -1 : h[D] = 0;
                                for (D = 1; 4 >= D; D++)
                                    if (p = D, m = 0, v = 4 != D ? D + 1 : 1, y = T[h[p] + 1][h[m] + 1][h[v] + 1], 0 != y) {
                                        switch (y) {
                                            case 1:
                                                C = g[p], S = f[p], w = g[m], L = f[m];
                                                break;
                                            case 2:
                                                C = g[m], S = f[m], w = g[v], L = f[v];
                                                break;
                                            case 3:
                                                C = g[v], S = f[v], w = g[p], L = f[p];
                                                break;
                                            case 4:
                                                C = g[p], S = f[p], w = I(m, v), L = N(m, v);
                                                break;
                                            case 5:
                                                C = g[m], S = f[m], w = I(v, p), L = N(v, p);
                                                break;
                                            case 6:
                                                C = g[v], S = f[v], w = I(p, m), L = N(p, m);
                                                break;
                                            case 7:
                                                C = I(p, m), S = N(p, m), w = I(m, v), L = N(m, v);
                                                break;
                                            case 8:
                                                C = I(m, v), S = N(m, v), w = I(v, p), L = N(v, p);
                                                break;
                                            case 9: C = I(v, p), S = N(v, p), w = I(p, m), L = N(p, m);
                                        }
                                        d(C, S, w, L, l[A], A);
                                    }
                            }
                } }; }, {}], 81: [function (t, e, n) { var r = t("turf-tin"), i = t("turf-inside"), s = t("turf-grid"), o = t("turf-bbox"), a = t("turf-planepoint"), u = t("turf-helpers").featureCollection, l = t("turf-helpers").lineString, c = t("turf-square"), h = t("./conrec"); e.exports = function (t, e, n, g) { for (var f = r(t, e), d = o(t), p = c(d), m = s(p, n), v = [], y = 0; y < m.features.length; y++)
                for (var x = m.features[y], E = 0; E < f.features.length; E++) {
                    var I = f.features[E];
                    i(x, I) && (x.properties = {}, x.properties[e] = a(x, I));
                } for (var N = Math.sqrt(m.features.length), C = 0; N > C; C++) {
                for (var w = m.features.slice(C * N, (C + 1) * N), S = [], L = 0; L < w.length; L++)
                    w[L].properties ? S.push(w[L].properties[e]) : S.push(0);
                v.push(S);
            } for (var R = (p[2] - p[0]) / N, b = [], T = [], P = 0; N > P; P++)
                b.push(P * R + p[0]), T.push(P * R + p[1]); var O = new h; O.contour(v, 0, n, 0, n, b, T, g.length, g); var M = O.contourList(), _ = u([]); return M.forEach(function (t) { if (t.length > 2) {
                var n = [];
                t.forEach(function (t) { n.push([t.x, t.y]); });
                var r = l(n);
                r.properties = {}, r.properties[e] = t.level, _.features.push(r);
            } }), _; }; }, { "./conrec": 80, "turf-bbox": 82, "turf-grid": 83, "turf-helpers": 84, "turf-inside": 85, "turf-planepoint": 86, "turf-square": 88, "turf-tin": 89 }], 82: [function (t, e, n) { arguments[4][23][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bbox": 11, dup: 23 }], 83: [function (t, e, n) { var r = t("turf-point"); e.exports = function (t, e) { for (var n = t[0], i = t[1], s = t[2], o = (t[3], (s - n) / e), a = { type: "FeatureCollection", features: [] }, u = 0; e >= u; u++)
                for (var l = 0; e >= l; l++)
                    a.features.push(r([u * o + n, l * o + i])); return a; }; }, { "turf-point": 87 }], 84: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 85: [function (t, e, n) { arguments[4][29][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75, dup: 29 }], 86: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-planepoint"); }, { "/Users/tmcw/src/turf/packages/turf-planepoint": 105 }], 87: [function (t, e, n) { var r = Array.isArray || function (t) { return "[object Array]" === Object.prototype.toString.call(t); }; e.exports = function (t, e) { if (!r(t))
                throw new Error("Coordinates must be an array"); if (t.length < 2)
                throw new Error("Coordinates must be at least 2 numbers long"); return { type: "Feature", geometry: { type: "Point", coordinates: t }, properties: e || {} }; }; }, {}], 88: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-square"); }, { "/Users/tmcw/src/turf/packages/turf-square": 129 }], 89: [function (t, e, n) { arguments[4][34][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-tin": 136, dup: 34 }], 90: [function (t, e, n) { function r(t, e, n, r, i, s, o, a) { var u, l, c, h, g, f = { x: null, y: null, onLine1: !1, onLine2: !1 }; return u = (a - s) * (n - t) - (o - i) * (r - e), 0 === u ? null !== f.x && null !== f.y ? f : !1 : (l = e - s, c = t - i, h = (o - i) * l - (a - s) * c, g = (n - t) * l - (r - e) * c, l = h / u, c = g / u, f.x = t + l * (n - t), f.y = e + l * (r - e), l >= 0 && 1 >= l && (f.onLine1 = !0), c >= 0 && 1 >= c && (f.onLine2 = !0), f.onLine1 && f.onLine2 ? [f.x, f.y] : !1); } var i = t("turf-helpers").point; e.exports = function (t) { var e, n = { type: "FeatureCollection", features: [] }; return e = "Feature" === t.type ? t.geometry : t, e.coordinates.forEach(function (t) { e.coordinates.forEach(function (e) { for (var s = 0; s < t.length - 1; s++)
                for (var o = 0; o < e.length - 1; o++)
                    if (t !== e || 1 !== Math.abs(s - o) && Math.abs(s - o) !== t.length - 2) {
                        var a = r(t[s][0], t[s][1], t[s + 1][0], t[s + 1][1], e[o][0], e[o][1], e[o + 1][0], e[o + 1][1]);
                        a && n.features.push(i([a[0], a[1]]));
                    } }); }), n; }; }, { "turf-helpers": 91 }], 91: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 92: [function (t, e, n) { function r(t, e) { for (var n, r = 0, o = s(t[0]), a = s(t[0]), u = 1; u < t.length; u++)
                a.geometry.coordinates = t[u], r += i(o, a, e), n = o, o = a, a = n; return r; } var i = t("turf-distance"), s = t("turf-helpers").point; e.exports = function o(t, e) { if ("FeatureCollection" === t.type)
                return t.features.reduce(function (t, n) { return t + o(n, e); }, 0); var n, i, s = "Feature" === t.type ? t.geometry : t; if ("LineString" === s.type)
                return r(s.coordinates, e); if ("Polygon" === s.type || "MultiLineString" === s.type) {
                for (n = 0, i = 0; i < s.coordinates.length; i++)
                    n += r(s.coordinates[i], e);
                return n;
            } if ("MultiPolygon" === t.type) {
                for (n = 0, i = 0; i < s.coordinates.length; i++)
                    for (var a = 0; a < s.coordinates[i].length; a++)
                        n += r(s.coordinates[i][a], e);
                return n;
            } throw new Error("input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry (or a FeatureCollection containing only those types)"); }; }, { "turf-distance": 93, "turf-helpers": 94 }], 93: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 94: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 95: [function (t, e, n) { var r = t("turf-helpers").lineString, i = t("turf-point-on-line"); e.exports = function (t, e, n) { var s; if ("Feature" === n.type)
                s = n.geometry.coordinates;
            else {
                if ("LineString" !== n.type)
                    throw new Error("input must be a LineString Feature or Geometry");
                s = n.coordinates;
            } var o, a = i(n, t), u = i(n, e); o = a.properties.index <= u.properties.index ? [a, u] : [u, a]; for (var l = r([o[0].geometry.coordinates], {}), c = o[0].properties.index + 1; c < o[1].properties.index + 1; c++)
                l.geometry.coordinates.push(s[c]); return l.geometry.coordinates.push(o[1].geometry.coordinates), l; }; }, { "turf-helpers": 96, "turf-point-on-line": 97 }], 96: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 97: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-point-on-line"); }, { "/Users/tmcw/src/turf/packages/turf-point-on-line": 109 }], 98: [function (t, e, n) { function r(t, e, n) { var r, i, s, o, a, u, l, c, h, g, f = 0, d = "FeatureCollection" === t.type, p = "Feature" === t.type, m = d ? t.features.length : 1; for (r = 0; m > r; r++)
                for (h = d ? t.features[r].geometry : p ? t.geometry : t, g = "GeometryCollection" === h.type, l = g ? h.geometries.length : 1, o = 0; l > o; o++)
                    if (u = g ? h.geometries[o] : h, c = u.coordinates, f = !n || "Polygon" !== u.type && "MultiPolygon" !== u.type ? 0 : 1, "Point" === u.type)
                        e(c);
                    else if ("LineString" === u.type || "MultiPoint" === u.type)
                        for (i = 0; i < c.length; i++)
                            e(c[i]);
                    else if ("Polygon" === u.type || "MultiLineString" === u.type)
                        for (i = 0; i < c.length; i++)
                            for (s = 0; s < c[i].length - f; s++)
                                e(c[i][s]);
                    else {
                        if ("MultiPolygon" !== u.type)
                            throw new Error("Unknown Geometry Type");
                        for (i = 0; i < c.length; i++)
                            for (s = 0; s < c[i].length; s++)
                                for (a = 0; a < c[i][s].length - f; a++)
                                    e(c[i][s][a]);
                    } } function i(t, e, n, i) { return r(t, function (t) { n = e(n, t); }, i), n; } function s(t, e) { var n; switch (t.type) {
                case "FeatureCollection":
                    for (n = 0; n < t.features.length; n++)
                        e(t.features[n].properties);
                    break;
                case "Feature": e(t.properties);
            } } function o(t, e, n) { return s(t, function (t) { n = e(n, t); }), n; } function a(t, e) { if ("Feature" === t.type)
                e(t);
            else if ("FeatureCollection" === t.type)
                for (var n = 0; n < t.features.length; n++)
                    e(t.features[n]); } function u(t) { var e = []; return r(t, function (t) { e.push(t); }), e; } e.exports.coordEach = r, e.exports.coordReduce = i, e.exports.propEach = s, e.exports.propReduce = o, e.exports.featureEach = a, e.exports.coordAll = u; }, {}], 99: [function (t, e, n) { var r = t("turf-bearing"), i = t("turf-destination"), s = t("turf-distance"); e.exports = function (t, e) { var n = s(t, e, "miles"), o = r(t, e), a = i(t, n / 2, o, "miles"); return a; }; }, { "turf-bearing": 100, "turf-destination": 101, "turf-distance": 102 }], 100: [function (t, e, n) { arguments[4][2][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bearing": 13, dup: 2 }], 101: [function (t, e, n) { arguments[4][3][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-destination": 55, dup: 3 }], 102: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 103: [function (t, e, n) { var r = t("turf-distance"); e.exports = function (t, e) { for (var n, i = 1 / 0, s = 0; s < e.features.length; s++) {
                var o = r(t, e.features[s], "miles");
                i > o && (n = e.features[s], i = o);
            } return n; }; }, { "turf-distance": 104 }], 104: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 105: [function (t, e, n) { e.exports = function (t, e) { var n = t.geometry.coordinates[0], r = t.geometry.coordinates[1], i = e.geometry.coordinates[0][0][0], s = e.geometry.coordinates[0][0][1], o = e.properties.a, a = e.geometry.coordinates[0][1][0], u = e.geometry.coordinates[0][1][1], l = e.properties.b, c = e.geometry.coordinates[0][2][0], h = e.geometry.coordinates[0][2][1], g = e.properties.c, f = (g * (n - i) * (r - u) + o * (n - a) * (r - h) + l * (n - c) * (r - s) - l * (n - i) * (r - h) - g * (n - a) * (r - s) - o * (n - c) * (r - u)) / ((n - i) * (r - u) + (n - a) * (r - h) + (n - c) * (r - s) - (n - i) * (r - h) - (n - a) * (r - s) - (n - c) * (r - u)); return f; }; }, {}], 106: [function (t, e, n) { var r = t("turf-helpers").point, i = t("turf-helpers").featureCollection, s = t("turf-distance"); e.exports = function (t, e, n) { for (var o = i([]), a = e / s(r([t[0], t[1]]), r([t[2], t[1]]), n), u = a * (t[2] - t[0]), l = e / s(r([t[0], t[1]]), r([t[0], t[3]]), n), c = l * (t[3] - t[1]), h = t[0]; h <= t[2];) {
                for (var g = t[1]; g <= t[3];)
                    o.features.push(r([h, g])), g += c;
                h += u;
            } return o; }; }, { "turf-distance": 107, "turf-helpers": 108 }], 107: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 108: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 109: [function (t, e, n) { function r(t, e) { for (var n = "miles", r = o([1 / 0, 1 / 0], { dist: 1 / 0 }), l = 0; l < e.length - 1; l++) {
                var c = o(e[l]), h = o(e[l + 1]);
                c.properties.dist = s(t, c, n), h.properties.dist = s(t, h, n);
                var g, f = Math.max(c.properties.dist, h.properties.dist), d = a(c, h), p = u(t, f, d + 90, n), m = u(t, f, d - 90, n), v = i(p.geometry.coordinates[0], p.geometry.coordinates[1], m.geometry.coordinates[0], m.geometry.coordinates[1], c.geometry.coordinates[0], c.geometry.coordinates[1], h.geometry.coordinates[0], h.geometry.coordinates[1]);
                v && (g = o(v), g.properties.dist = s(t, g, n)), c.properties.dist < r.properties.dist && (r = c, r.properties.index = l), h.properties.dist < r.properties.dist && (r = h, r.properties.index = l), g && g.properties.dist < r.properties.dist && (r = g, r.properties.index = l);
            } return r; } function i(t, e, n, r, i, s, o, a) { var u, l, c, h, g, f = { x: null, y: null, onLine1: !1, onLine2: !1 }; return u = (a - s) * (n - t) - (o - i) * (r - e), 0 === u ? null !== f.x && null !== f.y ? f : !1 : (l = e - s, c = t - i, h = (o - i) * l - (a - s) * c, g = (n - t) * l - (r - e) * c, l = h / u, c = g / u, f.x = t + l * (n - t), f.y = e + l * (r - e), l > 0 && 1 > l && (f.onLine1 = !0), c > 0 && 1 > c && (f.onLine2 = !0), f.onLine1 && f.onLine2 ? [f.x, f.y] : !1); } var s = t("turf-distance"), o = t("turf-helpers").point, a = t("turf-bearing"), u = t("turf-destination"); e.exports = function (t, e) { var n; if ("Feature" === t.type)
                n = t.geometry.coordinates;
            else {
                if ("LineString" !== t.type)
                    throw new Error("input must be a LineString Feature or Geometry");
                n = t.coordinates;
            } return r(e, n); }; }, { "turf-bearing": 110, "turf-destination": 111, "turf-distance": 112, "turf-helpers": 113 }], 110: [function (t, e, n) { arguments[4][2][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bearing": 13, dup: 2 }], 111: [function (t, e, n) { arguments[4][3][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-destination": 55, dup: 3 }], 112: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 113: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 114: [function (t, e, n) { function r(t) { "FeatureCollection" !== t.type && ("Feature" !== t.type && (t = { type: "Feature", geometry: t, properties: {} }), t = s([t])); for (var e = o(t), n = !1, r = 0; !n && r < t.features.length;) {
                var c, h, g, f, d, p, m, v = t.features[r].geometry, y = !1;
                if ("Point" === v.type)
                    e.geometry.coordinates[0] === v.coordinates[0] && e.geometry.coordinates[1] === v.coordinates[1] && (n = !0);
                else if ("MultiPoint" === v.type) {
                    var x = !1;
                    for (m = 0; !x && m < v.coordinates.length;)
                        e.geometry.coordinates[0] === v.coordinates[m][0] && e.geometry.coordinates[1] === v.coordinates[m][1] && (n = !0, x = !0), m++;
                }
                else if ("LineString" === v.type)
                    for (m = 0; !y && m < v.coordinates.length - 1;)
                        c = e.geometry.coordinates[0], h = e.geometry.coordinates[1], g = v.coordinates[m][0], f = v.coordinates[m][1], d = v.coordinates[m + 1][0], p = v.coordinates[m + 1][1], i(c, h, g, f, d, p) && (y = !0, n = !0), m++;
                else if ("MultiLineString" === v.type)
                    for (var E = 0; E < v.coordinates.length;) {
                        y = !1, m = 0;
                        for (var I = v.coordinates[E]; !y && m < I.length - 1;)
                            c = e.geometry.coordinates[0], h = e.geometry.coordinates[1], g = I[m][0], f = I[m][1], d = I[m + 1][0], p = I[m + 1][1], i(c, h, g, f, d, p) && (y = !0, n = !0), m++;
                        E++;
                    }
                else if ("Polygon" === v.type || "MultiPolygon" === v.type) {
                    var N = { type: "Feature", geometry: v, properties: {} };
                    u(e, N) && (n = !0);
                }
                r++;
            } if (n)
                return e; var C = s([]); for (r = 0; r < t.features.length; r++)
                C.features = C.features.concat(l(t.features[r]).features); var w, S = 1 / 0; for (r = 0; r < C.features.length; r++) {
                var L = a(e, C.features[r], "miles");
                S > L && (S = L, w = C.features[r]);
            } return w; } function i(t, e, n, r, i, s) { var o = Math.sqrt((i - n) * (i - n) + (s - r) * (s - r)), a = Math.sqrt((t - n) * (t - n) + (e - r) * (e - r)), u = Math.sqrt((i - t) * (i - t) + (s - e) * (s - e)); return o === a + u ? !0 : void 0; } var s = t("turf-helpers").featureCollection, o = t("turf-center"), a = t("turf-distance"), u = t("turf-inside"), l = t("turf-explode"); e.exports = r; }, { "turf-center": 115, "turf-distance": 116, "turf-explode": 117, "turf-helpers": 118, "turf-inside": 119 }], 115: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-center"); }, { "/Users/tmcw/src/turf/packages/turf-center": 22 }], 116: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 117: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-explode"); }, { "/Users/tmcw/src/turf/packages/turf-explode": 66 }], 118: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 119: [function (t, e, n) { arguments[4][29][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75, dup: 29 }], 120: [function (t, e, n) { var r = t("geojson-random"); e.exports = function (t, e, n) { switch (n = n || {}, e = e || 1, t) {
                case "point":
                case "points":
                case void 0: return r.point(e, n.bbox);
                case "polygon":
                case "polygons": return r.polygon(e, n.num_vertices, n.max_radial_length, n.bbox);
                default: throw new Error("Unknown type given: valid options are points and polygons");
            } }; }, { "geojson-random": 121 }], 121: [function (t, e, n) { function r(t) { return t ? c(t) : [a(), u()]; } function s(t) { return function (e, n) { return [e[0] + t[0], e[1] + t[1]]; }; } function o() { return Math.random() - .5; } function a() { return 360 * o(); } function u() { return 180 * o(); } function l(t) { return { type: "Point", coordinates: t || [a(), u()] }; } function c(t) { return [Math.random() * (t[2] - t[0]) + t[0], Math.random() * (t[3] - t[1]) + t[1]]; } function h(t) { return { type: "Polygon", coordinates: t }; } function g(t) { return { type: "Feature", geometry: t, properties: {} }; } function f(t) { return { type: "FeatureCollection", features: t }; } e.exports = function () { throw new Error("call .point() or .polygon() instead"); }, e.exports.position = r, e.exports.point = function (t, e) { var n = []; for (i = 0; i < t; i++)
                n.push(g(e ? l(r(e)) : l())); return f(n); }, e.exports.polygon = function (t, e, n, o) { function a(t, e, n) { n[e] = e > 0 ? t + n[e - 1] : t; } function u(t, e) { t = 2 * t * Math.PI / d[d.length - 1]; var r = Math.random(); c.push([r * n * Math.sin(t), r * n * Math.cos(t)]); } "number" != typeof e && (e = 10), "number" != typeof n && (n = 10); var l = []; for (i = 0; i < t; i++) {
                var c = [], d = Array.apply(null, new Array(e + 1)).map(Math.random);
                d.forEach(a), d.forEach(u), c[c.length - 1] = c[0], c = c.map(s(r(o))), l.push(g(h([c])));
            } return f(l); }; }, {}], 122: [function (t, e, n) { function r(t, e) { for (var n, r, i = t.slice(0), s = t.length, o = s - e; s-- > o;)
                r = Math.floor((s + 1) * Math.random()), n = i[r], i[r] = i[s], i[s] = n; return i.slice(o); } var i = t("turf-helpers").featureCollection; e.exports = function (t, e) { var n = i(r(t.features, e)); return n; }; }, { "turf-helpers": 123 }], 123: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 124: [function (t, e, n) { function r(t, e, n) { return "LineString" === t.geometry.type ? { type: "LineString", coordinates: o(t.geometry.coordinates, e, n) } : "MultiLineString" === t.geometry.type ? { type: "MultiLineString", coordinates: t.geometry.coordinates.map(function (t) { return o(t, e, n); }) } : "Polygon" === t.geometry.type ? { type: "Polygon", coordinates: a(t.geometry.coordinates, e, n) } : "MultiPolygon" === t.geometry.type ? { type: "MultiPolygon", coordinates: t.geometry.coordinates.map(function (t) { return a(t, e, n); }) } : t; } function i(t) { return t.length < 3 ? !1 : 3 === t.length && t[2][0] === t[0][0] && t[2][1] === t[0][1] ? !1 : !0; } function s(t, e) { return { type: "Feature", geometry: t, properties: e }; } function o(t, e, n) { return u(t.map(function (t) { return { x: t[0], y: t[1] }; }), e, n).map(function (t) { return [t.x, t.y]; }); } function a(t, e, n) { return t.map(function (t) { var r = t.map(function (t) { return { x: t[0], y: t[1] }; }); if (r.length < 4)
                throw new Error("Invalid polygon"); for (var s = u(r, e, n).map(function (t) { return [t.x, t.y]; }); !i(s);)
                e -= .01 * e, s = u(r, e, n).map(function (t) { return [t.x, t.y]; }); return (s[s.length - 1][0] !== s[0][0] || s[s.length - 1][1] !== s[0][1]) && s.push(s[0]), s; }); } var u = t("simplify-js"), l = ["LineString", "MultiLineString", "Polygon", "MultiPolygon"]; e.exports = function (t, e, n) { return "Feature" === t.type ? s(r(t, e, n), t.properties) : "FeatureCollection" === t.type ? { type: "FeatureCollection", features: t.features.map(function (t) { var i = r(t, e, n); return l.indexOf(i.type) > -1 ? s(i, t.properties) : i; }) } : "GeometryCollection" === t.type ? { type: "GeometryCollection", geometries: t.geometries.map(function (t) { return l.indexOf(t.type) > -1 ? r({ type: "Feature", geometry: t }, e, n) : t; }) } : t; }; }, { "simplify-js": 125 }], 125: [function (e, n, r) { !function () {
                "use strict";
                function e(t, e) { var n = t.x - e.x, r = t.y - e.y; return n * n + r * r; }
                function r(t, e, n) { var r = e.x, i = e.y, s = n.x - r, o = n.y - i; if (0 !== s || 0 !== o) {
                    var a = ((t.x - r) * s + (t.y - i) * o) / (s * s + o * o);
                    a > 1 ? (r = n.x, i = n.y) : a > 0 && (r += s * a, i += o * a);
                } return s = t.x - r, o = t.y - i, s * s + o * o; }
                function i(t, n) { for (var r, i = t[0], s = [i], o = 1, a = t.length; a > o; o++)
                    r = t[o], e(r, i) > n && (s.push(r), i = r); return i !== r && s.push(r), s; }
                function s(t, e) { var n, i, s, o, a = t.length, u = "undefined" != typeof Uint8Array ? Uint8Array : Array, l = new u(a), c = 0, h = a - 1, g = [], f = []; for (l[c] = l[h] = 1; h;) {
                    for (i = 0, n = c + 1; h > n; n++)
                        s = r(t[n], t[c], t[h]), s > i && (o = n, i = s);
                    i > e && (l[o] = 1, g.push(c, o, o, h)), h = g.pop(), c = g.pop();
                } for (n = 0; a > n; n++)
                    l[n] && f.push(t[n]); return f; }
                function o(t, e, n) { var r = void 0 !== e ? e * e : 1; return t = n ? t : i(t, r), t = s(t, r); }
                "function" == typeof t && t.amd ? t(function () { return o; }) : "undefined" != typeof n ? n.exports = o : "undefined" != typeof self ? self.simplify = o : window.simplify = o;
            }(); }, {}], 126: [function (t, e, n) { var r = t("turf-helpers").featureCollection, i = t("turf-helpers").point, s = t("turf-helpers").polygon, o = t("turf-distance"); e.exports = function (t, e, n) { for (var a = r([]), u = e / o(i([t[0], t[1]]), i([t[2], t[1]]), n), l = u * (t[2] - t[0]), c = e / o(i([t[0], t[1]]), i([t[0], t[3]]), n), h = c * (t[3] - t[1]), g = t[0]; g <= t[2];) {
                for (var f = t[1]; f <= t[3];) {
                    var d = s([[[g, f], [g, f + h], [g + l, f + h], [g + l, f], [g, f]]]);
                    a.features.push(d), f += h;
                }
                g += l;
            } return a; }; }, { "turf-distance": 127, "turf-helpers": 128 }], 127: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 128: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 129: [function (t, e, n) { var r = t("turf-distance"); e.exports = function (t) { var e = r(t.slice(0, 2), [t[2], t[1]], "miles"), n = r(t.slice(0, 2), [t[0], t[3]], "miles"); if (e >= n) {
                var i = (t[1] + t[3]) / 2;
                return [t[0], i - (t[2] - t[0]) / 2, t[2], i + (t[2] - t[0]) / 2];
            } var s = (t[0] + t[2]) / 2; return [s - (t[3] - t[1]) / 2, t[1], s + (t[3] - t[1]) / 2, t[3]]; }; }, { "turf-distance": 130 }], 130: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 131: [function (t, e, n) { var r = t("turf-inside"); e.exports = function (t, e, n, i) { return t = JSON.parse(JSON.stringify(t)), e = JSON.parse(JSON.stringify(e)), t.features.forEach(function (t) { t.properties || (t.properties = {}), e.features.forEach(function (e) { if (void 0 === t.properties[i]) {
                var s = r(t, e);
                s && (t.properties[i] = e.properties[n]);
            } }); }), t; }; }, { "turf-inside": 132 }], 132: [function (t, e, n) { arguments[4][29][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75, dup: 29 }], 133: [function (t, e, n) { function r(t) { var e = i(t), n = 2, r = o(e.vertices, e.holes, n), a = [], u = []; r.forEach(function (t, i) { var s = r[i]; u.push([e.vertices[s * n], e.vertices[s * n + 1]]); }); for (var l = 0; l < u.length; l += 3) {
                var c = u.slice(l, l + 3);
                c.push(u[l]), a.push(s([c]));
            } return a; } function i(t) { for (var e = t[0][0].length, n = { vertices: [], holes: [], dimensions: e }, r = 0, i = 0; i < t.length; i++) {
                for (var s = 0; s < t[i].length; s++)
                    for (var o = 0; e > o; o++)
                        n.vertices.push(t[i][s][o]);
                i > 0 && (r += t[i - 1].length, n.holes.push(r));
            } return n; } var s = t("turf-helpers").polygon, o = t("earcut"); e.exports = function (t) { if (!t.geometry || "Polygon" !== t.geometry.type && "MultiPolygon" !== t.geometry.type)
                throw new Error("input must be a Polygon or MultiPolygon"); var e = { type: "FeatureCollection", features: [] }; return "Polygon" === t.geometry.type ? e.features = r(t.geometry.coordinates) : t.geometry.coordinates.forEach(function (t) { e.features = e.features.concat(r(t)); }), e; }; }, { earcut: 134, "turf-helpers": 135 }], 134: [function (t, e, n) {
                "use strict";
                function r(t, e, n) { n = n || 2; var r = e && e.length, s = r ? e[0] * n : t.length, a = i(t, 0, s, n, !0), u = []; if (!a)
                    return u; var l, c, g, f, d, p, m; if (r && (a = h(t, e, a, n)), t.length > 80 * n) {
                    l = g = t[0], c = f = t[1];
                    for (var v = n; s > v; v += n)
                        d = t[v], p = t[v + 1], l > d && (l = d), c > p && (c = p), d > g && (g = d), p > f && (f = p);
                    m = Math.max(g - l, f - c);
                } return o(a, u, n, l, c, m), u; }
                function i(t, e, n, r, i) { var s, o; if (i === O(t, e, n, r) > 0)
                    for (s = e; n > s; s += r)
                        o = b(s, t[s], t[s + 1], o);
                else
                    for (s = n - r; s >= e; s -= r)
                        o = b(s, t[s], t[s + 1], o); return o && N(o, o.next) && (T(o), o = o.next), o; }
                function s(t, e) { if (!t)
                    return t; e || (e = t); var n, r = t; do
                    if (n = !1, r.steiner || !N(r, r.next) && 0 !== I(r.prev, r, r.next))
                        r = r.next;
                    else {
                        if (T(r), r = e = r.prev, r === r.next)
                            return null;
                        n = !0;
                    }
                while (n || r !== e); return e; }
                function o(t, e, n, r, i, h, g) { if (t) {
                    !g && h && p(t, r, i, h);
                    for (var f, d, m = t; t.prev !== t.next;)
                        if (f = t.prev, d = t.next, h ? u(t, r, i, h) : a(t))
                            e.push(f.i / n), e.push(t.i / n), e.push(d.i / n), T(t), t = d.next, m = d.next;
                        else if (t = d, t === m) {
                            g ? 1 === g ? (t = l(t, e, n), o(t, e, n, r, i, h, 2)) : 2 === g && c(t, e, n, r, i, h) : o(s(t), e, n, r, i, h, 1);
                            break;
                        }
                } }
                function a(t) { var e = t.prev, n = t, r = t.next; if (I(e, n, r) >= 0)
                    return !1; for (var i = t.next.next; i !== t.prev;) {
                    if (x(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && I(i.prev, i, i.next) >= 0)
                        return !1;
                    i = i.next;
                } return !0; }
                function u(t, e, n, r) { var i = t.prev, s = t, o = t.next; if (I(i, s, o) >= 0)
                    return !1; for (var a = i.x < s.x ? i.x < o.x ? i.x : o.x : s.x < o.x ? s.x : o.x, u = i.y < s.y ? i.y < o.y ? i.y : o.y : s.y < o.y ? s.y : o.y, l = i.x > s.x ? i.x > o.x ? i.x : o.x : s.x > o.x ? s.x : o.x, c = i.y > s.y ? i.y > o.y ? i.y : o.y : s.y > o.y ? s.y : o.y, h = v(a, u, e, n, r), g = v(l, c, e, n, r), f = t.nextZ; f && f.z <= g;) {
                    if (f !== t.prev && f !== t.next && x(i.x, i.y, s.x, s.y, o.x, o.y, f.x, f.y) && I(f.prev, f, f.next) >= 0)
                        return !1;
                    f = f.nextZ;
                } for (f = t.prevZ; f && f.z >= h;) {
                    if (f !== t.prev && f !== t.next && x(i.x, i.y, s.x, s.y, o.x, o.y, f.x, f.y) && I(f.prev, f, f.next) >= 0)
                        return !1;
                    f = f.prevZ;
                } return !0; }
                function l(t, e, n) { var r = t; do {
                    var i = r.prev, s = r.next.next;
                    !N(i, s) && C(i, r, r.next, s) && S(i, s) && S(s, i) && (e.push(i.i / n), e.push(r.i / n), e.push(s.i / n), T(r), T(r.next), r = t = s), r = r.next;
                } while (r !== t); return r; }
                function c(t, e, n, r, i, a) { var u = t; do {
                    for (var l = u.next.next; l !== u.prev;) {
                        if (u.i !== l.i && E(u, l)) {
                            var c = R(u, l);
                            return u = s(u, u.next), c = s(c, c.next), o(u, e, n, r, i, a), void o(c, e, n, r, i, a);
                        }
                        l = l.next;
                    }
                    u = u.next;
                } while (u !== t); }
                function h(t, e, n, r) { var o, a, u, l, c, h = []; for (o = 0, a = e.length; a > o; o++)
                    u = e[o] * r, l = a - 1 > o ? e[o + 1] * r : t.length, c = i(t, u, l, r, !1), c === c.next && (c.steiner = !0), h.push(y(c)); for (h.sort(g), o = 0; o < h.length; o++)
                    f(h[o], n), n = s(n, n.next); return n; }
                function g(t, e) { return t.x - e.x; }
                function f(t, e) { if (e = d(t, e)) {
                    var n = R(e, t);
                    s(n, n.next);
                } }
                function d(t, e) { var n, r = e, i = t.x, s = t.y, o = -(1 / 0); do {
                    if (s <= r.y && s >= r.next.y) {
                        var a = r.x + (s - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (i >= a && a > o) {
                            if (o = a, a === i) {
                                if (s === r.y)
                                    return r;
                                if (s === r.next.y)
                                    return r.next;
                            }
                            n = r.x < r.next.x ? r : r.next;
                        }
                    }
                    r = r.next;
                } while (r !== e); if (!n)
                    return null; if (i === o)
                    return n.prev; var u, l = n, c = n.x, h = n.y, g = 1 / 0; for (r = n.next; r !== l;)
                    i >= r.x && r.x >= c && x(h > s ? i : o, s, c, h, h > s ? o : i, s, r.x, r.y) && (u = Math.abs(s - r.y) / (i - r.x), (g > u || u === g && r.x > n.x) && S(r, t) && (n = r, g = u)), r = r.next; return n; }
                function p(t, e, n, r) { var i = t; do
                    null === i.z && (i.z = v(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
                while (i !== t); i.prevZ.nextZ = null, i.prevZ = null, m(i); }
                function m(t) {
                    var e, n, r, i, s, o, a, u, l = 1;
                    do {
                        for (n = t,
                            t = null, s = null, o = 0; n;) {
                            for (o++, r = n, a = 0, e = 0; l > e && (a++, r = r.nextZ, r); e++)
                                ;
                            for (u = l; a > 0 || u > 0 && r;)
                                0 === a ? (i = r, r = r.nextZ, u--) : 0 !== u && r ? n.z <= r.z ? (i = n, n = n.nextZ, a--) : (i = r, r = r.nextZ, u--) : (i = n, n = n.nextZ, a--), s ? s.nextZ = i : t = i, i.prevZ = s, s = i;
                            n = r;
                        }
                        s.nextZ = null, l *= 2;
                    } while (o > 1);
                    return t;
                }
                function v(t, e, n, r, i) { return t = 32767 * (t - n) / i, e = 32767 * (e - r) / i, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1; }
                function y(t) { var e = t, n = t; do
                    e.x < n.x && (n = e), e = e.next;
                while (e !== t); return n; }
                function x(t, e, n, r, i, s, o, a) { return (i - o) * (e - a) - (t - o) * (s - a) >= 0 && (t - o) * (r - a) - (n - o) * (e - a) >= 0 && (n - o) * (s - a) - (i - o) * (r - a) >= 0; }
                function E(t, e) { return t.next.i !== e.i && t.prev.i !== e.i && !w(t, e) && S(t, e) && S(e, t) && L(t, e); }
                function I(t, e, n) { return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y); }
                function N(t, e) { return t.x === e.x && t.y === e.y; }
                function C(t, e, n, r) { return N(t, e) && N(n, r) || N(t, r) && N(n, e) ? !0 : I(t, e, n) > 0 != I(t, e, r) > 0 && I(n, r, t) > 0 != I(n, r, e) > 0; }
                function w(t, e) { var n = t; do {
                    if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && C(n, n.next, t, e))
                        return !0;
                    n = n.next;
                } while (n !== t); return !1; }
                function S(t, e) { return I(t.prev, t, t.next) < 0 ? I(t, e, t.next) >= 0 && I(t, t.prev, e) >= 0 : I(t, e, t.prev) < 0 || I(t, t.next, e) < 0; }
                function L(t, e) { var n = t, r = !1, i = (t.x + e.x) / 2, s = (t.y + e.y) / 2; do
                    n.y > s != n.next.y > s && i < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
                while (n !== t); return r; }
                function R(t, e) { var n = new P(t.i, t.x, t.y), r = new P(e.i, e.x, e.y), i = t.next, s = e.prev; return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, s.next = r, r.prev = s, r; }
                function b(t, e, n, r) { var i = new P(t, e, n); return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i; }
                function T(t) { t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ); }
                function P(t, e, n) { this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1; }
                function O(t, e, n, r) { for (var i = 0, s = e, o = n - r; n > s; s += r)
                    i += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s; return i; }
                e.exports = r, r.deviation = function (t, e, n, r) { var i = e && e.length, s = i ? e[0] * n : t.length, o = Math.abs(O(t, 0, s, n)); if (i)
                    for (var a = 0, u = e.length; u > a; a++) {
                        var l = e[a] * n, c = u - 1 > a ? e[a + 1] * n : t.length;
                        o -= Math.abs(O(t, l, c, n));
                    } var h = 0; for (a = 0; a < r.length; a += 3) {
                    var g = r[a] * n, f = r[a + 1] * n, d = r[a + 2] * n;
                    h += Math.abs((t[g] - t[d]) * (t[f + 1] - t[g + 1]) - (t[g] - t[f]) * (t[d + 1] - t[g + 1]));
                } return 0 === o && 0 === h ? 0 : Math.abs((h - o) / o); }, r.flatten = function (t) { for (var e = t[0][0].length, n = { vertices: [], holes: [], dimensions: e }, r = 0, i = 0; i < t.length; i++) {
                    for (var s = 0; s < t[i].length; s++)
                        for (var o = 0; e > o; o++)
                            n.vertices.push(t[i][s][o]);
                    i > 0 && (r += t[i - 1].length, n.holes.push(r));
                } return n; };
            }, {}], 135: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 136: [function (t, e, n) { function r(t, e, n) { this.a = t, this.b = e, this.c = n; var r, i, s, o, a = e.x - t.x, u = e.y - t.y, l = n.x - t.x, c = n.y - t.y, h = a * (t.x + e.x) + u * (t.y + e.y), g = l * (t.x + n.x) + c * (t.y + n.y), f = 2 * (a * (n.y - e.y) - u * (n.x - e.x)); Math.abs(f) < 1e-6 ? (r = Math.min(t.x, e.x, n.x), i = Math.min(t.y, e.y, n.y), s = .5 * (Math.max(t.x, e.x, n.x) - r), o = .5 * (Math.max(t.y, e.y, n.y) - i), this.x = r + s, this.y = i + o, this.r = s * s + o * o) : (this.x = (c * h - u * g) / f, this.y = (a * g - l * h) / f, s = this.x - t.x, o = this.y - t.y, this.r = s * s + o * o); } function i(t, e) { return e.x - t.x; } function s(t) { var e, n, r, i, s, o = t.length; t: for (; o;)
                for (n = t[--o], e = t[--o], r = o; r;)
                    if (s = t[--r], i = t[--r], e === i && n === s || e === s && n === i) {
                        t.splice(o, 2), t.splice(r, 2), o -= 2;
                        continue t;
                    } } function o(t) { if (t.length < 3)
                return []; t.sort(i); for (var e = t.length - 1, n = t[e].x, o = t[0].x, a = t[e].y, u = a; e--;)
                t[e].y < a && (a = t[e].y), t[e].y > u && (u = t[e].y); var l, c, h, g = o - n, f = u - a, d = g > f ? g : f, p = .5 * (o + n), m = .5 * (u + a), v = [new r({ x: p - 20 * d, y: m - d, __sentinel: !0 }, { x: p, y: m + 20 * d, __sentinel: !0 }, { x: p + 20 * d, y: m - d, __sentinel: !0 })], y = [], x = []; for (e = t.length; e--;) {
                for (x.length = 0, l = v.length; l--;)
                    g = t[e].x - v[l].x, g > 0 && g * g > v[l].r ? (y.push(v[l]), v.splice(l, 1)) : (f = t[e].y - v[l].y, g * g + f * f > v[l].r || (x.push(v[l].a, v[l].b, v[l].b, v[l].c, v[l].c, v[l].a), v.splice(l, 1)));
                for (s(x), l = x.length; l;)
                    h = x[--l], c = x[--l], v.push(new r(c, h, t[e]));
            } for (Array.prototype.push.apply(y, v), e = y.length; e--;)
                (y[e].a.__sentinel || y[e].b.__sentinel || y[e].c.__sentinel) && y.splice(e, 1); return y; } var a = t("turf-helpers").polygon, u = t("turf-helpers").featureCollection; e.exports = function (t, e) { return u(o(t.features.map(function (t) { var n = { x: t.geometry.coordinates[0], y: t.geometry.coordinates[1] }; return e && (n.z = t.properties[e]), n; })).map(function (t) { return a([[[t.a.x, t.a.y], [t.b.x, t.b.y], [t.c.x, t.c.y], [t.a.x, t.a.y]]], { a: t.a.z, b: t.b.z, c: t.c.z }); })); }; }, { "turf-helpers": 137 }], 137: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 138: [function (t, e, n) { var r = t("turf-helpers").featureCollection, i = t("turf-helpers").polygon, s = t("turf-distance"); e.exports = function (t, e, n) { for (var o = r([]), a = e / s([t[0], t[1]], [t[2], t[1]], n), u = a * (t[2] - t[0]), l = e / s([t[0], t[1]], [t[0], t[3]], n), c = l * (t[3] - t[1]), h = 0, g = t[0]; g <= t[2];) {
                for (var f = 0, d = t[1]; d <= t[3];)
                    h % 2 === 0 && f % 2 === 0 ? o.features.push(i([[[g, d], [g, d + c], [g + u, d], [g, d]]]), i([[[g, d + c], [g + u, d + c], [g + u, d], [g, d + c]]])) : h % 2 === 0 && f % 2 === 1 ? o.features.push(i([[[g, d], [g + u, d + c], [g + u, d], [g, d]]]), i([[[g, d], [g, d + c], [g + u, d + c], [g, d]]])) : f % 2 === 0 && h % 2 === 1 ? o.features.push(i([[[g, d], [g, d + c], [g + u, d + c], [g, d]]]), i([[[g, d], [g + u, d + c], [g + u, d], [g, d]]])) : f % 2 === 1 && h % 2 === 1 && o.features.push(i([[[g, d], [g, d + c], [g + u, d], [g, d]]]), i([[[g, d + c], [g + u, d + c], [g + u, d], [g, d + c]]])), d += c, f++;
                h++, g += u;
            } return o; }; }, { "turf-distance": 139, "turf-helpers": 140 }], 139: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 140: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 141: [function (t, e, n) { var r = t("jsts"); e.exports = function (t, e) { var n = new r.io.GeoJSONReader, i = n.read(JSON.stringify(t.geometry)), s = n.read(JSON.stringify(e.geometry)), o = i.union(s), a = new r.io.GeoJSONWriter; return o = a.write(o), { type: "Feature", geometry: o, properties: t.properties }; }; }, { jsts: 142 }], 142: [function (t, e, n) { arguments[4][20][0].apply(n, arguments); }, { dup: 20 }], 143: [function (t, e, n) { var r = t("turf-inside"), i = t("turf-helpers").featureCollection; e.exports = function (t, e) { for (var n = i([]), s = 0; s < e.features.length; s++)
                for (var o = 0; o < t.features.length; o++) {
                    var a = r(t.features[o], e.features[s]);
                    a && n.features.push(t.features[o]);
                } return n; }; }, { "turf-helpers": 144, "turf-inside": 145 }], 144: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 145: [function (t, e, n) { arguments[4][29][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75, dup: 29 }], 146: [function (t, e, n) { e.exports = { isolines: t("turf-isolines"), convex: t("turf-convex"), within: t("turf-within"), concave: t("turf-concave"), difference: t("turf-difference"), collect: t("turf-collect"), flip: t("turf-flip"), simplify: t("turf-simplify"), bezier: t("turf-bezier"), tag: t("turf-tag"), sample: t("turf-sample"), envelope: t("turf-envelope"), square: t("turf-square"), midpoint: t("turf-midpoint"), buffer: t("turf-buffer"), center: t("turf-center"), centroid: t("turf-centroid"), combine: t("turf-combine"), distance: t("turf-distance"), explode: t("turf-explode"), bbox: t("turf-bbox"), tesselate: t("turf-tesselate"), bboxPolygon: t("turf-bbox-polygon"), inside: t("turf-inside"), intersect: t("turf-intersect"), nearest: t("turf-nearest"), planepoint: t("turf-planepoint"), random: t("turf-random"), tin: t("turf-tin"), union: t("turf-union"), bearing: t("turf-bearing"), destination: t("turf-destination"), kinks: t("turf-kinks"), pointOnSurface: t("turf-point-on-surface"), area: t("turf-area"), along: t("turf-along"), lineDistance: t("turf-line-distance"), lineSlice: t("turf-line-slice"), pointOnLine: t("turf-point-on-line"), pointGrid: t("turf-point-grid"), squareGrid: t("turf-square-grid"), triangleGrid: t("turf-triangle-grid"), hexGrid: t("turf-hex-grid") }; var r = t("turf-helpers"); e.exports.point = r.point, e.exports.polygon = r.polygon, e.exports.lineString = r.lineString, e.exports.multiPoint = r.multiPoint, e.exports.multiPolygon = r.multiPolygon, e.exports.multiLineString = r.multiLineString, e.exports.feature = r.feature, e.exports.featureCollection = r.featureCollection, e.exports.geometryCollection = r.geometryCollection; }, { "turf-along": 147, "turf-area": 148, "turf-bbox": 150, "turf-bbox-polygon": 149, "turf-bearing": 151, "turf-bezier": 152, "turf-buffer": 153, "turf-center": 154, "turf-centroid": 155, "turf-collect": 156, "turf-combine": 157, "turf-concave": 158, "turf-convex": 159, "turf-destination": 160, "turf-difference": 161, "turf-distance": 162, "turf-envelope": 163, "turf-explode": 164, "turf-flip": 165, "turf-helpers": 166, "turf-hex-grid": 167, "turf-inside": 168, "turf-intersect": 169, "turf-isolines": 170, "turf-kinks": 171, "turf-line-distance": 172, "turf-line-slice": 173, "turf-midpoint": 174, "turf-nearest": 175, "turf-planepoint": 176, "turf-point-grid": 177, "turf-point-on-line": 178, "turf-point-on-surface": 179, "turf-random": 180, "turf-sample": 181, "turf-simplify": 182, "turf-square": 184, "turf-square-grid": 183, "turf-tag": 185, "turf-tesselate": 186, "turf-tin": 187, "turf-triangle-grid": 188, "turf-union": 189, "turf-within": 190 }], 147: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-along"); }, { "/Users/tmcw/src/turf/packages/turf-along": 1 }], 148: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-area"); }, { "/Users/tmcw/src/turf/packages/turf-area": 6 }], 149: [function (t, e, n) { arguments[4][64][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bbox-polygon": 9, dup: 64 }], 150: [function (t, e, n) { arguments[4][23][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bbox": 11, dup: 23 }], 151: [function (t, e, n) { arguments[4][2][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-bearing": 13, dup: 2 }], 152: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-bezier"); }, { "/Users/tmcw/src/turf/packages/turf-bezier": 15 }], 153: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-buffer"); }, { "/Users/tmcw/src/turf/packages/turf-buffer": 18 }], 154: [function (t, e, n) { arguments[4][115][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-center": 22, dup: 115 }], 155: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-centroid"); }, { "/Users/tmcw/src/turf/packages/turf-centroid": 25 }], 156: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-collect"); }, { "/Users/tmcw/src/turf/packages/turf-collect": 28 }], 157: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-combine"); }, { "/Users/tmcw/src/turf/packages/turf-combine": 30 }], 158: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-concave"); }, { "/Users/tmcw/src/turf/packages/turf-concave": 32 }], 159: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-convex"); }, { "/Users/tmcw/src/turf/packages/turf-convex": 36 }], 160: [function (t, e, n) { arguments[4][3][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-destination": 55, dup: 3 }], 161: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-difference"); }, { "/Users/tmcw/src/turf/packages/turf-difference": 58 }], 162: [function (t, e, n) { arguments[4][4][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-distance": 60, dup: 4 }], 163: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-envelope"); }, { "/Users/tmcw/src/turf/packages/turf-envelope": 63 }], 164: [function (t, e, n) { arguments[4][117][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-explode": 66, dup: 117 }], 165: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-flip"); }, { "/Users/tmcw/src/turf/packages/turf-flip": 69 }], 166: [function (t, e, n) { arguments[4][5][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-helpers": 71, dup: 5 }], 167: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-hex-grid"); }, { "/Users/tmcw/src/turf/packages/turf-hex-grid": 72 }], 168: [function (t, e, n) { arguments[4][29][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-inside": 75, dup: 29 }], 169: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-intersect"); }, { "/Users/tmcw/src/turf/packages/turf-intersect": 77 }], 170: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-isolines"); }, { "/Users/tmcw/src/turf/packages/turf-isolines": 81 }], 171: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-kinks"); }, { "/Users/tmcw/src/turf/packages/turf-kinks": 90 }], 172: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-line-distance"); }, { "/Users/tmcw/src/turf/packages/turf-line-distance": 92 }], 173: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-line-slice"); }, { "/Users/tmcw/src/turf/packages/turf-line-slice": 95 }], 174: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-midpoint"); }, { "/Users/tmcw/src/turf/packages/turf-midpoint": 99 }], 175: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-nearest"); }, { "/Users/tmcw/src/turf/packages/turf-nearest": 103 }], 176: [function (t, e, n) { arguments[4][86][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-planepoint": 105, dup: 86 }], 177: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-point-grid"); }, { "/Users/tmcw/src/turf/packages/turf-point-grid": 106 }], 178: [function (t, e, n) { arguments[4][97][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-point-on-line": 109, dup: 97 }], 179: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-point-on-surface"); }, { "/Users/tmcw/src/turf/packages/turf-point-on-surface": 114 }], 180: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-random"); }, { "/Users/tmcw/src/turf/packages/turf-random": 120 }], 181: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-sample"); }, { "/Users/tmcw/src/turf/packages/turf-sample": 122 }], 182: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-simplify"); }, { "/Users/tmcw/src/turf/packages/turf-simplify": 124 }], 183: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-square-grid"); }, { "/Users/tmcw/src/turf/packages/turf-square-grid": 126 }], 184: [function (t, e, n) { arguments[4][88][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-square": 129, dup: 88 }], 185: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-tag"); }, { "/Users/tmcw/src/turf/packages/turf-tag": 131 }], 186: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-tesselate"); }, { "/Users/tmcw/src/turf/packages/turf-tesselate": 133 }], 187: [function (t, e, n) { arguments[4][34][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-tin": 136, dup: 34 }], 188: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-triangle-grid"); }, { "/Users/tmcw/src/turf/packages/turf-triangle-grid": 138 }], 189: [function (t, e, n) { arguments[4][35][0].apply(n, arguments); }, { "/Users/tmcw/src/turf/packages/turf-union": 141, dup: 35 }], 190: [function (t, e, n) { e.exports = t("/Users/tmcw/src/turf/packages/turf-within"); }, { "/Users/tmcw/src/turf/packages/turf-within": 143 }] }, {}, [146])(146);
});
//# sourceMappingURL=turf.js.map