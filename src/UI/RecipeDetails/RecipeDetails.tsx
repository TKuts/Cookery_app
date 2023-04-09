import React, { useState, useEffect } from "react";
import "./RecipeDetails.scss";
import  sendRequest  from "../../adaptters/sendRequest";
import {Ingredients, Summary, Instructions} from "../../domain/recipe-details";

import RecipeTitle from "./RecipeTitle/RecipeTitle"
import RecipeInstructions from "./RecipeInstructions/RecipeInstructions"
import RecipeSummary from "./RecipeSummary/RecipeSummary"
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients"


const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const TUTORIAL = import.meta.env.VITE_REACT_TUTORIAL;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

interface RecipeDetailsProps {
	recipeId: number;
}



const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipeId }) => {

  const [ingredients, setIngredients] = useState< null | Ingredients[]>([]);
  const [summary, setSummary] = useState< null | Summary>(null) ;
  const [instructions, setInstructions] = useState< null | Instructions[]>([]);
  

  useEffect(() => {
    apiIngredients(recipeId);
    apiSummary(recipeId);
    apiInstructions(recipeId)
  }, []);

	const apiIngredients =  (id: number) => {
		sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
			.then((rec: {ingredients: Ingredients[] }) => setIngredients(rec.ingredients));
	};

	const apiSummary = (id: number) => {
		sendRequest(`${API}${id}/information?includeNutrition=false&${API_KEY}`)
			.then((rec: Summary) => setSummary(rec));
	};

  const apiInstructions =  (id: number) => {
	sendRequest(`${API}${id}${TUTORIAL}${API_KEY}`)
      .then((rec: [{steps: Instructions[]}]) => setInstructions(rec[0].steps)
		);
	
  };


  return (
   summary && ingredients && instructions &&
		<section className="detailed__wrapper">
			<RecipeTitle summary={summary}/>
			<div className="detailed__block">
				<RecipeSummary summary={summary}/>
				<RecipeIngredients ingredients={ingredients}/>
			</div>
			<RecipeInstructions instructions={instructions} />
		</section>
          
  );
};

export default RecipeDetails;
