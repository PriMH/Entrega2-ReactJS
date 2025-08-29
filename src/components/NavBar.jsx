import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#" className="navbar-logo">TechStore</a>
        
        <ul className="navbar-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        
        <div className="navbar-cart">
          <CartWidget />
        </div>
        
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  );
};

export default NavBar;