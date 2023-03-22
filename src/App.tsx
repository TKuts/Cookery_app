import React, { useState } from 'react';
import './App.scss';
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



function App() {

const [categories, setCategories] = useState("");

	const category = (string: string): void =>{
		setCategories(string)
	}

	
	

  return (
    <div className="wrapper">
      <Categories category={category}/>
      <Gallary stateCategories={categories}/>
		
		
    </div>
  )
}

export default App
