import React, { useEffect } from "react";
import "./SelectedRecipePage.scss";

import MayLikeRecipes from "../../UI/MayLikeRecipes/MayLikeRecipes";
import RecipeIngredients from "../../UI/RecipeDetails/RecipeIngredients/RecipeIngredients";
import RecipeInstructions from "../../UI/RecipeDetails/RecipeInstructions/RecipeInstructions";
import RecipeNutrition from "../../UI/RecipeDetails/RecipeNutrition/RecipeNutrition";
import RecipeSummary from "../../UI/RecipeDetails/RecipeSummary/RecipeSummary";
import RecipeTitle from "../../UI/RecipeDetails/RecipeTitle/RecipeTitle";

import { observer } from "mobx-react-lite";
import { apiSelectedRecipe } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";


const SelectedRecipePage: React.FC = observer(() => {

	const { recipeId } = store;

	useEffect(() => {

		apiSelectedRecipe(recipeId).then((respons) => {

			const { id, title, readyInMinutes, dishTypes, image, summary, analyzedInstructions, nutrition } = respons;

			store.getFilteredRecipe({ id, title, readyInMinutes, dishTypes, image, summary, analyzedInstructions, nutrition });
		})

		store.getPageName("Selected Recipe")
	}, [recipeId])


	return (
		store.filteredRecipe.nutrition &&
		<section className="detailed__wrapper">
			<RecipeTitle />
			<RecipeSummary >
				<RecipeNutrition />
			</RecipeSummary>
			<RecipeIngredients />
			<RecipeInstructions />
			<MayLikeRecipes />
		</section>
	);
});

export default SelectedRecipePage;
