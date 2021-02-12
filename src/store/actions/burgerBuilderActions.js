import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

/* 

ACTION CREATORS: returns an action
action creators are especially useful for running asynchronous code
to handle asynchronous code we have to use a library called redux-thunk
action creators aren't really a core concept of redux, hence,
we shouldn't prepare the state update too much here 

*/

export const addIngredient = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredientName,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  // this is possible because of redux-thunk
  return (dispatch) => {
    axios
      .get("https://react-burger-builder-2bd82.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
