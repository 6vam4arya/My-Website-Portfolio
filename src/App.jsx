import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import About from '../Components/About/About'
import Project from '../Components/Projects/Project'
import Contact from '../Components/Contact Area/contact'
import Footer_sec from '../Components/Footer/footer'

//we have to import jsx file from components folder

const App = () => {
  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>    
      <Contact/>  
      <Footer_sec/>
    </>
  )
}

export default App