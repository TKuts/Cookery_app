import React, { useState, useEffect, ReactNode, useRef } from "react";
import "./RecipeIngredients.scss";

import { Ingredients } from "../../../domain/recipe-details";
import DragAndDrop from "../../DragAndDrop/DragAndDrop"
import OtherRecipe from "../../OtherRecipe/OtherRecipe"
import { apiIngredients } from "../../../adaptters/sendAllRequest"
import  { store } from "../../../application/storage/BusinessStore"

interface PropsRecipeIngredients{
	// children: ReactNode;
}


const RecipeIngredients: React.FC<PropsRecipeIngredients> = () => {
	const { recipeId } = store;
	const [ingredients, setIngredients] = useState< Ingredients[]  | null >(null);

	// const ref = useRef()
	useEffect(() => {	
		apiIngredients(recipeId).then((res) => setIngredients(res.ingredients))
		// console.log(ref.current);
		
	  }, [recipeId]);

	const handleOnDrag = (event: React.DragEvent, widgetType: string) => {
		event.dataTransfer.setData("aa", widgetType);
	 };
	
		
  return (
	ingredients &&
    <section className="recipe__ingredient">
		<div className="recipe__ingredient-section"> 
			<h3 className="recipe__ingredient-title">Ingredients</h3>
			<ul className="recipe__section" 
			// ref={ref}
			>
				{ingredients.map((elem, index) => (
				<li
					key={index}
					className="recipe__section-ingredient"
					draggable
					onDragStart={(event) =>
						handleOnDrag(event, `${elem.name}, ${elem.amount.metric.value}, ${elem.amount.metric.unit}`)}>
					<p>{elem.name}</p>
					<p>{Math.round(elem.amount.metric.value)} {elem.amount.metric.unit}
					</p>
				</li>
				))}
			</ul>
			
		</div>
		<OtherRecipe/>
      <DragAndDrop/>
    </section>
  );
};

export default RecipeIngredients;
