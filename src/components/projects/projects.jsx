import React from 'react'
import './projects.css'
import portfolioImg1 from '../../assets/portfolio-1.png';
import portfolioImg2 from '../../assets/portfolio-2.png';
import portfolioImg3 from '../../assets/portfolio-3.png';
import portfolioImg4 from '../../assets/portfolio-4.png';
import portfolioImg5 from '../../assets/portfolio-5.png';
import portfolioImg6 from '../../assets/portfolio-6.png';
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