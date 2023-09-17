"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Render = exports.ReactDOM = exports.React = void 0;
const react_1 = __importStar(require("react"));
exports.React = react_1.default;
const client_1 = __importDefault(require("react-dom/client"));
exports.ReactDOM = client_1.default;
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const web_1 = require("utils/web");
const Render = (Main, Setting, _) => {
    const DOM = client_1.default.createRoot(web_1.Doc.getElementById('root'));
    const Render = () => {
        const { defaultAlgorithm, darkAlgorithm } = antd_1.theme;
        const [isDarkMode, setIsDarkMode] = (0, react_1.useState)((0, web_1.KeyValue)('mode') === 'true');
        const [open, setOpen] = (0, react_1.useState)(false);
        (0, react_1.useEffect)(() => { (0, web_1.KeyValue)('mode', isDarkMode.toString()); }, [isDarkMode]);
        return <antd_1.ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>

            <antd_1.Layout style={{ height: '100%', width: '100%' }}>
                <div style={{ height: '100%', width: '100%', background: isDarkMode ? '#333' : '#fff' }}>
                    <antd_1.Layout id="main" style={{ margin: 'auto', height: '100%', maxWidth: _.maxWidth ?? 1280, padding: 0 }}>
                        <Main isDarkMode={isDarkMode}/>
                    </antd_1.Layout>
                </div>
            </antd_1.Layout>

            <antd_1.Modal title="Settings" centered open={open} onCancel={() => setOpen(false)} footer={null} width={768} destroyOnClose={true}>
                <Setting isDarkMode={isDarkMode}/>
            </antd_1.Modal>

            <antd_1.FloatButton.Group shape="circle" style={{ right: 24, zIndex: 99 }}>
                <antd_1.FloatButton onClick={() => setOpen(true)} icon={<icons_1.SettingOutlined />}/>
                <antd_1.FloatButton onClick={() => setIsDarkMode((previousValue) => !previousValue)} icon={isDarkMode ? <icons_1.BulbOutlined /> : <icons_1.BulbFilled />}/>
            </antd_1.FloatButton.Group>

        </antd_1.ConfigProvider>;
    };
    DOM.render(<Render />);
};
exports.Render = Render;
__exportStar(require("antd"), exports);
//# sourceMappingURL=index.jsx.map