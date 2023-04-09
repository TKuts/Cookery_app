import React, { useState, useEffect } from "react";
import "./RecipeSummary.scss";

import {Summary} from "../../../domain/recipe-details";

interface RecipeSummary {

	summary: Summary;
}

const RecipeSummary: React.FC<RecipeSummary> = ({summary}) => {

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
		  {/* <h2 className="detailed__title">{summary.title}</h2> */}
     
		<div className="block__left">
          <img
            className="block__left-img"
            src={summary.image}
            alt={summary.title}
          />
          <p
            className="block__left-text"
            dangerouslySetInnerHTML={createMarkup(summary)}
          />
        </div>
    </section>
          
  );
};

export default RecipeSummary;
