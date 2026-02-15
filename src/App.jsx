import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Gallery from './components/Views/Gallery.jsx'
import Carsoul from './components/Views/Carsoul.jsx'
import Wall from './components/Views/Wall.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section id="carousel">
        <Carsoul /> 
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </>
  )
}

export default App
