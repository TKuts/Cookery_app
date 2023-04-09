import React from "react";
import "./RecipeIngredients.scss";

import {Ingredients} from "../../../domain/recipe-details";

interface RecipeIngredients {
	ingredients: Ingredients[];
	
}

const RecipeIngredients: React.FC<RecipeIngredients> = ({ingredients}) => {

  return (
    
	  <div className="ingredients">
          <h3 className="ingredients__title">Ingredients</h3>
          {ingredients.map((elem, index) => (
            <div key={index} className="ingredient__wrapper">
              <p className="ingredient__name">{elem.name}</p>
              <p className="ingredient__metric">
                {elem.amount.metric.value} {elem.amount.metric.unit}
              </p>
            </div>
          ))}
        </div>          
  );
};

export default RecipeIngredients;
