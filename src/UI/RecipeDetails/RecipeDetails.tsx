import React, { useState, useEffect } from "react";
import "./RecipeDetails.scss";
import  sendRequest  from "../../adaptters/sendRequest";
import {Ingredients, Summary, Instructions, Nutrition} from "../../domain/recipe-details";

import RecipeTitle from "./RecipeTitle/RecipeTitle"
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions"
import RecipeSummary from "./RecipeSummary/RecipeSummary"
import RecipeNutrition from "./RecipeNutrition/RecipeNutrition"
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients"

const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const TUTORIAL = import.meta.env.VITE_REACT_TUTORIAL;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const NUTRITION = import.meta.env.VITE_REACT_ALL_NUTRITION;

interface RecipeDetailsProps {
	recipeId: number;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipeId }) => {

  const [ingredients, setIngredients] = useState< null | Ingredients[]>([]);
  const [summary, setSummary] = useState< null | Summary>(null) ;
  const [instructions, setInstructions] = useState< null | Instructions[]>([]);
  const [nutrition, setNutrition] = useState <null | Nutrition[]> ([])
  

  useEffect(() => {
    apiIngredients(recipeId);
    apiSummary(recipeId);
    apiInstructions(recipeId)
	 apiNutrition(recipeId)
  }, []);

	const apiIngredients =  (id: number) => {
		sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
			.then((respons: {ingredients: Ingredients[] }) => setIngredients(respons.ingredients));
	};

	const apiNutrition = (id: number) => {
		sendRequest(`${API}${id}${NUTRITION}${API_KEY}`).then((respons: {nutrients: Nutrition[]}) => setNutrition(respons.nutrients)
		 )
	}

	const apiSummary = (id: number) => {
		sendRequest(`${API}${id}/information?includeNutrition=false&${API_KEY}`)
			.then((respons: Summary) => setSummary(respons));
	};

  const apiInstructions =  (id: number) => {
	sendRequest(`${API}${id}${TUTORIAL}${API_KEY}`)
      .then((respons: [{steps: Instructions[]}]) => setInstructions(respons[0].steps)
		);
	
  };

  
  return (
   summary && ingredients && instructions && nutrition &&
		<section className="detailed__wrapper">
			<RecipeTitle summary={summary}/>
			<RecipeSummary summary={summary} 
			children={<RecipeNutrition nutrition={nutrition}/>}/>
			<RecipeIngredients ingredients={ingredients}/>
			<RecipeInstructions instructions={instructions} />
		</section>
          
  );
};

export default RecipeDetails;
