import React, { useState, useEffect } from "react";
import "./RecipeTitle.scss";

import { SelectedRecipe } from "../../../domain/recipe-details";

interface RecipeTitleProps {
	summary: SelectedRecipe;
}

const RecipeTitle: React.FC<RecipeTitleProps> = ({summary}) => {

	const dishTypes = (data: string[]): any => {
		let newString = "";
		data && data.map((item) => {
			 newString += `#${item} `;
		  });
		return newString;
	 };

  return (
		<section >
			<h2 className="detailed__title">{summary.title}</h2>
			<div className="detailed__information">
				<div className="detailed__time">
					<img
					className="detailed__time-img"
					src="src/UI/RecipeDetails/img/hourglass.svg"
					alt="hourglass"
					/>
					<div className="time__information">
						<p className="time__information-title">COOK TIME</p>
						<p className="time__information-minutes">{summary.readyInMinutes} Minutes</p>
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
		</section>
          
  );
};

export default RecipeTitle;
