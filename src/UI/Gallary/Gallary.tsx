import React, { useState, useEffect } from "react";
import "./Gallary.scss";


import {CardRecipe} from "../../domain/card-recipe"

import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"


export interface GallaryProps {
	// recipes: CardRecipe[];
	showRecipeDetails: any; // any тому, що recipeDetails це функція (як показати TS, що працюю з функцією?)
}



const Gallary: React.FC<GallaryProps> = observer(({ showRecipeDetails }) => {

	const { recipeByCategory, recipeId } = store;



	const [recipeDetails, setRecipeDetails] = useState<boolean>(false);
	// const [recipeId, setRecipeId] = useState<number>(Number);
	
	// useEffect(() => {
	// 	useMobx(recipeId)
	// },[recipeId])

	const useMobx = (id: number) => {
		store.getRecipeId(id);
		showRecipeDetails(); // буде замінено на роут, буде видалено
	}

	// const unfoldRecipeDetails = (id: number): any => {
	// 	setRecipeId(id);
	// 	setRecipeDetails(!recipeDetails);
	// 	};


		
  return (
		<section className="recipes-wrapper">
			
			{ recipeByCategory && recipeByCategory.map((recipe: any) => (
           <div className="recipe" key={recipe.id} 
			  onClick={()=> {useMobx(recipe.id)}
			  } >
					<img className="recipe__image" src={recipe.image} alt= {`img-recceps ${recipe.id}`} />
					<h1 className="recipe__title">{recipe.title}</h1>
					<p className="recipe__time" >{recipe.readyInMinutes} Minutes</p>
            </div>
        )
				) 
			}
		</section>

  )


	
})

export default Gallary;
