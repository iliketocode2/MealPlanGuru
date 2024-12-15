import React from 'react';
import '../../styles/Tufts.css';
import Post from '../Post.tsx';

export default function Tufts() {
  const plans = [
    {
      name: 'Tufts Full Plan',
      details: '400 swipes (about 3.5 meals a day) + $75 Jumbo Cash + 8 guest swipes',
      price: '$4,230',
      extra: '$104 for 10 meals',
    },
    {
      name: '220 Plan',
      details: '220 swipes (about 2 meals a day) + 6 guest swipes',
      price: '$3,832',
      extra: '$174 for 10 meals',
    },
    {
      name: '160 Plan',
      details: '160 swipes (about 10 meals a week) + 6 guest swipes',
      price: '$2,818',
      extra: '$176 for 10 meals',
    },
    {
      name: '100 Plan',
      details: '100 swipes (about 6 - 7 meals a week) + 6 guest swipes',
      price: '$1,823',
      extra: '$182 for 10 meals',
    },
    {
      name: '40 Plan',
      details: '40 swipes (about 2 - 3 meals a week)',
      price: '$736',
      extra: '$184 for 10 meals',
    },
  ];

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
          <Post 
            title="First Post" 
            date="September 1, 2025"
            content="This is the content of the first post." 
            imageUrl="https://via.placeholder.com/150"
          />
          <Post 
            title="Second Post" 
            date="September 2, 2025"
            content="This is the content of the second post." 
            imageUrl="https://via.placeholder.com/150"
          />
          <Post 
            title="Third Post" 
            date="September 3, 2025"
            content="This is the content of the third post." 
            imageUrl="https://via.placeholder.com/150"
          />
          <p>Read More</p>
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