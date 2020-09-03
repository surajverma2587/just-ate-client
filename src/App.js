import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { Layout } from "antd";

const { Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Content
        style={{
          padding: 24,
          margin: 0,
        }}
      >
        <Routes />
      </Content>
    </BrowserRouter>
  );
};

export default App;
