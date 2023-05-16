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
  recipeId: number;
  recipeCategori: string;
  selectedRecipe: {};
  getRecipeId: (id: number) => void;
  getRecipeCategory: (nameCategori: string) => void;
  getSelectedRecipe: (object: string) => void ;
}

const recipeByCategoryFilter: string[] = ["id","title", "readyInMinutes", "dishTypes", "image", "summary", "analyzedInstructions"]

export const store: Store = makeAutoObservable({
  recipeByCategory: [],
  recipeId: 0,
  selectedRecipe: {},
  recipeCategori: "",
  getRecipeId: action(function(this: Store, id: number){
	this.recipeId = id
	console.log("this.recipeId", this.recipeId);
	}),

	getRecipeCategory: action(function(this: Store, nameCategori: string){
		this.recipeCategori = nameCategori
	}),
	getSelectedRecipe: action(function(this: Store, object: string){
		this.selectedRecipe = object		
	}),
});



// analyzedInstructions замість (const apiNutrition)
