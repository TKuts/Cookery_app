import React, { useState, useEffect } from "react";
import "./FilterBlock.scss";

import { observer } from "mobx-react-lite";
import { FilreredRecipe, AnalyzedInstructions } from "../../domain/recipe-details"
interface FilterBlockProps {
	dataForFilter: FilreredRecipe[]
}

const FilterBlock: React.FC<FilterBlockProps> = observer(({ dataForFilter }) => {


	const nameIngredients: string[] = [];

	const analyzedInstruction = dataForFilter.forEach(allRecipes => allRecipes.analyzedInstructions.forEach(steps => steps.steps.forEach(ingredients => ingredients.ingredients.forEach(name => nameIngredients.push(name.name)))))


	console.log("nameIngredients", nameIngredients);

	const newArray: string[] = []
	nameIngredients.forEach(name => {
		if (!newArray.includes(name)) {
			newArray.push(name)
		}
	})
	console.log("newArray", newArray);
	// useEffect(() => {
	// 	console.log("analyzedInstructions", analyzedInstructions);
	// }, [dataForFilter])

	return (
		<>

		</>

	)
})

export default FilterBlock;
