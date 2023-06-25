import React, { useState, useEffect } from "react";
import "./ExcludedIngredients.scss";

import { observer } from "mobx-react-lite";

interface ExcludedIngredientsProps {
	selectedIngredient: string[],
	removeIngredient: (value: string) => void
}

const ExcludedIngredients: React.FC<ExcludedIngredientsProps> = observer(({ selectedIngredient, removeIngredient }) => {

	const renderExcludedIngredients = selectedIngredient.map(ingredient => (
		<div className="excluded__ingredients-title" onClick={() => removeIngredient(ingredient)}>#{ingredient}</div>)
	)


	return (
		<section className="excluded__ingredients">
			{renderExcludedIngredients}
		</section>

	)
})

export default ExcludedIngredients;
