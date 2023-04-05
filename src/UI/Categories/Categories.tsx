import React from "react";
import "./Categories.scss"

interface CategoriesProps {
	category: any;
	}

const Categories: React.FC<CategoriesProps> = ({category}) => {

  return (
	category &&
	<div className="component__categories">

		<h2 className="component__categories-title">Categories</h2>

		<div className="categories">
			<div className="categories__card" 
			onClick={() => category("breakfast")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/breakfast.png" alt="" />
				<h3 className="categories__card-title">breakfast</h3>
			</div>

			<div className="categories__card"
			onClick={() => category("main course")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/main course.png" alt="" />
				<h3 className="categories__card-title">main course</h3>
			</div>

			<div className="categories__card"
			onClick={() => category("soup")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/soup.png" alt="" />
				<h3 className="categories__card-title">soup</h3>
			</div>

			<div className="categories__card"
			onClick={() => category("salad")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/salad.png" alt="" />
				<h3 className="categories__card-title">salad</h3>
			</div>

			<div className="categories__card"
			onClick={() => category("appetizer")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/appetizer.png" alt="" />
				<h3 className="categories__card-title">appetizer</h3>
			</div>
			<div className="categories__card"
			onClick={() => category("dessert")}
			>
				<img className="categories__card-img" src="src/UI/Categories/img/dessert.png" alt="categories__card-img" />
				<h3 className="categories__card-title">dessert</h3>
			</div>

		</div>

</div>
  )
}

export default Categories;
