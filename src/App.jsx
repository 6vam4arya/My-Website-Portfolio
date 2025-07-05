import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import About from '../Components/About/About'
import Project from '../Components/Projects/Project'

//we have to import jsx file from components folder

const App = () => {
  return (
    <>
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>
    </>
  )
}

export default App