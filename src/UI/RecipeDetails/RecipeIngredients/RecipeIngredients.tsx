import React, { useState, useEffect } from "react";
import "./RecipeIngredients.scss";

import { Ingredients } from "../../../domain/recipe-details";
import DragAndDrop from "../../DragAndDrop/DragAndDrop"

interface RecipeIngredientsProps {
  ingredients: Ingredients[];
}



const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ingredients}) => {
  
	const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
		e.dataTransfer.setData("aa", widgetType);
	 };

  return (
    <section className="recipe__ingredient">
      <h3 className="recipe__ingredient-title">Ingredients</h3>
      {ingredients.map((elem, index) => (
        <div
          key={index}
          className="recipe__ingredient-wrapper"
          draggable
          onDragStart={(e) =>
            handleOnDrag(
              e,
              `${elem.name}, ${elem.amount.metric.value}, ${elem.amount.metric.unit}`
            )
          }
        >
          <p>{elem.name}</p>
          <p>{Math.round(elem.amount.metric.value)} {elem.amount.metric.unit}
          </p>
        </div>
      ))}
      <DragAndDrop  />
    </section>
  );
};

export default RecipeIngredients;
