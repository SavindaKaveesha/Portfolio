import React from 'react'
import './skills.css'

const skills = () => {
  return (

    <section className='skills_main'>

        <div className="Skill_Main_Title">My Skills</div>
          <div className='Skill_Collection'>
            <div className="skill_card">
              <div className='skill_title'>Frontend</div>

              <div className="skill">
                  <button className='skill_Box'>CSS</button>
                  <button className='skill_Box'>RactJS</button>
                  <button className='skill_Box'>Java</button>
                  <button className='skill_Box'>Flutter</button>
                  <button className='skill_Box'>Bootstrap</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Backend</div>

              <div className="skill">
                  <button className='skill_Box'>PHP</button>
                  <button className='skill_Box'>Node.js</button>
                  <button className='skill_Box'>Django</button>
                  <button className='skill_Box'>Flask</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Database</div>

              <div className="skill">
                  <button className='skill_Box'>PHP</button>
                  <button className='skill_Box'>Node.js</button>
                  <button className='skill_Box'>Django</button>
                  <button className='skill_Box'>Flask</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Tools</div>

              <div className="skill">
                  <button className='skill_Box'>Git</button>
                  <button className='skill_Box'>Docker</button>
                  <button className='skill_Box'>Visual Studio</button>
                  <button className='skill_Box'>Photoshop</button>
                  <button className='skill_Box'>Illustrator</button>
                  <button className='skill_Box'>Premiere Pro</button>
                  </div>
            </div>


        </div>
    </section>
  )
}

export default skills