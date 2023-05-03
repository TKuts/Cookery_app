import React, { useState, useEffect } from "react";
import "./RecipeIngredients.scss";

import { Ingredients } from "../../../domain/recipe-details";
import DragAndDrop from "../../DragAndDrop/DragAndDrop"
import { apiIngredients } from "../../../adaptters/sendAllRequest"
import  { store } from "../../../application/storage/BusinessStore"

const RecipeIngredients: React.FC = () => {
	const { recipeId } = store;
	const [ingredients, setIngredients] = useState< Ingredients[]  | null >(null);

	useEffect(() => {	
		apiIngredients(recipeId).then((res) => setIngredients(res.ingredients))
	  }, []);

	const handleOnDrag = (event: React.DragEvent, widgetType: string) => {
		event.dataTransfer.setData("aa", widgetType);
	 };

  return (
	ingredients &&
    <section className="recipe__ingredient">
      <h3 className="recipe__ingredient-title">Ingredients</h3>
      {ingredients.map((elem, index) => (
        <div
          key={index}
          className="recipe__ingredient-wrapper"
          draggable
          onDragStart={(event) =>
            handleOnDrag(event, `${elem.name}, ${elem.amount.metric.value}, ${elem.amount.metric.unit}`)
          }
        >
          <p>{elem.name}</p>
          <p>{Math.round(elem.amount.metric.value)} {elem.amount.metric.unit}
          </p>
        </div>
      ))}
      <DragAndDrop/>
    </section>
  );
};

export default RecipeIngredients;
