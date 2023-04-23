import React from "react";
import "./RecipeNutrition.scss";

import { Nutrition } from "../../../domain/recipe-details";

interface RecipeNutritionProps {
	nutrition: Nutrition[];
}

const RecipeNutrition: React.FC<RecipeNutritionProps> = ({nutrition}) => {

	const nutritionFilter = ['Calories', 'Fat', 'Protein','Carbohydrates', 'Cholesterol']

	const nutritionWhatNeed: Nutrition[] = []

	nutrition.map((element) => {
		nutritionFilter.filter(word => {
			if(word === element.name){
				nutritionWhatNeed.push(element)
			}})
		}
	)

  return (
	nutrition &&
		<div className="nutrition">
			<h3 className="nutrition__title">Nutrition Information</h3>
			{	
				nutritionWhatNeed.map((element, index) => {
					return (
						<div  className="nutrition__wrapper" key={index}>
							<p className="nutrition__name">{element.name}</p>
							<p className="nutrition__metric">
							{Math.round(element.amount)} {element.unit}
							</p>
						</div>
					)
				})
			}
		</div>          
  );
};

export default RecipeNutrition;
