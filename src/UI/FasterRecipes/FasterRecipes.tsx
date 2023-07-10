import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { getFasterRecipes } from "../../adaptters/sendAllRequest";
import { SelectedRecipe } from "../../domain/recipe-details";
import RecipeCart from "../RecipeCard/RecipeCard";
import "./FasterRecipes.scss";

const FasterRecipes: React.FC = observer(() => {
	const [allRecopes, setAllRecopes] = useState<SelectedRecipe[]>([])

	useEffect(() => {
		getFasterRecipes().then((respons) => setAllRecopes(respons.results))
	}, [])

	return (
		<section className="faster__recipe">
			<h2 className="faster__recipe-title">Simple and tasty recipes</h2>
			<RecipeCart informationForCard={allRecopes} />
		</section>
	)
})

export default FasterRecipes;
