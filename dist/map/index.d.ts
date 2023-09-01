import { Map } from 'maptalks';
import { ThreeLayer } from 'maptalks.three';
export declare class MapView {
    map: Map | any;
    scene: any;
    camera: any;
    threeLayer: ThreeLayer;
    conf: any;
    constructor(conf: any);
    animateTo: (p: [number, number], threshold?: number) => void;
    getFilter: (isDark: boolean) => "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)" | "sepia(0) invert(0)";
    setMode: (isDark: boolean) => any;
    onUpdate: (cb: any) => any;
    onReady: (cb: any) => any;
}
//# sourceMappingURL=index.d.ts.map