import { createStore } from 'redux';
import reducer from './reducers/index.js';

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_POST',
  payload: {
    title: 'Sean',
    body: 'Hi'
  }
});

store.dispatch({
  type: 'UPDATE_POST',
  payload:{
    title: 'Sean',
    update: 'updated'
  }
});

store.dispatch({
  type: 'REMOVE_POST',
  payload:{
    title: 'Sean'
  }
});

store.dispatch({
  type: 'ADD_COMMENT',
  payload:{
    id: '1',
    comment: 'boo'
  }
});

store.dispatch({
  type: 'REMOVE_COMMENT',
  payload:{
    id: '1'
  }
});


