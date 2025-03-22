import React, { useState } from 'react';

const RatingTask = () => {
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    setRating(rating + 1);
  };

  return (
    <div>
      <h2>Rate this Product</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span
            // key={index}
            onClick={() => handleClick(index)}
            style={{
              cursor: 'pointer',
              color: index < rating ? 'gold' : 'gray',
              fontSize: '2rem',
            }}
          >
            ☆
          </span>
        ))}
      </div>
      <p>Your Rating: {rating} / 7</p>
    </div>
  );
};

export default RatingTask;


