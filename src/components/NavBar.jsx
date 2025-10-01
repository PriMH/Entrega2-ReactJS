import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">TechStore</Link>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/electronics">Electrónicos</Link></li>
          <li><Link to="/category/clothing">Ropa</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
        <div className="navbar-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
