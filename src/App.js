import React from "react";
import "./App.css";
import { Layout, Drawer, Navigation, Content } from "react-mdl";
import MainRouter from "./components/MainRouter";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Layout className="bgImage" fixedDrawer>
        <Drawer className="drawer" title="Portfolio">
          <Navigation className="navLink">
            <Link to="/portfolio/">Home</Link>
            <Link to="/portfolio/projects">Projects</Link>
            <Link to="/portfolio/aboutMe">About Me</Link>
            <Link to="/portfolio/contactMe">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content className="emojiHello">
          <MainRouter />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
