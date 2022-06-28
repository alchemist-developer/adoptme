import { Carousel } from 'react-bootstrap';
import imgCat from '../assets/img/gato2.jpg'

const CarouselBody= () => {
    return(
        <Carousel prevLabel = 'null' controls = {true} indicators = {false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgCat}
              alt="First slide"
            />
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

          </Carousel.Item>
          <Carousel.Item>
            <img
                className="d-block w-100"
                src={imgCat}
                alt="First slide"
              />    
        
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselBody;