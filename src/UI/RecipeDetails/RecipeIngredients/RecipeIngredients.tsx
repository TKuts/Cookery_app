import React, { useEffect, useState } from "react";
import "./RecipeIngredients.scss";

import { Ingredients } from "../../../domain/recipe-details";
import DragAndDrop from "../../DragAndDrop/DragAndDrop";
import OtherRecipe from "../../OtherRecipe/OtherRecipe";
import { toJS } from "mobx";
import { store } from "../../../application/storage/BusinessStore";

interface PropsRecipeIngredients {

}

const RecipeIngredients: React.FC<PropsRecipeIngredients> = () => {

	const { nutrition } = store.filteredRecipe
	const [stateIngredients, setStateIngredients] = useState<Ingredients[] | null>(null);

	const lengthIngredientBlock = Array.isArray(stateIngredients) ? stateIngredients.length : null


	useEffect(() => {
		setStateIngredients(nutrition.ingredients)
	}, [nutrition]);

	const handleOnDrag = (event: React.DragEvent, widgetType: string) => {
		event.dataTransfer.setData("aa", widgetType);
	};


	return (
		stateIngredients && store.filteredRecipe &&
		<section className="recipe__ingredient">
			<div className="recipe__ingredient-section">
				<h3 className="recipe__ingredient-title">Ingredients</h3>
				<ul className="recipe__section"
				>
					{stateIngredients.map((elem, index) => (
						<li
							key={index}
							className="recipe__section-ingredient"
							draggable
							onDragStart={(event) =>
								handleOnDrag(event, `${elem.name}, ${elem.amount}, ${elem.unit}`)}>
							<p>{elem.name}</p>
							<p>{Math.round(elem.amount)} {elem.unit}
							</p>
						</li>
					))}
				</ul>

			</div>
			<OtherRecipe lengthIngredientBlock={lengthIngredientBlock} />
			<DragAndDrop />
		</section>
	);
};

export default RecipeIngredients;
