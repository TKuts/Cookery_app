import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { store } from "../../application/storage/BusinessStore";
import { IngredientForShop } from "../../domain/recipe-details";
import Pantry from "../Pantry/Pantry";
import "./DragAndDrop.scss";

const DragAndDrop: React.FC = observer(() => {
	const [changeBtn, setChangeBtn] = useState(false)
	const [showPantry, setSowPantry] = useState(false)

	const handleOnDrop = (e: React.DragEvent) => {
		const widgetType = e.dataTransfer.getData("getData") as string;
		const createArray = widgetType.split(", ");

		let createObjectData: IngredientForShop = {
			name: createArray[0],
			value: createArray[1],
			unit: createArray[2],
			id: createArray[3]
		};

		store.getIngredientsForShop(createObjectData)
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	}

	const renderWidgets = store.ingredientsForShop.map((widget, index) => (
		<div className="dropped-widget" key={index} onClick={() => { }
		}>
			<p className="dropped-widget_name">{widget.name}</p>
			<p className="dropped-widget_metric">{+widget.value} {widget.unit}</p>
		</div>
	))

	const changeState = () => {
		document.body.style.overflow = showPantry ? "visible" : "hidden",
			setSowPantry(!showPantry),
			setChangeBtn(!changeBtn)
	}

	return (
		<>
			<section className={changeBtn ? "cirkle active" : "cirkle"} onClick={() => { setChangeBtn(!changeBtn) }}>
				<i className="fa-regular fa-rectangle-list list-icon"></i>
			</section>
			<section
				className={changeBtn ? "shopping-list" : "shopping-list active"}
				onDrop={handleOnDrop}
				onDragOver={handleDragOver}
			>
				<h3
					className="shopping-list__title"
					onClick={() => { setChangeBtn(!changeBtn) }}
				>Shopping list</h3>
				<i
					className="bi bi-arrows-angle-expand shopping-list__angle"
					onClick={() => changeState()}
				/>
				{renderWidgets}
			</section>
			{showPantry ? <Pantry
				// showPantry={showPantry}
				changeState={changeState} /> : <></>}
		</>
	)
})

export default DragAndDrop;
