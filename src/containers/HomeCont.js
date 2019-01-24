import React from 'react';
import StartScreen from '../components/StartScreen';

const HomeCont = () => {
  return(
    <div className="home-cont">
    <p className="title">BORK </p>
    <img alt="background picture" className="home-img" src="https://i.imgur.com/xnhKU0s.png"/>
    <img alt="doggo" className="home-doggo" src="https://i.imgur.com/OYq9koA.png"/>
      <StartScreen />
    </div>
  )
}

export default HomeCont
