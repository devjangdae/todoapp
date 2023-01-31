import { useEffect, useState } from "react";
import Todo from "../Todo";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "antd/dist/reset.css";
import { Button, Layout, Menu, theme, Divider, Card, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import CanonImage from "./canon_ci.png";

const { Header, Content, Footer } = Layout;
const axiosAdd = require("axios").default;

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [todos, setTodos] = useState([]);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const del = (del_id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost:8080/todos/${del_id}`)
        .then((response) => {
          //console.log(response.data);
          navigate("/main");
        })
        .catch((response) => {
          console.log("삭제실패");
        });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todos");
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
      <div style={{ maxWidth: "1px", margin: "20px" }}>
        <img src={CanonImage} alt="logo"></img>
      </div>
      <Content style={{ padding: "0 50px" }}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <div className="App">
            <Todo></Todo>

            <Card
              style={{
                maxWidth: 700,
                margin: "10px",
              }}
            >
              {todos.map((data) => (
                <div key={data.id}>
                  <Space size={10}>
                    <Link to={`update/${data.id}`}>
                      <span className="main-todo-content">
                        <Button
                          type="primary"
                          shape="circle"
                          icon={<EditOutlined />}
                          size={10}
                        ></Button>
                      </span>
                    </Link>

                    <span
                      className="main-todo-content"
                      onClick={() => del(data.id)}
                    >
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<DeleteOutlined />}
                        size={10}
                      ></Button>
                    </span>

                    <Link to={`view/${data.id}`}>
                      <span className="main-todo-title">{data.title}</span>
                    </Link>
                  </Space>

                  <Divider />
                </div>
              ))}
            </Card>

            <Link to="/create">
              <Button
                type="primary"
                shape="circle"
                icon={<PlusCircleOutlined />}
                size={10}
              ></Button>
            </Link>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Main;
