import { addPost, ADD_POST, removePost, REMOVE_POST, UPDATE_POST, updatePost } from './postActions';

describe('post actions', () => {
  it('adds a add post action', () => {
    expect(addPost('My Post', 'things are good')).toEqual({
      type: ADD_POST,
      payload: { title: 'My Post', body: 'things are good' }
    });
  });

  it('adds a remove post action', () => {
    expect(removePost(0)).toEqual({
      type: REMOVE_POST,
      payload: 0
    });
  });

  it('adds an update post action', () => {
    expect(updatePost(0, 'My new body')).toEqual({
      type: UPDATE_POST,
      payload: { id: 0, body: 'My new body' }
    });
  });
});
