import React, { useEffect, useState } from "react";
import "./RecipeInstructions.scss";

import { store } from "../../../application/storage/BusinessStore";
import { AnalyzedInstructions, Instructions } from "../../../domain/recipe-details";
import { toJS } from "mobx";

const RecipeInstructions: React.FC = () => {

	const [recipeInstructions, setRecipeInstructions] = useState<Instructions[]>([]);
	const [renderPage, setRenderPage] = useState(false)

	const { analyzedInstructions } = store.filteredRecipe

	useEffect(() => {
		apiInstructions(analyzedInstructions)
	}, [analyzedInstructions]);


	const apiInstructions = (recipe: AnalyzedInstructions[]) => {
		let newRecipe: Instructions[] = []


		if (recipe) {
			recipe[0].steps.forEach(instruction => {
				instruction.checked = false;
				instruction.unwrap = false;
				newRecipe.push(instruction);
			})
		} else {
			console.log("робити помилку")
		}
		setRecipeInstructions(newRecipe)

	};

	const checkInstruction = (elemNumber: number): void => {
		recipeInstructions.map(instruction => {
			if (instruction.number === elemNumber) {
				instruction.checked = !instruction.checked;
				instruction.unwrap = false;
				setRenderPage(!renderPage)
			}
		})
	}

	const unwrap = (elemNumber: number): void => {
		recipeInstructions.map(instruction => {
			if (instruction.number === elemNumber) {
				instruction.unwrap = !instruction.unwrap
				setRenderPage(!renderPage)
			}
		})
	}

	return (
		store.filteredRecipe && recipeInstructions &&
		<section className="detailed__directions">
			<h3 className="detailed__directions-title">Directions</h3>
			{
				recipeInstructions.map((elem) => (
					<div key={elem.number} className={elem.checked ? "direction checked" : "direction"}>
						<div className="direction__step" >
							<button type="button" className="direction__step-btn"
								onClick={() => { checkInstruction(elem.number) }
								}>
								<i className="fa-regular fa-circle direction__step-btn-img" style={{ display: elem.checked ? "none" : "block" }} ></i>
								<i className="fa-regular fa-circle-check direction__step-btn-img" style={{ display: elem.checked ? "block" : "none" }} ></i>
							</button>
							<p className="direction__step-title">{elem.number}. {elem.step}</p>
						</div>

						<div
							className={elem.checked ? "direction__wrapper hiden " : "direction__wrapper"}
							onClick={() => unwrap(elem.number)}>
							<div className="direction__block" >
								<p className="direction__block-title">ingredients for this step:</p>
								{
									elem.ingredients.length > 0 ? elem.ingredients.map(tool => (
										<p key={tool.id} className={elem.unwrap ? "direction__block-step" : "direction__block-step hiden"} >{tool.name}</p>
									)) : <p className={elem.unwrap ? "direction__block-step" : "direction__block-step hiden"}>not needed at this stage</p>
								}
							</div>
							<div className="direction__block">
								<p className="direction__block-title">equipment for this step:</p>
								{
									elem.equipment.length > 0 ? elem.equipment.map(tool => (
										<p key={tool.id} className={elem.unwrap ? "direction__block-step" : "direction__block-step hiden"}>{tool.name}</p>
									)) : <p className={elem.unwrap ? "direction__block-step" : "direction__block-step hiden"}>not needed at this stage</p>
								}
							</div>
						</div>
					</div>
				))
			}
		</section>

	);
};

export default RecipeInstructions;
