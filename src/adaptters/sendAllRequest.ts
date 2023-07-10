const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const RANDOM_NUMBER = import.meta.env.VITE_REACT_RANDOM_NUMBER;
const TAGS = import.meta.env.VITE_REACT_RANDOM_TAGS;
const RECIPE_INFORMATION = import.meta.env.VITE_REACT_RECIPE_INFORMATION;

import sendRequest from "../adaptters/sendRequest";
import { SelectedRecipe } from "../domain/recipe-details";

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

export const getFasterRecipes = () => {
  return sendRequest(
    `${API}${ALL_RECIPES}maxReadyTime=10&${RECIPE_INFORMATION}&number=9&${API_KEY}`
  ).then((respons: { results: SelectedRecipe[] }) => respons);
};

export const getAllRecipes = (
  nameCategories?: string,
  ingredients?: string
) => {
  return sendRequest(
    `${API}${ALL_RECIPES}${RECIPE_INFORMATION}number=100&type=${nameCategories}&excludeIngredients=${ingredients}&${API_KEY}`
  ).then((respons: { results: SelectedRecipe[] }) => respons);
};

interface Ip {
  originalName: string;
  amount: number;
  id: number;
  estimatedCost: { value: number; unit: string };
  image: string;
}
export const getIngredienInformation = (id: string, value: string) => {
  return sendRequest(
    `https://api.spoonacular.com/food/ingredients/${id}/information?amount=${value}&${API_KEY}`
  ).then((respons: Ip) => respons);
};
