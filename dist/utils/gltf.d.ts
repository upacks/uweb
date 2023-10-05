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
    constructor({ Truck, Maptalks, Three }: any);
    position: ({ gps, utm, r }: {
        gps: [number, number, number];
        utm: [number, number, number];
        r: [number, number, number];
    }) => null | undefined;
    update: ({ MP, map, rotate }: {
        MP: {
            x: number;
            y: number;
            z: number;
        };
        map: [number, number, number];
        rotate: [number, number, number];
    }) => boolean;
}
export {};
//# sourceMappingURL=gltf.d.ts.map