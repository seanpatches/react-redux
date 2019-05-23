export const getComments = (state, postId) => {
  return state.comments[postId] || 'No comments were found';
};
