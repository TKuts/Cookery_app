import React, { useState } from "react";
import "./FilterBlock.scss";

import { observer } from "mobx-react-lite";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultList/SearchResultList";
import ExcludedIngredients from "../ExcludedIngredients/ExcludedIngredients";
// import { store } from "../../application/storage/BusinessStore";
import { FilreredRecipe } from "../../domain/recipe-details";


interface FilterBlockProps {
	dataForFilter: FilreredRecipe[];
}

const FilterBlock: React.FC<FilterBlockProps> = observer(({ dataForFilter }) => {

	const [result, setResult] = useState<string[]>([])
	const [selectedIngredient, setSelectedIngredient] = useState<string[]>([])

	const excludedIngredients = (ingredients: string) => {

		const verification = selectedIngredient.find(excludedIngredient => excludedIngredient === ingredients)

		if (ingredients !== "" && !verification) {
			setSelectedIngredient([...selectedIngredient, ingredients])
		}
	}

	return (
		<section>
			<div className="main__elements">
				<SearchBar dataForFilter={dataForFilter} setResult={setResult} />
				<ExcludedIngredients selectedIngredient={selectedIngredient} />
			</div>

			<SearchResultList results={result} excludedIngredients={excludedIngredients} />
		</section>)
}
);

export default FilterBlock;
