import React from 'react';
import GridView from './GridView';
import CarouselView from './CarouselView';
import Button from 'react-bootstrap/Button';
import carousel from './roll_1/carousel.png';
import grid from './roll_1/grid.png';
import './App.css';

export default class HomePhotos extends React.Component {
    constructor()   {
        super();
        this.state =  {
            view: 'grid',
            index: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePhotoClick = this.handlePhotoClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handlePhotoClick = (e)   =>  {
        console.log(e.target.alt)
        let idx = Number(e.target.alt)
        this.setState({view: 'carousel',index: idx})
    }

    handleSelect = (e) => {
        console.log(e.target)
        let newIdx = this.state.index
        newIdx++
        if (newIdx > 29)    {
            newIdx = 0
        }
        console.log('new',newIdx)
        this.setState({index: newIdx});
    };

    handleClick = () => {
        if (this.state.view === 'grid') {
            this.setState({view: 'carousel'})
        }   else    {
            this.setState({view: 'grid'})
        }
    }
  render () {
    return (
            <div>
                <div id="title">
                    <h5>Winter, 2020 - 2021 <span className="russ">| Зима</span></h5>
                </div>
                {this.state.view === 'grid' ? <div>
                    <Button id="toggle-view-btn" onClick={this.handleClick}><img width='20px'src={carousel}></img></Button>
                </div> : <div>
                    <Button id="toggle-view-btn" onClick={this.handleClick}><img width='20px'src={grid}></img></Button>
                </div>}
                {this.state.view === 'grid' ? <GridView handleClick={this.handlePhotoClick}/> : <CarouselView handleSelect={this.handleSelect} index={this.state.index}/>}
            </div>
    )
  }
}
