import React, { useState } from "react";
import "./SearchResultList.scss";

import { observer } from "mobx-react-lite";
import { FilreredRecipe } from "../../domain/recipe-details";
import { values } from "mobx";

interface SearchResultListProps {
	results: string[]
}

const SearchResultList: React.FC<SearchResultListProps> = observer(({ results }) => {

	const renderResult = results.map((result, index) => {
		return <div className="result-list__item" key={index}>{result}</div>
	})

	return (
		<section className="result-list">
			{renderResult}
		</section>

	)
})

export default SearchResultList;
