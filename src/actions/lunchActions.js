export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => {
  return { type: ADD_DRINK, payload: drink };
};

export const ADD_CHIPS = 'ADD_CHIPS';
export const addChips = chips => {
  return { type: ADD_CHIPS, payload: chips };
};

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const addIngredient = ingredient => {
  return { type: ADD_INGREDIENT, payload: ingredient };
};

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => {
  return { type:REMOVE_DRINK, payload: null };
};

export const REMOVE_CHIPS = 'REMOVE_CHIPS';
export const removeChips = () => {
  return { type: REMOVE_CHIPS, payload: null };
};

export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const removeIngredient = () => {
  return { type: REMOVE_INGREDIENT, payload: null };
};
