import React from 'react'
import './contact.css'

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
                <button type="submit" value='Send' className="submitBtn">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact