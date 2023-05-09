import React, { useState, useEffect } from "react";
import "./DragAndDrop.scss";

import { observer} from "mobx-react-lite";
import  { store } from "../../application/storage/BusinessStore"

export interface DragAndDropProps {
	// handleOnDrop: (e: React.DragEvent) => void;
	// handleDragOver: (e: React.DragEvent) => void
}

interface DragAndDropWidget{
	name: string;
	value: string;
	unit: string;
 }

const DragAndDrop: React.FC<DragAndDropProps> = observer(() => {

	const [widgets, setWidgets] = useState<DragAndDropWidget[]>([]);
	const [changeBtn, setChangeBtn] = useState(false)
 
	 const handleOnDrop = (e: React.DragEvent) => {
	  const widgetType = e.dataTransfer.getData("aa") as string;
	  const createArray = widgetType.split(",");
 
	  let createObjectData = {
		 name: createArray[0],
		 value: createArray[1],
		 unit: createArray[2],
	  };
 
	  const widgetExist = widgets.find((widget) =>  widget.name === createObjectData.name)
	 
	  if(!widgetExist){
		 setWidgets([...widgets, createObjectData]);
	  }
	  
	};
 
	const handleDragOver = (e: React.DragEvent) => {
	  e.preventDefault();
	}


	// 
  return (
		<>
			<section className={ changeBtn ? "cirkle active" : "cirkle" } onClick={()=> {setChangeBtn(!changeBtn)}}>
				<i className="fa-regular fa-rectangle-list list-icon"></i>
			</section>
			<section className={changeBtn ? "shopping-list" :  "shopping-list active"}
			onDrop={handleOnDrop}
			onDragOver={handleDragOver}
			>
				<h3 className="shopping-list_title" onClick={()=> {setChangeBtn(!changeBtn)}}>Shopping list</h3>
			{widgets.map((widget, index) => (
				<div className="dropped-widget" key={index}>
					<p className="dropped-widget_name">{widget.name}</p>
					<p className="dropped-widget_metric">{Math.round(+widget.value)} {widget.unit}</p>
				
				</div>
			))}

			</section>
		</>

	
		
  )	
})

export default DragAndDrop;
