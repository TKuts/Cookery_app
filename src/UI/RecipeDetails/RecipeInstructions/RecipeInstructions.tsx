import React, { useState, useEffect } from "react";
import "./RecipeInstructions.scss";

import {Instructions, SelectedRecipe} from "../../../domain/recipe-details";
import  { store } from "../../../application/storage/BusinessStore"
import { toJS } from "mobx";


const RecipeInstructions: React.FC = () => {
	const { recipeId, recipeByCategory} = store;
	const [recipeInstructions, setRecipeInstructions] = useState<Instructions[]>([]);

	  useEffect(() => {	
		allDataSelectedRecipe(recipeId)
  }, [recipeId]);

	const allDataSelectedRecipe = (id: number) => {
		let selectedRecipe = null
		recipeByCategory.map(recipe => {
			if (recipe.id === id){
				selectedRecipe = (toJS(recipe));
			}
		})
		apiInstructions(selectedRecipe)
		
	};

	const apiInstructions =  (recipe: null | SelectedRecipe) => {
		recipe ? setRecipeInstructions(recipe.analyzedInstructions[0].steps) : console.log("робити помилку");
	};

	const [checkDoneInstruction, setCheckDoneInstruction] = useState(false)
	const [showAllIngridients, setShowAllIngridients] = useState(false)

	const checkInstruction = (elemNumber: number): void =>{
		recipeInstructions.map(instruction => {
			if(instruction.number === elemNumber) {
				instruction.checked = !checkDoneInstruction
				setCheckDoneInstruction(!checkDoneInstruction)			
		 }})
	}

	const expand = (elemNumber: number): void =>{
		recipeInstructions.map(instruction => {
		  if(instruction.number === elemNumber) {
			  instruction.expand = !showAllIngridients
			  setShowAllIngridients(!showAllIngridients)			
		}})
  }

	// const showAllIngridients = (arrayWithIngredients) => {
	// 	let btnShow = false
	

	// 	!btnShow ? <>
	// 		{arrayWithIngredients.map(tool => (
	// 			<p key={tool.id} className="direction__tool-step">{tool.name}</p>
	// 		))}
	// 		<button onClick={() => !btnShow}>{btnShow ? "Show less" : "I woul like wath"}</button>
	// 	</> : <>
	// 		<p className="direction__tool-step ">{arrayWithIngredients[0].name}</p>
	// 		<button onClick={() => !btnShow}>{btnShow ? "Show less" : "I woul like wath"}</button>
	// </>

	
	// }


  return (
	recipeInstructions &&
	<section className="detailed__directions">
		<h3 className="detailed__directions-title">Directions</h3>
		{
			recipeInstructions.map((elem) => (	
				<div key={elem.number} className="direction" style={{ opacity: elem.checked ? " 0.5": "1" }}>
					<div className="direction__step" >
						<button type="button" className="task__btn" 
									onClick={(e) => {checkInstruction(elem.number)}
									}>
							<i className="fa-regular fa-circle task__btn-img" style={{ display: elem.checked ? "none": "block" }} ></i>
							<i className="fa-regular fa-circle-check task__btn-img" style={{ display: elem.checked ? "block" : "none" }} ></i>
						</button>
						<p className="direction__step-title">{elem.number}. {elem.step}</p>
					</div>
					<div className="direction__wrapper">
						<div className="direction__ingredients">
							<p className="direction__ingredients-title">ingredients for this step:</p>
							{
								elem.ingredients.length > 0 ? elem.ingredients.map(tool => (
									<p key={tool.id} className="direction__tool-step" style={{ display: elem.expand ? "block": "none" }} >{tool.name}</p>
								)) : <p className="direction__tool-step" style={{ display: elem.expand ? "block": "none" }}>not needed at this stage</p>
							}
						</div>
						<div className="direction__tool">
							<p className="direction__tool-title">equipment for this step:</p>
							{
								elem.equipment.length > 0 ? elem.equipment.map(tool => (
									<p key={tool.id}className="direction__tool-step" style={{ display: elem.expand ? "block": "none" }}>{tool.name}</p>
								)) : <p className="direction__tool-step" style={{ display: elem.expand ? "block": "none" }}>not needed at this stage</p>
							}
						</div>
					</div>
					<button onClick={() => expand(elem.number)}>sgow</button>
				</div>
			))
		} 
	</section>

  );
};

export default RecipeInstructions;
