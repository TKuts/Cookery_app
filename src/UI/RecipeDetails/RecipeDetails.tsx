import React from "react";
import "./RecipeDetails.scss";

import RecipeTitle from "./RecipeTitle/RecipeTitle"
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions"
import RecipeSummary from "./RecipeSummary/RecipeSummary"
import RecipeNutrition from "./RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients"

import { observer} from "mobx-react-lite";

const RecipeDetails: React.FC = observer(() => {

  return (
		<section className="detailed__wrapper">
			<RecipeTitle />
			<RecipeSummary >
				<RecipeNutrition/>
			</RecipeSummary>
			<RecipeIngredients />
			<RecipeInstructions />
		</section>
          
  );
});

export default RecipeDetails;
