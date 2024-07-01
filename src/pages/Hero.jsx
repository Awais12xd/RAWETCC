import React from 'react';
import ProductList from '../Components/ProductList/ProductList';
import Review from '../Components/Review/Review';
import Home from '../Components/Home/Home';
import Contact from '../Components/Contact/Contact';

function Hero() {
    return (
        <>
          <Home />
          <ProductList/>
          <Review />
          <Contact />
        </>
    );
}

export default Hero;