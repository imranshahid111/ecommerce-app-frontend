import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar'; // Make sure the path is correct
import Products from './Components/Products';
import Product from './Components/Product';
import Footer from './Components/Footer';
import About from './Components/About';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
