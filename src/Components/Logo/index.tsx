import React from 'react';
import imgLogo from '../assets/img/logo1.svg'
import * as S from './styles';

const Logo: React.FC = () => {
  return (
    <S.Img src={imgLogo} />
  );
}

export default Logo;