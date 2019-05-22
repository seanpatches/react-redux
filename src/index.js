import { createStore } from 'redux';

const initialState = {
  drink: null,
  chips: null,
  sandwichIngredients: [],
};

function reducer(state = initialState, action){
  switch(action.type){
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
  
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
  
    case 'ADD_LETTUCE':
      return { ...state, sandwichIngredients: [...state.sandwichIngredients, action.payload] };

    case 'ADD_TOMATO':
      return { ...state, sandwichIngredients: [...state.sandwichIngredients, action.payload] };

    case 'REMOVE_DRINK':
      return { ...state, drink: null };
  
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
  
    case 'REMOVE_INGREDIENT':
      return { ...state, sandwichIngredients: state.sandwichIngredients.filter((ingredient) => ingredient !== action.payload) };

    case 'REMOVE_ALL':
      return { ...state, sandwichIngredients: null, drinks: null, chips: null };

    default:
      state;
  }
}

const Store = createStore(reducer);

Store.dispatch({
  type: 'ADD_DRINK',
  payload: 'tequila'
});
console.log('+drink', Store.getState());

Store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Lays'
});
console.log('+chips', Store.getState());

Store.dispatch({
  type: 'ADD_LETTUCE',
  payload: 'Lettuce'
});
console.log('+let', Store.getState());

Store.dispatch({
  type: 'ADD_TOMATO',
  payload: 'Tomato'
});
console.log('+tom', Store.getState());


Store.dispatch({
  type: 'REMOVE_DRINK',
  payload: null
});
console.log('-drink', Store.getState());

Store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: null
});
console.log('-chips', Store.getState());

Store.dispatch({
  type: 'REMOVE_INGREDIENT',
  payload: 'Tomato'
});
console.log('-all', Store.getState());

Store.dispatch({
  type: 'REMOVE_ALL',
  payload: null
});
console.log('-all', Store.getState());

