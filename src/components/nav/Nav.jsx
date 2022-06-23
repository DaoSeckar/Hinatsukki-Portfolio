import React, {useState} from 'react'
import './nav.css'
import {AiFillHome, AiFillHeart, AiFillContacts, AiFillAccountBook} from 'react-icons/ai'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')

  return (
    <nav>
        <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiFillHome size='24px'/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillHeart size='24px'/></a>
        <a href="#service"  onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><AiFillAccountBook size='24px'/></a>
        <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts size='24px'/></a>
        <div className="indicator"></div>
    </nav>
  )
}

export default Nav