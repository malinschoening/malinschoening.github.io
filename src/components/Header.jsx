import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const Header = ( {refs} ) => {


  return (
    <Container>
        <Navigation refs={refs}/>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 0;
  background-color: #343434;
  z-index: 200;
`;

export default Header
