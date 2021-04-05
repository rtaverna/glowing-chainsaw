import React from 'react';
import misha from './roll_1/misha.png';
import photo3 from './roll_1/398049_0027.jpg';
import photo2 from './roll_1/398049_0032.jpg';
import './App.css';

export default class HomePhotos extends React.Component {
  render () {
    return (
        <div id="pixcontainer">
          <div id="pixsec-1">
            <div id="pixblock-1">
                <img alt="misha" src={misha} width={600}></img>
                <img alt="jc-window" src={photo2} width={600}></img>
            </div>
            <div id="pixblock-2">
                <img alt="bear" src={photo3} width={600} height={800}></img>
            </div>
          </div>
        </div>
    )
  }
}

