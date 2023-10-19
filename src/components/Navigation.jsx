import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ refs }) => {

    const location = useLocation();


    useEffect(() => {
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
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
      <AboutLink to="/about">
        About
      </AboutLink>
    </motion.div>
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
      <PortfolioLink to="/portfolio">
        Portfolio
      </PortfolioLink>
    </motion.div>
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
      <ContactLink to="/contact">
        Contact
      </ContactLink>
    </motion.div>
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
