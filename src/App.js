import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
    
  );
}

export default App;
