import { ReactNode } from 'react';
import * as S from './styles';

interface Props{
  children: ReactNode;
  logo: string
  background: string
  display: boolean
}

const Header = (props:Props) => {

  return(
    <S.StyledDiv display = {props.display} position = {props.logo} background = {props.background}>
      {props.children}
    </S.StyledDiv>

    )
}

export default Header;