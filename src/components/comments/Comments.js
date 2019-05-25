import React from 'react';
import PropTypes from 'prop-types';

function Comments({ comments }){
  const commentsList = comments.map((comment, i) => {
    return (
      <li key= {i}>
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
  comments: PropTypes.array.isRequired
};

export default Comments;
