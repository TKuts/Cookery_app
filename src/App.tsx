import React, { useState, useContext, useEffect } from "react";
import "./App.scss";

import { observer } from "mobx-react-lite";
import { store } from "./application/storage/BusinessStore.js"



import Header from "./UI/Header/Header";
import Categories from "./UI/Categories/Categories";
import Gallary from "./UI/Gallary/Gallary";
import RecipeDetails from "./UI/RecipeDetails/RecipeDetails";

const API = import.meta.env.VITE_REACT_API_HOST;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

import { CardRecipe } from "./domain/card-recipe";
import  sendRequest  from "./adaptters/sendRequest";

// import {ThemeContext} from "./application/state"

const App = observer(() => {

	const useFoo = () => {
		const { count } = store;
	 
		useEffect(() => {
		  console.log(count);
		}, [count]);
	 };
	
	 console.log(store);
	 

  // useContext == MobX == Redux - state menager
  // HOC
  const [recipes, setRecipes] = useState<CardRecipe[] | []>([]); 
  const [recipeDetails, setRecipeDetails] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<number>(Number);

  const api = (nameCategories: string): any => {
    sendRequest(
		`${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`)
		.then((respons: {results: CardRecipe[]}) => setRecipes(respons.results) 
	 )
  }

  const unfoldRecipeDetails = (id: number): any => {
    setRecipeId(id);
    setRecipeDetails(!recipeDetails);
  };

//   const contex = useContext(ThemeContext)
// console.log(contex);

  return (

	

    <div className="wrapper">
<button onClick={() => {store.steCount({
	a:1,
	b:2
}), console.log(store)}


}>555555</button>


      <Header />
	
      <Categories category={api} />
      <Gallary recipes={recipes} recipeDetails={unfoldRecipeDetails} />
      {recipeDetails ? <RecipeDetails recipeId={recipeId} /> : <></>}
    </div>
  );
});

export default App;
