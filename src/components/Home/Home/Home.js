import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <About></About>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
