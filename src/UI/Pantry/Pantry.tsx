import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { getIngredienInformation } from "../../adaptters/sendAllRequest";
import { store } from "../../application/storage/BusinessStore";
import { PantryValue } from "../../domain/recipe-details"
import "./Pantry.scss";

interface PantryProps {
	changeState: () => void
}


const Pantry: React.FC<PantryProps> = observer(({ changeState }) => {

	const [detailOngredient, setDetailOngredient] = useState<PantryValue[]>([])

	useEffect(() => {
		store.ingredientsForShop.forEach(imgredient => {
			getIngredienInformation(imgredient.id, imgredient.value).then(respons => {
				const object = respons;
				setDetailOngredient(prevDate => [...prevDate, object])
			})
		})
	}, [])

	const totalPrice = (array: PantryValue[]) => {
		let price = 0
		array.forEach(ingredient => price += ingredient.estimatedCost.value)
		return price.toFixed(2)
	}

	const renderCardIngredient = (
		<div className="ingredients__wrapper">
			{
				detailOngredient.map(ingredient => (
					<div className="ingredient__card" key={ingredient.id}>
						<img src="../src/UI/Pantry/img/plug.jpg" alt="plug" className="ingredient__card-img" />
						<h1 className="ingredient__card-title">{ingredient.originalName}</h1>
						<div className="">
							<p className="ingredient__card-quantity">quantity {ingredient.amount} </p>
						</div>
						<div className="ingredient__card-price">
							<h3 className="ingredient__card-price-cost">Price in shop:</h3>
							<p className="ingredient__card-price-cost">{ingredient.estimatedCost.value} $</p>
						</div>
					</div>
				))
			}
		</div>
	)

	return (
		<section className={"pantry__wrapper"}>
			<div className="pantry">
				<div className="header__line">
					<i className="bi bi-arrows-angle-contract header__line-angle" onClick={() => changeState()}></i>
					<p className="header__line-price">Total price: {totalPrice(detailOngredient) ? totalPrice(detailOngredient) : 0} $</p>
				</div>
				{renderCardIngredient}
			</div>
		</section>
	);
});

export default Pantry;
