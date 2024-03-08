import { useState } from 'react'
import './App.css'
import OakRestaurants from './components/oakland-restaurants'
import Footer from './components/footer'
import Comments from './components/comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <div style ={{backgroundImage:`url(${background})`,height: '100vh'}} > </div> */}
    <OakRestaurants/>
    <Comments />
      <Footer/>
    </>
  )
}

export default App
