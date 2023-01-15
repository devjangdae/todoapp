import './App.css';
import { useEffect, useState } from 'react';
import Todo from './Todo'
import axios from 'axios';
const axiosAdd = require('axios').default;

const foodLike = [
  {
    key: 111,
    title: 'ti1',
    desc: 'de1',
    rating: 5
  },
  {
    key: 222,
    title: 'ti2',
    desc: 'de2',
    rating: 4.9
  }
];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('useEffect 호출됨.');
    axios({
      method: 'GET',
      url: 'http://localhost:8080/todos',
    }).then(response => setPosts(response.data.data))
  }, [],)

  return (
    <div className="App">
      <Todo></Todo>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
      {foodLike.map(food => (
        <div key={food.key}>{food.title},{food.desc}</div>
      ))}
    </div>
  );
}

export default App;
