import { ReactNode } from 'react';
import * as S from './styles';

interface Props{
  children: ReactNode;
  logo: string
  background: string
}

const Header = ({children, logo, background}:Props) => {

  return(
    <S.StyledDiv position = {logo} background = {background}>
      {children}
    </S.StyledDiv>

    )
}

export default Header;