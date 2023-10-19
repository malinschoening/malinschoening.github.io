import React, { forwardRef, useRef } from 'react'
import { motion } from "framer-motion"
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import facebook from './img/facebook.png'
import styled from 'styled-components'

const Contact = forwardRef((props, ref) => {

  return (
    <>
    <Title ref={ref}>Contact me</Title>
    <ContactSection>
    <SocialsSection>
    <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}>
        <Link href="https://www.linkedin.com/in/malinschoening" target="_blank"><SocialLogo src={linkedin} /></Link>
    </motion.div>
    <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}>
      <Link href="https://github.com/malinschoening" target="_blank"><SocialLogo src={github} /></Link>
    </motion.div>
    <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}>
      <Link href="https://www.facebook.com/malinschoening/" target="_blank"><SocialLogo src={facebook} /></Link>
    </motion.div>
    </SocialsSection>
    <p>Feel free to send me an email at <Link href="mailto:malin.schoening@gmail.com">malin.schoening@gmail.com</Link> for questions, work collaborations or other inquiries.</p>
    </ContactSection>
    </>
    
  )
})

const Title = styled.h3`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

const ContactSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SocialsSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: #c954ff;
`;

const SocialLogo = styled.img`
  width: 50px;
  margin: 10px;
`;

export default Contact
