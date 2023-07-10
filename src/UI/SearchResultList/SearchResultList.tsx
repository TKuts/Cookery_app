import { observer } from "mobx-react-lite";
import React from "react";
import "./SearchResultList.scss";

interface SearchResultListProps {
	searchList: string[],
	excludedIngredients: (value: string) => void,
}

const SearchResultList: React.FC<SearchResultListProps> = observer(({ searchList, excludedIngredients }) => {
	const renderResult = searchList.map((result, index) => {
		return <div className="result-list__item" key={index} onClick={() => excludedIngredients(result)
		}>{result}</div>
	})

	return (
		<section className="result-list">
			{renderResult}
		</section>
	)
})

export default SearchResultList;
