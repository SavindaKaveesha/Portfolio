import React from 'react'
import './contact.css'
import facebook from '../../assets/Facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

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
                  <a href='https://web.facebook.com/savinda.max/'>
                    <img src= {facebook} alt="facebook" className="icon" /></a>
                    <a href='https://github.com/SavindaKaveesha'>
                    <img src= {github} alt="github" className="icon" /></a>
                    <a href='https://www.linkedin.com/in/savinda-kaveesha-8097a91aa/'>
                    <img src= {linkedin} alt="linkedin" className="icon" /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact