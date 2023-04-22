// import React, { useState, useContext, useEffect } from "react";

// import  sendRequest  from "../adaptters/sendRequest"
// import { CardRecipe } from "../domain/card-recipe";

// const API = import.meta.env.VITE_REACT_API_HOST;
// const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES;
// const API_KEY = import.meta.env.VITE_REACT_API_KEY;



// const [recipes, setRecipes] = useState<CardRecipe[] | []>([]); 

// export const getRecipeByCategory = (nameCategories: string): any => {
// 	sendRequest(
// 	  `${API}${ALL_RECIPES}addRecipeInformation=true&number=9&type=${nameCategories}&${API_KEY}`)
// 	//   .then((respons: {results: CardRecipe[]}) => setRecipes(respons.results))
//  }