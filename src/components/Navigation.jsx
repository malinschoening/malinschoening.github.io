import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ refs }) => {

    const location = useLocation();


    useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "/portfolio":
        scrollSmoothHandler(refs.portfolioRef);
        break;
      case "/contact":
        scrollSmoothHandler(refs.contactRef);
        break;

      default:
      // ignore
    }
  }, [location, refs]);

  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AboutLink to="/about">
        About
      </AboutLink>
      <PortfolioLink to="/portfolio">
        Portfolio
      </PortfolioLink>
      <ContactLink to="/contact">
        Contact
      </ContactLink>
    </>
  )
}

const AboutLink = styled(NavLink)`
  color: #ff4dd3;
  font-size: 30px;
`;

const PortfolioLink = styled(NavLink)`
  color: #37dd66;
  font-size: 30px;
`;

const ContactLink = styled(NavLink)`
  color: #c954ff;
  font-size: 30px;
`;

export default Navigation
