import React, { useState, useEffect } from "react";
import "./RecipeIngredients.scss";

import {Ingredients} from "../../../domain/recipe-details";

interface RecipeIngredientsProps {
	ingredients: Ingredients[];
}

interface Obj { 
	name: string,
	value: string,
	unit: string,
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ingredients}) => {

	const[widgets, setWidgets] = useState<Obj[]>([])
console.log(widgets);

	function handleOnDrag(e: React.DragEvent, widgetType: string ) {

		e.dataTransfer.setData("aa", widgetType)
	}

	function handleOnDrop (e: React.DragEvent) {
		const widgetType = e.dataTransfer.getData("aa") as string
		const createArray = widgetType.split(",")
	

		let createObjectData = {
			name: createArray[0],
			value: createArray[1],
			unit: createArray[2],
		}
		

		setWidgets([...widgets, createObjectData])
	}

	function handleDragOver(e: React.DragEvent) {
		e.preventDefault()
	}

  return (
	<section className="recipe__ingredient-wrapper">
		<h3 className="ingredient__title" >Ingredients</h3>
			{ingredients.map((elem, index) => (
				<div key={index} className="ingredient__wrapper" draggable 
				onDragStart={(e) => handleOnDrag(e, `${elem.name}, ${elem.amount.metric.value}, ${elem.amount.metric.unit}`) }>
					<p className="ingredient__name"  >{elem.name}</p>
					<p className="ingredient__metric">
						{Math.round(elem.amount.metric.value)} {elem.amount.metric.unit}
					</p>
				</div>
				
          ))}
			<div className="testDiv" onDrop={handleOnDrop} onDragOver={handleDragOver}>
				{
					widgets.map((widget, index) => (
						<div className="dropped-widget" key={index}>
							<p>{widget.name}</p>
							<p>{widget.value}</p>
							<p>{widget.unit}</p>
						</div>)
					)
					
				}
			</div>
	</section>
          
  );
};

export default RecipeIngredients;
