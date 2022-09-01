import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/taint1.png'
import IMG2 from '../../assets/taint2.png'
import IMG3 from '../../assets/taint3.png'
import IMG4 from '../../assets/calc1.png'
import IMG5 from '../../assets/calc2.png'
import IMG6 from '../../assets/calc3.png'
import IMG7 from '../../assets/database.png'
import IMG8 from '../../assets/database1.png'
import IMG9 from '../../assets/database2.png'
import IMG10 from '../../assets/cisco1.png'
import IMG11 from '../../assets/cisco2.png'
import IMG12 from '../../assets/cisco3.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='' />
            <img src={IMG2} alt='' />
            <img src={IMG3} alt='' />
          </div>
          <h3>First website made with bootstrap template</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/kpopka/taint' className='btn' target='_blank'>Github</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt='' />
            <img src={IMG5} alt='' />
            <img src={IMG6} alt='' />
          </div>
          <h3>JavaScript quadratic equations calculator</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/kpopka/js-calc' className='btn' target='_blank'>Github</a>
          </div>
        </article>




        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt='' />
            <img src={IMG8} alt='' />
            <img src={IMG9} alt='' />
          </div>
          <h3>Database for Drain Reidio</h3>
          
        </article>






        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG10} alt='' />
            <img src={IMG11} alt='' />
            <img src={IMG12} alt='' />
          </div>
          <h3>
            Cisco Pocket Tracer TCP/IP Protocol
          </h3>
        </article>
      </div>
    </section>
  )
}

export default Portfolio