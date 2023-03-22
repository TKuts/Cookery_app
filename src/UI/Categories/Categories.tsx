import React, { useState, useEffect } from "react";

import "./Categories.scss"

// import { Recipe } from "../../domain/recipes"

interface CategoriesProps {
	categories:  String[]

}
// interface CategoryProps [
//   String
//   // vegan: "string",
//   // meat: "string"
//   // dessert: "string" ,
//   // spicy:"string" 
// ]
 




//   const  categories = {
//     "vegan": [{recipe}, {recipe}],
//     "meat": [{recipe.title}, {recipe}],

// }

// categories.vegan.recipe.title

// : React.FC<CategoriesProps>

const Categories: any= (props: any) => {
	const categories: string[] = [
		"vegan", // [Recipes]filter recipes without meat
		"meat",  // filter recipes with meat
		"dessert", // filter recipes with sugar
		"spicy" // filter recipes with pepper
	];


	// const vegan: string =	{if(id===1){categories.vegan}}


  // const ["vegan", "deserts", "favorite"] = categories;
  return (
	<div className="component__categories">

		<h2 className="component__categories-title">Categories</h2>

		<div className="categories">
			<div className="categories__card" 
			onClick={() => props.category("breakfast")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/breakfast.png" alt="" />
				<h3 className="categories__card-title">breakfast</h3>
			</div>

			<div className="categories__card"
			onClick={() => props.category("main course")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/main course.png" alt="" />
				<h3 className="categories__card-title">main course</h3>
			</div>

			<div className="categories__card"
			onClick={() => props.category("soup")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/soup.png" alt="" />
				<h3 className="categories__card-title">soup</h3>
			</div>

			<div className="categories__card"
			onClick={() => props.category("salad")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/salad.png" alt="" />
				<h3 className="categories__card-title">salad</h3>
			</div>

			<div className="categories__card"
			onClick={() => props.category("appetizer")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/appetizer.png" alt="" />
				<h3 className="categories__card-title">appetizer</h3>
			</div>
			<div className="categories__card"
			onClick={() => props.category("dessert")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/dessert.png" alt="categories__card-img" />
				<h3 className="categories__card-title">dessert</h3>
			</div>

		</div>

</div>
  )
}

export default Categories;
