import { useState } from 'react'
import './App.scss'


const API = import.meta.env.VITE_REACT_API_URL
const API_KEY = import.meta.env.VITE_REACT_API_KEY

function App() {
  const [count, setCount] = useState(0)

const fun = fetch(`https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=0aa8e02c95b446af92b9757178b9165d`)
.then(response => response.json())
.then(commits => console.log(commits)
);

// 716429


  return (

    <div>
      Hello world
		
    </div>
  )
}

export default App
