import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const axiosAdd = require('axios').default;

const View = () => {
    const [todos, setTodos] = useState([]);
    const params = useParams();
    const profile = todos[params.id];

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
        <div>
            Todofile내용부분
            {profile ? (
                <div>tttt</div>
            ) : (
                <div>ffff</div>
            )}
            {todos.map(data => (
                <li key={data.id}>{data.content}</li>
            ))}
        </div>
    );
};

export default View;