import React from 'react'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import facebook from './img/facebook.png'

const Footer = () => {
  return (
    <div id="footer">
      <a href="https://www.linkedin.com/in/malinschoening-063a90142/"><img className='social-logo' src={linkedin} /></a>
      <a href="https://github.com/malinschoening"><img className='social-logo' src={github} /></a>
      <a href="https://www.facebook.com/malinschoening/"><img className='social-logo' src={facebook} /></a>
    </div>
  )
}

export default Footer
