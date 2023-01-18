import { useEffect, useState } from 'react';
import Todo from '../Todo'
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'antd/dist/reset.css';
import { Button } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Card } from 'antd';

const { Header, Content, Footer } = Layout;
const axiosAdd = require('axios').default;

const Main = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/todos'
                );
                //console.log(response);
                //console.log(response.data.data);
                setTodos(response.data.data);
            } catch (e) {
                console.log(e);
            }
        };

        loadData();
    }, []);

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
                        <Todo></Todo>

                        <Card style={{ 
                            maxWidth: 360, margin: "10px"
                            }}>
                            {todos.map(data => (
                                <div key={data.id}>
                                    <Link to={`View/${data.id}`}>
                                        <li style={{fontSize: "28px"}}>{data.title}</li>
                                    </Link>
                                    <Link to={`Update/${data.id}`}>
                                        <div style={{fontSize: "20px"}}><FormOutlined />수정</div>
                                    </Link>
                                    <Divider />
                                </div>
                            ))}
                        </Card>

                        <Button type="primary">
                            <Link to="/Create">생성</Link>
                        </Button>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Main;