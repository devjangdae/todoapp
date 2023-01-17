import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const axiosAdd = require('axios').default;

const View = () => {
    const [todos, setTodos] = useState([]);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    const del = () => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then((response) => {
                //console.log(response.data);
            })
            .catch((response) => {
                console.log('삭제실패');
            });
            navigate("/main");
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
        <div>
            <h2>title : {todos.title}</h2>
            <h3>content : {todos.content}</h3>
            <h5>id : {todos.id}</h5>
            <h5>createdAt : {todos.createdAt}</h5>
            <div onClick={del}>삭제</div>
        </div>
    );
};

export default View;