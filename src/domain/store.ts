import { FilreredRecipe, ingredientForShop } from "../domain/recipe-details";

export interface Store {
  recipeId: number;
  recipeCategori: string;
  filteredRecipe: FilreredRecipe;
  pageName: string;
  dataForFilter: string[];
  excludeIngredients: string;
  ingredientsForShop: ingredientForShop[];
  getRecipeId: (id: number) => void;
  getRecipeCategory: (nameCategori: string) => void;
  getFilteredRecipe: (object: FilreredRecipe) => void;
  getPageName: (pageName: string) => void;
  getExcludeIngredients: (excludeIngredients: string[]) => void;
  getIngredientsForShop: (ingredients: ingredientForShop) => void;
}