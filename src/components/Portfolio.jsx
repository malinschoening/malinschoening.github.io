import React from 'react'
import mobile from './img/mobile.png'
import tablet from './img/tablet.png'
import desktop from './img/desktop.png'

const Portfolio = () => {
  return (
    <>
    <h3 className='title'>Projects</h3>
    <section id="portfolio">
      <div className='mobile-desktop-tablet'>
      <img class="device" src={tablet} />
      <h2>Coming soon..</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus dolore quas modi laudantium deleniti.</p>
      </div>
      <div className='mobile-desktop-tablet'>
      <a href="https://github.com/malinschoening/chat-app-auth"><img class="device" src={mobile} /></a>
      <h2>Chat app with authorization</h2>
      <p>Chat app made with React Native where you can register users and login. The users can chat with each other. </p>
      </div>
      <div className='mobile-desktop-tablet'>
      <a href="https://github.com/malinschoening/Amina-smakar"><img class="device" src={desktop} /></a>
      <h2>Amina Smakar</h2>
      <p>Catering company site made with React.js, <a href="http://aminasmakar.se">Click here to see the live site.</a></p>
      </div>
    </section>
    </>
  )
}

export default Portfolio
