import React from 'react';
import PropTypes from 'prop-types';

function Comments({ comments }){
  const commentsList = comments.map(comment => {
    return (
      <li key= {comment.id}>
        {comment}
      </li>
    );
  });

  return (
    <ul>
      {commentsList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.object.isRequired
};

export default Comments;
