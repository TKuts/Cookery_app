import React, { useState, useEffect } from "react";
import "./ExcludedIngredients.scss";

import { observer } from "mobx-react-lite";

interface ExcludedIngredientsProps {
	selectedIngredient: string[]
}

const ExcludedIngredients: React.FC<ExcludedIngredientsProps> = observer(({ selectedIngredient }) => {

	const renderExcludedIngredients = selectedIngredient.map(ingredient => (
		<div className="excluded__ingredients-title">#{ingredient}</div>)
	)




	return (
		<section className="excluded__ingredients">
			{renderExcludedIngredients}
		</section>

	)
})

export default ExcludedIngredients;
