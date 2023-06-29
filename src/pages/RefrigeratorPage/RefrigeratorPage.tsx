import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RefrigeratorPage.scss";

// import { getRecipeByCategory } from "../../adaptters/sendAllRequest";


import { observer } from "mobx-react-lite";
import { action, makeAutoObservable, toJS } from "mobx";
import { store } from "../../application/storage/BusinessStore";


const RefrigeratorPage: React.FC = observer(() => {

	const [ingredientsForShop, setIngredientsForShop] = useState<{}[]>([])


	useEffect(() => {
		// console.log("ingredientsForShop", toJS(store.ingredientsForShop));
		// setIngredientsForShop([...ingredientsForShop, ...toJS(store.ingredientsForShop)])
		// store.getIngredientsForShop(store.ingredientsForShop)
	}, [])

	// setIngredientsForShop([...ingredientsForShop])
	// console.log("ingredientsForShop", ingredientsForShop);


	return (
		<section className="recipe__page">

		</section>
	);
});

export default RefrigeratorPage;
