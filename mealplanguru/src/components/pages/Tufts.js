import React from 'react';
import '../../styles/Tufts.css';
import Post from '../Post.jsx';

function Tufts() {
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
    <>
      <h1>Tufts University</h1>
      <div class="left-column">
        <h1>Handy Resources:</h1>
        <p><div class="logo_of_the_app"></div>Tufts Mobile Order App</p>
        <p><a href="https://dining.tufts.edu/" target="_blank" rel="noreferrer">Tufts Dining</a></p>
        <br></br>
        <p>Meal Plans</p> {/* When clicked, these will scroll to lower sections of this page. */}
        <p>Places to Eat</p>
      </div>
      <div className="right-column">
        < Post/>
        < Post/>
        < Post/>
        <p>Read More</p>
      </div>

      <div className="tufts-page">
        <h3>Select Your Plan</h3>
        {plans.map((plan, index) => (
          <div key={index} className="plan-box">
            <h3>{plan.name}</h3>
            <p>{plan.details}</p>
            <p><strong>{plan.price}</strong></p>
            <p>{plan.extra}</p>
          </div>
        ))}
      </div>
      <h1>Places to Eat</h1>

      <h3>Dining Halls:</h3>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/dewick-macphie-dining-center" target="_blank" rel="noreferrer">Dewick MacPhie</a></h4>  {/* When clicked, these will link to the official Tufts pages for these dining locations. */}
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/fresh-carmichael-dining-center" target="_blank" rel="noreferrer">Charmicheal</a></h4>
        <p>description</p>
      </div>
      
      <h3>Retail Locations:</h3>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/hodgdon-food-on-the-run" target="_blank" rel="noreferrer">Hodgdon</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/kindlevan-cafe" target="_blank" rel="noreferrer">Kindlevan Cafe</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/mugar-cafe" target="_blank" rel="noreferrer">Mugar Cafe</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/hotung-cafe" target="_blank" rel="noreferrer">Hotung Cafe</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/commons-marketplace" target="_blank" rel="noreferrer">Commons Marketplace</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/pax-et-lox" target="_blank" rel="noreferrer">Pax et Lox</a></h4>
        <p>description</p>
      </div>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/tower-cafe" target="_blank" rel="noreferrer">Tower Cafe</a></h4>
        <p>description</p>
      </div>
        
      <h3>Other Locations:</h3>
      <div class="placeToEat">
        <h4><a href="https://dining.tufts.edu/where-to-eat/smfa-cafe" target="_blank" rel="noreferrer">SMFA Cafe</a></h4>
        <p>description</p>
      </div>
    </>
  );
}

export default Tufts; 