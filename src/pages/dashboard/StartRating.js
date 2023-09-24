import React from "react";
import "./StartRating.css";

// TODO: Fix .5 rating star
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars > 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="star full-star">
        &#9733;
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="star half-star">
        &#11242;
      </span>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <span key={stars.length} className="star empty-star">
        &#9733;
      </span>
    );
  }

  return (
    <div>
      <div className="star-rating">{stars}</div>
      <span>{rating}</span>
    </div>
  );
}

export default StarRating;
