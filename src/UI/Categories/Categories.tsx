import React, { useState, useContext, useEffect } from "react";
import "./Categories.scss"

import  sendRequest  from "../../adaptters/sendRequest"

const API = import.meta.env.VITE_REACT_API_HOST;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

import { CardRecipe } from "../../domain/card-recipe";

import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore"


const Categories: React.FC = observer(() => {

	const [recipes, setRecipes] = useState<{}[] | []>([]); 

	useEffect(() => {
		useMobx(recipes)
	},[recipes])

	const useMobx = (state) => {
		store.getRecipeByCategory(state)
	}

	const getRecipeByCategory = (nameCategories: string): any => {
		sendRequest(
			`${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`)
			.then((respons: {results: CardRecipe[]}) => setRecipes(respons.results))
	 };
	 
  return (
	<div className="component__categories">
		<h2 className="component__categories-title">Categories</h2>
		<div className="categories">
			<div className="categories__card" 
			onClick={() => getRecipeByCategory("breakfast")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/breakfast.png" alt="" />
				<h3 className="categories__card-title">breakfast</h3>
			</div>

			<div className="categories__card"
			onClick={() => getRecipeByCategory("main course")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/main course.png" alt="" />
				<h3 className="categories__card-title">main course</h3>
			</div>

			<div className="categories__card"
			onClick={() => getRecipeByCategory("soup")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/soup.png" alt="" />
				<h3 className="categories__card-title">soup</h3>
			</div>

			<div className="categories__card"
			onClick={() => getRecipeByCategory("salad")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/salad.png" alt="" />
				<h3 className="categories__card-title">salad</h3>
			</div>

			<div className="categories__card"
			onClick={() => getRecipeByCategory("appetizer")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/appetizer.png" alt="" />
				<h3 className="categories__card-title">appetizer</h3>
			</div>
			<div className="categories__card"
			onClick={() => getRecipeByCategory("dessert")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/dessert.png" alt="categories__card-img" />
				<h3 className="categories__card-title">dessert</h3>
			</div>

		</div>

</div>
  )
})

export default Categories;
