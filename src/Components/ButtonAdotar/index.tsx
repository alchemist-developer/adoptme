import { ReactNode } from 'react';
import * as S from './styles';

interface Prosp{
  children: ReactNode;
  color: string
  type?: string | any;
}

const ButtonAdotar = ({children, color, type}:Prosp) => {
  return (
    <S.Button color ={color} type ={type} >
        {children}
    </S.Button>
  )
}

export default ButtonAdotar;