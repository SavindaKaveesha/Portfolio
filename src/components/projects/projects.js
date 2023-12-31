import React from 'react'
import './projects.css'
import portfolioImg1 from '../../assets/portfolio-1.png'
import portfolioImg2 from '../../assets/portfolio-2.png'
import portfolioImg3 from '../../assets/portfolio-3.png'
import portfolioImg4 from '../../assets/portfolio-4.png'
import portfolioImg5 from '../../assets/portfolio-5.png'
import portfolioImg6 from '../../assets/portfolio-6.png'


function Projects() {
  return (
    <section className="projects" id='projects'>
        <h2 className="projectTitle">My Projects</h2>
        <span className="projectDesc">vfdvfdvfdvbkfbk bfdk jfjhvjfhdjajvbjb jb jfb jifji bkfjadj fb jfbj bdfjh kjfjk fkj jkfb jkbfjb jfj bfjk jfbj bkjfdfbj dfk sdf hfl fb bvlb hlfdbl shfbh blsdfj blfj bfj bjdsl jb f kjfjknfjn jkfjka nfkjd jnf njk </span>
        <div className="projectImgs">
            <img src= {portfolioImg1} alt="" className="projectImg" />
            <img src= {portfolioImg2} alt="" className="projectImg" />
            <img src= {portfolioImg3} alt="" className="projectImg" />
            <img src= {portfolioImg4} alt="" className="projectImg" />
            <img src= {portfolioImg5} alt="" className="projectImg" />
            <img src= {portfolioImg6} alt="" className="projectImg" />
        </div>
        <button className='seeMoreBtn'>See More..</button>
    </section>
  )
}

export default Projects