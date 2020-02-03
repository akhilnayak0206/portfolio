import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './HomePage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';

const MainRouter = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/aboutMe/' component={AboutMe} />
    <Route exact path='/projects/' component={Projects} />
    <Route exact path='/contactMe/' component={ContactMe} />
    <Redirect to='/' />
  </Switch>
);

export default MainRouter;
