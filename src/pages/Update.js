import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const axiosAdd = require('axios').default;

const Update = () => {
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

    return (
        <div>
            <p>title</p>
            <p>
                <input type="text" value={title} onChange={onTitleChange}></input>
            </p>

            <p>content</p>
            <p>
                <textarea value={content} onChange={onContentChange}></textarea>
            </p>

            <div onClick={updateTodo}>
                Update
            </div>
        </div>
    );
};

export default Update;