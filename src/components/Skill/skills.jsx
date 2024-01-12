import React from 'react';
import './skills.css';

const Skills = () => {

  return (

    <section className='skills_main' id='skills'>

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
                  <button className='skill_Box'>Laravel</button>
                  <button className='skill_Box'>Node.js</button>
                  <button className='skill_Box'>Django</button>
                  <button className='skill_Box'>Flask</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Database</div>

              <div className="skill">
                  <button className='skill_Box'>MYSQL</button>
                  <button className='skill_Box'>MongoDB</button>
                  <button className='skill_Box'>Firebase</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Tools</div>

              <div className="skill">
                  <button className='skill_Box'>Git</button>
                  <button className='skill_Box'>Docker</button>
                  <button className='skill_Box'>Photoshop</button>
                  <button className='skill_Box'>Illustrator</button>
                  <button className='skill_Box'>Premiere Pro</button>
                  <button className='skill_Box'>Visual Studio</button>
                  </div>
            </div>

            <div className="skill_card">
              <div className='skill_title'>Languages</div>

              <div className="skill">
                  <button className='skill_Box'>Javascript</button>
                  <button className='skill_Box'>Python</button>
                  <button className='skill_Box'>Go</button>
                  <button className='skill_Box'>C#</button>
                  <button className='skill_Box'>Java</button>
                  <button className='skill_Box'>C</button>
                  <button className='skill_Box'>SQL</button>
                  <button className='skill_Box'>PHP</button>
                  </div>
            </div>

        </div>
    </section>
  )
}

export default Skills