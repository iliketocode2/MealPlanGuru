import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/School.css';
import tuftsLogo from '../../assets/tufts.png';
import buLogo from '../../assets/bu.jpg';
import harvardLogo from '../../assets/harvard.png';

export default function School() {
  return (
    <div className="page">
      <h1>Find Your School</h1>
      <div className="schools-container">
        <Link to="/tufts" className="school-link">
          <div className="school-circle" id="active">
            <img src={tuftsLogo} alt="Tufts University" />
          </div>
          <span>Tufts</span>
        </Link>
        <div className="school-link coming-soon">
          <div className="school-circle">
            <img src={harvardLogo} alt="Harvard University" />
            <div className="overlay">
              <span>Coming Soon</span>
            </div>
          </div>
          <span>Harvard</span>
        </div>
        <div className="school-link coming-soon">
          <div className="school-circle">
            <img src={buLogo} alt="Boston University" />
            <div className="overlay">
              <span>Coming Soon</span>
            </div>
          </div>
          <span>Boston University</span>
        </div>
      </div>
    </div>
  );
}