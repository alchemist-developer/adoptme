import { Fragment } from 'react';
import ButtonAdotar from '../ButtonAdotar';
import CarouselBody from '../CarouselBody';
import ConatinerContend from '../ContainerContend';
import * as S from './styles';

const BodyMenu = () => {
  return (
    <Fragment>
        <S.SytledContainer>
            <ButtonAdotar color='red'>
                Quero Adotar
            </ButtonAdotar>

            <ButtonAdotar color='green'>
                Quero Doar
            </ButtonAdotar>
        </S.SytledContainer>

        <S.SytledContainer>
            <ConatinerContend>
                <h4>Adote, não compre.</h4>
                <h2>Adoçao responável</h2>
            </ConatinerContend>
        </S.SytledContainer>
        
        <S.SytledContainer>
            <ConatinerContend>
                <h4>me.adota</h4>
                <S.A>Adoçao responável</S.A>
            </ConatinerContend>
        </S.SytledContainer>

        <S.SytledContainer>
            <h4>Aumigos</h4>
            <h2>Testemunhos</h2>
            <CarouselBody/>
        </S.SytledContainer>

        <S.SytledContainer>
            <h4>Na plataforma</h4>
            <h2>Ongs Parceiras</h2>
            <CarouselBody/>
        </S.SytledContainer>


    </Fragment>

  );
}

export default BodyMenu;