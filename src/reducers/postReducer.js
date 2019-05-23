import { ADD_POST, REMOVE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, { title: action.payload.title, body: action.payload.body }] };

    case UPDATE_POST:
      return { ...state, posts: state.posts.map(post => {
        if(post.title == action.payload.title){
          return { title: post.title, body: action.payload.update };
        }
        return post;
      })
      };

    case REMOVE_POST:
      return { ...state, posts: state.posts.filter(post=> post.title !== action.payload.title) };

    default:
      return state;
  }
} 
