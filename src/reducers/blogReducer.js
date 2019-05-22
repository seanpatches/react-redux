import { ADD_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, { title: 'Sean', body: 'hi' }] };
  }
} 
