import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { randomRecipe } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import "./OtherRecipe.scss";

interface PropsOtherRecipe {
	lengthIngredientBlock: number | null;
}

const OtherRecipe: React.FC<PropsOtherRecipe> = observer(({ lengthIngredientBlock }) => {

	const { recipeCategori } = store;
	const [randomRecipes, setRandomRecipes] = useState<SelectedRecipe[]>([])
	const lengthForRender = typeof lengthIngredientBlock === "number" ? Math.floor(lengthIngredientBlock / 3) : 1

	useEffect(() => {
		randomRecipe(lengthForRender, recipeCategori).then((respons) => setRandomRecipes(respons.recipes))
	}, [lengthIngredientBlock])

	const useMobx = (id: number) => {
		store.getRecipeId(id);
	}

	const renderRandomRecipes = randomRecipes.map((recipe: SelectedRecipe) => (
		<div className="random__recipe" key={recipe.id}
			onClick={() => { { useMobx(recipe.id), randomRecipe } }}>
			<img className="random__recipe-image" src={recipe.image} alt={`img-recceps ${recipe.id}`} />
			<div className="random__recipe-information">
				<h1 className="random__recipe-title">{recipe.title}</h1>
				<p className="random__recipe-time" >{recipe.readyInMinutes} Minutes</p>
			</div>
		</div>
	))
	return (
		<section className="other__recipe">
			<h3 className="other__recipe-title">Other Recipe</h3>
			{renderRandomRecipes}
		</section>
	)
})

export default OtherRecipe;
