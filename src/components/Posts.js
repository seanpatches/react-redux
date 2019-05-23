import React from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../selectors/postSelectors';

function Post({ posts }) {
  const postsList = posts.map(post => {
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

Post.propTypes = {
  posts: PropTypes.array.isRequired
};
