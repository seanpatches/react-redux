import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }){
  return (
    <>
      <span>{comment}</span>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
