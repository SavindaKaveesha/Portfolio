import React from 'react'
import './contact.css'
import facebook from '../../assets/facebook-icon.png'
import instergram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'

const Contact = () => {
  return (
    <section className='contactPage' id='contact'>
        <div className="contact">
            <h1 className='contactTitle'>Contact Me</h1>
            <span className="contactDesc">Feel free to reach out. I'm eager to connect and discuss any exciting opportunities or collaborations in the world of software development.</span>
            <form action="" className="contactForm">

                <input type="text" className="name" placeholder='Your Name'/>
                <input type="text" className="email" placeholder='Youe Email'/>
                <textarea name="" className='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>

                <div className="links">
                    <img src= {facebook} alt="facebook" className="icon" />
                    <img src= {instergram} alt="instergram" className="icon" />
                    <img src= {youtube} alt="youtube" className="icon" />
                    <img src= {twitter} alt="twitter" className="icon" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact