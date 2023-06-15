import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecipesPage.scss";


import Pagination from "../../UI/Pagination/Pagination";
import RecipeCard from "../../UI/RecipeCard/RecipeCard";
import FilterBlock from "../../UI/FilterBlock/FilterBlock"
import { getRecipeByCategory } from "../../adaptters/sendAllRequest";

import { getAllRecipes } from "../../adaptters/sendAllRequest";
import { SelectedRecipe } from "../../domain/recipe-details";

import { observer } from "mobx-react-lite";

import { store } from "../../application/storage/BusinessStore";


const RecipesPage: React.FC = observer(() => {


	const [allRecipes, setAllRecipes] = useState<SelectedRecipe[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [postsPerPage, setPostsPerPage] = useState<number>(6)
	const { category } = useParams()

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;

	const currentPost = allRecipes.slice(firstPostIndex, lastPostIndex);



	useEffect(() => {
		switch (category) {
			case "all":
				getAllRecipes().then((respons) => setAllRecipes(respons.results))
				store.getPageName(`${category} recipes`)
				break;
			case "breakfast":
			case "main course":
			case "soup":
			case "salad":
			case "appetizer":
			case "dessert":
				getRecipeByCategory(category).then((respons) => setAllRecipes(respons.results))
				store.getPageName(category)
				break;
		}


	}, [category])

	return (
		<section className="detailed__wrapper">
			<FilterBlock dataForFilter={allRecipes} />
			<RecipeCard informationForCard={currentPost} sizeSkeleton={category} />
			<Pagination totalPosts={allRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
		</section>
	);
});

export default RecipesPage;
