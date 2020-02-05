import React, { Component } from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

import './componentCSS/AboutMe.css';
import Typist from 'react-typist';

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          title: 'ReactJS',
          description: 'is a JS library for building User Interface.'
        },
        {
          title: `React Native`,
          description: `is a framework to build native
          apps using react.`
        },
        {
          title: `Redux`,
          description: `is a state management for react.`
        },
        {
          title: `NodeJS`,
          description: `is a JS runtime environment that executes
          JS code outside of a browser`
        },
        {
          title: `MongoDB`,
          description: `is a cross-platform document-oriented database program.`
        },
        {
          title: `Mongoose`,
          description: `Mongoose is an ORM for Mongo, written in NodeJS.`
        },
        {
          title: `ExpressJS`,
          description: `is a web application framework for Node.js, released as free and open-source software under the MIT License.`
        },
        {
          title: `ECMAScript`,
          description: `was created to standardize JavaScript to help foster multiple independent implementations.`
        },
        {
          title: `react-native-navigation`,
          description: `is used for navigation in react-native.`
        },
        {
          title: `react-navigation`,
          description: `recommended by React is used for navigation in react-native`
        },
        {
          title: `Expo`,
          description: `is a free and open source toolchain built
          around React Native to help you build native iOS and Android
          apps.`
        },
        {
          title: `Firebase`,
          description: `provides a real time database and
          backend as a service.`
        },
        {
          title: `HTML5/CSS3`,
          description: `are used as markup language and styling respectively`
        },
        {
          title: `JavaScript`,
          description: `is a lightweight interpreted or
          just-in-time compiled programming language with first-class
          functions.`
        }
      ]
    };
  }

  render() {
    return (
      <div className='mainSkills'>
        <h1
          style={{
            backgroundColor: ' rgba(255, 255, 255, 0.2)',
            fontFamily: '"Brush Script MT", cursive'
          }}
        >
          <Typist cursor={{ show: false }}>Skills</Typist>
        </h1>
        <div className='skillsOverlay'>
          {this.state.skills &&
            this.state.skills.map((val, key) => (
              <OverlayTrigger
                key={key}
                placement='top'
                overlay={
                  <Popover
                    id='popover-positioned-top'
                    title={val.title}
                    className='skillsInfo'
                  >
                    <strong>{val.title}</strong> {val.description}
                  </Popover>
                }
              >
                <Button variant='secondary' className='btnSkills'>
                  {val.title}
                </Button>
              </OverlayTrigger>
            ))}
        </div>
      </div>
    );
  }
}
