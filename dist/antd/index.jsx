import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import antd, { theme, ConfigProvider, Layout, FloatButton, Modal } from 'antd';
import icon, { BulbOutlined, BulbFilled, SettingOutlined } from '@ant-design/icons';
import { Doc, KeyValue } from 'utils/web';
export { React, ReactDOM, antd, icon, run, };
const run = (Main, Setting, _) => {
    const DOM = ReactDOM.createRoot(Doc.getElementById('root'));
    const Render = () => {
        const { defaultAlgorithm, darkAlgorithm } = theme;
        const [isDarkMode, setIsDarkMode] = useState(KeyValue('mode') === 'true');
        const [open, setOpen] = useState(false);
        useEffect(() => { KeyValue('mode', isDarkMode.toString()); }, [isDarkMode]);
        return <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>

            <Layout style={{ height: '100%', width: '100%' }}>
                <div style={{ height: '100%', width: '100%', background: isDarkMode ? '#333' : '#fff' }}>
                    <Layout id="main" style={{ margin: 'auto', height: '100%', maxWidth: _.maxWidth ?? 1280, padding: 0 }}>
                        <Main isDarkMode={isDarkMode}/>
                    </Layout>
                </div>
            </Layout>

            <Modal title="Settings" centered open={open} onCancel={() => setOpen(false)} footer={null} width={768} destroyOnClose={true}>
                <Setting isDarkMode={isDarkMode}/>
            </Modal>

            <FloatButton.Group shape="circle" style={{ right: 24, zIndex: 99 }}>
                <FloatButton onClick={() => setOpen(true)} icon={<SettingOutlined />}/>
                <FloatButton onClick={() => setIsDarkMode((previousValue) => !previousValue)} icon={isDarkMode ? <BulbOutlined /> : <BulbFilled />}/>
            </FloatButton.Group>

        </ConfigProvider>;
    };
    DOM.render(<Render />);
};
//# sourceMappingURL=index.jsx.map