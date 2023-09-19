import React, { forwardRef, useRef } from 'react'
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
      <Link href="https://www.linkedin.com/in/malinschoening-063a90142/"><SocialLogo src={linkedin} /></Link>
      <Link href="https://github.com/malinschoening"><SocialLogo src={github} /></Link>
      <Link href="https://www.facebook.com/malinschoening/"><SocialLogo src={facebook} /></Link>
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
