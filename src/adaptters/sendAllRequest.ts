const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const RANDOM_NUMBER = import.meta.env.VITE_REACT_RANDOM_NUMBER;
const TAGS = import.meta.env.VITE_REACT_RANDOM_TAGS;
const RECIPE_INFORMATION = import.meta.env.VITE_REACT_RECIPE_INFORMATION;

import sendRequest from "../adaptters/sendRequest";
import {
  Ingredients,
  Nutrition,
  SelectedRecipe,
  FyllRecipeFromApi,
} from "../domain/recipe-details";

export const apiSelectedRecipe = (id: number) => {
  return sendRequest(
    `${API}${id}/information?includeNutrition=true&${API_KEY}`
  ).then((respons: SelectedRecipe) => respons);
};

export const randomRecipe = (
  numberOfRecipes: number,
  categoriOfRecipes?: string
) => {
  if (categoriOfRecipes) {
    return sendRequest(
      `${API}${RANDOM_NUMBER}${numberOfRecipes}${TAGS}${categoriOfRecipes}&${API_KEY}`
    ).then((respons: { recipes: SelectedRecipe[] }) => respons);
  } else {
    return sendRequest(
      `${API}${RANDOM_NUMBER}${numberOfRecipes}${TAGS}&${API_KEY}`
    ).then((respons: { recipes: SelectedRecipe[] }) => respons);
  }
};

export const getRecipeByCategory = (nameCategories: string): any => {
  return sendRequest(
    `${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`
  ).then((respons: { results: SelectedRecipe[] }) => respons);
};

export const getFasterRecipes = () => {
  return sendRequest(
    `${API}${ALL_RECIPES}maxReadyTime=10&${RECIPE_INFORMATION}&number=9&${API_KEY}`
  ).then((respons: { results: SelectedRecipe[] }) => respons);
};

export const getAllRecipes = () => {
  return sendRequest(
    `https://api.spoonacular.com/recipes/complexSearch?&${RECIPE_INFORMATION}number=100&${API_KEY}`
  ).then((respons: { results: SelectedRecipe[] }) => respons);
};
