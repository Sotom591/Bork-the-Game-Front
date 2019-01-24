import React from 'react';
import StartScreen from '../components/StartScreen';
import ReactAudioPlayer from 'react-audio-player';

const HomeCont = (props) => {
  return(
    <div className="home-cont">
    <ReactAudioPlayer
          src={"https://opengameart.org/sites/default/files/Their%20Sweet%20Memories%20Slow_1.mp3"}
          autoPlay={true}
          loop={true}
          />
    <p className="title">BORK </p>
    <img alt="background picture" className="home-img" src="https://i.imgur.com/xnhKU0s.png"/>
    <img alt="doggo" className="home-doggo" src="https://i.imgur.com/OYq9koA.png"/>
      <StartScreen />
    </div>
  )
}

export default HomeCont
