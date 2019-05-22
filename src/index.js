import { createStore } from 'redux';
import blogReducer from './reducers/blogReducer';
import { ADD_POST } from './actions/postActions';

const store = createStore(blogReducer);

store.dispatch(ADD_POST('Sean', 'hello there'));
