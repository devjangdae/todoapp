// 미사용
import React from "react";
import { Link } from 'react-router-dom';

import { Button, Layout, Menu, theme, Divider, Card } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function Container(){
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Header>
                <div className="logo"></div>

                <Menu theme="dark" />
            </Header>
            <div style={{ maxWidth: '1px', margin: "20px" }}>
                <img src="assets/img/canon_ci.png" alt="logo"></img>
            </div>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ background: colorBgContainer }}>

                    <div className="App">
                        <Button type="primary">
                            <Link to="/Create">생성</Link>
                        </Button>
                    </div>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}

export default Container;