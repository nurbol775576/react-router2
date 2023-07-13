import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{getShortValue(post.body)}</p>
          <Link to={`/posts/${post.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;