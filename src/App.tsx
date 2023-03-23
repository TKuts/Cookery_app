import React, { useState } from 'react';
import './App.scss';


import Header from "./UI/Header/Header"
import Gallary from './UI/Gallary/Gallary';
import Categories from "./UI/Categories/Categories" 

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

const [categories, setCategories] = useState("");
const [recipes, setRecipes] = useState<Recipe[] | null >(null);

	const category = (string: string): void =>{
		setCategories(string)
	}

	const api = (data: string) =>{
		fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=9&type=${data}&apiKey=8d7ddae365d4476296d763b1f0154bdf`).then(response => response.json()).then(rec => setRecipes(rec.results))
	}

	
  return (
    <div className="wrapper">
		<Header/>
      <Categories category={api}/>
      <Gallary recipes={recipes}  stateCategories={categories}/>
		
		
    </div>
  )
}

export default App
