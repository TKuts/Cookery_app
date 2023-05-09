import React, { useState, useEffect, ReactNode} from "react";
import "./RecipeSummary.scss";

import { SelectedRecipe } from "../../../domain/recipe-details";
import { toJS } from "mobx";
import  { store } from "../../../application/storage/BusinessStore"

interface RecipeSummary {
	children: ReactNode;
}

const RecipeSummary: React.FC<RecipeSummary> = ({ children }) => {

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

	 const createMarkup = (summary: SelectedRecipe) => {
		return { __html: summary.summary };
	 };

  return (
	selectedRecipe &&
	<section className="recipe__summury-wrapper">
		<figure className="block__left">
			<img
			className="block__left-img"
			src={selectedRecipe.image}
			alt={selectedRecipe.title}/>
			{children}
		</figure>
		<p
		className="block__left-text"
		dangerouslySetInnerHTML={createMarkup(selectedRecipe)}/>
	</section>
  );
};

export default RecipeSummary;
