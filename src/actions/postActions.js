export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => {
  console.log(title, body);
  return { type: ADD_POST, payload: { title: title, body: body } };
};

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = title => {
  return { type: REMOVE_POST, payload: title };
};
