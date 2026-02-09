src/components/Hero/Hero.jsx

import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const CONTENT = {
  name: 'Gurudatt Goudar',
  titleLine: "I'm",
  headlineSuffix: 'a Software Developer building industrial IoT platforms and enterprise systems.',
  blurb: 'I architect and implement enterprise-grade dashboard systems, custom widget libraries, and scalable frontend solutions that transform industrial data into actionable insights.',
  ctaConnect: 'Discuss a Project',
  ctaResume: 'View Experience',
  resumeUrl: 'https://drive.google.com/file/d/1engafKmyxvfLRaluHpYCA1MslMRFmFHX/view?usp=sharing',
};

const TYPING_DELAY_MS = 150;

const Hero = () => {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedName(prev => prev + CONTENT.name.charAt(index));
      index += 1;
      if (index === CONTENT.name.length) clearInterval(typingInterval);
    }, TYPING_DELAY_MS);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt={`${CONTENT.name} profile photo`} />
      <h1>
        <span>{CONTENT.titleLine} {typedName},</span> {CONTENT.headlineSuffix}
      </h1>
      <p>{CONTENT.blurb}</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchorlink"
            offset={50}
            href="#contact"
            aria-label="Scroll to contact section"
          >
            {CONTENT.ctaConnect}
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href={CONTENT.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
            aria-label="Open resume in a new tab"
          >
            {CONTENT.ctaResume}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
