import React, { useState, useEffect } from "react";
import "./RecipeIngredients.scss";

import {Ingredients} from "../../../domain/recipe-details";

interface RecipeIngredientsProps {
	ingredients: Ingredients[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ingredients}) => {

  return (
	<section className="recipe__ingredient-wrapper">
		<h3 className="ingredient__title" >Ingredients</h3>
			{ingredients.map((elem, index) => (
				<div key={index} className="ingredient__wrapper">
				<p className="ingredient__name">{elem.name}</p>
				<p className="ingredient__metric">
					{Math.round(elem.amount.metric.value)} {elem.amount.metric.unit}
				</p>
				</div>
          ))}
	</section>
          
  );
};

export default RecipeIngredients;
