import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pantry.scss";

import { getIngredienInformation } from "../../adaptters/sendAllRequest";
import { ingredientForShop } from "../../domain/recipe-details";

import { observer } from "mobx-react-lite";
import { action, makeAutoObservable, toJS } from "mobx";
import { store } from "../../application/storage/BusinessStore";

interface PantryProps {

	changeState: () => void
}

interface Ip {
	originalName: string,
	amount: number,
	id: number,
	estimatedCost: { value: number, unit: string },
	image: string,
}

const Pantry: React.FC<PantryProps> = observer(({

	changeState }) => {

	const [ingredientsForShop, setIngredientsForShop] = useState<ingredientForShop[]>([])
	const [detailOngredient, setDetailOngredient] = useState<Ip[]>([])



	useEffect(() => {
		store.ingredientsForShop.forEach(imgredient => {
			getIngredienInformation(imgredient.id, imgredient.value).then(respons => {
				const object = respons;
				setDetailOngredient(prevDate => [...prevDate, object])
			})
		})
	}, [])

console.log("detailOngredient", detailOngredient);

	const renderCardIngredient = (
		<div>
			{
				detailOngredient.map(ingredient => (
					<div key={ingredient.id}>
						{/* <img src={ingredient.image} alt="" /> */}
						<h1>{ingredient.originalName}</h1>
					</div>
				))
			}
		</div>
	)

	return (
		<section
			className={"pantry__wrapper"}
		>
			<div className="pantry">
				<i className="bi bi-arrows-angle-contract pantry__angle" onClick={() => changeState()}></i>

				{renderCardIngredient}
			</div>
			
		</section>
	);
});

export default Pantry;
