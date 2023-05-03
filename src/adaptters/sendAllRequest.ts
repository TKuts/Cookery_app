const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;

import  sendRequest  from "../adaptters/sendRequest";
import {Ingredients, Nutrition} from "../domain/recipe-details";


export const apiIngredients =  (id: number) => {  // ok
	return sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
		.then((respons: {ingredients: Ingredients[] }) => respons);
};

export const apiNutrition = (id: number) => {
	return sendRequest(`${API}${id}${NUTRITION}${API_KEY}`)
	.then((respons: {nutrients: Nutrition[]}) => respons);
};