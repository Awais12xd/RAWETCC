// Layout.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './pages/Hero';
import Aboot from './pages/Aboot';
import AllProducts from './pages/AllProducts';
import Contect from './pages/Contect';
import Testimonal from './pages/Testimonal';

const Layout = () => {
    const location = useLocation();
    const { pathname } = location;

    const isHomePage = pathname === '/';

    return (
        <div>
            <Navbar />
            
                <Routes>
                    <Route path="/" element={<Hero />} />
                    {isHomePage && (
                        <>
                            <Route path="/about" element={<Aboot />} />
                            <Route path="/shop" element={<AllProducts/>} />
                            <Route path="/contact" element={<Contect />} />
                            <Route path="/reviews" element={<Testimonal />} />
                        </>
                    )}
                </Routes>
            
            <Footer />
        </div>
    );
};

export default Layout;
