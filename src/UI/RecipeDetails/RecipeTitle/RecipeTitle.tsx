import React, { useState, useEffect } from "react";
import "./RecipeTitle.scss";

import { SelectedRecipe } from "../../../domain/recipe-details";
import { toJS } from "mobx";
import  { store } from "../../../application/storage/BusinessStore"

const RecipeTitle: React.FC = () => {

	const { recipeId, recipeByCategory} = store;
	const [selectedRecipe, setSelectedRecipe] = useState< null | SelectedRecipe >(null) ;

	useEffect(() => {	
		 allDataSelectedRecipe(recipeId); 
	  }, [recipeId]);

	  const allDataSelectedRecipe = (id: number) => {
		let selectedRecipe = null
		recipeByCategory.map(recipe => {
			if (recipe.id === id){
				selectedRecipe = (toJS(recipe));
			}
		})
		setSelectedRecipe(selectedRecipe)
	};

	const dishTypes = (data: string[]): any => {
		let newString = "";
		data && data.map((item) => {
			 newString += `#${item} `;
		  });
		return newString;
	 };

  return (
	selectedRecipe &&
		<section >
			<h2 className="detailed__title">{selectedRecipe.title}</h2>
			<div className="detailed__information">
				<div className="detailed__time">
					<i className="fa-regular fa-hourglass-half detailed__time-icons"></i>
					<div className="time__information">
						<p className="time__information-title">COOK TIME</p>
						<p className="time__information-minutes">{selectedRecipe.readyInMinutes} Minutes</p>
					</div>
				</div>
				<div className="detailed__type">
					<i className="fa-solid fa-utensils detailed__time-icons"></i>
					<p className="detailed__type-data">{dishTypes(selectedRecipe.dishTypes)}</p>
				</div>
			</div>
		</section>
  );
};

export default RecipeTitle;
