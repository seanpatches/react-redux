import { createStore } from 'redux';
import reducer from './reducers/Reducer';

const Store = createStore(reducer);

Store.dispatch({
  type: 'ADD_DRINK',
  payload: 'tequila'
});
console.log('+drink', Store.getState());

// Store.dispatch({
//   type: 'ADD_CHIPS',
//   payload: 'Lays'
// });
// console.log('+chips', Store.getState());

// Store.dispatch({
//   type: 'ADD_LETTUCE',
//   payload: 'Lettuce'
// });
// console.log('+let', Store.getState());

// Store.dispatch({
//   type: 'ADD_TOMATO',
//   payload: 'Tomato'
// });
// console.log('+tom', Store.getState());


// Store.dispatch({
//   type: 'REMOVE_DRINK',
//   payload: null
// });
// console.log('-drink', Store.getState());

// Store.dispatch({
//   type: 'REMOVE_CHIPS',
//   payload: null
// });
// console.log('-chips', Store.getState());

// Store.dispatch({
//   type: 'REMOVE_INGREDIENT',
//   payload: 'Tomato'
// });
// console.log('-all', Store.getState());

// Store.dispatch({
//   type: 'REMOVE_ALL',
//   payload: null
// });
// console.log('-all', Store.getState());

