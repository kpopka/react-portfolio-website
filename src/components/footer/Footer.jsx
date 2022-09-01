import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <a href='#' className='footer__logo'> я правда хорошая возьмите меня на работу </a>

        <u1 className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </u1>

        <div className="footer__socials">
          <a href='https://facebook.com'><AiFillFacebook/></a>
          <a href='https://instagram.com'><AiFillInstagram/></a>
          <a href='https://twitter.com'><AiOutlineTwitter/></a>
        </div>

        
      </footer>
    </div>
  )
}

export default Footer