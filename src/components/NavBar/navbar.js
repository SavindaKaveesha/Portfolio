import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactIMG from '../../assets/contact.png'
import Menu from '../../assets/menu.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src= {logo} alt='logo' className='logo'></img>

        <div className='desktopMenu'>

            <Link className='desktopMenuListItem' activeClass='active' to='intro' spy={true} offset={-50} duration={500} smooth='true'>Home</Link>
            <Link className='desktopMenuListItem'activeClass='active' to='skills' spy={true} offset={-50} duration={500} smooth='true'>About</Link>
            <Link className='desktopMenuListItem'activeClass='active' to='projects' spy={true} offset={-50} duration={500} smooth='true'>My Projects</Link>
            <Link className='desktopMenuListItem'activeClass='active' to='contact' spy={true} offset={-50} duration={500} smooth='true'>Contact Me</Link>

        </div>

        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src= {contactIMG} alt='contact me logo' className='desktopMenuImg'/>Contact me
        </button>

          {/* hamberg button */}  

        <img src= {Menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>

            <Link className='ListItem' activeClass='active' to='intro' spy={true} offset={-50} duration={500} smooth='true'onClick={()=>setShowMenu(false)}>Home</Link>
            <Link className='ListItem'activeClass='active' to='skills' spy={true} offset={-50} duration={500} smooth='true'onClick={()=>setShowMenu(false)}>About</Link>
            <Link className='ListItem'activeClass='active' to='projects' spy={true} offset={-50} duration={500} smooth='true'onClick={()=>setShowMenu(false)}>My Projects</Link>
            <Link className='ListItem'activeClass='active' to='contact' spy={true} offset={-50} duration={500} smooth='true'onClick={()=>setShowMenu(false)}>Contact Me</Link>

        </div>
    </nav>
  )
}

export default Navbar