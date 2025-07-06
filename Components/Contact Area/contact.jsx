import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const contact = () => {
  return (
    <div className='contact'>

        <div className="contact-title">
            <h1>Get In Touch</h1>            
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>blah blah</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>zestful.zeaolt@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faPhone}/>
                        <p>+91 93108 18435</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <p>https://www.linkedin.com/in/vamika-arya-4a0179288/</p>
                    </div>
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>https://github.com/6vam4arya</p>
                    </div>         
                    <div className="contact-detail">
                        <FontAwesomeIcon icon={faCode}/>
                        <p>https://leetcode.com/u/developing_developer07/</p>
                    </div>                                                                                             
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write yiur message here</label>
                <textarea name="message" rows="10" placeholder='Enter your message'/>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>

    </div>
  )
}

export default contact