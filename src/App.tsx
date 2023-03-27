import React, { useState } from 'react';
import './App.scss';


import Header from "./UI/Header/Header"
import Gallary from './UI/Gallary/Gallary';
import Categories from "./UI/Categories/Categories" 
import RecipeDetails from "./UI/RecipeDetails/RecipeDetails"

const API = import.meta.env.VITE_REACT_API_HOST
const API_KEY = import.meta.env.VITE_REACT_API_KEY

const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES
const FIND_INGREDIENTS = import.meta.env.VITE_REACT_FIND_INGREDIENTS
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS
const DESCRIPTION = import.meta.env.VITE_REACT_DESCRIPTION
const TUTORIAL = import.meta.env.VITE_REACT_TUTORIAL
const BY_NUTRIENTS = import.meta.env.VITE_REACT_FILTER_BY_NUTRIENTS

import { Recipe } from "../src/domain/recipes"

function App() {

// const [categories, setCategories] = useState("");
const [recipes, setRecipes] = useState<Recipe[] | null >(null);
const [recipeDetails, setRecipeDetails] = useState(true)
const [recipeId, setRecipeId] = useState("")
	// const category = (string: string): void =>{
	// 	setCategories(string)
	// }

	const api = (data: string) =>{
		fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=9&type=${data}&apiKey=0aa8e02c95b446af92b9757178b9165d`).then(response => response.json()).then(rec => setRecipes(rec.results))
	}

	const unfoldRecipeDetails: any = () => {
		setRecipeDetails(!recipeDetails) 	
	}
	
	const searchRecipeId: any = (id: string)=>{
		setRecipeId(id)
	}


	

	
	
  return (
    <div className="wrapper">
		<Header/>
      <Categories category={api}/>
      <Gallary 
		recipes={recipes} 
		recipeDetails={unfoldRecipeDetails}
		searchRecipeId={searchRecipeId}
		/>
		{!recipeDetails ? <RecipeDetails recipeId={recipeId}/> : <></>}
	
		
    </div>
  )
}

export default App
