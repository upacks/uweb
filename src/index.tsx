import React, { useState, useEffect } from 'react'
import { Typography, Row, Col } from 'antd'
const { Title } = Typography

if (true) {

    const { run } = require('./antd')
    const { run_three } = require('./three')

    const main = ({ isDarkMode }: any) => {

        useEffect(() => {
            run_three('render_0')
            run_three('render_1')
            run_three('render_2')
            run_three('render_3')
        }, [])

        return (
            <Row id="" style={{ height: '100%' }}>
                <Col id='render_0' span={12} style={{ height: '50%' }} />
                <Col id='render_1' span={12} style={{ height: '50%' }} />
                <Col id='render_2' span={12} style={{ height: '50%' }} />
                <Col id='render_3' span={12} style={{ height: '50%' }} />
            </Row>
        )

        return <div id='three_render' style={{ width: '100%', height: '100%' }}>
            <Title style={{ position: 'absolute' }}>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>
        </div>

    }
    const setting = ({ isDarkMode }: any) => <Title>:OMG:{isDarkMode ? 'DARK' : 'LIGHT'}</Title>

    run(main, setting, { maxWidth: '100%' })

}