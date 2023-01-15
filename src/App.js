import './App.css';
import { useEffect, useState } from 'react';
import Todo from './Todo'


import axios from 'axios';
const axiosAdd = require('axios').default;

function App() {

  const [posts, setPosts] = useState([]);

  
  useEffect(()=>{
    axios({
      method: 'GET',
      url:'http://localhost:8080/todos',
    }).then(response => setPosts(response.data.data))
  }, [])
  
  return (
    <div className="App">
      <Todo></Todo>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
      
    </div>
    
  );
}

export default App;
