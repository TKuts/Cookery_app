import React, { useState, useEffect } from "react";
import "./RecipeDetails.scss";
import  sendRequest  from "../../adaptters/sendRequest";
import {Ingredients, SelectedRecipe, Instructions, Nutrition} from "../../domain/recipe-details";

import RecipeTitle from "./RecipeTitle/RecipeTitle"
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions"
import RecipeSummary from "./RecipeSummary/RecipeSummary"
import RecipeNutrition from "./RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients"

const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;

import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"
import { toJS } from "mobx";

const RecipeDetails: React.FC = observer(() => {

  const [ingredients, setIngredients] = useState< null | Ingredients[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState< null | SelectedRecipe >(null) ;
  const [recipeInstructions, setRecipeInstructions] = useState<Instructions[]>([]);
  const [nutrition, setNutrition] = useState <null | Nutrition[]> ([])
  
  const { recipeId, recipeByCategory} = store;

  useEffect(() => {
    apiIngredients(recipeId);
    allDataSelectedRecipe(recipeId);
	 apiNutrition(recipeId)
  }, [recipeId]);

	const apiIngredients =  (id: number) => {
		sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
			.then((respons: {ingredients: Ingredients[] }) => setIngredients(respons.ingredients));
	};

	const apiNutrition = (id: number) => {
		sendRequest(`${API}${id}${NUTRITION}${API_KEY}`)
		.then((respons: {nutrients: Nutrition[]}) => setNutrition(respons.nutrients))
	}

	const allDataSelectedRecipe = (id: number) => {
		let selectedRecipe = null
		recipeByCategory.map(recipe => {
			if (recipe.id === id){
				selectedRecipe = (toJS(recipe));
			}
		})
		setSelectedRecipe(selectedRecipe)
		apiInstructions(selectedRecipe)
	};

	const apiInstructions =  (recipe: null | SelectedRecipe) => {
		recipe ? setRecipeInstructions(recipe.analyzedInstructions[0].steps) : console.log("робити помилку");
	};

  return (
   selectedRecipe && ingredients && nutrition &&
		<section className="detailed__wrapper">
			<RecipeTitle summary={selectedRecipe}/>
			<RecipeSummary summary={selectedRecipe}>
				<RecipeNutrition nutrition={nutrition}/>
			</RecipeSummary>
			<RecipeIngredients ingredients={ingredients}/>
			<RecipeInstructions instructions={recipeInstructions} />
		</section>
          
  );
});

export default RecipeDetails;
