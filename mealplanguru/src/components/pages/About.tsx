import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/About.css';

export default function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>I love eating food so I made this so other students can enjoy eating food too.</p>
      <Link to="/contact">Contact Our Team!</Link>
      <div className="author-box">
        <div className="author" id="author1">
          <img src="https://via.placeholder.com/150" alt="Author" />
          <h2>Author Name 1</h2>
          <p>Author Bio 1</p>
        </div>
        <div className="author" id="author2">
          <img src="https://via.placeholder.com/150" alt="Author" />
          <h2>Author Name 2</h2>
          <p>Author Bio 2</p>
        </div>
        <div className="author" id="author3">
          <img src="https://via.placeholder.com/150" alt="Author" />
          <h2>Author Name 3</h2>
          <p>Author Bio 3</p>
        </div>
      </div>
    </div>
  );
}