import { Carousel } from 'react-bootstrap';
import './styles.css'

import carrosselOng1 from '../../assets/carrosselOng1.png'
import carrosselOng2 from '../../assets/carrosselOng2.png'

const CarouselOngs= () => {
    return(
        <Carousel className="carousel-body-ong" controls = {false} indicators = {true}>
          <Carousel.Item className="carouselItemOng">
            <img
              className="d-block w-100 carosuel-body"
              src={carrosselOng1}
              alt="Primeiro slide"
            />

          </Carousel.Item>
          <Carousel.Item className="carouselItemOng">
          <img
              className="d-block w-100 carosuel-body"
              src={carrosselOng2}
              alt="Segundo slide"
            />
            
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselOngs;