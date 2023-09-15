import React from 'react'
import html from './img/html.png'
import css from './img/css.png'
import figma from './img/figma.png'
import js from './img/js.png'
import xd from './img/xd.png'
import photoshop from './img/photoshop.png'
import atom from './img/atom.png'

const About = () => {
  return (
    <>
    <h3 className='title'>About me</h3>
    <section id="about">
        <div className="left-content">
          <img className="com-logo" src={atom} />
          <img className="com-logo" src={html} />
          <img className="com-logo" src={css} />
          <img className="com-logo" src={js} />
        </div>
        <div className="center-content">
            <p>I'm a front-end developer with knowledge in React, JavaScript, HTML, CSS and more. I've also been studing iOS development with Swift and Objective-C and Android development with Kotlin before I started this front-end developer program. The plan is to work as a front-end developer and study back-end development alongside my job.</p>
              <br/><br/>
              <p>In November it's time for my six month internship before graduating. So if you are interested in having me as an intern, or just to give me some advise, feel free to contact me &#128513; </p>
            <br/>
            <p>Previously I've been working as a nail technician which gave me plenty of experience in art, customer service and time efficiency. After a few years of working in the beauty industry I felt that I wanted to fulfill my dream -</p><h2>becoming a full-stack developer.</h2>
        </div>
        <div className="right-content">
        <img className="com-logo" src={photoshop} />
          <img className="com-logo" src={xd} />
          <img className="com-logo" src={figma} />
        </div>
    </section>
    </>
  )
}

export default About
