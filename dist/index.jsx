import { React, Render, Typography, Row, Col } from './react';
import { ThreeView } from './three';
import { MapView } from './maptalks';
import { Vehicle, Toyota, Dozer, Drill, Exca, Dump, Truck } from './utils';
import { log } from 'utils/web';
const { useEffect, useRef } = React;
const { Title } = Typography;
const ll = [43.67338010130343, 105.49508346330428, 0];
const main = ({ isDarkMode }) => {
    const v0 = useRef({});
    const v1 = useRef({});
    const t0 = useRef({});
    useEffect(() => {
        const ready = [];
        const onReady = (indicate) => {
            log.success(indicate);
            ready.push(indicate);
            if (ready.length === 3) {
                log.success(`Master is ready`);
            }
        };
        v0.current = new MapView({
            containerId: 'render_0',
            simulate: true,
            isDarkMode,
            urlTemplate: `https://c.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png`,
            lat: ll[0],
            lon: ll[1],
        });
        v1.current = new ThreeView({
            containerId: 'render_1',
            simulate: true,
            stats: false,
            isDarkMode,
            antialias: false,
        });
        setTimeout(() => {
            for (let i = 0; i <= 15; i++) {
                Toyota({ size: 50, x: -60 + (i * 6), y: -30, z: 0 }).then((t) => {
                    new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
                });
                Dump({ size: 50, x: -180 + (i * 22), y: 40, z: 0 }).then((t) => {
                    new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
                });
            }
            Toyota({ size: 50, x: -50, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
            Dozer({ size: 50, x: -35, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
            Drill({ size: 50, x: -20, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
            Exca({ size: 50, x: -5, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
            Truck({ size: 50, x: 10, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
            Dump({ size: 50, x: 35, y: 0, z: 0 }).then((t) => {
                new Vehicle({ Truck: t, Maptalks: v0.current, Three: v1.current });
            });
        }, 500);
        v0.current.onReady(() => onReady('MapView is ready'));
        v1.current.onReady(() => onReady('ThreeView is ready'));
    }, []);
    useEffect(() => {
        v0.current.setMode && v0.current.setMode(isDarkMode);
        v1.current.setMode && v1.current.setMode(isDarkMode);
    }, [isDarkMode]);
    return <Row id="main" style={{ height: '100%' }}>
        <Col id='render_0' span={12} style={{ height: '100%' }}/>
        <Col id='render_1' span={12} style={{ height: '100%' }}/>
    </Row>;
};
const setting = ({ isDarkMode }) => <Title>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>;
Render(main, setting, { maxWidth: '100%' });
//# sourceMappingURL=index.jsx.map