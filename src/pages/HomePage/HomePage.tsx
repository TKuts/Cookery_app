import React from "react";

import Categories from "../../UI/Categories/Categories";
import FasterRecipes from "../../UI/FasterRecipes/FasterRecipes"
import SubmissionToBlog from "../../UI/SubmissionToBlog/SubmissionToBlog"

const HomePage: React.FC = () => {
  return (
			<>
				<Categories/>
				<FasterRecipes/>
				<SubmissionToBlog/>
			</>
  )	
}

export default HomePage;