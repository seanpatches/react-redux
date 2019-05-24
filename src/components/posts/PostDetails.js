import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';

function PostDetails({ post }) {
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <CreateComment postId={post.id}/>
    </>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetails;
