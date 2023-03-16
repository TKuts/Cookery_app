import React, { useState, useEffect } from "react";
import "./Gallary.scss";
import { Recipe } from "../../domain/recipes"



interface GallaryProps {
	recipe: Recipe[];
}

function Gallary () {
  const [recipes, setRecipes] = useState<Recipe[] | null >(null);

    useEffect(() => {
	 fetch(` https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=9&apiKey=0aa8e02c95b446af92b9757178b9165d`)
      .then((response) => response.json())
      .then((rec) => setRecipes(rec.results)
		// console.log(rec)
		
		
		
		
		)
  }, []);



  return (
		<section className="recipes-wrapper">
			{
			recipes && recipes.map(recipe => (
           <div className="recipe" key={recipe.id} >
						<img className="recipe__image" src={recipe.image} alt= {`img-recceps ${recipe.id}`} />
						<h1 className="recipe__title">{recipe.title}</h1>
						<p>{recipe.readyInMinutes} хв</p>
            </div>
        )
				)
			}
		</section>

  )


	
}

export default Gallary;



// {id: 782585, title: 'Cannellini Bean and Asparagus Salad with Mushrooms', image: 'https://spoonacular.com/recipeImages/782585-312x231.jpg', imageType: 'jpg'}
