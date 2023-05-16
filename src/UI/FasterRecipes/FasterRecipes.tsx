import React, { useState, useEffect } from "react";
import "./FasterRecipes.scss";

import {SelectedRecipe} from "../../domain/recipe-details";
import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"
import { getAllRecipes } from "../../adaptters/sendAllRequest"
import { Link } from "react-router-dom"

const FasterRecipes: React.FC = observer(() => {
	const [allRecopes, setAllRecopes] = useState< SelectedRecipe[] >([])

	useEffect(() => {
		getAllRecipes().then((respons) => setAllRecopes(respons.results))
	}, [])

	const checkInstruction = (elemId: number): void =>{
		allRecopes.map(instruction => {
			if(instruction.id === elemId) {
				instruction.like = !instruction.like;	
		 }})
	}

	const dishTypes = (data: string[]): any => {
		let newString = "";
		let through = data.slice(0, 3)
		
		data && through.map((item) => {
			 newString += `#${item} `;
		  });
		return newString;
	 };

	const useMobx = (id: number) => {
		store.getRecipeId(id);
		// store.getRecipeByCategory(randomRecipes)
	}
	
  return (
		<section className="faster__recipe">
				<h2 className="faster__recipe-title">Simple and tasty recipes</h2>
				<div className="faster__recipe-block">
				{ allRecopes && allRecopes.map((recipe) => (
					<Link to={`/selectedRecipe/${recipe.id}`} className="faster__recipe-flashcard"  key={recipe.id}  
					onClick={()=> {{useMobx(recipe.id)}}
					}>
							<img className="faster__recipe-flashcard-img" src={recipe.image} alt= {`img-recceps ${recipe.id}`} />
							<h1 className="faster__recipe-flashcard-title">{recipe.title}</h1>
							<div className="faster__recipe-flashcard-information">
								<div className="faster__recipe-flashcard-information__time">
									<i className="fa-regular fa-hourglass-half faster__recipe-flashcard-information__time-icons"></i>
									<p className="faster__recipe-flashcard-information__time-minutes">{recipe.readyInMinutes} Minutes</p>
								</div>
								<div className="faster__recipe-flashcard-information__type">
									<i className="fa-solid fa-utensils faster__recipe-flashcard-information__type-icons"></i>
									<p className="faster__recipe-flashcard-information__type-data">{dishTypes(recipe.dishTypes)}</p>
								</div>
							</div>
					</Link>
				))}
				</div>
			
		</section>

  )
	
})

export default FasterRecipes;
