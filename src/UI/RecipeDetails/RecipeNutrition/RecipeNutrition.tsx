import React, {useEffect, useState} from "react";
import { Nutrition } from "../../../domain/recipe-details";
import { store } from "../../../application/storage/BusinessStore";
import { toJS } from "mobx";
import "./RecipeNutrition.scss";

const RecipeNutrition: React.FC = () => {

const[stateNutrients, setStateNutrients] = useState<Nutrition[]>([])

	const { nutrition } = store.filteredRecipe

	useEffect(()=>{
		
		setStateNutrients(nutrition.nutrients)
	},[nutrition])
	
	const nutritionFilter = ['Calories', 'Fat', 'Protein','Carbohydrates', 'Cholesterol']

	const nutritionWhatNeed: Nutrition[] = []

	stateNutrients.map((element: Nutrition) => {
		nutritionFilter.filter(word => {
			if(word === element.name){
				nutritionWhatNeed.push(element)
			}
		})
	})

  return (
	store.filteredRecipe &&
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
						)})
			}
		</div>          
  );
};

export default RecipeNutrition;
