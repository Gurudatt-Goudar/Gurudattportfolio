src/components/Contact/Contact.jsx

import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c96947e4-68cc-4a31-8d83-a9592feafd90");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always open to conversations about industrial IoT, enterprise dashboard systems, or frontend architecture challenges. Whether you're building a new platform, scaling an existing system, or untangling a complex frontend, let's talk about how we can create something meaningful together.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>gurudattgoudar090@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+919591118461</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Bengaluru, Karnataka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" id="" placeholder='Enter Your Name' />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
                <label htmlFor="">Message</label>
                <textarea name="message" rows="8" placeholder='What would you like to discuss?'></textarea>
                <button type='submit' className='contact-submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
