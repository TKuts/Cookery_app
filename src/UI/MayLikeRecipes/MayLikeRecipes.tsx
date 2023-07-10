import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { randomRecipe } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./MayLikeRecipes.scss";


const MayLikeRecipes: React.FC = observer(() => {

	const [randomRecipes, setRandomRecipes] = useState<SelectedRecipe[]>([])

	useEffect(() => {
		randomRecipe(3).then((respons) => {
			respons.recipes.forEach(recipe => {
				recipe.like = false
			});
			setRandomRecipes(respons.recipes)
		})
	}, [store.recipeId])

	const renderLikeBtn = (
		<button
			className="btn__like"
			onClick={(event) => {
				event.stopPropagation()
			}}>
			<i className="fa-regular fa-heart btn__like-img" />
			<i className="fa-solid fa-heart btn__like-img red" />
		</button>)
	return (
		<section className="may__like">
			<h3 className="may__like-title">You may like these recipe too</h3>
			<RecipeCard informationForCard={randomRecipes} children={renderLikeBtn} />
		</section>
	)
})

export default MayLikeRecipes;
