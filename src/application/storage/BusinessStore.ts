import { action, makeAutoObservable } from "mobx";
import { FilreredRecipe, IngredientForShop } from "../../domain/recipe-details";
import { Store } from "../../domain/store";


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

  getIngredientsForShop: action(function (
    this: Store,
    ingredients: IngredientForShop
  ) {
    const widgetExist = store.ingredientsForShop.find(
      (widget) => widget.name === ingredients.name
    );

    if (!widgetExist) {
      this.ingredientsForShop.push(ingredients);
    } else {
      store.ingredientsForShop.forEach((widget, index) => {
        if (widget.name === ingredients.name) {
          widget.value = (+widget.value + +ingredients.value).toString();
          store.ingredientsForShop[index] = widget;
        }
      });
    }
  }),
});
