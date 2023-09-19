import React from 'react'
import github from './img/github.png'
import linkedin from './img/linkedin.png'
import facebook from './img/facebook.png'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Link href="https://www.linkedin.com/in/malinschoening/"><Socials className='social-logo' src={linkedin} /></Link>
      <Link href="https://github.com/malinschoening"><Socials className='social-logo' src={github} /></Link>
      <Link href="https://www.facebook.com/malinschoening/"><Socials className='social-logo' src={facebook} /></Link>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  left: 0;
  bottom: 50%;
  border: 1px solid rgb(60, 60, 60);
  border-radius: 0px 5px 5px 0px;
  padding: 5px;
  position: fixed;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Socials = styled.img`
  width: 30px;
`;

const Link = styled.a`
  opacity: 0.8;

  &:hover {
    opacity: 1.0;
  }
`;



export default Footer
