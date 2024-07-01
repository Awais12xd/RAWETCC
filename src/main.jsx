import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import store from './store/store';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './pages/Hero';
import Aboot from './pages/Aboot';
import AllProducts from './pages/AllProducts';
import Contect from './pages/Contect';
import Testimonal from './pages/Testimonal';
import ProductDetail from "./Components/ProductDetail/ProductDetail"
import './index.css';
import Cart from './Components/Cart/Cart';

const Layout = () => {
   
    return (
        <div>
            <Navbar />
            
                <Routes>
                    <Route path="/" element={<Hero />} />
                    
                            <Route path="/about" element={<Aboot />} />
                            <Route path="/shop" element={<AllProducts />} />
                            <Route path="/contact" element={<Contect />} />
                            <Route path="/reviews" element={<Testimonal />} />
                            <Route path="/detail/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />

                </Routes>
            
            <Footer />
        </div>
    );
};

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
