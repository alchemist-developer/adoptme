import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs'
import collapse from '../assets/img/collapse.png'
import * as S from './styles';

const OptionMenu = () => {

    const [open, setOpen] = useState(true)

  return (
    <S.StyledTeste>
        <S.StyledButton onClick={()=> setOpen(!open)} open={open} width = {100}>
            <S.StyledImg src= {collapse} />
        </S.StyledButton>
        <S.Option open={open}>
            <S.StyledDivClose>
                <div>
                    <BsPersonCircle/> teste
                </div>
                <S.StyledButton onClick={()=> setOpen(!open)} open={true} width = {10}>
                    X
                </S.StyledButton>               
            </S.StyledDivClose>
            <S.StyledDivLink>
                <S.StyledA>item</S.StyledA>
                <S.StyledA>item</S.StyledA>
                <S.StyledA>item</S.StyledA>
            </S.StyledDivLink>
        </S.Option>
    </S.StyledTeste>

  );
}

export default OptionMenu;