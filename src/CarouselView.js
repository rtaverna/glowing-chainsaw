import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from './roll_1/398049_0001.jpg';
import photo2 from './roll_1/398049_0006.jpg';
import photo3 from './roll_1/398049_0007.jpg';
import photo4 from './roll_1/398049_0013.jpg';
import photo5 from './roll_1/398049_0021.jpg';
import photo6 from './roll_1/398049_0023.jpg';
import photo7 from './roll_1/398049_0027.jpg';
import photo8 from './roll_1/398049_0032.jpg';
import photo9 from './roll_1/398049_0028.jpg';
import photo11 from './roll_1/398049_0004.jpg';
import photo12 from './roll_1/398049_0008.jpg';
import photo14 from './roll_1/398049_0010.jpg';
import photo15 from './roll_1/398049_0011.jpg';
import photo17 from './roll_1/398049_0014.jpg';
import photo18 from './roll_1/398049_0015.jpg';
import photo19 from './roll_1/398049_0016.jpg';
import photo20 from './roll_1/398049_0017.jpg';
import photo21 from './roll_1/398049_0018.jpg';
import photo22 from './roll_1/398049_0019.jpg';
import photo23 from './roll_1/398049_0020.jpg';
import photo24 from './roll_1/398049_0022.jpg';
import photo25 from './roll_1/398049_0024.jpg';
import photo26 from './roll_1/398049_0025.jpg';
import photo27 from './roll_1/398049_0026.jpg';
import photo28 from './roll_1/398049_0029.jpg';
import photo29 from './roll_1/398049_0030.jpg';
import photo30 from './roll_1/398049_0031.jpg';
import photo31 from './roll_1/398049_0033.jpg';
import photo32 from './roll_1/398049_0034.jpg';
import photo33 from './roll_1/398049_0035.jpg';

export default class CarouselView extends React.Component {
    constructor()   {
        super()
    }

  

    render()    {
        console.log('index',this.props.index)
    return (
        <Carousel indicators={false} activeIndex={this.props.index} onSelect={this.props.handleSelect}>
            <Carousel.Item>
                <img src={photo29} alt="photo1" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo31} alt="photo2" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo32} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo21} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo1} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo2} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo26} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo8} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo5} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo20} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo23} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo24} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo11} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo15} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo14} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo22} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo33} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo27} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo28} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo3} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo4} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo6} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo7} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo9} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo12} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo17} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo18} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo19} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo25} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={photo30} alt="photo3" className="d-block w-50"> 
                </img>
                <Carousel.Caption>
                    <h3>Binghamton, New York | Бингемтон, Нью-Йорк </h3>
                    <p>35mm</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    }
}

