import * as THREE from 'three';
declare const ViewHelper: any;
declare const GLTFLoader: any;
declare class ThreeView {
    conf: any;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    controls: any;
    raycaster: any;
    gltf: any;
    viewHelper: any;
    axesHelper: any | THREE.AxesHelper;
    gridHelper: any | THREE.GridHelper;
    polrHelper: any | THREE.PolarGridHelper;
    arroHelper: any | THREE.ArrowHelper;
    constructor(conf: any);
    setup: () => void;
    updateHelpers: (ps: [number, number, number]) => void;
    update: ([x, y, z]: number[], [x1, y1, z1]: number[]) => "panning" | undefined;
    view: (position: string | undefined, { camera, MP }: {
        camera: {
            top: {
                x: number;
                y: number;
                z: number;
            };
            right: {
                x: number;
                y: number;
                z: number;
            };
            back: {
                x: number;
                y: number;
                z: number;
            };
        };
        MP: {
            x: number;
            y: number;
            z: number;
        };
    }) => "panning" | undefined;
    setMode: (isDark: boolean) => void;
    onUpdate: (cb: any) => any;
    onReady: (cb: any) => any;
    emit: (name: string, data: any) => void;
    on: (name: string, cb: any) => number;
    close: (name: string, index: number) => void;
    simulate: () => void;
    _viewHelper: (args: any) => void;
    _axesHelper: (args: any) => void;
    _gridHelper: (args: any) => void;
    _polrHelper: (args: any) => void;
    _arroHelper: (args: any) => void;
}
export { ThreeView, THREE, GLTFLoader, ViewHelper, };
//# sourceMappingURL=index.d.ts.map