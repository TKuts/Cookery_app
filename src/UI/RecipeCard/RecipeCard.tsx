import React, { useEffect, ReactNode, useState } from "react";

import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import SkeletonRecipeCard from "../Skeleton/SkeletonRecipeCard/SkeletonRecipeCard"
import "./RecipeCard.scss";
import { Link } from "react-router-dom"

interface PropsRecipeCard {
	informationForCard: SelectedRecipe[];
	sizeSkeleton: string | undefined;
	children?: ReactNode;
}

const RecipeCard: React.FC<PropsRecipeCard> = observer(({ informationForCard, children, sizeSkeleton }) => {

	let sizeForSkeleton: number | undefined;

	sizeSkeleton === undefined ? sizeForSkeleton = 9 : sizeForSkeleton = 6;

	const [lenghtCard, setLenghtCard] = useState(0)

	useEffect(() => {

		setLenghtCard(informationForCard.length)
		store.getPageName("Recipes")
	}, [informationForCard])



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

	const renderComponent = (
		<section className="recipe-card">
			{
				informationForCard.map((recipe) => (
					<div className="recipe-card__wrapper">
						<Link to={`/selectedRecipe/${recipe.id}`} className="flashcard link" key={recipe.id}
							onClick={() => { { useMobx(recipe.id) } }}>
							<img className="flashcard__img" src={recipe.image} alt={`img-recceps ${recipe.id}`} />
							<h1 className="flashcard__title">{recipe.title}</h1>
							<div className="flashcard__information">
								<div className="flashcard__information-time">
									<i className="fa-regular fa-hourglass-half flashcard__information-time-icons link"></i>
									<p className="flashcard__information-time-minutes">{recipe.readyInMinutes} Minutes</p>
								</div>
								<div className="flashcard__information-type">
									<i className="fa-solid fa-utensils flashcard__information-type-icons link"></i>
									<p className="flashcard__information-type-data">{dishTypes(recipe.dishTypes)}</p>
								</div>
							</div>
						</Link>
						{children ? children : <></>}
					</div>
				))
			}
		</section>
	)

	return (
		<>
			{
				lenghtCard ? renderComponent : <SkeletonRecipeCard lengthRender={sizeForSkeleton} />
			}
		</>
	)
})

export default RecipeCard;
