import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const axiosAdd = require('axios').default;

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onTitleChange = ((e) => {
    setTitle(e.target.value);
  });

  const onContentChange = ((e) => {
    setContent(e.target.value);
  });

  const addTodo = () => {
    if (title === "") {
      alert("제목을 입력해!");
    } else {
      submit();
      navigate("/main");
    }
  }

  const submit = () => {
    axios.post('http://localhost:8080/todos',
      {
        title: title,
        content: content
      }
    )
      .then((response) => { console.log(response.data); })
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
        <textarea onChange={onContentChange}></textarea>
      </p>

      <div onClick={addTodo}>
        Create
      </div>
    </div>
  );
};

export default Create;