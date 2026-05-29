import * as THREE from 'three';
import { ThreeView } from '../three';
import { MapView } from '../maptalks';
import { BaseObject } from 'maptalks.three';
export declare class Point {
    Three: ThreeView | any;
    Maptalks: ThreeView | any;
    GroupThree: THREE.Object3D | BaseObject | any;
    GroupMaptalks: THREE.Object3D | BaseObject | any;
    que: {};
    constructor({ Three, Maptalks }: {
        Three: ThreeView;
        Maptalks: MapView;
    });
    add: (key: string, color: string, [x, y, z]: number[]) => void;
    removeAll: () => void;
    remove: (key: string) => void;
    update: (key: string, color: string, [x, y, z]: number[]) => void;
}
//# sourceMappingURL=point.d.ts.map