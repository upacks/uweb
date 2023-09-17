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
    update: (args: any) => boolean;
}
export {};
//# sourceMappingURL=gltf.d.ts.map