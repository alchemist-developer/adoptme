import { Carousel } from 'react-bootstrap';
import imgCat from '../../assets/gato2.jpg'
import './styles.css'

const CarouselTestemunho= () => {
    return(
        <Carousel className="carousel-body" controls = {false} indicators = {true}>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-100 carosuel-body"
              src={imgCat}
              alt="First slide"
            />
            <h4>Patricia Meireles</h4>
            <p>Encontramos o Max através da plataforma me.adota em um momento bem delicado de nossas vidas e encheu o ambiente de alegria e tudo ficou colorido de novo. Tivemos uma experiência muito bacana, encontramos o perfil do Max e instantaneamente sabia que ele deveria vir ficar com a nossa família. Sou muito grata por ter encontrado a plataforma, e a dona Márcia, antiga protetora do Max, o nosso xodó.</p>

          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
                className="d-block w-100 carosuel-body"
                src={imgCat}
                alt="First slide"
              />    
        
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselTestemunho;