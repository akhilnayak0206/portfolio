import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './HomePage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects'

const MainRouter = () => (
    <Switch>
        <Route exact path="/portfolio/" component = {HomePage} />
        <Route exact path="/portfolio/aboutMe" component = {AboutMe} />
        <Route exact path="/portfolio/projects" component = {Projects} />
        <Route exact path="/portfolio/contactMe" component = {ContactMe} />
    </Switch>
)

export default MainRouter;