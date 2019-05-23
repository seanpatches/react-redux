import { addComment, ADD_COMMENT, removeComment, REMOVE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a create comment action', () => {
    expect(addComment(0, 'My Comment')).toEqual({
      type: ADD_COMMENT,
      payload: { id: 0, comment: 'My Comment' }
    });
  });

  it('creates a delete comment action', () => {
    expect(removeComment(1)).toEqual({
      type: REMOVE_COMMENT,
      payload: 1
    });
  });
});
