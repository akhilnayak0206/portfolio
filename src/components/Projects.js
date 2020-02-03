import React, { Component, Fragment } from 'react';
import {
  Card,
  CardActions,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  Tooltip
} from 'react-mdl';
import './componentCSS/Project.css';
import allProjectFiles from './AllProjectFiles';
import Carousel, { Modal, ModalGateway } from 'react-images';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: allProjectFiles,
      openModal: false,
      selectedImages: []
    };
  }

  toggleModal = val => {
    this.setState(prevState => ({
      openModal: !prevState.openModal,
      selectedImages: val
    }));
  };

  render() {
    return (
      <Fragment>
        <ModalGateway>
          {this.state.openModal ? (
            <Modal onClose={this.toggleModal}>
              <Carousel
                frameProps={{ autoSize: 'height' }}
                views={this.state.selectedImages}
                styles={{
                  container: base => ({
                    ...base,
                    height: '100vh'
                  }),
                  view: base => ({
                    ...base,
                    alignItems: 'center',
                    display: 'flex ',
                    height: '100vh',
                    justifyContent: 'center',
                    borderRadius: '0%'
                  })
                }}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className='cards'>
          {this.state.a.map((file, key) => {
            return (
              <Card
                shadow={0}
                key={key}
                className='singleCard'
                style={{
                  background: `url(${file.image}) center top/contain no-repeat`
                }}
              >
                <CardTitle expand className='cardTitleMain'>
                  <h3 className='cardTitleText'>{file.title}</h3>
                </CardTitle>
                <CardActions border style={{ backgroundColor: 'gray' }}>
                  <Button
                    className='ssButton'
                    onClick={() => this.toggleModal(file.imgArray)}
                  >
                    ScreenShots
                  </Button>
                  <Button className='vcButton'>
                    <a
                      href={file.code}
                      target='codeGithub'
                      style={{ color: 'white' }}
                    >
                      {' '}
                      View Code
                    </a>
                  </Button>
                </CardActions>
                <CardMenu>
                  <Tooltip label='Share'>
                    <a
                      href={`mailto:?subject=Hey check this project ${file.title}&body=This is a project made by Akhil Nayak. URL:${file.code}`}
                    >
                      <IconButton
                        raised
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                        ripple
                        name='share'
                      />
                    </a>
                  </Tooltip>
                </CardMenu>
              </Card>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
