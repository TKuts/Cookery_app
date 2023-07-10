import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { store } from "../../application/storage/BusinessStore";
import ExcludedIngredients from "../ExcludedIngredients/ExcludedIngredients";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultList/SearchResultList";
import "./FilterBlock.scss";
import { FilreredRecipe } from "../../domain/recipe-details";

interface FilterBlockProps {
	dataForFilter: FilreredRecipe[];
}

const FilterBlock: React.FC<FilterBlockProps> = observer(({ dataForFilter }) => {

	const [searchList, setSearchList] = useState<string[]>([])
	const [selectedIngredient, setSelectedIngredient] = useState<string[]>([]);

	useEffect(() => {
		store.getExcludeIngredients(selectedIngredient)
	}, [selectedIngredient])


	const stateSearchList = (value: string[]) => {
		setSearchList(value)
	}

	const excludedIngredients = (ingredients: string) => {
		const verification = selectedIngredient.find(excludedIngredient => excludedIngredient === ingredients)
		if (ingredients !== "" && !verification) {
			setSelectedIngredient([...selectedIngredient, ingredients])
		}
	}

	const removeIngredient = (value: string): void => {
		setSelectedIngredient(selectedIngredient.filter(ingredient => ingredient !== value))
	}

	return (
		<section className="filter__block">
			<div className="main__elements">
				<ExcludedIngredients selectedIngredient={selectedIngredient} removeIngredient={removeIngredient} />
				<SearchBar dataForFilter={dataForFilter} stateSearchList={stateSearchList} />
			</div>
			<SearchResultList searchList={searchList} excludedIngredients={excludedIngredients} />
		</section>)
}
);

export default FilterBlock;
