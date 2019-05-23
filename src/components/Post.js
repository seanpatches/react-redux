import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

