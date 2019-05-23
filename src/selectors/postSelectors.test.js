import { getPosts } from './postSelectors';

describe('post selector', () => {
  it('obtains all posts', () => {
    const state = {
      posts: [
        { title: 'test1', body:'test1' },
        { title: 'test2', body:'test2' }
      ]
    };

    expect(getPosts(state)).toEqual([
      { title: 'test1', body:'test1', id: 0 },
      { title: 'test2', body:'test2', id: 1 }
    ]);
  });
});
