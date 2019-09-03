import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const MainRouter = () => (
  <Switch>
    <Route exact path="/portfolio/" component={HomePage} />
    <Route path="/portfolio/aboutMe" component={AboutMe} />
    <Route path="/portfolio/projects" component={Projects} />
    <Route path="/portfolio/contactMe" component={ContactMe} />
    <Redirect to='/portfolio' />
  </Switch>
);

export default MainRouter;
