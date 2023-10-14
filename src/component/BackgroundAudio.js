import React, { Component } from 'react';
import sound from '../images/lambo.mp3'
class BackgroundAudio extends Component {
    render() {
      return (
        <div>
          <audio
          controls
            autoPlay
            loop
            src={sound}
          >
          </audio>
        </div>
      );
    }
  }
  
  export default BackgroundAudio;
  