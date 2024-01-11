
import React from 'react';
import facebook from '../../assets/Facebook.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import './floating button.css'; 



function FloatingButton() {
  return (
    <div className="links">
      <a href='https://web.facebook.com/savinda.max/' className="icon-link">
        <img src={facebook} alt="facebook" className="icon" />
      </a>
      <a href='https://github.com/SavindaKaveesha' className="icon-link">
        <img src={github} alt="github" className="icon" />
      </a>
      <a href='https://www.linkedin.com/in/savinda-kaveesha-8097a91aa/' className="icon-link">
        <img src={linkedin} alt="linkedin" className="icon" />
      </a>
    </div>
  )
}

export default FloatingButton