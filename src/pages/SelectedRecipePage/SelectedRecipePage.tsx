import React, { useEffect } from "react";
import "./SelectedRecipePage.scss";

import RecipeTitle from "../../UI/RecipeDetails/RecipeTitle/RecipeTitle"
import RecipeInstructions from "../../UI/RecipeDetails/RecipeInstructions/RecipeInstructions"
import RecipeSummary from "../../UI/RecipeDetails/RecipeSummary/RecipeSummary"
import RecipeNutrition from "../../UI/RecipeDetails/RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "../../UI/RecipeDetails/RecipeIngredients/RecipeIngredients"
import MayLikeRecipes from "../../UI/MayLikeRecipes/MayLikeRecipes"

import { apiSelectedRecipe } from "../../adaptters/sendAllRequest"

import { observer } from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"

interface PropsORecipeDetails {
	
}

const SelectedRecipePage: React.FC<PropsORecipeDetails> = observer(() => {

	const {recipeId, selectedRecipe, getSelectedRecipe} = store;


	useEffect(() => {
		apiSelectedRecipe(recipeId).then((respons) => getSelectedRecipe(respons))
	}, [recipeId])

	console.log("selectedRecipe store", selectedRecipe);
	

  return (
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
