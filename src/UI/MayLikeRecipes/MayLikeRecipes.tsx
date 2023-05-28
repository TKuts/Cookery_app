import React, { useEffect, useState } from "react";
import "./MayLikeRecipes.scss";


import { observer } from "mobx-react-lite";
import { randomRecipe } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import RecipeCard from "../RecipeCard/RecipeCard";


const MayLikeRecipes: React.FC = observer(() => {

	const [randomRecipes, setRandomRecipes] = useState<SelectedRecipe[]>([])
	const [renderPage, setRenderPage] = useState(false)

	useEffect(() => {
		randomRecipe(3).then((respons) => {
			respons.recipes.forEach(recipe => {
				recipe.like = false
			});

			setRandomRecipes(respons.recipes)
		})
	}, [store.recipeId])


	// const checkInstruction = (elemId: number): void => {
	// 	randomRecipes.map(instruction => {
	// 		if (instruction.id === elemId) {
	// 			instruction.like = !instruction.like;
	// 			setRenderPage(!renderPage)
	// 		}
	// 	})
	// }



	const renderLikeBtn = (
		<button
			className="btn__like"
			onClick={(event) => {
				event.stopPropagation()
				// checkInstruction(recipe.id) 
			}}>
			<i className="fa-regular fa-heart btn__like-img"
			// style={{ display: recipe.like ? "none" : "block" }}
			/>
			<i className="fa-solid fa-heart btn__like-img red"
			// style={{ display: recipe.like ? "block" : "none" }} 
			/>
		</button>)


	return (
		<section className="may__like">
			<h3 className="may__like-title">You may like these recipe too</h3>
			<RecipeCard informationForCard={randomRecipes} children={renderLikeBtn} />
		</section>

	)

})

export default MayLikeRecipes;
