import React from 'react'
import './skills.css'

const skills = () => {
  return (

    <section className='skills_main'>

        <h2 className="SkillTitle">My Projects</h2>
         <div className='Skill_Collection'>
          <div className="skill_card">
          <h2 className='skill_title'>Frontend</h2>

          <div className="skills">
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              <button className='skill_Box'>Java</button>
              </div>
          </div>

          <div className="skill_card">
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
              <button className='skill_Box'>JS</button>
          </div>

          <div className="skill_card">
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
              <button className='skill_Box'>MongoDB</button>
          </div>
        </div>
    </section>
  )
}

export default skills