import React from 'react';
import misha from '../styles/misha.png';
import photo3 from '../styles/398049_0027.jpg';
import photo2 from '../styles/398049_0032.jpg';
import slideInUp from 'react-animations/lib/slide-in-up';
import slideInDown from 'react-animations/lib/slide-in-down';
import slideInRight from 'react-animations/lib/slide-in-right';
import Radium, {StyleRoot} from 'radium';
import '../styles/Home.css';

const styles = {
  slideInUp: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  },
  slideInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  },
  slideInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInRight, 'slideInRight')
  }
}

const Home = () => {
  return (
    <StyleRoot>
      <div id="pixsec">
        <div id="pixblock-1">
          <img alt="misha" src={misha} width={600} style={styles.slideInDown}></img>
          <img alt="jc-window" src={photo2} width={600} style={styles.slideInUp}></img>
        </div>
        <div id="pixblock-2" style={styles.slideInRight}>
          <img alt="bear" src={photo3} width={600} height={800}></img>
          <p id="insta-tag"><a href="https://www.instagram.com/below_o/">  on instagram at <span id="instagram">@below_o</span> | <span className="russ">в инстаграм на <span id="instagram">@below_o</span></span></a></p>
        </div>
      </div>
    </StyleRoot>
  )
}

export default Home;