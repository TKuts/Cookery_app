import React, { useEffect, useState } from "react";
import { Nutrition } from "../../../domain/recipe-details";
import { store } from "../../../application/storage/BusinessStore";
import { toJS } from "mobx";
import "./RecipeNutrition.scss";

const RecipeNutrition: React.FC = () => {

	const { nutrients } = store.filteredRecipe.nutrition;

	const nutritionFilter = ['Calories', 'Fat', 'Protein', 'Carbohydrates', 'Cholesterol'];

	const nutritionWhatNeed: Nutrition[] = [];

	nutrients.map((element: Nutrition) => {
		nutritionFilter.filter(word => {
			if (word === element.name) {
				nutritionWhatNeed.push(element)
			}
		})
	})

	const renderNutrition = nutritionWhatNeed.map((element, index) => {
		return (
			<div className="nutrition__wrapper" key={index}>
				<p className="nutrition__name">{element.name}</p>
				<p className="nutrition__metric">
					{Math.round(element.amount)} {element.unit}
				</p>
			</div>
		)
	})

	return (
		store.filteredRecipe && nutritionWhatNeed &&
		<div className="nutrition">
			<h3 className="nutrition__title">Nutrition Information</h3>
			{renderNutrition}
		</div>
	);
};

export default RecipeNutrition;
