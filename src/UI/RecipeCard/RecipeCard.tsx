import React, { useState, useEffect } from "react";

import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore";
import { useParams } from "react-router-dom";
import { getRecipeByCategory } from "../../adaptters/sendAllRequest";
import { SelectedRecipe } from "../../domain/recipe-details";

import "./RecipeCard.scss";
import { Link } from "react-router-dom"
interface PropsInformationForCard {
	informationForCard: SelectedRecipe[];

}

const RecipeCard: React.FC<PropsInformationForCard> = observer(({ informationForCard }) => {

	const { category } = useParams();
	const [recipes, setRecipes] = useState<SelectedRecipe[] | []>([]);

	useEffect(() => {
		if (category)
			actionSelectedRecipe(category);

		store.getPageName("Galary")

	}, [])

	// console.log("informationForCard", informationForCard);


	const actionSelectedRecipe = (selectedRecipe: string) => {
		getRecipeByCategory(selectedRecipe).then((respons: { results: SelectedRecipe[] }) => setRecipes(respons.results));
	}

	const useMobx = (id: number) => {
		store.getRecipeId(id);
	}



	const dishTypes = (data: string[]): any => {
		let newString = "";
		let through = data.slice(0, 3)

		data && through.map((item) => {
			newString += `#${item} `;
		});
		return newString;
	};

	return (
		<section className="faster__recipe">
			<div className="faster__recipe-block">
				{informationForCard.map((recipe) => (
					<Link to={`/selectedRecipe/${recipe.id}`} className="faster__recipe-flashcard link" key={recipe.id}
						onClick={() => { { useMobx(recipe.id) } }
						}>
						<img className="faster__recipe-flashcard-img" src={recipe.image} alt={`img-recceps ${recipe.id}`} />
						<h1 className="faster__recipe-flashcard-title">{recipe.title}</h1>
						<div className="faster__recipe-flashcard-information">
							<div className="faster__recipe-flashcard-information__time">
								<i className="fa-regular fa-hourglass-half faster__recipe-flashcard-information__time-icons link"></i>
								<p className="faster__recipe-flashcard-information__time-minutes">{recipe.readyInMinutes} Minutes</p>
							</div>
							<div className="faster__recipe-flashcard-information__type">
								<i className="fa-solid fa-utensils faster__recipe-flashcard-information__type-icons link"></i>
								<p className="faster__recipe-flashcard-information__type-data">{dishTypes(recipe.dishTypes)}</p>
							</div>
						</div>
					</Link>
				))}
			</div>

		</section>
	)
})

export default RecipeCard;
