import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardText,
  CardTitle,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import "./componentCSS/Project.css";
import allProjectFiles from "./AllProjectFiles";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: allProjectFiles
    };
  }

  render() {
    return (
      <div className="cards">
        {this.state.a.map((file, key) => {
          return (
            <Card shadow={0} key={key} className="singleCard">
              <CardTitle
                expand
                className="projectImage"
                style={{ backgroundImage: `url(${file.image})` }}
              >
                {file.title}
              </CardTitle>
              <CardText>{file.description}</CardText>
              <CardActions border>
                <a href={file.code} target="#">
                  <Button colored>View Code</Button>
                </a>
              </CardActions>
              <CardMenu>
                <a
                  href={`mailto:?subject=Hey check this project ${
                    file.title
                  }&body=This is a project made by Akhil Nayak. URL:${
                    file.code
                  }`}
                >
                  <IconButton raised colored ripple name="share" />
                </a>
              </CardMenu>
            </Card>
          );
        })}
      </div>
    );
  }
}
