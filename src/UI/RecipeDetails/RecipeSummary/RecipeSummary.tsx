import React, { useState, useEffect } from "react";
import "./RecipeSummary.scss";

import {Summary, Nutrition} from "../../../domain/recipe-details";

interface RecipeSummary {
	summary: Summary;
	children: Nutrition[];
}

const RecipeSummary: React.FC<RecipeSummary> = ({summary, children}) => {

	const dishTypes = (data: string[]): any => {
		let newString = "";
		data && data.map((item) => {
			 newString += `#${item} `;
		  });
		return newString;
	 };

	 const createMarkup = (summary: Summary) => {
		return { __html: summary.summary };
	 };

  return (
	<section className="recipe__summury-wrapper">
		<div className="block__left">
			<img
			className="block__left-img"
			src={summary.image}
			alt={summary.title}
			/>
			{children}
		</div>

		<p
		className="block__left-text"
		dangerouslySetInnerHTML={createMarkup(summary)}
		/>

	</section>
          
  );
};

export default RecipeSummary;
