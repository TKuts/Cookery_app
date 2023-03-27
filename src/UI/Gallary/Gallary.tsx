import React, { useState, useEffect } from "react";
import "./Gallary.scss";
import { Recipe } from "../../domain/recipes";
// import { map } from "rxjs/operators";


// path= home/info_id-143535/tutorial
// favorite
// shop
// delivery

export interface GallaryProps {
	recipes: Recipe[] | null;
	recipeDetails: any // додав сам
	searchRecipeId: any
}

const Gallary: React.FC<GallaryProps> = ({ recipes, recipeDetails, searchRecipeId }) =>{
 
  return (
		<section className="recipes-wrapper">
			
			{ recipes && recipes.map((recipe: any) => (
           <div className="recipe" key={recipe.id} 
			  onClick={()=> {recipeDetails(), searchRecipeId(recipe.id)}
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
