import React, { useState } from 'react';
import GridView from './GridView';
import CarouselView from './CarouselView';
import Button from 'react-bootstrap/Button';
import carousel from '../styles/carousel.png';
import grid from '../styles/grid.png';
import '../styles/View.css';

const View = (props) => {
    const [view, setView] = useState('grid');
    const [index, setIndex] = useState(0);
    
    const resetIndexOnGrid = () =>    {
        setView('grid')
        setIndex(0)
    }

    return (
        <div>
            <div id="title">
                {props.album === 'winter' ?
                    <h5>Winter 2020 <span className="russ">| Зима 2020</span></h5> :
                    <h5>Spring 2021 <span className="russ">| весна 2021</span></h5>
                }
            </div>
            {view === 'grid' ? 
                <div><Button id="toggle-view-btn" onClick={() => setView('carousel')}><img width='20px'src={carousel}></img></Button></div> :
                <div><Button id="toggle-view-btn" onClick={() => resetIndexOnGrid()}><img width='20px'src={grid}></img></Button></div>
            }
            {view === 'grid' ? 
                <GridView photos={props.photos} setIndex={setIndex} setView={setView}/> : 
                <CarouselView photos={props.photos} initialIndex={index}/>
            }
        </div>
    )
}

export default View;
