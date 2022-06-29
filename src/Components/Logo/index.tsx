import React from 'react';
import imgLogo from '../assets/img/logo1.svg'
import * as S from './styles';

interface Props{
  margin: string;
}

const Logo = ({margin}:Props) => {
  return (
    <S.Img src={imgLogo} margin={margin} />
  );
}

export default Logo;