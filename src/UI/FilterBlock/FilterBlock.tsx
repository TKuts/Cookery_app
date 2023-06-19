import React, { useState } from "react";
import "./FilterBlock.scss";

import { observer } from "mobx-react-lite";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultList/SearchResultList";
// import { store } from "../../application/storage/BusinessStore";
import { FilreredRecipe } from "../../domain/recipe-details";


interface FilterBlockProps {
	dataForFilter: FilreredRecipe[];
}

const FilterBlock: React.FC<FilterBlockProps> = observer(({ dataForFilter }) => {

	const [result, setResult] = useState<string[]>([])

	return (
		<section>
			<SearchBar dataForFilter={dataForFilter} setResult={setResult} />
			<SearchResultList results={result} />
		</section>)
}
);

export default FilterBlock;
