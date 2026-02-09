src/components/Footer/Footer.jsx

import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Software Developer · IoT Platforms · Enterprise Frontend</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter Your Email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 Gurudatt Goudar. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p><a href="https://www.linkedin.com/in/gurudatt-goudar-8b4201295/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/GurudattGoudar" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
