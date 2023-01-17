import { useEffect, useState } from 'react';
import Todo from '../Todo'
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const axiosAdd = require('axios').default;

const Main = () => {
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
        <div className="App">
            <Todo></Todo>
            <Link to="/View">뷰</Link>
            <Link to="/Create">생성</Link>
            <Link to="/Update">수정</Link>

            
            {todos.map(data => (
                <Link to={`View/${data.id}`}>
                <li key={data.id}>{data.id} {data.title}</li>
                </Link>
            ))}
            
        </div>
    );
};

export default Main;