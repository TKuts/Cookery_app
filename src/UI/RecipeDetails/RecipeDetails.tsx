import React, { useState, useEffect } from "react";
import "./RecipeDetails.scss";



function RecipeDetails ({recipeId}) {
  
const [ingredients, setIngredients] = useState([])
const [summary, setSummary] = useState([])
const [instructions, setInstructions] = useState([])

// console.log(recipeId);

useEffect(() => {
	apiIngredients(recipeId)
	apiSummary(recipeId)
	// apiInstructions(recipeId)
},[])

const apiIngredients = (id: number) => {
	fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=0aa8e02c95b446af92b9757178b9165d`)
	.then(response => response.json())
	.then(rec => setIngredients(rec.ingredients))
}
const apiSummary = (id: number) => {
	fetch(` https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=0aa8e02c95b446af92b9757178b9165d`)
	.then(response => response.json())
	.then(rec =>  setSummary(rec)
		)
}
const apiInstructions = (id: number) => {
	fetch(` https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=0aa8e02c95b446af92b9757178b9165d`)
	.then(response => response.json())
	.then(rec => setInstructions(rec[0].steps))
}






  return (
	<section className="detailed__wrapper">
		<h2 className="detailed__title">{summary.title}</h2>

		<div className="detailed__information">
			<div className="detailed__time">
				<img className="detailed__time-img" src="src/UI/RecipeDetails/img/hourglass.svg" alt="hourglass" />
				<div className="">
					<p className="detailed__time-title">COOK TIME</p>
					<p className="detailed__time-minutes">{summary.readyInMinutes}</p>
				</div>
			</div>
			<div className="detailed__type-img">
				<img src="src/UI/RecipeDetails/img/ForkKnife.svg" alt="ForkKnife" />
				<p className="detailed__type-data">{summary.dishTypes
				}</p>
			</div>
		</div>

		<div className="detailed__block">
			<img className="detailed__block-img" src={summary.image} alt={summary.title} />
			<div className="ingredients">
				<h3 className="ingredients__title">Ingredients</h3>
				{
					ingredients.map(elem => (
						<div key={elem.index} className="ingredient__wrapper">
							<p className="ingredient__name">{elem.name}</p>
							<p className="ingredient__metric">{elem.amount.metric.value} {elem.amount.metric.unit}</p>
						
						</div>
						))
				}

			</div>
		</div>
		
	</section>
		
  )
	
}

export default RecipeDetails;
