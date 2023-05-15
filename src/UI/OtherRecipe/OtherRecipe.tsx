import React, { useState, useEffect } from "react";
import "./OtherRecipe.scss";


import {randomRecipe} from "../../adaptters/sendAllRequest"
import {SelectedRecipe} from "../../domain/recipe-details";
import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"

interface PropsOtherRecipe {
	lengthIngredientBlock: number | null;
}

const OtherRecipe: React.FC<PropsOtherRecipe> = observer(({lengthIngredientBlock}) => {
  
	const { recipeCategori } = store;
	const [randomRecipes, setRandomRecipes] = useState< SelectedRecipe[] >([])

	const lengthForRender = typeof lengthIngredientBlock === "number" ? Math.floor(lengthIngredientBlock/3) : 1

	useEffect(() => {
		randomRecipe(lengthForRender, recipeCategori ).then((respons) => setRandomRecipes(respons.recipes))
		
	}, [lengthIngredientBlock])

	const useMobx = (id: number) => {
		store.getRecipeId(id);
		store.getRecipeByCategory(randomRecipes)
	}
	
  return (
		<section className="other__recipe">
			<h3 className="other__recipe-title">Other Recipe</h3>
				{ 
					randomRecipes.map((recipe: SelectedRecipe) => (
						<div className="random__recipe" key={recipe.id} 
							onClick={()=> {{useMobx(recipe.id), randomRecipe}}
							} >
							<img className="random__recipe-image" src={recipe.image} alt= {`img-recceps ${recipe.id}`} />
							<div className="random__recipe-information">
							<h1 className="random__recipe-title">{recipe.title}</h1>
							<p className="random__recipe-time" >{recipe.readyInMinutes} Minutes</p>
							</div>
						</div>
					)) 
				}
				
		</section>

  )
	
})

export default OtherRecipe;
