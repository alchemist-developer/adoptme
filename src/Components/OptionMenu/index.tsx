import { ReactNode, useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

import userLogin from '../../assets/userLogin.png'
import collapse from '../../assets/collapse.png'
import * as S from './styles';

interface Props{
    user_name: string;
    children: ReactNode
}

const OptionMenu = (props:Props) => {

    const [open, setOpen] = useState(true)   

    return (
    <S.StyledTeste>
        <S.StyledButton onClick={()=> setOpen(!open)} open={open}>
            <S.StyledImg src= {collapse} />
        </S.StyledButton>
        <S.Option open={open}>

            <S.StyledDivClose>
                <S.StyledLink to={'/cadastro'}>
                    <S.StyledIcon src= {userLogin} alt="" />
                    {props.user_name}
                </S.StyledLink>
                <S.StyledButton onClick={()=> setOpen(!open)} open={true}>
                    <AiOutlineClose size={25}/>
                </S.StyledButton>               
            </S.StyledDivClose>

            <S.StyledDivLink>

            {props.children}

            </S.StyledDivLink>
        </S.Option>
    </S.StyledTeste>

  );
}

export default OptionMenu;