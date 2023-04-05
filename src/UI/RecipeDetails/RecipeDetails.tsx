import React, { useState, useEffect } from "react";
import "./RecipeDetails.scss";

const API = import.meta.env.VITE_REACT_API_HOST;
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS;
const TUTORIAL = import.meta.env.VITE_REACT_TUTORIAL;
const API_KEY = import.meta.env.VITE_REACT_API_KEY;

import { sendRequest } from "../../adaptters/sendRequest";
import {Ingredients, Summary} from "../../domain/recipe-details"

interface RecipeDetailsProps {
	recipeId: number;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipeId }) => {

  const [ingredients, setIngredients] = useState< null | Ingredients[]>([]);
  const [summary, setSummary] = useState< null | Summary>(null) ;
//   const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    apiIngredients(recipeId);
    apiSummary(recipeId);
    apiInstructions(recipeId)
  }, []);

	const apiIngredients =  (id: number) => {
		sendRequest(`${API}${id}${INGREDIENTS}${API_KEY}`)
			.then((rec) =>  setIngredients(rec.ingredients));
	};

	const apiSummary = (id: number) => {
		sendRequest(`${API}${id}/information?includeNutrition=false&${API_KEY}`)
			.then((rec) => setSummary(rec));
	};

  const apiInstructions =  (id: number) => {
	sendRequest(`${API}${id}${TUTORIAL}${API_KEY}`)
      .then((rec) => console.log(rec[0].steps));
		// setInstructions(rec[0].steps)
  };

  const createMarkup = (summary: Summary) => {
    return { __html: summary.summary };
  };

  const dishTypes = (data: string[]): any => {
    let newString = "";
    data && data.map((item) => {
        newString += `#${item} `;
      });
    return newString;
  };

  return (
   summary && ingredients &&
    <section className="detailed__wrapper">
      <h2 className="detailed__title">{summary.title}</h2>
      <div className="detailed__information">
        <div className="detailed__time">
          <img
            className="detailed__time-img"
            src="src/UI/RecipeDetails/img/hourglass.svg"
            alt="hourglass"
          />
          <div>
            <p className="detailed__time-title">COOK TIME</p>
            <p className="detailed__time-minutes">{summary.readyInMinutes}</p>
          </div>
        </div>
        <div className="detailed__type">
          <img
            className="detailed__time-img"
            src="src/UI/RecipeDetails/img/ForkKnife.svg"
            alt="ForkKnife"
          />
          <p className="detailed__type-data">{dishTypes(summary.dishTypes)}</p>
        </div>
      </div>
      <div className="detailed__block">
        <div className="block__left">
          <img
            className="block__left-img"
            src={summary.image}
            alt={summary.title}
          />
          <p
            className="block__left-text"
            dangerouslySetInnerHTML={createMarkup(summary)}
          />
        </div>
        <div className="ingredients">
          <h3 className="ingredients__title">Ingredients</h3>
          {ingredients.map((elem) => (
            <div key={elem.index} className="ingredient__wrapper">
              <p className="ingredient__name">{elem.name}</p>
              <p className="ingredient__metric">
                {elem.amount.metric.value} {elem.amount.metric.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
          
  );
};

export default RecipeDetails;
