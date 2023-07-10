import { observer } from "mobx-react-lite";
import React from "react";
import "./ExcludedIngredients.scss";

interface ExcludedIngredientsProps {
	selectedIngredient: string[],
	removeIngredient: (value: string) => void
}

const ExcludedIngredients: React.FC<ExcludedIngredientsProps> = observer(({ selectedIngredient, removeIngredient }) => {
	const renderExcludedIngredients = selectedIngredient.map((ingredient, index) => (
		<div className="excluded__ingredients-title"
			key={index}
			onClick={() => removeIngredient(ingredient)}>#{ingredient}
		</div>
	))
	return (
		<section className="excluded__ingredients">
			{renderExcludedIngredients}
		</section>
	)
})

export default ExcludedIngredients;
