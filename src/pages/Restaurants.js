import React from "react";
import RestaurantCard from "../components/RestaurantCard";

import restaurants from '../data/restaurants';

const Restaurants = () => {
  const renderRestaurants = () => {
    return restaurants.map((restaurant) => {
      return <RestaurantCard restaurant={restaurant} />;
    });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {renderRestaurants()}
    </div>
  );
};

export default Restaurants;
