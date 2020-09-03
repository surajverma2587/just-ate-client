import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, BankOutlined, SettingOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="app" icon={<BankOutlined />}>
        <Link to="/restaurants">Restaurants</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
