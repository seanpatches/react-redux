import { getComments } from './commentSelector';

it('obtains a single posts comments by id', () => {
  const state = {
    comments: {
      3: { comment:'test1' },
    }
  };

  expect(getComments(state, 3)).toEqual(
    { comment:'test1' }
  );
});
