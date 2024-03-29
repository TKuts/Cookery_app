import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterBlock from "../../UI/FilterBlock/FilterBlock";
import Pagination from "../../UI/Pagination/Pagination";
import RecipeCard from "../../UI/RecipeCard/RecipeCard";
import { getAllRecipes } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import "./RecipesPage.scss";


const RecipesPage: React.FC = observer(() => {

	const [allRecipes, setAllRecipes] = useState<SelectedRecipe[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [postsPerPage, setPostsPerPage] = useState<number>(6)
	const { category } = useParams()

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;

	const currentPost = allRecipes.slice(firstPostIndex, lastPostIndex);

	useEffect(() => {
		let excludeIngredients = store.excludeIngredients

		switch (category) {
			case "all":
				getAllRecipes(category, excludeIngredients).then((respons) => setAllRecipes(respons.results))
				store.getPageName(`${category} recipes`)
				break;
			case "breakfast":
			case "main course":
			case "soup":
			case "salad":
			case "appetizer":
			case "dessert":
				getAllRecipes(category, excludeIngredients).then((respons) => setAllRecipes(respons.results))
				store.getPageName(category)
				break;
		}
	}, [store.excludeIngredients])

	return (
		<section className="recipe__page">
			<FilterBlock dataForFilter={allRecipes} />
			<RecipeCard informationForCard={currentPost} sizeSkeleton={category} />
			<Pagination totalPosts={allRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
		</section>
	);
});

export default RecipesPage;
