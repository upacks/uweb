"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("./react");
const three_1 = require("./three");
const maptalks_1 = require("./maptalks");
const utils_1 = require("./utils");
const web_1 = require("utils/web");
const { useState, useEffect, useRef } = react_1.React;
const { Title } = react_1.Typography;
console.log('Toyota', utils_1.Toyota);
const ll = [43.67338010130343, 105.49508346330428, 0];
const en = [0, 0, 0];
const main = ({ isDarkMode }) => {
    const v0 = useRef({});
    const v1 = useRef({});
    const t0 = useRef({});
    useEffect(() => {
        const ready = [];
        const onReady = (indicate) => {
            web_1.log.success(indicate);
            ready.push(indicate);
            if (ready.length === 3) {
                web_1.log.success(`Master is ready`);
                const vehicle = new utils_1.Vehicle({
                    Truck: t0.current,
                    Maptalks: v0.current,
                    Three: v1.current,
                });
                (0, web_1.Delay)(() => {
                    vehicle.update({
                        map: [ll[0], ll[1], 0],
                        rotate: [0, 0, 0],
                        MP: { x: en[0], y: en[1], z: 0 }
                    });
                }, 500);
            }
        };
        v0.current = new maptalks_1.MapView({
            containerId: 'render_0',
            simulate: true,
            isDarkMode,
            lat: ll[0],
            lon: ll[1]
        });
        v1.current = new three_1.ThreeView({
            containerId: 'render_1',
            simulate: true,
            isDarkMode,
        });
        utils_1.Toyota.then((Truck) => {
            t0.current = Truck;
            onReady('Toyota is ready');
        });
        v0.current.onReady(() => onReady('MapView is ready'));
        v1.current.onReady(() => onReady('ThreeView is ready'));
    }, []);
    useEffect(() => {
        v0.current.setMode && v0.current.setMode(isDarkMode);
        v1.current.setMode && v1.current.setMode(isDarkMode);
    }, [isDarkMode]);
    return <react_1.Row id="main" style={{ height: '100%' }}>
        <react_1.Col id='render_0' span={12} style={{ height: '100%' }}/>
        <react_1.Col id='render_1' span={12} style={{ height: '100%' }}/>
    </react_1.Row>;
};
const setting = ({ isDarkMode }) => <Title>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>;
(0, react_1.Render)(main, setting, { maxWidth: '100%' });
//# sourceMappingURL=index.jsx.map