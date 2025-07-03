import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src="" alt=""/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src="" alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Para 1</p>
                    <p>Para 2</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML, CSS</p></div>
                    <div className="about-skill"><p> C++</p></div>
                    <div className="about-skill"><p>JS</p></div>
                    {/* <hr style={{width:"50%"}}/> */}
                    <div className="about-skill"><p>HTML, CSS, JS, C++</p></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About