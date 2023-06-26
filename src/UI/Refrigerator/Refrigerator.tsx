import React, { useEffect, ReactNode, useState } from "react";

import { observer } from "mobx-react-lite";
import { store } from "../../application/storage/BusinessStore";
import { SelectedRecipe } from "../../domain/recipe-details";
import SkeletonRecipeCard from "../Skeleton/SkeletonRecipeCard/SkeletonRecipeCard"
import "./RecipeCard.scss";
import { Link } from "react-router-dom"



interface RefrigeratorProps {
	informationForCard: SelectedRecipe[];
	sizeSkeleton: string | undefined;
	children?: ReactNode;
}

const Refrigerator: React.FC<RefrigeratorProps> = observer(( ) => {


	
	

	return (
		<>
		
		</>
	)
})

export default Refrigerator;
