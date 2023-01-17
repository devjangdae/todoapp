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

            {todos.map(data => (
                <div key={data.id}>
                    <Link to={`View/${data.id}`}>
                        <li>{data.title}</li>
                    </Link>
                    <Link to={`Update/${data.id}`}>
                        <div>수정</div>
                    </Link>
                </div>
            ))}

            <Link to="/Create">생성</Link>
        </div>
    );
};

export default Main;