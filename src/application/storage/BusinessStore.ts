import { observer } from "mobx-react-lite";
import { useObserver } from "mobx-react-lite";
import { useState } from "react";
// const { observable } = mobx;
import { makeAutoObservable, action, toJS } from "mobx";

import {SelectedRecipe} from "../../domain/recipe-details"
// interface Recipe {
// 	id: number;
// 	title: string;
// 	readyInMinutes: number;
// 	dishTypes: string[];
// 	image: string;
// 	summary: string;
// }

interface Store {
  recipeByCategory: SelectedRecipe[];
  recipeId: number;
  getRecipeByCategory: (array: SelectedRecipe[]) => void;
  getRecipeId: (id: number) => void;
}

const recipeByCategoryFilter: string[] = ["id","title",	"readyInMinutes", "dishTypes", "image", "summary", "analyzedInstructions"]

export const store: Store = makeAutoObservable({
  recipeByCategory: [],
  recipeId: 0,
  getRecipeByCategory: action(function(this: Store, array: SelectedRecipe[]) {
    this.recipeByCategory.length = 0;

	 array.map((element) => {
		let obj = {}
		recipeByCategoryFilter.map(catelori  => {			
			obj[catelori] = element[catelori]
	 	
	})
	this.recipeByCategory.push(obj)
	// console.log("recipeByCategory", toJS(this.recipeByCategory));
	
})}),
  getRecipeId: action(function(this: Store, id: number){
	this.recipeId = id}
	)
});



// analyzedInstructions замість (const apiNutrition)