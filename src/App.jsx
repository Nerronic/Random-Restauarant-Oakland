import { useState } from 'react'
import background from "./assets/food-background.jpg"
import './App.css'
import OakRestaurants from './components/oakland-restaurants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <div style ={{backgroundImage:`url(${background})`,height: '100vh'}} > </div> */}
    <OakRestaurants/>
    
    </>
  )
}

export default App
