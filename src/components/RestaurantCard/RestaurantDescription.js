import React from "react";
import ReactStars from "react-rating-stars-component";

const RestaurantDescription = ({ reviews = 0, rating = 0 }) => {
  return (
    <div>
      <ReactStars
        count={5}
        size={18}
        activeColor="#ffd700"
        value={rating}
        edit={false}
      />
      {reviews} reviews
    </div>
  );
};

export default RestaurantDescription;
