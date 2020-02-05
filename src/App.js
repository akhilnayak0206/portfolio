import React from 'react';
import './App.css';
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import MainRouter from './components/MainRouter';
import { Link, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Layout className='bgImage' fixedDrawer>
          <Drawer className='drawer' title='Portfolio'>
            <Navigation className='navLink'>
              <Link to='/'>Home</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/aboutMe'>Skills</Link>
              <Link to='/contactMe'>Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content className='emojiHello'>
            <MainRouter />
          </Content>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
