import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ziqwjr9', 'template_azfn568', form.current, 'VLB_njuWCFSpjQkDH')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <arcticle className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href='mailto:tanyakshk00@gmail.com' target="_blank">Send a message</a>
          </arcticle>

          <arcticle className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>telegram</h4>
            <h5>89034625004
              @kp0pka</h5>

          </arcticle>

  
        </div>
        {/*end of options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact