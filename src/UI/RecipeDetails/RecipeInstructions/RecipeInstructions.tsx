import React, { useState, useEffect } from "react";
import "./RecipeInstructions.scss";

import {Instructions} from "../../../domain/recipe-details";

interface RecipeInstructions {
	instructions: Instructions[];
	
}

const RecipeInstructions: React.FC<RecipeInstructions> = ({instructions}) => {

	const [checkDoneInstruction, setCheckDoneInstruction] = useState(false)
	const [showAllIngridients, setShowAllIngridients] = useState(false)

	const checkInstruction = (elemNumber: number): void =>{
		 instructions.map(instruction => {
			if(instruction.number === elemNumber) {
				instruction.checked = !checkDoneInstruction
				setCheckDoneInstruction(!checkDoneInstruction)			
		 }})
	}

	const expand = (elemNumber: number): void =>{
		instructions.map(instruction => {
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
	<section className="detailed__directions">
		<h3 className="detailed__directions-title">Directions</h3>
		{

			

			instructions.map((elem) => (	
				<div  key={elem.number} className="direction" style={{ opacity: elem.checked ? " 0.5": "1" }}>
					<div className="direction__step">
						<button type="button" className="task__btn" onClick={() => {
							checkInstruction(elem.number)}}>
							<img 
							style={{ display: elem.checked ? "none": "block" }} 
							className="task__btn-img" 
							src="src/UI/RecipeDetails/img/circle.svg" 
							alt="circle" />
							<img 
							style={{ display: elem.checked ? "block" : "none" }} 
							className="task__btn-img " 
							src="src/UI/RecipeDetails/img/check-circle.svg" 
							alt="check-circle" />
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
