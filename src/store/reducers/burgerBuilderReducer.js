import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

// Unlike Action Creators which can run Async Code, Reducers can only run Pure, Sync Code.
// 'Input in, Updated State out'
// Core Redux Concept: Reducers update the state, hence we should put the logic here.

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  // usage of utility function
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    // just copying ...state will not make a deep clone of ingredients
    ingredients: {
      // deep clone
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        error: false,
        totalPrice: 4,
        building: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      // utlity function
      return updateObject(state, { error: true });
    /*   return {
        ...state,
        error: true,
      }; */
    default:
      return state;
  }
};

export default reducer;
