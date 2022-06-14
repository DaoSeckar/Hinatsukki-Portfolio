import './header.css'
import React from 'react'
import Icon from '../../assets/hinaicon.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <section id='header'>
        <header>
            <div className="container header__container">
                <h2>Welcome to</h2>
                <h1>Hinatsukki's portfolio</h1>
                <div className='centered'>
                <img src={Icon} alt=""/>
                </div>
                <HeaderSocials />
                <a href ="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
      </section>
  )
}

export default Header