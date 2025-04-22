import * as THREE from 'three';
interface iGLTF {
    MapPivot: THREE.Group;
    ThreePivot: THREE.Group;
    Mixer: any;
    Clips: any;
}
export declare const LoadCache: (file_name: string | undefined, cb: any) => any;
export declare const LoadRequiredFiles: (cb: any) => void;
export declare const Exca: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare const Drill: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare const Dozer: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare const Dump: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare const Truck: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare const Toyota: ({ size, x, y, z }: {
    size?: number | undefined;
    x?: number | undefined;
    y?: number | undefined;
    z?: number | undefined;
}) => Promise<iGLTF>;
export declare class Vehicle {
    Truck: any;
    Maptalks: any;
    TruckMap: any;
    isM: boolean;
    Three: any;
    TruckThree: any;
    isT: boolean;
    mixer: any;
    clips: any;
    fps: number;
    frame: any;
    prev: any;
    callback: any;
    canvas: any;
    changeCursor: (coll: any, value: string) => void;
    constructor({ Truck, Maptalks, Three, fps }: any);
    on: (cb: (event_name: string, args: any) => any) => void;
    setColor: (color: string) => void;
    animate: (index?: number | string, { loop, reset, stop, play, fadeIn, fadeOut, speed }?: {
        loop?: boolean | undefined;
        reset?: boolean | undefined;
        stop?: boolean | undefined;
        play?: boolean | undefined;
        fadeIn?: number | undefined;
        fadeOut?: number | undefined;
        speed?: number | undefined;
    }) => void;
    update: ({ gps, utm, head }: {
        gps: [number, number, number];
        utm: [number, number, number];
        head: number;
    }) => void;
    update_exec: ({ gps, utm, head, dur }: {
        gps: [number, number, number];
        utm: [number, number, number];
        head: number;
        dur: number;
    }) => null | undefined;
    remove: () => void;
}
export {};
//# sourceMappingURL=gltf.d.ts.map