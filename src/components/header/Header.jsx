import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5> Hello I'm</h5>
      <h1>Tanya Kishko</h1>
      <h5 className='text-ligth'>aspired uni student</h5>
      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={ME} alt="me" />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header