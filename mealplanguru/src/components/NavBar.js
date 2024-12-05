import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mealplanguru.svg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/school">Find Your School</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;