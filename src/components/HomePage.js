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
          href='/resume/Akhil_Nayak_Resume.docx'
          target='_blank'
          download='Akhil_Nayak_Resume.docx'
        >
          <Button className='resume'>
            <i className='fas fa-file-download' /> Resume
          </Button>
        </a>
      </div>
    );
  }
}
