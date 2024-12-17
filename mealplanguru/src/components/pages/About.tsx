import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p> I love eating food so I made this so other students can enjoy eating food too.</p>
      <Link to="/contact">Contact Us!</Link>
   </div>
  );
}