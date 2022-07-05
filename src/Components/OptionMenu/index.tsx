import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import collapse from '../../assets/collapse.png'
import * as S from './styles';

const OptionMenu = ({displayProfile}:{displayProfile:string}) => {

    const [open, setOpen] = useState(true)   

  return (
    <S.StyledTeste>
        <S.StyledButton onClick={()=> setOpen(!open)} open={open}>
            <S.StyledImg src= {collapse} />
        </S.StyledButton>
        <S.Option open={open}>
            <S.StyledDivClose>
                <div>
                    <BsPersonCircle/> teste
                </div>
                <S.StyledButton onClick={()=> setOpen(!open)} open={true}>
                    <AiOutlineClose size={25}/>
                </S.StyledButton>               
            </S.StyledDivClose>
            <S.StyledDivLink>
                <S.StyledLink to={'/userprofile'} display =  {displayProfile}>
                    Editar Perfil
                </S.StyledLink>

                <S.StyledLink to={'/'}>
                    item
                </S.StyledLink>
                <S.StyledLink to={'/'}>
                    item
                </S.StyledLink>
            </S.StyledDivLink>
        </S.Option>
    </S.StyledTeste>

  );
}

export default OptionMenu;