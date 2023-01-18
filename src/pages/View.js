import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'antd/dist/reset.css';
import { DeleteOutlined, FormOutlined, LeftOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, Divider, Card, Typography, Space } from 'antd';

import CanonImage from './canon_ci.png';

const axiosAdd = require('axios').default;
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const View = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [todos, setTodos] = useState([]);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const del = () => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then((response) => {
                //console.log(response.data);
                navigate("/main");
            })
            .catch((response) => {
                console.log('삭제실패');
            });
            
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/todos/${id}`
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
                <img src={CanonImage} alt="logo"></img>
            </div>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{ background: colorBgContainer }}>

                    <div className="App">
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            paddingTop: "10px",
                            paddingLeft: "10px",
                        }}>
                            <div style={{ fontSize: "30px", fontWeight: 700 }}>Task Details</div>
                        </div>
                        <div style={{paddingTop: "10px", paddingLeft: "10px"}}>
                            <Button type="default" shape="circle" icon={<LeftOutlined />} size={10} onClick={() => navigate(-1)}></Button>
                        </div>
                        <Card title={<div className='view-todo-title'>{todos.title}</div>} bordered={true} style={{ maxWidth: 700, margin: "10px" }}>
                            <div>
                                <div className='view-todo-content'>{todos.content}</div>
                                <Space size={10}>
                                    <Link to={`/Update/${id}`}>
                                        <span className='main-todo-content'>
                                            <Button type="primary" shape="circle" icon={<EditOutlined />} size={10}>
                                            </Button>
                                        </span>
                                    </Link>
                                    <span className='main-todo-content' onClick={del}>
                                        <Button type="primary" shape="circle" icon={<DeleteOutlined />} size={10}>
                                        </Button>
                                    </span>
                                </Space>
                            </div>
                        </Card>
                    </div>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default View;