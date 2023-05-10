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
      //let rawData = await axios.post('http://localhost:3001/authUser', {
      let rawData = await axios.post('http://localhost:3001/authUser', {
        username: "admin",
        password: "pwd"
      });
      //const posts = await rawData.json();      
      console.log('rawData: ' , rawData.data);
      console.log('type of rawData: ' + typeof rawData.data);
      const posts = rawData.data;
      //const posts = Array.from(rawData.data);
      console.log('posts: ' + posts);
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='app-router'>           
      <h4>{posts}</h4>       
    </div>
  )
}

export default Home;