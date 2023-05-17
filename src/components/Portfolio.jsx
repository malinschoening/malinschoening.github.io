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
      <img src={tablet} />
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus dolore quas modi laudantium deleniti.</p>
      </div>
      <div className='mobile-desktop-tablet'>
      <img src={mobile} />
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className='mobile-desktop-tablet'>
      <a href="http://aminasmakar.se"><img src={desktop} /></a>
      <h2>Amina Smakar</h2>
      <p>Company site</p>
      </div>
    </section>
    </>
  )
}

export default Portfolio
