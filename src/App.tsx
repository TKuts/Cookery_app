import React, { useState } from 'react';
import './App.scss';
import Gallary from './UI/Gallary/Gallary';


const API = import.meta.env.VITE_REACT_API_HOST
const API_KEY = import.meta.env.VITE_REACT_API_KEY

const ALL_RECIPES = import.meta.env.VITE_REACT_ALL_RECIPES
const FIND_INGREDIENTS = import.meta.env.VITE_REACT_FIND_INGREDIENTS
const INGREDIENTS = import.meta.env.VITE_REACT_ALL_INGREDIENTS
const DESCRIPTION = import.meta.env.VITE_REACT_DESCRIPTION
const TUTORIAL = import.meta.env.VITE_REACT_TUTORIAL
const BY_NUTRIENTS = import.meta.env.VITE_REACT_FILTER_BY_NUTRIENTS



function App() {


  return (
    <div className='wrapper'>
      
      <Gallary />
		
    </div>
  )
}

export default App
