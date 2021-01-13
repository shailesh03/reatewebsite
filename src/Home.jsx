import React from 'react';
import img1 from './images/man-01.png'; 
import Commom from "./Commom";

const  Home = () => {
  return (
    <>
        <Commom name="Grow your business with" imgsrc={img1} visit="/service" btname="Get Started" />
    </>
  );
}

export default Home;
