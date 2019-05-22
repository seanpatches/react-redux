import { ADD_POST, REMOVE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, { title: 'Sean', body: 'hi' }] };
    case REMOVE_POST:
      return { ...state, posts: state.posts.filter((post) => post.title !== action.payload.title) };
    default:
      return state;
  }
} 
