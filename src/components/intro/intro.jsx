import React from 'react'
import './intro.css'
import bigImage from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>

        <div className="introContent">

            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Savinda</span><br></br>Software Enginer</span>
                <a href='SavindaKaveesha.pdf'>
                <Link><button className='btn'><img src= {btnImg} alt='Hire me' className='btnImg'/>Download Resume</button></Link>
                </a>
        </div>

        <img src= {bigImage} alt='Profile Picture' className='bigImage'/>

    </section>
  )
}

export default Intro