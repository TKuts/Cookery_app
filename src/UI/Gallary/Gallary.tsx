import React, { useState, useEffect } from "react";
import "./Gallary.scss";


import {CardRecipe} from "../../domain/card-recipe"

export interface GallaryProps {
	recipes: CardRecipe[];
	recipeDetails: any; // any тому, що recipeDetails це функція (як показати TS, що працюю з функцією?)
}

const Gallary: React.FC<GallaryProps> = ({ recipes, recipeDetails }) =>{
	
  return (
		<section className="recipes-wrapper">
			
			{ recipes && recipes.map((recipe: any) => (
           <div className="recipe" key={recipe.id} 
			  onClick={()=> {recipeDetails(recipe.id)}
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


	
}

export default Gallary;
