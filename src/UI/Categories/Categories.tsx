import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import { observer } from "mobx-react-lite";


const Categories: React.FC = observer(() => {
	return (
		<section className="component__categories">
			<h2 className="component__categories-title">Categories</h2>
			<ul className="categories">
				<Link to={"/galary/breakfast"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/breakfast.png" alt="breakfast" />
						<h3 className="categories__card-title">breakfast</h3>
					</div>
				</Link>
				<Link to={"/galary/main course"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/main course.png" alt="main course" />
						<h3 className="categories__card-title">main course</h3>
					</div>
				</Link>
				<Link to={"/galary/soup"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/soup.png" alt="soup" />
						<h3 className="categories__card-title">soup</h3>
					</div>
				</Link>
				<Link to={"/galary/salad"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/salad.png" alt="salad" />
						<h3 className="categories__card-title">salad</h3>
					</div>
				</Link>
				<Link to={"/galary/appetizer"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/appetizer.png" alt="appetizer" />
						<h3 className="categories__card-title">appetizer</h3>
					</div>
				</Link>
				<Link to={"/galary/dessert"} className="categories__card">
					<div>
						<img className="categories__card-img" src="./images/Categories/dessert.png" alt="categories__card-img" />
						<h3 className="categories__card-title">dessert</h3>
					</div>
				</Link>
			</ul>
		</section>
	)
})

export default Categories;
