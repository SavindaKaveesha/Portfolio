import React from 'react'
import './projects.css'
import SlidingCardImg from '../../assets/number gussig game.png'
import SlidingCard from './sliding card/SlidingCard';

function Projects() {
  return (
    <section className="projects" id='projects'>
        <h2 className="projectTitle">My Projects</h2>
        <span className="projectDesc">vfdvfdvfdvbkfbk bfdk jfjhvjfhdjajvbjb jb jfb jifji bkfjadj fb jfbj bdfjh kjfjk fkj jkfb jkbfjb jfj bfjk jfbj bkjfdfbj dfk sdf hfl fb bvlb hlfdbl shfbh blsdfj blfj bfj bjdsl jb f kjfjknfjn jkfjka nfkjd jnf njk </span>
        <div className="projectImgs">
          <SlidingCard
            title="Project 1"
            description="This is the description for Project 1."
            image={SlidingCardImg}
          />

          <SlidingCard
            title="Project 1"
            description="This is the description for Project 1."
            image={SlidingCardImg}
          />

          <SlidingCard
            title="Number Guessing Game"
            description="HTML | CSS | ReactJS"
            image={SlidingCardImg}
          />

          <SlidingCard
            title="Project 1"
            description="This is the description for Project 1."
            image={SlidingCardImg}
          />

          <SlidingCard
            title="Project 1"
            description="This is the description for Project 1."
            image={SlidingCardImg}
          />

        </div>
        <a href='https://github.com/SavindaKaveesha?tab=repositories'>
          <button className='seeMoreBtn'>See More..</button>
        </a>
    </section>
  )
}

export default Projects