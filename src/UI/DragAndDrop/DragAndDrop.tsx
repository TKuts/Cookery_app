import React, { useState, useEffect } from "react";
import "./DragAndDrop.scss";

import { observer } from "mobx-react-lite";
import { action, makeAutoObservable, toJS } from "mobx";
import { store } from "../../application/storage/BusinessStore";
interface DragAndDropWidget {
	name: string;
	value: string;
	unit: string;
}

const DragAndDrop: React.FC = observer(() => {

	const [widgets, setWidgets] = useState<DragAndDropWidget[]>([]);
	const [changeBtn, setChangeBtn] = useState(false)

	useEffect(() => {
		store.getIngredientsForShop(widgets)
	}, [widgets])

	const handleOnDrop = (e: React.DragEvent) => {
		const widgetType = e.dataTransfer.getData("getData") as string;
		const createArray = widgetType.split(",");

		let createObjectData = {
			name: createArray[0],
			value: createArray[1],
			unit: createArray[2],
		};

		const widgetExist = widgets.find((widget) => widget.name === createObjectData.name);

		if (!widgetExist) {
			setWidgets([...widgets, createObjectData])

		};
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	}

	const renderWidgets = widgets.map((widget, index) => (
		<div className="dropped-widget" key={index}>
			<p className="dropped-widget_name">{widget.name}</p>
			<p className="dropped-widget_metric">{+widget.value} {widget.unit}</p>
		</div>
	))

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
				<h3 className="shopping-list_title" onClick={() => { setChangeBtn(!changeBtn) }}>Shopping list</h3>
				{renderWidgets}
			</section>
		</>

	)
})

export default DragAndDrop;
