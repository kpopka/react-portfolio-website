import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {RiUserSmileLine} from 'react-icons/ri'
import {SiTorproject} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">


            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>No Working Experience</small>
            </article>

            <article className='about__card'>
              <RiUserSmileLine className='about__icon'/>
              <h5>Clients</h5>
              <small>No Clients</small>
            </article>

            <article className='about__card'>
              <SiTorproject className='about__icon'/>
              <h5>Projects</h5>
              <small>No Completed projects</small>
            </article>
          </div>

          <p>
            я сделала этот сайт по видео уроку индуса на ютубе я не знаю что я делаю 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>            

        </div>
      </div>
    </section> 
  )
}

export default About