import html from './img/html.png'
import css from './img/css.png'
import figma from './img/figma.png'
import js from './img/js.png'
import xd from './img/xd.png'
import photoshop from './img/photoshop.png'
import atom from './img/atom.png'
import { forwardRef, useRef } from 'react'
import styled from 'styled-components'

const About = forwardRef((props, ref) => {

  return (
    <>
    <Title ref={ref}>About me</Title>
    <AboutSection>
        <LeftContent>
          <Logo className="com-logo" src={atom} />
          <Logo className="com-logo" src={html} />
          <Logo className="com-logo" src={css} />
          <Logo className="com-logo" src={js} />
        </LeftContent>
        <CenterContent>
            <p>I'm a front-end developer with knowledge in React, JavaScript, HTML, CSS and more. I've also been studing iOS development with Swift and Objective-C and Android development with Kotlin before I started this front-end developer program. The plan is to work as a front-end developer and study back-end development alongside my job.</p>
              <br/><br/>
              <p>In November it's time for my six month internship before graduating. So if you are interested in having me as an intern, or just to give me some advise, feel free to contact me &#128513; </p>
            <br/>
            <p>Previously I've been working as a nail technician which gave me plenty of experience in art, customer service and time efficiency. After a few years of working in the beauty industry I felt that I wanted to fulfill my dream -</p><h2>becoming a full-stack developer.</h2>
        </CenterContent>
        <RightContent>
        <Logo className="com-logo" src={photoshop} />
          <Logo className="com-logo" src={xd} />
          <Logo className="com-logo" src={figma} />
        </RightContent>
    </AboutSection>
    </>
  )
})

const Title = styled.h3`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

const AboutSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 5%;`;

const CenterContent = styled.div`
  padding: 2%;
  width: 70%;

  @media only screen and (max-width: 800px) {
    width: 60%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 5%;
`;

const Logo = styled.img`
  height: 60px;
`;


export default About
