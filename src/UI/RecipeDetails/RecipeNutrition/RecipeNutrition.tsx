import React from "react";
import "./RecipeNutrition.scss";

import {Nutrition} from "../../../domain/recipe-details";

interface RecipeNutritionProps {
	nutrition: Nutrition[];
	
}

const RecipeNutrition: React.FC<RecipeNutritionProps> = ({nutrition}) => {

  return (
	nutrition &&
	<div className="nutrition">
		<h3 className="nutrition__title">Nutrition Information</h3>
		<div  className="nutrition__wrapper">
			<p className="nutrition__name">{nutrition[0].name}</p>
			<p className="nutrition__metric">
			{Math.round(nutrition[0].amount)} {nutrition[0].unit}
			</p>
		</div>
		<div className="nutrition__wrapper">
			<p className="nutrition__name">{nutrition[1].name}</p>
			<p className="nutrition__metric">
			{Math.round(nutrition[1].amount)} {nutrition[1].unit}
			</p>
		</div>
		<div  className="nutrition__wrapper">
			<p className="nutrition__name">{nutrition[8].name}</p>
			<p className="nutrition__metric">
			{Math.round(nutrition[8].amount)} {nutrition[8].unit}
			</p>
		</div>
		<div className="nutrition__wrapper">
			<p className="nutrition__name">{nutrition[3].name}</p>
			<p className="nutrition__metric">
			{Math.round(nutrition[3].amount)} {nutrition[3].unit}
			</p>
		</div>
		<div  className="nutrition__wrapper">
			<p className="nutrition__name">{nutrition[6].name}</p>
			<p className="nutrition__metric">
			{Math.round(nutrition[6].amount)} {nutrition[6].unit}
			</p>
		</div>
	</div>          
  );
};

export default RecipeNutrition;
