import React, {useState, useEffect} from 'react';
import './App-router.css';

import axios from "axios";

const Home = () => {

  useEffect(()=>{
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchData = async() => {  
    try {
      let rawData = await axios.post('http://localhost:3001/authUser', {
        username: "admin",
        password: "pwd"
      });
      const data = rawData.json();
      console.log(data);
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='app-router'>
        {posts.map(post=>(          
            <h4>{post.data}</h4>
        ))}
    </div>
  )
}

export default Home;