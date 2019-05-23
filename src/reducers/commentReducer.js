import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

export default function blogReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...(state.comments[action.payload.id] || []),
          action.payload.comment] };

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(id => id == action.payload.id) };

    default:
      return state;
  }
} 
