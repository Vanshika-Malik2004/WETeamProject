import React, {useState} from 'react'

import './ReviewButton.css'; // Create a CSS file for styling

const Rating = () => {
  const [rating, setRating] = useState(3);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="review-button">
      {/* <h2>Rate this product:</h2> */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((starValue) => (
          <span
            key={starValue}
            className={starValue <= rating ? 'star active' : 'star'}
            onClick={() => handleStarClick(starValue)}
          >
            ★
          </span>
        ))}
      </div>
      {/* <p>Your rating: {rating} stars</p> */}
    </div>
  );
};

export default Rating;
