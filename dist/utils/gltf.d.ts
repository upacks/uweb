import * as THREE from 'three';
interface iGLTF {
    MapPivot: THREE.Group;
    ThreePivot: THREE.Group;
}
export declare const Toyota: Promise<iGLTF>;
export declare class Vehicle {
    Three: any;
    Maptalks: any;
    TruckMap: any;
    TruckThree: any;
    constructor({ Truck, Maptalks, Three }: any);
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