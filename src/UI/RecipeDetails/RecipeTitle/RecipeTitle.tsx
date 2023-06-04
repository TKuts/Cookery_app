import React, { useRef, useEffect } from "react";
import "./RecipeTitle.scss";

import { store } from "../../../application/storage/BusinessStore";

const RecipeTitle: React.FC = () => {

	const { title, readyInMinutes, dishTypes } = store.filteredRecipe;

	useEffect(() => {
		scrollToMyRef()
	}, [store.recipeId]);

	const myRef = useRef<HTMLHeadingElement>(null);

	const scrollToMyRef = () => {
		if (myRef.current) {
			window.scrollTo(0, myRef.current.scrollHeight)
		}
	}

	const readDishTypes = (data: string[]): any => {
		let newString = "";
		data && data.map((item) => {
			newString += `#${item} `;
		});
		return newString;
	};

	return (
		store.filteredRecipe &&
		<section >
			<h2 className="detailed__title" ref={myRef}>{title} </h2>
			<div className="detailed__information">
				<div className="detailed__time">
					<i className="fa-regular fa-hourglass-half detailed__time-icons"></i>
					<div className="time__information">
						<p className="time__information-title">COOK TIME</p>
						<p className="time__information-minutes">{readyInMinutes} Minutes</p>
					</div>
				</div>
				<div className="detailed__type">
					<i className="fa-solid fa-utensils detailed__time-icons"></i>
					<p className="detailed__type-data">{readDishTypes(dishTypes)}</p>
				</div>
			</div>
		</section>
	);
};

export default RecipeTitle;
