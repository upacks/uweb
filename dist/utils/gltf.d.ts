import * as THREE from 'three';
interface iGLTF {
    MapPivot: THREE.Group;
    ThreePivot: THREE.Group;
}
export declare const Drill: ({ size, x, y, z }: {
    size: number;
    x: number;
    y: number;
    z: number;
}) => Promise<iGLTF>;
export declare const Dozer: ({ size, x, y, z }: {
    size: number;
    x: number;
    y: number;
    z: number;
}) => Promise<iGLTF>;
export declare const Toyota: ({ size, x, y, z }: {
    size: number;
    x: number;
    y: number;
    z: number;
}) => Promise<iGLTF>;
export declare class Vehicle {
    Maptalks: any;
    TruckMap: any;
    isM: boolean;
    Three: any;
    TruckThree: any;
    isT: boolean;
    callback: any;
    canvas: any;
    changeCursor: (coll: any, value: string) => void;
    constructor({ Truck, Maptalks, Three }: any);
    on: (cb: (event_name: string, args: any) => any) => void;
    update: ({ gps, utm, z, r }: {
        gps: [number, number];
        utm: [number, number];
        r: number;
        z: number;
    }) => null | undefined;
    view: ({ MP, map, rotate }: {
        MP: {
            x: number;
            y: number;
            z: number;
        };
        map: [number, number, number];
        rotate: [number, number, number];
    }) => boolean;
    remove: () => void;
}
export {};
//# sourceMappingURL=gltf.d.ts.map