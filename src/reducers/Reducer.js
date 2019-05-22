import { ADD_DRINK, ADD_CHIPS, ADD_INGREDIENT, REMOVE_CHIPS, REMOVE_DRINK, REMOVE_INGREDIENT, REMOVE_ALL } from '../actions/lunchActions';

export default function reducer(state = initialState, action){
  switch(action.type){
    case ADD_DRINK:
      return { ...state, drink: action.payload };
  
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
  
    case ADD_INGREDIENT:
      return { ...state, sandwichIngredients: [...state.sandwichIngredients, action.payload] };

    case REMOVE_DRINK:
      return { ...state, drink: null };
  
    case REMOVE_CHIPS:
      return { ...state, chips: null };
  
    case REMOVE_INGREDIENT:
      return { ...state, sandwichIngredients: state.sandwichIngredients.filter((ingredient) => ingredient !== action.payload) };

    case REMOVE_ALL:
      return { ...state, sandwichIngredients: null, drinks: null, chips: null };

    default:
      return state;
  }
}

const initialState = {
  drink: null,
  chips: null,
  sandwichIngredients: [],
};
