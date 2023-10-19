import { FilreredRecipe, IngredientForShop } from "../domain/recipe-details";

export interface Store {
  recipeId: number;
  recipeCategori: string;
  filteredRecipe: FilreredRecipe;
  pageName: string;
  dataForFilter: string[];
  excludeIngredients: string;
  ingredientsForShop: IngredientForShop[];
  getRecipeId: (id: number) => void;
  getRecipeCategory: (nameCategori: string) => void;
  getFilteredRecipe: (object: FilreredRecipe) => void;
  getPageName: (pageName: string) => void;
  getExcludeIngredients: (excludeIngredients: string[]) => void;
  getIngredientsForShop: (ingredients: IngredientForShop) => void;
}