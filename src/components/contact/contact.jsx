import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [hasClassAdded, setHasClassAdded] = useState(false);
  const contactMainRef = useRef();

  const handleScroll = () => {
    const contactMainElement = contactMainRef.current;

    if (contactMainElement){
      const rect = contactMainElement.getBoundingClientRect();
      const isElementVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (!hasClassAdded && isElementVisible) {
        setHasClassAdded(true);
        contactMainElement.classList.add('blur-eff');
        window.removeEventListener('scroll', handleScroll); 
      }

      setIsVisible(isElementVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_dz0179a','template_ireusk9',form.current,'5eRNwwVWtDgzRDZDJ')
  .then((result) => {
    console.log('Email sent successfully:', result.text);
    e.target.reset();
  })
  .catch((error) => {
    console.error(error.text);
  });
};

  return (
    <section className={`contact ${isVisible ? 'blur-eff' : ''}`} id='contact' ref={contactMainRef}>
        <div className="contact">
            <h1 className='contactTitle'>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className="contactForm"> 
                <span className="contactDesc">Feel free to reach out. I'm eager to connect and discuss any exciting opportunities or collaborations in the world of software development.</span>

                <input type="text" className="name" placeholder='Your Name' name = 'from_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='message' rows="7" placeholder='Your Message' name='message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact