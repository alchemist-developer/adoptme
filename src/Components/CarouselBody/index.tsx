import { Carousel } from 'react-bootstrap';
import imgCat from '../../assets/gato2.jpg'
import './styles.css'

const CarouselBody= () => {
    return(
        <Carousel className="carousel-body" controls = {false} indicators = {true}>
          <Carousel.Item >
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