import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from "react"
import { theme, ConfigProvider, Layout, FloatButton, Modal } from 'antd'
import { BulbOutlined, BulbFilled, SettingOutlined } from '@ant-design/icons'
import { log, Doc, KeyValue } from 'utils/web'

const Render = (conf: any) => null
const Settings = (conf: any) => null

/**
 * @param Render Main
 * @param Settings Settings
 * @returns 
 */
export const Main: React.FC = () => { // Render: any = render, Settings: any = settings

    log.info('Render [index.ts]')

    const { defaultAlgorithm, darkAlgorithm } = theme
    const [isDarkMode, setIsDarkMode] = useState(KeyValue('mode') === 'true')
    const [open, setOpen] = useState(false)

    useEffect(() => { KeyValue('mode', isDarkMode.toString()) }, [isDarkMode])

    return <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>

        <Layout style={{ height: '100%', width: '100%' }}>
            <div style={{ height: '100%', width: '100%', background: isDarkMode ? '#333' : '#fff' }}>
                <Layout id="main" style={{ margin: 'auto', height: '100%', maxWidth: 1280, padding: 0 }}>
                    <Render isDarkMode={isDarkMode} />
                </Layout>
            </div>
        </Layout>

        <Modal
            title="Settings"
            centered
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            width={768}
            destroyOnClose={true}
        >
            <Settings isDarkMode={isDarkMode} />
        </Modal>

        <FloatButton.Group shape="circle" style={{ right: 24, zIndex: 99 }}>
            <FloatButton onClick={() => setOpen(true)} icon={<SettingOutlined />} />
            <FloatButton onClick={() => setIsDarkMode((previousValue) => !previousValue)} icon={isDarkMode ? <BulbOutlined /> : <BulbFilled />} />
        </FloatButton.Group>

    </ConfigProvider>

}

(ReactDOM.createRoot(Doc.getElementById('root'))).render(<Main />)