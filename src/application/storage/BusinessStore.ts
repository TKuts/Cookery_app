import { action, makeAutoObservable, toJS } from "mobx";

import { FilreredRecipe } from "../../domain/recipe-details";

interface Store {
  recipeId: number;
  recipeCategori: string;
  filteredRecipe: FilreredRecipe;
  pageName: string;
  dataForFilter: string[];
  excludeIngredients: string;
  ingredientsForShop: {}[];
  getRecipeId: (id: number) => void;
  getRecipeCategory: (nameCategori: string) => void;
  getFilteredRecipe: (object: FilreredRecipe) => void;
  getPageName: (pageName: string) => void;
  getExcludeIngredients: (excludeIngredients: string[]) => void;
  getIngredientsForShop: (ingredients: {}[]) => void;
}

export const store: Store = makeAutoObservable({
  recipeId: 0,
  recipeCategori: "",
  filteredRecipe: {
    id: 0,
    title: "",
    readyInMinutes: 0,
    dishTypes: [],
    image: "",
    summary: "",
    analyzedInstructions: [
      {
        steps: [
          {
            number: 0,
            step: "",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    nutrition: {
      nutrients: [],
      ingredients: [],
    },
  },
  pageName: "",
  dataForFilter: [],
  excludeIngredients: "",
  ingredientsForShop: [],
  getRecipeId: action(function (this: Store, id: number) {
    this.recipeId = id;
  }),
  getRecipeCategory: action(function (this: Store, nameCategori: string) {
    this.recipeCategori = nameCategori;
  }),

  getFilteredRecipe: action(function (this: Store, object: FilreredRecipe) {
    this.filteredRecipe = object;
  }),
  getPageName: action(function (this: Store, pageName: string) {
    this.pageName = pageName;
  }),
  getDataForFilter: action(function (this: Store, dataForFilter: string[]) {
    this.dataForFilter = dataForFilter;
  }),
  getExcludeIngredients: action(function (
    this: Store,
    excludeIngredients: string[]
  ) {
    let ingredientString: string = "";

    excludeIngredients.forEach((ingredient) => {
      ingredientString = ingredientString + `${ingredient},`;
    });

    this.excludeIngredients = ingredientString;
  }),

  getIngredientsForShop: action(function (this: Store, ingredients: {}[]) {
    this.ingredientsForShop = [...ingredients];	
  }),
});
