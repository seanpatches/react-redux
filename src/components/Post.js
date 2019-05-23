import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
      <Link to={`/comments/${post.id}`}>
        <p>{post.title}</p>
      </Link>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;


