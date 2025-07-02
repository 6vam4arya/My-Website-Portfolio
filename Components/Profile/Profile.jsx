import React from 'react'
import Photo from '../../src/assets/Photo.jpg'
// name written after import need not to be exact name of file
//its simply a variable which stores the rendered file
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <img className='profile_img' src={Photo} alt=""></img>
      <h1><span>Hi! I am Vamika Arya</span> I am a student</h1>
      <p>Short Intro</p>
      <div className="buttons">
        <div className="connect">Connect with Me</div>
        <div className="resume">My Resume</div>
      </div>
    </div>
  )
}

export default Profile