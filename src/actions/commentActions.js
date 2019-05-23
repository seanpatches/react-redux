export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (id, comment) => {
  return { type: ADD_COMMENT, payload: { id: id, comment: comment } };
};

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = (id) => {
  return { type: REMOVE_COMMENT, payload: id };
};
