import React from 'react';
import './FacebookPost.css';

function Post(props) {
    return (
    <div className="Post">
        <h1>{props.author}</h1>
        <h4>{props.description}</h4>
        <button>Like</button>
    </div>
    )
}

export default Post;