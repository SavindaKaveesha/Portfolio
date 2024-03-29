import React from 'react'
import resume from './Savinda Kaveesha.pdf';
import './intro.css'
import bigImage from '../../assets/image.png'
import btnImg from '../../assets/hireme white.png'

const Intro = () => {
  return (
    <section id='intro'>

        <div className="introContent">

            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Savinda</span><br></br>Software Engineer</span>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
            <button className='btn'>
            <img src={btnImg} alt='Hire me' className='btnImg' />
            Download Resume
            </button>
            </a>
        </div>

        <img src= {bigImage} alt='Profile Picture' className='bigImage'/>

    </section>
  )
}

export default Intro