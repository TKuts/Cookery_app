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


  return (

	
		<section className="shopping-list"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
			<h3 className="shopping-list_title">Shopping list</h3>
        {widgets.map((widget, index) => (
          <div className="dropped-widget" key={index}>
            <p className="dropped-widget_name">{widget.name}</p>
            <p className="dropped-widget_metric">{Math.round(+widget.value)} {widget.unit}</p>
         
          </div>
        ))}

		</section>
  )	
})

export default DragAndDrop;
