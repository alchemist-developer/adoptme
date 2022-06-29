import { Carousel } from 'react-bootstrap';
import imgCat from '../assets/img/gato2.jpg'
import './styles.css'

const CarouselHome= () => {
    return(
        <Carousel controls = {false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCat}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCat}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCat}
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselHome;