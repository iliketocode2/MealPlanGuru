import React from 'react';
import '../../styles/Tufts.css';
import BlogPost from '../BlogPost.tsx';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import posts from '../posts.ts';
import { plans } from '../tuftsplans.ts';

export default function Tufts() {
  return (
    <div className="tufts-container">
    <header>
      <h1>Tufts</h1>
    </header>

    <div className="main-content">
      <div className="left-column">
        <section className="handy-resources">
          <h2>Handy Resources:</h2>
          <div className="resource-item">
            <div className="logo_of_the_app"></div>
            <p>Tufts Mobile App</p>
          </div>
          <div className="resource-item">
            <a href="https://dining.tufts.edu/" target="_blank" rel="noreferrer">Tufts Dining</a>
          </div>
          <div className="resource-item">
            <a href="#meal-plans">Meal Plans</a>
          </div>
          <div className="resource-item">
          <a href="#places-eat">Places To Eat</a>
          </div>
        </section>
      </div>

      <div className="right-column">
        <section className="recent-posts">
          <h2>Recent Posts</h2>
          <div className="posts-list">
            {Object.entries(posts).map(([postId, post]) => (
              <div key={postId} className="post-summary">
                <Link to={`/tufts/posts/${postId}`}>
                  <img src={post.imageUrl} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p>{post.date}</p>
                  <p>{post.author}</p>
                  <div className="tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/tufts/posts">
          <p>Read More</p>
          </Link>
        </section>
      </div>
    </div>

    <section id="meal-plans" className="meal-plans">
      <h2>Meal Plans</h2>
      <div className="plan-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-box">
            <h3>{plan.name}</h3>
            <p>{plan.details}</p>
            <p><strong>{plan.price}</strong></p>
            <p>{plan.extra}</p>
            <Link to={`/tufts/posts?tag=${plan.tag}`}>See Related Posts</Link>
          </div>
        ))}
      </div>
    </section>

    <section id="places-eat" className="dining-locations">
      <h2>Places to Eat</h2>
      <h3>Dining Halls:</h3>
      <div className="location-items-grid">
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/dewick-macphie-dining-center" target="_blank" rel="noreferrer">Dewick MacPhie</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/fresh-carmichael-dining-center" target="_blank" rel="noreferrer">Charmicheal</a></h4>
          <p>description</p>
        </div>
      </div>
      <h3>Retail Locations:</h3>
      <div className="location-items-grid">
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/hodgdon-food-on-the-run" target="_blank" rel="noreferrer">Hodgdon</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/kindlevan-cafe" target="_blank" rel="noreferrer">Kindlevan Cafe</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/mugar-cafe" target="_blank" rel="noreferrer">Mugar Cafe</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/hotung-cafe" target="_blank" rel="noreferrer">Hotung Cafe</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/commons-marketplace" target="_blank" rel="noreferrer">Commons Marketplace</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/pax-et-lox" target="_blank" rel="noreferrer">Pax et Lox</a></h4>
          <p>description</p>
        </div>
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/tower-cafe" target="_blank" rel="noreferrer">Tower Cafe</a></h4>
          <p>description</p>
        </div>
      </div>
      <h3>Other Locations:</h3>
      <div className="location-items-grid">
        <div className="location-item">
          <h4><a href="https://dining.tufts.edu/where-to-eat/smfa-cafe" target="_blank" rel="noreferrer">SMFA Cafe</a></h4>
          <p>description</p>
        </div>
      </div>
    </section>
  </div>
  );
}