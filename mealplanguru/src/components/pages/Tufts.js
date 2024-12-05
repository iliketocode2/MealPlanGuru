import React from 'react';
import '../../styles/Tufts.css';

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
      <h1>Tufts University Meal Plans</h1>
      <div className="tufts-page">
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
    </>
  );
}

export default Tufts; 