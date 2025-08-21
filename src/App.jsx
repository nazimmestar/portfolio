import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Lng from './Components/Lng/Lng'
import MyWork from './Components/MyWork/MyWork'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Lng />
      <MyWork />


    </div>
  )
}

export default App