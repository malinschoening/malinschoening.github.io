import React from 'react'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import facebook from './img/facebook.png'

const Contact = () => {

  return (
    <>
    <h3 className='title'>Contact me</h3>
    <section id="contact">
    <div id="socials">
      <a href="https://www.linkedin.com/in/malinschoening-063a90142/"><img className='contact-social' src={linkedin} /></a>
      <a href="https://github.com/malinschoening"><img className='contact-social' src={github} /></a>
      <a href="https://www.facebook.com/malinschoening/"><img className='contact-social' src={facebook} /></a>
    </div>
    <p>You can always send me an email at <a href="mailto:malin.schoening@gmail.com">malin.schoening@gmail.com</a></p>
    </section>
    </>
    
  )
}

export default Contact
