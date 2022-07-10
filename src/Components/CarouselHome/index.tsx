import { Carousel } from 'react-bootstrap';
import './styles.css'
import React from 'react'

import imgCarrossel1 from '../../assets/img-carrossel-1.png'
import imgCarrossel2 from '../../assets/img-carrossel-2.png'
import imgCarrossel3 from '../../assets/img-carrossel-3.png'

const CarouselHome= () => {
    return(
        <Carousel controls = {false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCarrossel2}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCarrossel1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCarrossel3}
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselHome;