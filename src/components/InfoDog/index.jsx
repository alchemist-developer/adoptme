import React from 'react';
import * as S from './styled';
// import { Container } from './styles';
import { useSate } from 'react';

const InfoDog = ({children, active, closeMenu}) => {
  return (
    <>
    <S.InfoContainer active={active}>
        {children}
    </S.InfoContainer>
    </>
  )
}

export default InfoDog;