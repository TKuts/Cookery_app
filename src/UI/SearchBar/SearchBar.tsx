import React, { useState } from "react";
import "./SearchBar.scss";

import { observer } from "mobx-react-lite";
import { FilreredRecipe } from "../../domain/recipe-details";
import { values } from "mobx";
interface SearchBarProps {
	dataForFilter: FilreredRecipe[];
	setResult: string[]
}

const SearchBar: React.FC<SearchBarProps> = observer(({ dataForFilter, setResult }) => {

	const [input, setInput] = useState<string>("")

	const nameIngredients: string[] = [];

	const analyzedInstruction = dataForFilter.forEach((allRecipes) =>
		allRecipes.analyzedInstructions.forEach((steps) =>
			steps.steps.forEach((arrIngredients) =>
				arrIngredients.ingredients.forEach((names) => {
			
						nameIngredients.push(names.name)
				
				}
				)
			)
		)
	);



	const newArray: string[] = [];
	nameIngredients.forEach((name) => {
		if (!newArray.includes(name)) {
			newArray.push(name);
		}
	});

	const filteredDataForFilter = (value: string) => {
		const result = newArray.filter(recipe => {
			return value &&
				recipe.toLowerCase().indexOf(value.toLowerCase()) !== -1
		})
		setResult(result)
	}

	const handlChange = (value: string) => {
		setInput(value)
		filteredDataForFilter(value)
	}

	return (
		<section className="input-wraper">
			<input type="text" placeholder="Type to search..."
				value={input}
				onChange={(e) => handlChange(e.target.value)} />
		</section>

	)
})

export default SearchBar;