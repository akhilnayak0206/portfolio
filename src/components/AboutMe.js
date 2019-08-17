import React, { Component } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

import "./componentCSS/AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="mainSkills">
        <h1>Skills</h1>
        <div className="skillsOverlay">
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="HTML/CSS">
                <strong>HTML/CSS</strong> is the basic script needed for Web
                Development.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              HTML/CSS
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="Bootstrap">
                <strong>Bootstrap</strong> is a FrontEnd Component library.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              Bootstrap
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="JavaScript">
                <strong>JavaScript</strong> is a lightweight interpreted or
                just-in-time compiled programming language with first-class
                functions.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              JavaScript
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="ReactJS">
                <strong>ReactJS</strong> is a JS library for building User
                Interface.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              ReactJS
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="React Native">
                <strong>React Native</strong> is a framework to build native
                apps using react.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              React Native
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="React Native">
                <strong>Redux</strong> is a state management for react.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              Redux
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="React Native">
                <strong>react-native-navigation</strong> developed by{" "}
                <strong>Wix</strong> is used for navigation in react-native.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              react-native-navigation
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="React Native">
                <strong>react-navigation</strong> recommended by{" "}
                <strong>React</strong> is used for navigation in react-native.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              react-navigation
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="Expo">
                <strong>Expo</strong> A free and open source toolchain built
                around React Native to help you build native iOS and Android
                apps.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              Expo
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="popover-positioned-top" title="Firebase">
                <strong>Firebase</strong> provides a real time database and
                backend as a service.
              </Popover>
            }
          >
            <Button variant="secondary" className="btnSkills">
              Firebase
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
