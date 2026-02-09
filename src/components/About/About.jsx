src/components/About/About.jsx

import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="Gurudatt Goudar - Software Developer" />
        </div>
        <div className="about-right">
            <div className="about-experience">
              <h3>Software Developer</h3>
              <p className="company">Kankanal Technologies Pvt Ltd, Bengaluru</p>
              <p className="tenure">Feb 2025 - Present</p>
            </div>
            <div className="about-phara">
                <p>I'm Gurudatt Goudar, a Software Developer specializing in enterprise IoT platforms and industrial dashboard solutions. I focus on transforming complex industrial data into intuitive, actionable interfaces that drive real-world efficiency.</p>
                <p>At Kankanal Technologies, I architect and implement production-grade frontend systems, from custom widget libraries to complete platform rebranding initiatives. My work involves designing scalable UI components, integrating AI/ML workflows, and building role-based access systems for enterprise clients.</p>
                <p>I focus on building systems that remain stable under change—clean architecture, predictable data flows, and interfaces that operators can trust in production.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Angular & TypeScript</p><hr style={{width:"85%"}}/> </div>
                <div className="about-skill"><p>IoT Dashboard Development</p><hr style={{width:"80%"}}/> </div>
                <div className="about-skill"><p>DeviceBoard Platform</p><hr style={{width:"75%"}}/> </div>
                <div className="about-skill"><p>Python & Backend Integration</p><hr style={{width:"70%"}}/> </div>
                <div className="about-skill"><p>Enterprise UI Systems</p><hr style={{width:"75%"}}/> </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>20+ Dashboards</h1>
            <p>PRODUCTION IOT SYSTEMS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Full Architecture</h1>
            <p>DESIGN TO DEPLOYMENT</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Enterprise Scale</h1>
            <p>INDUSTRIAL PLATFORMS</p>
        </div>
      </div>
    </div>
  )
}

export default About
