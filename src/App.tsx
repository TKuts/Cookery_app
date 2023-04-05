import React, { useState } from "react";
import "./App.scss";

import Header from "./UI/Header/Header";
import Categories from "./UI/Categories/Categories";
import Gallary from "./UI/Gallary/Gallary";
import RecipeDetails from "./UI/RecipeDetails/RecipeDetails";

const API = import.meta.env.VITE_REACT_API_HOST;
const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

import { CardRecipe } from "./domain/card-recipe";
import { sendRequest } from "./adaptters/sendRequest";

const App = () => {
  const [recipes, setRecipes] = useState<CardRecipe[] | []>([]);
  const [recipeDetails, setRecipeDetails] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<number>(Number);

  const api = (nameCategories: string): any => {
    sendRequest(
		`${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`)
		.then((respons) => setRecipes(respons.results)
	 )
  }

  const unfoldRecipeDetails = (id: number): any => {
    setRecipeId(id);
    setRecipeDetails(!recipeDetails);
  };

  return (
    <div className="wrapper">
      <Header />
      <Categories category={api} />
      <Gallary recipes={recipes} recipeDetails={unfoldRecipeDetails} />
      {recipeDetails ? <RecipeDetails recipeId={recipeId} /> : <></>}
    </div>
  );
};

export default App;
