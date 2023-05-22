import React from "react";

import "./ErrorPage.scss"

const HomePage: React.FC = () => {
	return (
		<section className="error__page">
			<h2 className="error__page-title">404 Page Not Found</h2>
			<p className="error__page-paragraf">The page you requested does not exist.</p>

		</section>
	)
}

export default HomePage;