import './App.css';
import { useEffect, useState } from 'react';
import Todo from './Todo'
import axios from 'axios';
import PropTypes from 'prop-types';
const axiosAdd = require('axios').default;

function Food(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.desc}</h3>
    </div>
  );
}

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
        <Food key={food.key} title={food.title} desc={food.desc}></Food>
      ))}
    </div>
  );
}

Food.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default App;
