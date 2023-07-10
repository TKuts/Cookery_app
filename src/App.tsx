import "./App.scss";

import { observer } from "mobx-react-lite";

import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";
import PantryPage from "./UI/Pantry/Pantry";
import { store } from "./application/storage/BusinessStore";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import SelectedRecipePage from "./pages/SelectedRecipePage/SelectedRecipePage";

const App = observer(() => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<div className="wrapper">
			<Header />
			<div className="arrow__wrap" >
				{
					store.pageName !== "Home" ? <i className="bi bi-caret-left arrow" onClick={goBack}></i> : <></>
				}
				<span className="arrow__wrap-tittle">{store.pageName}</span>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/galary/:category" element={<RecipesPage />} />
				<Route path="/selectedRecipe/:id" element={<SelectedRecipePage />} />
				{/* <Route path="" element={} /> */}
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
});

export default App;
