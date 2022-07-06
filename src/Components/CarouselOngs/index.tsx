import { Carousel } from 'react-bootstrap';
import imgCat from '../../assets/gato2.jpg'
import './styles.css'

const CarouselOngs= () => {
    return(
        <Carousel className="carousel-body-ong" controls = {false} indicators = {true}>
          <Carousel.Item className="carouselItemOng">
            <img
              className="d-block w-100 carosuel-body"
              src={imgCat}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item className="carouselItemOng">
          <img
              className="d-block w-100 carosuel-body"
              src={imgCat}
              alt="First slide"
            />
            
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselOngs;