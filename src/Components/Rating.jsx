import React from 'react';

const RenderRatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainder = rating - filledStars;
  const hasHalfStar = remainder >= 0.25 && remainder <= 0.75;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="star">
        ★
      </span>
    );
  }
  if (hasHalfStar) {
    stars.push(
      <span key="halfstar" className="star">
        
      </span>
    );
  }
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty${i}`} className="star">
        ☆
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default RenderRatingStars;
