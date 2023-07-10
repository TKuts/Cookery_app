import { observer } from "mobx-react-lite";
import React from "react";
import "./SkeletonRecipeCard.scss";

interface PropsSkeletonRecipeCard {
	lengthRender: number
}

const SkeletonRecipeCard: React.FC<PropsSkeletonRecipeCard> = observer(({ lengthRender }) => {
	const skeleton = (
		<section className="recipe-card-skeleton animate-pulse">
			{
				[...Array(lengthRender).keys()].map(i => {
					return <div className="recipe-card-skeleton__wrapper" key={i}>
						<div className="recipe-card-skeleton__img"></div>
						<div className="recipe-card-skeleton__title"></div>
						<div className="recipe-card-skeleton__text"></div>
						<div className="recipe-card-skeleton__text"></div>
					</div>
				})
			}
		</section>
	)
	return (skeleton)
})

export default SkeletonRecipeCard;
