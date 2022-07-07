import { ReactNode } from 'react';
import userProfile from '../../assets/userProfile.png'
import * as S from './styles';

interface Props{
    children: ReactNode,
    icon: string,
    rota: string
}

const LinkOptionMenu = (props: Props) => {
  return (
    <S.StyledLink to={props.rota}  margin = '8%' >
        <S.StyledIcon src= {props.icon} alt="" />
        {props.children}
    </S.StyledLink>

  )
}

export default LinkOptionMenu;