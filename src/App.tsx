import React, { useState, useContext, useEffect } from "react";
import "./App.scss";

import { observer } from "mobx-react-lite";

import {Routes, Route} from "react-router-dom"

import Header from "./UI/Header/Header";
import HomePage from "./pages/HomePage/HomePage"
import SelectedRecipePage from "./pages/SelectedRecipePage/SelectedRecipePage";

import Gallary from "./UI/Gallary/Gallary";

import Footer from "./UI/Footer/Footer";

const App = observer(() => {


  return (
    <div className="wrapper">
      <Header />
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/galary/:category" element={<Gallary/>}/>
				<Route path="/selectedRecipe/:id" element={<SelectedRecipePage/>}/>
			</Routes>      
		<Footer/>
    </div>
  );
});

export default App;
