import React, { useState, useContext, useEffect } from "react";
import "./App.scss";

import { observer } from "mobx-react-lite";

import { Routes, Route, useNavigate } from "react-router-dom"
import { store } from "./application/storage/BusinessStore"
import Header from "./UI/Header/Header";
import HomePage from "./pages/HomePage/HomePage"
import SelectedRecipePage from "./pages/SelectedRecipePage/SelectedRecipePage";
import PantryPage from "./pages/PantryPage/PantryPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"

// import Gallary from "./UI/Gallary/Gallary";

import RecipesPage from "./pages/RecipesPage/RecipesPage";
import Footer from "./UI/Footer/Footer";

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
				<Route path="/pantry/" element={<PantryPage/>} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
});

export default App;
