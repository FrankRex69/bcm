import React, {useState, useEffect} from 'react';
import './App-router.css';

import axios from "axios";
// import {internalIpV4} from 'internal-ip';

const NoDb = () => {

  useEffect(()=>{
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);

  const fetchData = async() => {  
    try {
      // const localHost = await internalIpV4();     
      let rawData = await axios.post('http://localhost:3001/noDb', {
        username: "admin",
        password: "pwd"
      });
      const posts = JSON.stringify(rawData.data.fieldtest);
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

export default NoDb;