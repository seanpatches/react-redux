import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postsList = posts.map(post => {
    console.log(post);
    return (
      <li key={post.id}>
        <Post post={post}/>
      </li>
    );
  });
  
  return (
    <ul>
      {postsList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
