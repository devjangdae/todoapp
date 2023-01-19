import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import 'antd/dist/reset.css';
import { Button, Layout, Menu, theme, Divider, Card, Space, Input } from 'antd';
import { LeftOutlined, EditOutlined } from '@ant-design/icons';
import CanonImage from './canon_ci.png';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const axiosAdd = require('axios').default;

const Update = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const onTitleChange = ((e) => {
        setTitle(e.target.value);
    });

    const onContentChange = ((e) => {
        setContent(e.target.value);
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/todos/${id}`
                );
                //console.log(response);
                //console.log(response.data.data);
                setTitle(response.data.data.title);
                setContent(response.data.data.content);
            } catch (e) {
                console.log(e);
            }
        };
        loadData();
    }, []);

    const updateTodo = () => {
        if (title === "") {
            alert("제목을 입력해!");
        } else {
            submit();
        }
    }

    const submit = () => {
      if (window.confirm('정말 수정하시겠습니까?')) {
        axios.put(`http://localhost:8080/todos/${id}`,
          {
            title: title,
            content: content
          }
        )
          .then((response) => {
            navigate("/main");
          })
          .catch((response) => {
            console.log('전송실패');
          });
      }
    }

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
                <div style={{ fontSize: "30px", fontWeight: 700 }}>Update Task</div>
              </div>
  
              <div style={{paddingTop: "10px", paddingLeft: "10px"}}>
                <Button type="default" shape="circle" icon={<LeftOutlined />} size={10} onClick={() => navigate(-1)}></Button>
              </div>
  
              <Card title={<div className='view-todo-title'>Task Name</div>} bordered={true} style={{ maxWidth: 700, margin: "10px" }}>
                <div>
                    <Input value={title} onChange={onTitleChange} placeholder="롯데마트가기" />
                </div>
              </Card>
  
              <Card title={<div className='view-todo-title'>Desciription</div>} bordered={true} style={{ maxWidth: 700, margin: "10px" }}>
                <TextArea value={content} rows={4} placeholder="계란사기, 우유사기" maxLength={500} onChange={onContentChange}/>
              </Card>
  
              <span className='main-todo-content' onClick={updateTodo}>
                <Button onClick={()=>updateTodo} type="primary" shape="circle" icon={<EditOutlined />} size={10}>
                </Button>
              </span>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    );
};

export default Update;