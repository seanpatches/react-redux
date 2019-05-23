export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => {
  return { type: ADD_POST, payload: { title: title, body: body } };
};

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = title => {
  return { type: REMOVE_POST, payload: title };
};

export const UPDATE_POST = 'UPDATE_POST';
export const updaatePost = (title, update) => {
  return { type: REMOVE_POST, payload: { title: title, update: update } };
};
