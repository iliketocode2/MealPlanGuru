import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/School.css';  // Add this import
import tuftsLogo from '../../assets/tufts.png';  // Add this import

function School() {
  return (
    <div className="page">
      <h1>Find Your School</h1>
      <div className="schools-container">
        <Link to="/tufts" className="school-link">
          <div className="school-circle">
            <img src={tuftsLogo} alt="Tufts University" />
          </div>
          <span>Tufts</span>
        </Link>
        <Link to="/tufts" className="school-link">
          <div className="school-circle">
            <img src={tuftsLogo} alt="Tufts University" />
          </div>
          <span>Harvard</span>
        </Link>
        <Link to="/tufts" className="school-link">
          <div className="school-circle">
            <img src={tuftsLogo} alt="Tufts University" />
          </div>
          <span>Boston University</span>
        </Link>
      </div>
    </div>
  );
}

export default School;