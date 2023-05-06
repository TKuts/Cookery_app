import React, { useState, useEffect } from "react";
import "./Gallary.scss";

import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"

export interface GallaryProps {
	showRecipeDetails: any; // any тому, що recipeDetails це функція (як показати TS, що працюю з функцією?)
}

const Gallary: React.FC<GallaryProps> = observer(({ showRecipeDetails }) => {

	const { recipeByCategory, recipeId } = store;

	const useMobx = (id: number) => {
		store.getRecipeId(id);
		showRecipeDetails(); // буде замінено на роут, буде видалено
	}
  return (
		<section className="recipes-wrapper">
			{ recipeByCategory && recipeByCategory.map((recipe) => (
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
