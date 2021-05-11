import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import '../styles/GridView.css';

const GridView = (props) => {

    const wrapperFunction = (id)  =>  {
        props.setIndex(id)
        props.setView('carousel')
    }

    return (
        <div id="photo-container">
            {props.photos.map((photo) => <span key={photo.id}><Image fluid src={photo.src} onClick={() => wrapperFunction(photo.id)} /></span>)}
        </div>
    )
}

export default GridView;
