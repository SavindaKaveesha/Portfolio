import React, { useEffect, useRef, useState } from 'react';
import './skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClassAdded, setHasClassAdded] = useState(false);
  const skillsMainRef = useRef();

  const handleScroll = () => {
    const skillsMainElement = skillsMainRef.current;

    if (skillsMainElement) {
      const rect = skillsMainElement.getBoundingClientRect();
      const isElementVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (!hasClassAdded && isElementVisible) {
        // Add the class only once when the component comes into the viewport
        setHasClassAdded(true);
        skillsMainElement.classList.add('blur-eff');
        window.removeEventListener('scroll', handleScroll); // Remove the event listener
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

  return (

    <section className={`skills_main ${isVisible ? 'blur-eff' : ''}`} ref={skillsMainRef} id='skills'>

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