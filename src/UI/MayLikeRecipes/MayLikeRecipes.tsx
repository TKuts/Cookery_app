import React, { useEffect, useState } from "react";
import "./MayLikeRecipes.scss";


import { observer } from "mobx-react-lite";
import { randomRecipe } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";



const MayLikeRecipes: React.FC = observer(() => {

	const [randomRecipes, setRandomRecipes] = useState<SelectedRecipe[]>([])
	const [renderPage, setRenderPage] = useState(false)

	useEffect(() => {
		randomRecipe(4).then((respons) => {
			let newArray = respons.recipes;

			newArray.forEach(recipe => {
				recipe.like = false
			});

			setRandomRecipes(newArray)
		})
	}, [store.recipeId])

	const dishTypes = (data: string[]): any => {
		let newString = "";
		let through = data.slice(0, 3)

		data && through.map((item) => {
			newString += `#${item} `;
		});
		return newString;
	};

	const checkInstruction = (elemId: number): void => {
		randomRecipes.map(instruction => {
			if (instruction.id === elemId) {
				instruction.like = !instruction.like;
				setRenderPage(!renderPage)
			}
		})
	}

	const useMobx = (id: number) => {
		store.getRecipeId(id);
	}

	const renderRandomRecipes = randomRecipes.map((recipe) => (
		<div
			className="flashcard"
			key={recipe.id}
			onClick={() => { { useMobx(recipe.id) } }
			} >
			<img
				className="flashcard-img"
				src={recipe.image}
				alt={`img-recceps ${recipe.id}`}
			/>
			<h1 className="flashcard-title">{recipe.title}</h1>
			<div className="flashcard-information">
				<div className="flashcard-information__time">
					<i className="fa-regular fa-hourglass-half flashcard-information__time-icons"></i>
					<p className="flashcard-information__time-minutes">{recipe.readyInMinutes} Minutes</p>
				</div>
				<div className="flashcard-information__type">
					<i className="fa-solid fa-utensils flashcard-information__type-icons"></i>
					<p className="flashcard-information__type-data">{dishTypes(recipe.dishTypes)}</p>
				</div>
			</div>
			<button
				className="btn__like"
				onClick={(event) => { event.stopPropagation(), checkInstruction(recipe.id) }}
			>
				<i className="fa-regular fa-heart btn__like-img" style={{ display: recipe.like ? "none" : "block" }} />
				<i className="fa-solid fa-heart btn__like-img red" style={{ display: recipe.like ? "block" : "none" }} />
			</button>
		</div>
	))


	return (
		<section className="may__like">
			<h3 className="may__like-title">You may like these recipe too</h3>
			<div className="may__like-block">
				{renderRandomRecipes}
			</div>
		</section>

	)

})

export default MayLikeRecipes;
