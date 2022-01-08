import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <About></About>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
