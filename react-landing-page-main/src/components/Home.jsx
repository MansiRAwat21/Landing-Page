import React from 'react';
import '../styles/Page.css';
import HomeSlider from './HomeSlider';
import About from './ABout';
import Footer from './Footer';

const Home = () => {
  return (
    <>
  <HomeSlider />
  <About/>
  <Footer/>

  </>
  )
}

export default Home