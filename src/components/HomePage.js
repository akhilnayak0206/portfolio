import React, { Component } from 'react';
import './componentCSS/HomePage.css';
import meditation from './imagesEmoji/meditation.jpeg';
import morning from './imagesEmoji/goodMorning.jpeg';
import afternoon from './imagesEmoji/goodAfternoon.jpeg';
import evening from './imagesEmoji/goodEvening.jpeg';
import night from './imagesEmoji/goodNight.jpeg';
// import { Button } from 'react-mdl'; 
import Typist from 'react-typist';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 25,
      emojiImage: meditation
    };
  }

  componentWillMount() {
    this.setState({
      currentTime: new Date().getHours()
    });
  }
  componentDidMount() {
    if (this.state.currentTime >= 5 && this.state.currentTime < 12) {
      this.setState({
        emojiImage: morning
      });
    } else if (this.state.currentTime > 11 && this.state.currentTime < 17) {
      this.setState({
        emojiImage: afternoon
      });
    } else if (this.state.currentTime > 16 && this.state.currentTime < 20) {
      this.setState({
        emojiImage: evening
      });
    } else if (this.state.currentTime > 19 && this.state.currentTime < 25) {
      this.setState({
        emojiImage: night
      });
    } else if (this.state.currentTime >= 0 && this.state.currentTime < 5) {
      this.setState({
        emojiImage: night
      });
    }
  }

  render() {
    return (
      <div className='emojiHello'>
        <img src={this.state.emojiImage} alt='Akhil Nayak' />
        <h1 className='intro'>
          <Typist cursor={{ hideWhenDone: true }}>Hi, I'm Akhil Nayak</Typist>
        </h1>
        {/* <a
          href='https://drive.google.com/file/d/1CdYLmIKS8OGQfYTNwdYvciI05pjG6xb_/view?usp=drivesdk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='resume'>View Resume</Button>
        </a> */}
      </div>
    );
  }
}
