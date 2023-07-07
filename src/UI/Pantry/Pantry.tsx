import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pantry.scss";

// import { getRecipeByCategory } from "../../adaptters/sendAllRequest";


import { observer } from "mobx-react-lite";
import { action, makeAutoObservable, toJS } from "mobx";
import { store } from "../../application/storage/BusinessStore";

interface PantryProps {
	showPantry: boolean,
	changeState: () => void
}

const Pantry: React.FC<PantryProps> = observer(({ showPantry, changeState }) => {

	const [ingredientsForShop, setIngredientsForShop] = useState<{}[]>([])


	useEffect(() => {
		setIngredientsForShop([...toJS(store.ingredientsForShop)])
		// console.log("store.ingredientsForShop", toJS(store.ingredientsForShop));

		// setIngredientsForShop(store.ingredientsForShop)
		// console.log("ingredientsForShop", toJS(store.ingredientsForShop));
		// setIngredientsForShop([...ingredientsForShop, ...toJS(store.ingredientsForShop)])
		// store.getIngredientsForShop(store.ingredientsForShop)
		console.log("ingredientsForShop", ingredientsForShop);
	}, [])



	const renderIngridients = store.ingredientsForShop.map((widget, index) => (
		<div className="dropped-widget" key={widget.id} >
			
		</div >
	))
// setIngredientsForShop([...ingredientsForShop])
// console.log("ingredientsForShop", ingredientsForShop);


return (
	<section className={showPantry ? "pantry__wrapper" : "pantry__wrapper block"}  >
		<div className="pantry">
			<i className="bi bi-arrows-angle-contract pantry__angle" onClick={() => changeState()}></i>

			{renderIngridients}
		</div>

	</section>
);
});

export default Pantry;
