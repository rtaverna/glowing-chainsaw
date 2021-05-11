import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CarouselView.css';

const CarouselView = (props) => {
    const [index, setIndex] = useState(props.initialIndex);
    const photos = props.photos;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
            {photos.map((photo) => <Carousel.Item key={photo.id}>
                                        <img src={photo.src}></img>
                                        <Carousel.Caption>
                                            <h3>{photo.location}</h3>
                                            <p>{photo.film}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                        )
            }
        </Carousel>
    )
}

export default CarouselView;

