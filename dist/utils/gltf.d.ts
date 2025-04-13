import * as THREE from 'three';
interface iGLTF {
    MapPivot: THREE.Group;
    ThreePivot: THREE.Group;
}
export declare const Exca: ({ size, x, y, z }: {
    size: number;
    x: number;
    y: number;
    z: number;
}) => Promise<iGLTF>;
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
export declare const Dump: ({ size, x, y, z }: {
    size: number;
    x: number;
    y: number;
    z: number;
}) => Promise<iGLTF>;
export declare const Truck: ({ size, x, y, z }: {
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
    update: ({ gps, utm, head }: {
        gps: [number, number, number];
        utm: [number, number, number];
        head: number;
    }) => null | undefined;
    remove: () => void;
}
export {};
//# sourceMappingURL=gltf.d.ts.map