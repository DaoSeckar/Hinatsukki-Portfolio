import React from 'react'
import "./footer.css";
import {AiFillTwitterCircle,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>  
        <a href="#footer" className='footer__logo'>Hinatsukki</a>
        <ul className='permalinks'>
          <li><a href="#header">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/Bakatsukki"><AiFillFacebook size='24px'/></a>
          <a href="https://www.instagram.com/hinatsukki/"><AiFillInstagram size='24px'/></a>
          <a href="https://twitter.com/hinatsukkii"><AiFillTwitterCircle size='24px'/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Hinatsukki. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer