import React, { forwardRef, useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import mobile from './img/mobile.png'
import tablet from './img/tablet.png'
import desktop from './img/desktop.png'
import styled from 'styled-components'
import desktop2 from './img/desktop2.png'

const Portfolio = forwardRef((props, ref) => {

  const projects = [
    mobile,
    desktop,
    tablet
  ];

  return (
    <>
    <Title ref={ref}>Projects</Title>
    <PortfolioSection>
      <Device>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            <Link href="https://gittest-frk22s.web.app/" target="_blank">
              <DeviceImage src={desktop2} />
              </Link>
          </motion.div>
        <DeviceTitle>Blog with Firebase server</DeviceTitle>
        <p>Blog with Firebase server and MongoDB database.</p>
      </Device>
      <Device>
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <Link href="https://github.com/malinschoening/chat-app-auth" target="_blank">
            <DeviceImage src={mobile} />
          </Link>
       </motion.div>
      <DeviceTitle>Chat app with authorization</DeviceTitle>
      <p>Chat app made with React Native where you can register users and login. The users can chat with each other. </p>
      </Device>
      <Device>
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
        <Link href="https://github.com/malinschoening/aminasmakar" target="_blank">
          <DeviceImage src={desktop} />
        </Link>
      </motion.div>
      <DeviceTitle>Amina Smakar</DeviceTitle>
      <p>Catering company site made with React.js, <Link href="http://aminasmakar.se" target="_blank">Click here to see the live site.</Link></p>
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
