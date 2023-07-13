import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find(post => post.id === parseInt(id));

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default PostDetails;