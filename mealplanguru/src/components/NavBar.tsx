import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mealplanguru.svg';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/school">Find Your School</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}