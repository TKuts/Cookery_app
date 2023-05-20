import React, { useEffect, useState } from "react";
import "./SelectedRecipePage.scss";

import RecipeTitle from "../../UI/RecipeDetails/RecipeTitle/RecipeTitle"
import RecipeInstructions from "../../UI/RecipeDetails/RecipeInstructions/RecipeInstructions"
import RecipeSummary from "../../UI/RecipeDetails/RecipeSummary/RecipeSummary"
import RecipeNutrition from "../../UI/RecipeDetails/RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "../../UI/RecipeDetails/RecipeIngredients/RecipeIngredients"
import MayLikeRecipes from "../../UI/MayLikeRecipes/MayLikeRecipes"

import {  SelectedRecipe, FilreredRecipe } from "../../domain/recipe-details"

import { apiSelectedRecipe } from "../../adaptters/sendAllRequest"

import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import  { store } from "../../application/storage/BusinessStore"

interface PropsORecipeDetails {
	
}

const SelectedRecipePage: React.FC<PropsORecipeDetails> = observer(() => {

	const { recipeId } = store;

	const recipeByCategoryFilter: string[] = ["id","title", "readyInMinutes", "dishTypes", "image", "summary", "analyzedInstructions", "nutrition"]

	useEffect(() => {
		apiSelectedRecipe(recipeId).then((respons) => madeFilterRecioe(recipeByCategoryFilter, respons));	
		
	}, [recipeId])

	const madeFilterRecioe = (howFiltered: string[], whatFiltered: SelectedRecipe ) => {
		let obj: FilreredRecipe = {}
	
		howFiltered.map((categori: string) => {
			
			obj[categori] = whatFiltered[categori]
		})
console.log("obj", toJS(obj));

		store.getFilteredRecipe(obj)
	}

  return (
	store.filteredRecipe && 
		<section className="detailed__wrapper">
			<RecipeTitle />
			<RecipeSummary >
				<RecipeNutrition/>
			</RecipeSummary>
			<RecipeIngredients />
			<RecipeInstructions />
			<MayLikeRecipes/>
		</section>
  );
});

export default SelectedRecipePage;
