import React, { useState, useEffect } from "react";
import "./Gallary.scss";
import { Recipe } from "../../domain/recipes"


// path= home/info_id-143535/tutorial
// favorite
// shop
// delivery

interface GallaryProps {
	recipes: Recipe[];
}

function Gallary (props: string) {
  

  return (
		<section className="recipes-wrapper">
			{
			props.recipes && props.recipes.map(recipe => (
           <div className="recipe" key={recipe.id} >
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
