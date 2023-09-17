import * as maptalks from 'maptalks';
import * as maptalks_three from 'maptalks.three';
declare class MapView {
    map: maptalks.Map | any;
    scene: any;
    camera: any;
    threeLayer: maptalks_three.ThreeLayer;
    conf: any;
    constructor(conf: any);
    animateTo: (p: [number, number], threshold?: number) => void;
    getBearing: (c1: any, c2: any) => void;
    view: (position: string | undefined, { coords }: {
        coords: {
            back: [number, number, number];
            front: [number, number, number];
        };
    }) => "panning" | undefined;
    getFilter: (isDark: boolean) => "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)" | "sepia(0) invert(0)";
    setMode: (isDark: boolean) => any;
    onUpdate: (cb: any) => any;
    onReady: (cb: any) => any;
}
export { MapView, maptalks, maptalks_three, };
//# sourceMappingURL=index.d.ts.map