import React from "react";
import { Card } from "antd";

import RestaurantDescription from "./RestaurantDescription";

const { Meta } = Card;

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card
      style={{ width: 360, margin: "16px" }}
      hoverable
      bordered={false}
      cover={
        <img
          alt={restaurant.title}
          src={restaurant.imageUrl}
        />
      }
    >
      <Meta
        title={restaurant.title}
        description={
          <RestaurantDescription
            rating={restaurant.rating}
            reviews={restaurant.reviews}
          />
        }
      />
    </Card>
  );
};

export default RestaurantCard;
