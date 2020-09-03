import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, BankOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="restaurants" icon={<BankOutlined />}>
        <Link to="/restaurants">Restaurants</Link>
      </Menu.Item>
      <Menu.Item style={{float: 'right'}} key="checkout" icon={<ShoppingCartOutlined />}>
        <Link to="/checkout">Checkout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
