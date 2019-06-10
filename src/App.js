import React from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl';

function App() {
  return (
    <div className="app">
    <Layout className="bgImage" fixedDrawer>
    <Header className="header" />
        <Drawer className="drawer" title="Portfolio">
            <Navigation className="navLink">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">About Me</a>
                <a href="#">Contact Me</a>
            </Navigation>
        </Drawer>
        <Content>
          <h1>Hello</h1>
        </Content>
    </Layout>
</div>
  );
}

export default App;
