import { ReactNode } from 'react';
import userProfile from '../../assets/userProfile.png'
import * as S from './styles';

interface Props{
    children: ReactNode,
    icon: string,
    rota: string
    display?: boolean
    onclick?: () => void
}

const LinkOptionMenu = (props: Props) => {
  return (
    <S.StyledLink onClick={props.onclick} display = {props.display} to={props.rota}  margin = '8%' >
        <S.StyledIcon src= {props.icon} alt="" />
        {props.children}
    </S.StyledLink>

  )
}

export default LinkOptionMenu;