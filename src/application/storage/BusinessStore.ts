import { action, makeAutoObservable, toJS } from "mobx";

import { FilreredRecipe } from "../../domain/recipe-details";

interface Store {
  recipeId: number;
  recipeCategori: string;
  filteredRecipe: FilreredRecipe;
  pageName: string;
  getRecipeId: (id: number) => void;
  getRecipeCategory: (nameCategori: string) => void;
  getFilteredRecipe: (object: FilreredRecipe) => void;
  getPageName: (pageName: string) => void;
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

  getRecipeId: action(function (this: Store, id: number) {
    this.recipeId = id;
  }),
  getRecipeCategory: action(function (this: Store, nameCategori: string) {
    this.recipeCategori = nameCategori;
  }),

  getFilteredRecipe: action(function (this: Store, object: FilreredRecipe) {
    this.filteredRecipe = object;
    console.log(" this.filteredRecipe", toJS(this.filteredRecipe));
  }),
  getPageName: action(function (this: Store, pageName: string) {
    this.pageName = pageName;
  }),
});
