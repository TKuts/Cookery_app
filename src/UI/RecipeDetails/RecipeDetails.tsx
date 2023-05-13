import React, { useEffect } from "react";
import "./RecipeDetails.scss";

import RecipeTitle from "./RecipeTitle/RecipeTitle"
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions"
import RecipeSummary from "./RecipeSummary/RecipeSummary"
import RecipeNutrition from "./RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients"
import MayLikeRecipes from "../MayLikeRecipes/MayLikeRecipes"

import { observer } from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"

interface PropsORecipeDetails {
	
}

const RecipeDetails: React.FC<PropsORecipeDetails> = observer(() => {

	const {recipeId} = store;

	// useEffect(() => {
		
	// }, [recipeId])

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

export default RecipeDetails;
