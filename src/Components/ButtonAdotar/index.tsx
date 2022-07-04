import { ReactNode } from 'react';
import * as S from './styles';

interface Prosp{
  children: ReactNode;
  color: string
  type?: string | any;
  display: boolean;
  margin?: number;
  onclick?: ()=>void;
}

const ButtonAdotar = ({children, color, type, display, margin, onclick}:Prosp) => {
  return (
    <S.Button onClick={onclick} margin={margin} color ={color} type ={type} display ={display}>
        {children}
    </S.Button>
  )
}

export default ButtonAdotar;