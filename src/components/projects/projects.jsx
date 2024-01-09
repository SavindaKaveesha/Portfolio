import React from 'react'
import './projects.css'
import NumberGussingGameIMG from '../../assets/number gussig game.png'
import StudentManagmentSystemIMG from '../../assets/Student Managment.png';
import ShopManageIMG from '../../assets/Shop Manage.png';
import BlackJackGameIMG from '../../assets/Black Jack Game.png' 
import TodoAppIMG from '../../assets/Todo App.png';
import MediaPlayerIMG from '../../assets/Media Player.png';
import SlidingCard from './sliding card/SlidingCard';

function Projects() {
  return (
    <section className="projects" id='projects'>
        <h2 className="projectTitle">My Projects</h2>
        <span className="projectDesc">vfdvfdvfdvbkfbk bfdk jfjhvjfhdjajvbjb jb jfb jifji bkfjadj fb jfbj bdfjh kjfjk fkj jkfb jkbfjb jfj bfjk jfbj bkjfdfbj dfk sdf hfl fb bvlb hlfdbl shfbh blsdfj blfj bfj bjdsl jb f kjfjknfjn jkfjka nfkjd jnf njk </span>
        <div className="projectImgs">
          <SlidingCard
            title="Student Managment System"
            description="C# | .Net | Firebase"
            image={StudentManagmentSystemIMG}
          />

          <SlidingCard
            title="Book Shop Managment System"
            description="C# | .Net | MSSQL"
            image={ShopManageIMG}
          />

          <SlidingCard
            title="Number Guessing Game"
            description="HTML | CSS | ReactJS"
            image={NumberGussingGameIMG}
          />

          <SlidingCard
            title="Black Jack Game"
            description="HTML | CSS | Javascript"
            image={BlackJackGameIMG}
          />

          <SlidingCard
            title="Media Player"
            description="C# | .Net"
            image={MediaPlayerIMG}
          />

          <SlidingCard
            title="ToDo List "
            description="Python | Flask | HTML | CSS | MongoDB"
            image={TodoAppIMG}
            />

        </div>
        <a href='https://github.com/SavindaKaveesha?tab=repositories'>
          <button className='seeMoreBtn'>See More..</button>
        </a>
    </section>
  )
}

export default Projects