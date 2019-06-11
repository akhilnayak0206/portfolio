import React from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content, Header } from 'react-mdl';

function App() {
  return (
    <div className="app">
    <Layout className="bgImage" fixedDrawer>
        <Drawer className="drawer" title="Portfolio">
            <Navigation className="navLink">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">About Me</a>
                <a href="#">Contact Me</a>
            </Navigation>
        </Drawer>
        <Content className="emojiHello">
          <h1>Hi, I'm Akhil Nayak</h1>
        </Content>
    </Layout>
</div>
  );
}

export default App;
