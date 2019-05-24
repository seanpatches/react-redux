import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';
import AllComments from '../../containers/AllComments';

function PostDetails({ post }) {
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <CreateComment postId={post.id}/>
    <AllComments postId={post.id} />
    </>
  );
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetails;
