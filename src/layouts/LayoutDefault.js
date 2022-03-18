import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../views/Home';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Home/>    
    <Footer />
  </>
);

export default LayoutDefault;  