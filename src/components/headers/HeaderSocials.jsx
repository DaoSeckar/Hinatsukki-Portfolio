import React from 'react'
import {AiFillTwitterCircle,AiFillShopping,AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com/hinatsukkii" target="_blank"><AiFillTwitterCircle size='24px'/></a>
        <a href="https://hinatsukki.bigcartel.com/" target="_blank"><AiFillShopping size='24px'/></a>
        <a href="https://www.instagram.com/hinatsukki/" target="_blank"><AiFillInstagram size='24px'/></a>
    </div>
  )
}

export default HeaderSocials