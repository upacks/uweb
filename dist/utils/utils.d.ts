export declare const turf: any;
export declare const UTM: any;
export declare const Coordinate: (...n: any) => (any[] | {
    x: any;
    y: any;
    z: any;
})[];
export declare const colorize: (actual: number, [c5, c4, c3, c2, c1]: any) => "#2cba00" | "#a3ff00" | "#fff400" | "#ffa700" | "#ff0000";
export declare class Tick {
    hide: boolean;
    s: number;
    cb: any;
    constructor();
    on: (cb: any) => void;
    set: (sec: any) => void;
    can: () => boolean;
}
//# sourceMappingURL=utils.d.ts.map