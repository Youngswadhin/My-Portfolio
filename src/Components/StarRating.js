import React, { useState } from 'react';
import '../StyleSheet/StarRating.css'

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <div>
      <h1>User Rating System</h1>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? 'star filled' : 'star'}
            onClick={() => handleStarClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <p>Your rating: {rating} star(s)</p>
    </div>
  );
};

export default StarRating;
