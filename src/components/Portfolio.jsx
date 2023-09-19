import React, { forwardRef, useRef } from 'react'
import mobile from './img/mobile.png'
import tablet from './img/tablet.png'
import desktop from './img/desktop.png'
import styled from 'styled-components'

const Portfolio = forwardRef((props, ref) => {
  return (
    <>
    <Title ref={ref}>Projects</Title>
    <PortfolioSection>
      <Device>
      <DeviceImage src={tablet} />
      <DeviceTitle>Coming soon..</DeviceTitle>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus dolore quas modi laudantium deleniti.</p>
      </Device>
      <Device>
      <Link href="https://github.com/malinschoening/chat-app-auth"><DeviceImage src={mobile} /></Link>
      <DeviceTitle>Chat app with authorization</DeviceTitle>
      <p>Chat app made with React Native where you can register users and login. The users can chat with each other. </p>
      </Device>
      <Device>
      <Link href="https://github.com/malinschoening/Amina-smakar"><DeviceImage src={desktop} /></Link>
      <DeviceTitle>Amina Smakar</DeviceTitle>
      <p>Catering company site made with React.js, <Link href="http://aminasmakar.se">Click here to see the live site.</Link></p>
      </Device>
    </PortfolioSection>
    </>
  )
})

const Title = styled.h3`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

const PortfolioSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
  margin-bottom: 10vh;

  @media only screen and (max-width: 800px) {
    gap: 0px;
    flex-direction: column;
  }
`;

const Device = styled.div`
  text-align: center;
  width: 30%;

  @media only screen and (max-width: 1100px) {
    width: 25%;
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const DeviceImage = styled.img`
  height: 300px;

  @media only screen and (max-width: 1100px) {
    height: 200px;
  }

  @media only screen and (max-width: 800px) {
    height: 300px;
  }
`;

const DeviceTitle = styled.h2`
  font-size: 25px;
`;

const Link = styled.a`
  color: #37dd66;
`;

export default Portfolio
