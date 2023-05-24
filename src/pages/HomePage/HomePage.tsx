import React, { useEffect } from "react";

import Categories from "../../UI/Categories/Categories";
import FasterRecipes from "../../UI/FasterRecipes/FasterRecipes"
import SubmissionToBlog from "../../UI/SubmissionToBlog/SubmissionToBlog"
import { store } from "../../application/storage/BusinessStore"

const HomePage: React.FC = () => {

	useEffect(() => {
		store.getPageName("Home")
	}, [])

	return (
		<>
			<Categories />
			<FasterRecipes />
			<SubmissionToBlog />
		</>
	)
}

export default HomePage;