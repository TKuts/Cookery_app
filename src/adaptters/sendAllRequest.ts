const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const RANDOM_NUMBER = import.meta.env.VITE_REACT_RANDOM_NUMBER;
const TAGS = import.meta.env.VITE_REACT_RANDOM_TAGS;

import  sendRequest  from "../adaptters/sendRequest";
import {Ingredients, Nutrition, SelectedRecipe} from "../domain/recipe-details";


export const apiIngredients =  (id: number) => {  // ok
	return sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
		.then((respons: {ingredients: Ingredients[] }) => respons);
};

export const apiNutrition = (id: number) => {
	return sendRequest(`${API}${id}${NUTRITION}${API_KEY}`)
	.then((respons: {nutrients: Nutrition[]}) => respons);
};


export const randomRecipe = (numberOfRecipes: number, categoriOfRecipes: string ) => {
	return sendRequest(`${API}${RANDOM_NUMBER}${numberOfRecipes}${TAGS}${categoriOfRecipes}&${API_KEY}`).then((respons: {recipes: SelectedRecipe[]}) => respons);
}

 export const getRecipeByCategory = (nameCategories: string): any => {
	return sendRequest(`${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`)
		.then((respons: {results: SelectedRecipe[]}) => respons)
	};