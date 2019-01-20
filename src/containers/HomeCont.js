import React from 'react';
import Story from '../components/Story';
import StartScreen from '../components/StartScreen';

const HomeCont = () => {


  return(
    <div className="home-cont">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
  <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
      <Story />
      <StartScreen />
    </div>
  )

}

export default HomeCont
