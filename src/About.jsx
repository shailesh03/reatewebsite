import React from 'react';
import img1 from './images/man-01.png'; 
import Commom from './Commom';

const  About = () => {
  return (
    <>
        <Commom name="Welcome to About page" imgsrc={img1} visit="/contact" btname="Contact Now" />
    </>
  );
}

export default About;
