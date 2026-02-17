import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Gallery from './components/Views/Gallery.jsx'
import Carsoul from './components/Views/Carsoul.jsx'
import Wall from './components/Views/Wall.jsx'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
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
