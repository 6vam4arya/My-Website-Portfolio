import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import About from '../Components/About/About'
import Project from '../Components/Projects/Project'
import Contact from '../Components/Contact Area/contact'

//we have to import jsx file from components folder

const App = () => {
  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>    
      <Contact/>  
    </>
  )
}

export default App