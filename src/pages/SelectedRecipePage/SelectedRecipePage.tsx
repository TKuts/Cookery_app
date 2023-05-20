import React, { useEffect, useState } from "react";
import "./SelectedRecipePage.scss";

import RecipeTitle from "../../UI/RecipeDetails/RecipeTitle/RecipeTitle"
import RecipeInstructions from "../../UI/RecipeDetails/RecipeInstructions/RecipeInstructions"
import RecipeSummary from "../../UI/RecipeDetails/RecipeSummary/RecipeSummary"
import RecipeNutrition from "../../UI/RecipeDetails/RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "../../UI/RecipeDetails/RecipeIngredients/RecipeIngredients"
import MayLikeRecipes from "../../UI/MayLikeRecipes/MayLikeRecipes"

import { apiSelectedRecipe } from "../../adaptters/sendAllRequest"

import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import  { store } from "../../application/storage/BusinessStore"

interface PropsORecipeDetails {
	
}

const SelectedRecipePage: React.FC<PropsORecipeDetails> = observer(() => {

	const { recipeId } = store;

	const recipeByCategoryFilter: string[] = ["id","title", "readyInMinutes", "dishTypes", "image", "summary", "analyzedInstructions", "nutrition"]

	const [ recipeFromApi, setRecipeFromApi ] = useState({})

	useEffect(() => {
		apiSelectedRecipe(recipeId).then((respons) => setRecipeFromApi(respons));	
		
		
	}, [recipeId])
	let obj = {}
	console.log("recipeFromApi", recipeFromApi);
	recipeByCategoryFilter.map((categori) => {
		obj[categori] = recipeFromApi[categori]
	})
	
	// const { title, readyInMinutes, dishTypes} = store.filteredRecipe;
// console.log("obj",obj);

	store.getSelectedRecipe(obj)
  return (
	recipeFromApi && 
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
