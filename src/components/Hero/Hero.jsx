import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Gurudatt Goudar,</span> an MCA graduate with expertise in web development.</h1>
      <p>I specialize in the MERN stack and blockchain solutions and am eager to contribute to innovative projects while continuously enhancing my skills through advanced training.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1iPU8q1w7RSBxXtLSKzdXqLklon1I-ajT/view?usp=sharing" target='_blank' download className="resume-link">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
