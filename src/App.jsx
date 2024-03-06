import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OakRestaurants from './components/oakland-restaurants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OakRestaurants/>
    </>
  )
}

export default App
