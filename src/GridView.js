import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
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
import './App.css';

export default class GridView extends React.Component {
  render () {
    return (
        <Container>
            <Row>
                <Col>
                    <Image alt='0' src={photo29} fluid onClick={this.props.handleClick} ></Image>
                </Col>
                <Col>
                    <Image alt='1' src={photo31} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='2' src={photo32} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='3' src={photo21} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='4' src={photo1} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='5' src={photo2} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='6' src={photo26} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='7' src={photo8} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='8' src={photo5} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='9' src={photo20} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='10' src={photo23} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='11' src={photo24} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='12' src={photo11} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='13' src={photo15} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='14' src={photo14 } fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='15' src={photo22} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='16' src={photo33} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='17' src={photo27} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='18' src={photo28} fluid onClick={this.props.handleClick}></Image>
                </Col>
                
                <Col>
                    <Image alt='19' src={photo3} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='20' src={photo4} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='21' src={photo6} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='22' src={photo7 } fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='23' src={photo9} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='24' src={photo12} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image alt='25' src={photo17} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='26' src={photo18} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='27' src={photo19} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='28' src={photo25} fluid onClick={this.props.handleClick}></Image>
                </Col>
                <Col>
                    <Image alt='29' src={photo30} fluid onClick={this.props.handleClick}></Image>
                </Col>
            </Row>
        </Container>
    )
  }
}
