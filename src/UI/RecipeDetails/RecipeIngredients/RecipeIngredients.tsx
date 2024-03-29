import React from "react";
import { store } from "../../../application/storage/BusinessStore";
import DragAndDrop from "../../DragAndDrop/DragAndDrop";
import OtherRecipe from "../../OtherRecipe/OtherRecipe";
import "./RecipeIngredients.scss";

const RecipeIngredients: React.FC = () => {

	const { ingredients } = store.filteredRecipe.nutrition;
	const lengthIngredientBlock = Array.isArray(ingredients) ? ingredients.length : null;
	const handleOnDrag = (event: React.DragEvent, widgetType: string) => {
		event.dataTransfer.setData("getData", widgetType);
	};

	const renderIngredients = ingredients.map((elem, index) => (
		<li
			key={index}
			className="recipe__section-ingredient"
			draggable
			onDragStart={(event) =>
				handleOnDrag(event, `${elem.name}, ${elem.amount}, ${elem.unit}, ${elem.id}`)}>
			<p>{elem.name}</p>
			<p>{elem.amount} {elem.unit}
			</p>
		</li>
	))

	return (
		ingredients && renderIngredients &&
		<section className="recipe__ingredient">
			<div className="recipe__ingredient-section">
				<h3 className="recipe__ingredient-title">Ingredients</h3>
				<ul className="recipe__section">
					{renderIngredients}
				</ul>
			</div>
			<OtherRecipe lengthIngredientBlock={lengthIngredientBlock} />
			<DragAndDrop />
		</section>
	);
};

export default RecipeIngredients;
