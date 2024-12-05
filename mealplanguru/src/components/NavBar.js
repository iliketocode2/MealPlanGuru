import React from 'react';
import logo from '../assets/mealplanguru.svg';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#recent-posts">Recent Posts</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;