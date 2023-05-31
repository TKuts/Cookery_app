import React, { useEffect, useState } from "react";
import "./RecipesPage.scss";


import RecipeCard from "../../UI/RecipeCard/RecipeCard"
import Pagination from "../../UI/Pagination/Pagination"

import { FyllRecipeFromApi, SelectedRecipe } from "../../domain/recipe-details";
import { getAllRecipes } from "../../adaptters/sendAllRequest"

import { observer } from "mobx-react-lite";

import { store } from "../../application/storage/BusinessStore";


const RecipesPage: React.FC = observer(() => {

	const { recipeId } = store;
	const [allRecipes, setAllRecipes] = useState<SelectedRecipe[]>([])
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [postsPerPage, setPostsPerPage] = useState<number>(6)

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;

	const currentPost = allRecipes.slice(firstPostIndex, lastPostIndex);

	console.log();

	useEffect(() => {
		getAllRecipes().then((respons) => setAllRecipes(respons.results))
	}, [])




	return (

		<section className="detailed__wrapper">
			<RecipeCard informationForCard={currentPost} />
			<Pagination totalPosts={allRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
		</section>
	);
});

export default RecipesPage;
