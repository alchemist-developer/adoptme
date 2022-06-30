import { ReactNode } from 'react';
import * as S from './styles';

interface Props{
  children: ReactNode;
  logo: string
}

const Header = ({children, logo}:Props) => {

  return(
    <S.StyledDiv position = {logo}>
      {children}
    </S.StyledDiv>

    )
}

export default Header;