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
                <p>Hi, I'm Gurudatt Goudar, an MCA graduate who thrives on blending creativity and logic in development.</p>
                <p> For me, coding is more than just writing lines—it's about designing, developing, and delivering impactful solutions. With expertise in the MERN stack and blockchain technologies, 
                  I specialize in crafting seamless and innovative digital experiences that drive growth and efficiency.</p>
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
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Tech Stack</h1>
            <p>Specialized in MERN, Fullstack. and more</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Impactful Solutions</h1>
            <p>Successfully crafted innovative solutions</p>
        </div>
      </div>
    </div>
  )
}

export default About
