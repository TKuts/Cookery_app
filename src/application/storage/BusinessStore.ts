import { observer } from "mobx-react-lite";
import { useObserver } from "mobx-react-lite";
import { useState } from "react";
// const { observable } = mobx;
import { makeAutoObservable, action, toJS } from "mobx";

interface Recipe {
	id: number;
	title: string;
	readyInMinutes: number;
	dishTypes: string[];
	image: string;
	summary: string;
}

interface Store {
  recipeByCategory: Recipe[];
  recipeId: number;
  getRecipeByCategory: (array: Recipe[]) => void;
  getRecipeId: (id: number) => void;
}

const recipeByCategoryFilter = ["id","title",	"readyInMinutes", "dishTypes", "image", "summary"]

export const store: Store = makeAutoObservable({
  recipeByCategory: [],
  recipeId: null,
  getRecipeByCategory: action(function(this: Store, array: Recipe[]) {
    this.recipeByCategory.length = 0;

	 array.map((element) => {
		let obj = {}
		recipeByCategoryFilter.map(catelori => {
			obj[catelori] = element[catelori]
	 	
	})
	this.recipeByCategory.push(obj)
})}),
  getRecipeId: action(function(this: Store, id: number){
	this.recipeId = id}
	)
});



// analyzedInstructions замість (const apiNutrition)
