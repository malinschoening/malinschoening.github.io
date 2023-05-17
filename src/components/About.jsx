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
    <section id="about">
        <div className="left-content">
          <img className="com-logo" src={atom} />
          <img className="com-logo" src={html} />
          <img className="com-logo" src={css} />
          <img className="com-logo" src={js} />
        </div>
        <div className="center-content">
            <h2>About me</h2><br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Debitis est quis blanditiis quos architecto praesentium,
             qui odio inventore minima, quisquam ipsum! Repellat 
             laudantium nemo natus esse veniam libero ipsum 
             exercitationem?<br/><br/>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi recusandae fugiat quas, vero reprehenderit laboriosam porro doloremque deleniti ab voluptas!
             <br/><br/>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex beatae explicabo sint, nisi obcaecati eius rerum nam doloribus ullam?
             </p>
        </div>
        <div className="right-content">
        <img className="com-logo" src={photoshop} />
          <img className="com-logo" src={xd} />
          <img className="com-logo" src={figma} />
        </div>
    </section>
  )
}

export default About
