import React, { Component } from 'react';
import './componentCSS/HomePage.css';
import meditation from './imagesEmoji/meditation.jpeg';
import morning from './imagesEmoji/goodMorning.jpeg';
import afternoon from './imagesEmoji/goodAfternoon.jpeg';
import evening from './imagesEmoji/goodEvening.jpeg';
import night from './imagesEmoji/goodNight.jpeg';
import { Button } from 'react-mdl';

export default class HomePage extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 25,
      emojiImage: meditation
    };
  }
  render() {
    return (
      <div className='emojiHello'>
        <img src={this.state.emojiImage} alt='Akhil Nayak' />
        <h1>Hi, I'm Akhil Nayak </h1>
        <a
          href='https://drive.google.com/file/d/1BpPEzpuBa5fVwKrCTNlkbhYJE7I0yZz7/view?usp=drivesdk'
          target='_blank'
        >
          <Button className='resume'>View Resume</Button>
        </a>
      </div>
    );
  }
}
