import React from 'react'
import viteLogo from '../dist/vite.svg';
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      <img src="/vite.svg" alt="Vite Logo" />
    </div>
  )
}

export default App
