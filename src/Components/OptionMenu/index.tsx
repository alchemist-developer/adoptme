import { ReactNode, useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
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
        <S.ScreenOption onClick={()=> setOpen(!open)}  open={open}></S.ScreenOption>
        <S.Option open={open}>

            <S.StyledDivClose>
                <S.StyledLink 
                    display='flex'
                    to={ props.user_name == 'login' ? 
                        '/login' :
                        '/'
                        }
                    >
                    <S.StyledIcon src= {userLogin} alt="" />
                    {props.user_name}
                </S.StyledLink>
                <S.StyledButtonX onClick={()=> setOpen(!open)}>
                    <AiOutlineClose size={20}/>
                </S.StyledButtonX>               
            </S.StyledDivClose>

            <S.StyledDivLink>

            {props.children}

            </S.StyledDivLink>
        </S.Option>
    </S.StyledTeste>

  );
}

export default OptionMenu;