import React, { useState, useEffect, ReactNode } from "react";
import "./RecipeSummary.scss";

import { SelectedRecipe } from "../../../domain/recipe-details";

import { store } from "../../../application/storage/BusinessStore"

interface RecipeSummary {
	children: ReactNode;
}

const RecipeSummary: React.FC<RecipeSummary> = ({ children }) => {


	const { summary, title, image } = store.filteredRecipe;
	const createMarkup = (summary: string) => {
		return { __html: summary };
	};

	return (
		store.filteredRecipe &&
		<section className="recipe__summury-wrapper">
			<figure className="block__left">
				<img
					className="block__left-img"
					src={image}
					alt={title} />
				{children}
			</figure>
			<p
				className="block__left-text"
				dangerouslySetInnerHTML={createMarkup(summary)} />
		</section>
	);
};

export default RecipeSummary;
