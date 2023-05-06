import React, { useState, useContext, useEffect } from "react";
import "./Categories.scss"

import { getRecipeByCategory } from "../../adaptters/sendAllRequest"
import { SelectedRecipe } from "../../domain/recipe-details";
import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore"


const Categories: React.FC = observer(() => {

	const [recipes, setRecipes] = useState<SelectedRecipe[] | []>([]); 

	useEffect(() => {
		mobxSelectedRecipe(recipes)
	},[recipes])

	

	const mobxSelectedRecipe = (state: SelectedRecipe[]) => {
		store.getRecipeByCategory(state)
	}

	const mobxSelectedCategori = (state: string) => {
		store.getRecipeCategory(state)
	}

	const actionSelectedRecipe = (selectedRecipe: string) => {
		getRecipeByCategory(selectedRecipe).then((respons: {results: SelectedRecipe[]}) => setRecipes(respons.results)),
		mobxSelectedCategori(selectedRecipe)
	}

  return (
	<div className="component__categories">
		<h2 className="component__categories-title">Categories</h2>
		<div className="categories">
			<div className="categories__card" 
				onClick={() => actionSelectedRecipe("breakfast")} >
				<img className="categories__card-img" src="src/UI/Categories/img/breakfast.png" alt="breakfast" />
				<h3 className="categories__card-title">breakfast</h3>
			</div>
			<div className="categories__card"
				onClick={() => actionSelectedRecipe("main course")} >
				<img className="categories__card-img" src="src/UI/Categories/img/main course.png" alt="main course" />
				<h3 className="categories__card-title">main course</h3>
			</div>
			<div className="categories__card"
				onClick={() => actionSelectedRecipe("soup")} >
				<img className="categories__card-img" src="src/UI/Categories/img/soup.png" alt="soup" />
				<h3 className="categories__card-title">soup</h3>
			</div>
			<div className="categories__card"
				onClick={() => actionSelectedRecipe("salad")} >
				<img className="categories__card-img" src="src/UI/Categories/img/salad.png" alt="salad" />
				<h3 className="categories__card-title">salad</h3>
			</div>
			<div className="categories__card"
				onClick={() => actionSelectedRecipe("appetizer")} >
				<img className="categories__card-img" src="src/UI/Categories/img/appetizer.png" alt="appetizer" />
				<h3 className="categories__card-title">appetizer</h3>
			</div>
			<div className="categories__card"
				onClick={() => actionSelectedRecipe("dessert")} >
				<img className="categories__card-img" src="src/UI/Categories/img/dessert.png" alt="categories__card-img" />
				<h3 className="categories__card-title">dessert</h3>
			</div>
		</div>
	</div>
  )
})

export default Categories;
