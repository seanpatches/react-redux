import { createStore } from 'redux';
import blogReducer from './reducers/blogReducer';

const store = createStore(blogReducer);

store.dispatch({
  type: 'ADD_POST',
  payload: {
    title: 'Sean',
    body: 'Hi'
  }
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_POST',
  payload:{
    title: 'Sean'
  }
});
console.log(store.getState());
