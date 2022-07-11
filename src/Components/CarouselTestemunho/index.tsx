import { Carousel } from 'react-bootstrap';
import './styles.css'

import carrosselTestemunho1 from '../../assets/carrossel-testemunho-1.png'
import carrosselTestemunho2 from '../../assets/carrossel-testemunho-2.png'

const CarouselTestemunho= () => {
    return(
        <Carousel className="carousel-body" controls = {false} indicators = {true}>
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-100 carosuel-body-testemunho"
              src={carrosselTestemunho1}
              alt="First slide"
            />
            <h4 className='text'>Patricia Meireles</h4>
            <p className='text' >Essa fofura animal parece que estava só nos esperando pra formarmos uma família completa. Encontramos a Mia, através da plataforma me.adota, e depois de várias conversas com os protetores dela, Seu Januário e sua filha Michele, nós finalmente a levamos para casa. Hoje já está totalmente habituada a rotina da família, se sente confortável até pra fazer travessuras.</p>

          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <img
                className="d-block w-100 carosuel-body-testemunho"
                src={carrosselTestemunho2}
                alt="First slide"
              />    
              <h4 className='text'>Carlos Gabriel</h4>
              <p className='text'>Pai de pet, real oficial! Agora minha trilha sonora são miados dessas duas tagarelas que eu amo muito. Já fazem 3 meses que a Lara e a Lua estão comigo, encontrei o protetor delas, o Maurício do Projeto Patinhas, através da plataforma me.adota, foi super de boa... o processo de adoção e adaptação também, tudo supervisionado pelo projeto voluntário. Tô muito feliz!</p>
            
          </Carousel.Item>
      </Carousel>
  );
}

export default CarouselTestemunho;