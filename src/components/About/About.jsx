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
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-phara">
                <p>I'm Gurudatt Goudar, MCA graduate with expertise in web development.</p>
                <p> I am expertise MERN stack, and blockchain solutions. Eager to contribute to cutting-edge projects while undergoing advanced training to further enhance my technical and professional skills.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML5 & CSS</p><hr style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/> </div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/> </div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>MERN</p><hr style={{width:"30%"}}/> </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
