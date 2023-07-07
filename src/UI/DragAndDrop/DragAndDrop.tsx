import React, { useState, useEffect } from "react";
import "./DragAndDrop.scss";

import { observer } from "mobx-react-lite";
import { action, makeAutoObservable, toJS } from "mobx";
import { store } from "../../application/storage/BusinessStore";
import Pantry from "../Pantry/Pantry";
interface DragAndDropWidget {
	name: string;
	value: string;
	unit: string;
}

const DragAndDrop: React.FC = observer(() => {

	const [changeBtn, setChangeBtn] = useState(false)
	const [showPantry, setSowPantry] = useState(false)

	const handleOnDrop = (e: React.DragEvent) => {
		const widgetType = e.dataTransfer.getData("getData") as string;
		console.log('widgetType', widgetType);

		const createArray = widgetType.split(", ");

		let createObjectData = {
			name: createArray[0],
			value: createArray[1],
			unit: createArray[2],
			id: createArray[3]
		};


		store.getIngredientsForShop(createObjectData)
	};

	// const removeWidgetsGlobal = (widget: DragAndDropWidget) => {
	// 	let globalIngredientsForShop = store.ingredientsForShop
	// 	const nedRemove = globalIngredientsForShop.find(excludedWidget => excludedWidget.name === widget.name)

	// 	if (nedRemove) {
	// 		store.removeIngredientsForShop(nedRemove)
	// 	}

	// }

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

			<Pantry showPantry={showPantry}
				changeState={changeState} />
		</>

	)
})

export default DragAndDrop;
