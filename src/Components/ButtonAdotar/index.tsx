import { ReactNode } from 'react';
import * as S from './styles';

interface Prosp{
  children: ReactNode;
  color: string
}

const ButtonAdotar = ({children, color}:Prosp) => {
  return (
    <S.Button color ={color} >
        {children}
    </S.Button>
  )
}

export default ButtonAdotar;