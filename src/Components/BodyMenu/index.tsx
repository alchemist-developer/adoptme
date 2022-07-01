import { Fragment } from 'react';
import ButtonAdotar from '../ButtonAdotar';
import CarouselBody from '../CarouselBody';
import ConatinerContend from '../ContainerContend';
import * as S from './styles';

const BodyMenu = () => {
  return (
    <Fragment>
        <S.SytledContainer>
            <ButtonAdotar color='#1E1E1E'>
                Quero Adotar
            </ButtonAdotar>

            <ButtonAdotar color='white'>
                Quero Doar
            </ButtonAdotar>
        </S.SytledContainer>

        <S.SytledContainer>
            <ConatinerContend>
                <S.H4 color='#ED7957'>Adote, não compre.</S.H4>
                <h2>Adoçao responável</h2>
            </ConatinerContend>
        </S.SytledContainer>
        
        <S.SytledContainer>
            <ConatinerContend>
                <S.H4 color='#6079d1'>me.adota</S.H4>
                <S.A>Adoçao responável</S.A>
            </ConatinerContend>
        </S.SytledContainer>

        <S.SytledContainer>
            <S.H4 color='#77B291'>Aumigos</S.H4>
            <h2>Testemunhos</h2>
            <CarouselBody/>
        </S.SytledContainer>

        <S.SytledContainer>
            <S.H4 color='#FAD673'>Na plataforma</S.H4>
            <h2>Ongs Parceiras</h2>
            <CarouselBody/>
        </S.SytledContainer>


    </Fragment>

  );
}

export default BodyMenu;