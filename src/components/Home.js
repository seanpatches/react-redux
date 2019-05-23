import React from 'react';
import PropTypes from 'prop-types';
import PostForm from './posts/PostForm';
import Posts from './posts/Posts';

export default function Home({ onSubmit, posts }){
  return (
    <>
      <PostForm onSubmit={onSubmit}/>
      <Posts posts={posts}/>
    </>
  );
}

Home.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}
