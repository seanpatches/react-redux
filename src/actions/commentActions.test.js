import { addComment, ADD_COMMENT, removeComment, REMOVE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('adds a add comment action', () => {
    expect(addComment(0, 'My Comment')).toEqual({
      type: ADD_COMMENT,
      payload: { postId: 0, comment: 'My Comment' }
    });
  });

  it('adds a remove comment action', () => {
    expect(removeComment(0, 1)).toEqual({
      type: REMOVE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
});
