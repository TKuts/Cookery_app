import React, { useState, useEffect } from "react";

import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore";
import { useParams } from "react-router-dom";
import { getRecipeByCategory } from "../../adaptters/sendAllRequest";
import { SelectedRecipe } from "../../domain/recipe-details";

import "./Gallary.scss";

const Gallary: React.FC = observer(() => {

	const { category } = useParams();
	const [recipes, setRecipes] = useState<SelectedRecipe[] | []>([]);

	useEffect(() => {
		if (category)
			actionSelectedRecipe(category);

		store.getPageName("Galary")

	}, [])

	const actionSelectedRecipe = (selectedRecipe: string) => {
		getRecipeByCategory(selectedRecipe).then((respons: { results: SelectedRecipe[] }) => setRecipes(respons.results));
	}

	const useMobx = (id: number) => {
		store.getRecipeId(id);
	}

	return (
		<section className="recipes">
			<h2 className="recipes-title">{`category ${category}`}</h2>
			<div className="recipes-wrapper">
				{recipes && recipes.map(({ id, image, title, readyInMinutes }) => (
					<div className="recipe" key={id}
						onClick={() => { useMobx(id) }} >
						<img className="recipe__image" src={image} alt={`img-recceps ${id}`} />
						<h1 className="recipe__title">{title}</h1>
						<p className="recipe__time" >{readyInMinutes} Minutes</p>
					</div>
				))
				}
			</div>

		</section>
	)
})

export default Gallary;
