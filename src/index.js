import { createStore } from 'redux';
import reducer from './reducers/index.js';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: 'ADD_POST',
  payload: {
    title: 'hi',
    body: 'test'
  }
});
