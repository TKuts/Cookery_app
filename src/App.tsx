import React, { useState, useContext, useEffect } from "react";
import "./App.scss";

import { observer } from "mobx-react-lite";

import Header from "./UI/Header/Header";
import Categories from "./UI/Categories/Categories";
import FasterRecipes from "./UI/FasterRecipes/FasterRecipes"
import SubmissionToBlog from "./UI/SubmissionToBlog/SubmissionToBlog"
import Gallary from "./UI/Gallary/Gallary";
import RecipeDetails from "./UI/RecipeDetails/RecipeDetails";
import Footer from "./UI/Footer/Footer";

const App = observer(() => {

const [recipeDetails, setRecipeDetails] = useState<boolean>(false);

const showRecipeDetails = () => {
	setRecipeDetails(!recipeDetails)
}

  return (
    <div className="wrapper">
      <Header />

			<Categories/>
			<FasterRecipes/>
			<SubmissionToBlog/>
			<Gallary showRecipeDetails={showRecipeDetails}/>
			{recipeDetails ? <RecipeDetails/> : <></>}
	
      
		<Footer/>
    </div>
  );
});

export default App;
