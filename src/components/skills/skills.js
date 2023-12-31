import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section className='skills' id='skills'>

        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">vfdvfdvfdvbkfbk bfdk jfjhvjfhdjajvbjb jb jfb jifji bkfjadj fb jfbj bdfjh kjfjk fkj jkfb jkbfjb jfj bfjk jfbj bkjfdfbj dfk sdf hfl fb bvlb hlfdbl shfbh blsdfj blfj bfj bjdsl jb f kjfjknfjn jkfjka nfkjd jnf njk </span>

        <div className="skillBars">

            <div className="skillBar">
                <img src= {UIDesign} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is my demo text, this need to change later</p>
                </div>
            </div>

            <div className="skillBar">
                <img src= {webDesign} alt="web Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>This is my demo text, this need to change later</p>
                </div>
            </div>

            <div className="skillBar">
                <img src= {appDesign} alt="App design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is my demo text, this need to change later</p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Skills