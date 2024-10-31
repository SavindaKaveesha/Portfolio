import React, { useState, useEffect } from 'react';
import resume from './Savinda Kaveesha.pdf';
import './intro.css';
import bigImage from '../../assets/image.png';
import btnImg from '../../assets/hireme white.png';
import btnImgHover from '../../assets/hireme.png';

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [title, setTitle] = useState("Software Engineer");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const titles = ["Software Engineer", "DevOps Engineer"];
    let index = 0;

    const interval = setInterval(() => {
      setAnimate(true); // Trigger animation
      setTimeout(() => {
        index = (index + 1) % titles.length;
        setTitle(titles[index]);
        setAnimate(false); // End animation after title updates
      }, 500); // Match animation duration in CSS
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id='intro'>
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Savinda</span><br />
          <span className={animate ? 'fade' : ''}>{title}</span>
        </span>
        <a href={resume} target='_blank' rel='noopener noreferrer'>
          <button
            className='btn'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={isHovered ? btnImgHover : btnImg} alt='Hire me' className='btnImg' />
            Download Resume
          </button>
        </a>
      </div>
      <img src={bigImage} alt='Profile Picture' className='bigImage' />
    </section>
  );
};

export default Intro;