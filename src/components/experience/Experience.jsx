import React from 'react'
import './Experience.css'
import {RiHeartsFill} from 'react-icons/ri'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {BsStar} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
      <div className='experience__qa'>
        <h3>QA</h3>
          <div className='experience__content'>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Principles</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Classification</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Documentation</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>HTTP Protocol</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>DevTools</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Android Studio</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/>
                </div>
              </article>
          </div>
        </div>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <RiHeartsFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/>
              </div>
            </article>
            <article className='experience__details'>
              <RiHeartsFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/>
              </div>
            </article>
            <article className='experience__details'>
              <RiHeartsFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/> <BsStar/>
              </div>
            </article>
            <article className='experience__details'>
              <RiHeartsFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> <BsStar/>
              </div>
            </article>
            <article className='experience__details'>
              <RiHeartsFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <BsStarFill/> <BsStarHalf/> <BsStar/> <BsStar/> <BsStar/>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Linux Bash</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>MacOS Terminal</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/>
                </div>
              </article>
              <article className='experience__details'>
                <RiHeartsFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/> <BsStar/>
                </div>
              </article>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Experience