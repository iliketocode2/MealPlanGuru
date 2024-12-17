import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/mealplanguru.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>
        <div className="footer-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/school">Find Your School</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 MealPlanGuru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}