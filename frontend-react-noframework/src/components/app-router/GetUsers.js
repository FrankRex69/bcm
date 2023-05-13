import React, {useState, useEffect} from 'react';
import './App-router.css';

import axios from "axios";
// import {internalIpV4} from 'internal-ip';

const GetUsers = () => {

  useEffect(()=>{
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchData = async() => {  
    try {    
      let rawData = await axios.get('http://localhost:3001/getUsers', {
        auth: {
          username: 'admin',
          password: 'pwd'
        }
      });
      const posts = JSON.stringify(rawData.data);
      console.log('posts: ' , posts);
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

export default GetUsers;