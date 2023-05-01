const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;

import  sendRequest  from "../adaptters/sendRequest";

import {Ingredients, SelectedRecipe, Instructions, Nutrition} from "../domain/recipe-details";

// import  { store } from "../application/storage/BusinessStore"

// const { recipeId, recipeByCategory} = store;

export const apiIngredients =  (id: number) => {
	return sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
		.then((respons: {ingredients: Ingredients[] }) => respons);
};
