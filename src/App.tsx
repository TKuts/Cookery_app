import { useState } from 'react'
import './App.scss'


const API = import.meta.env.VITE_REACT_API_URL
const API_KEY = import.meta.env.VITE_REACT_API_KEY
function App() {
  const [count, setCount] = useState(0)

const fun = fetch(`${API}complexSearch?query=potato&maxFat=25&number=5&apiKey=${API_KEY}`)
.then(response => response.json())
.then(commits => console.log(commits)
);




  return (

	
	
    <div>
      Hello world
		
    </div>
  )
}

export default App
