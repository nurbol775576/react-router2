const getShortValue = (value) => {
  if (value.length > 20) {
    return value.substring(0, 20) + '... ' + <Link to={`/posts/${post.id}`}>Подробнее</Link>;
  }
  return value;
};