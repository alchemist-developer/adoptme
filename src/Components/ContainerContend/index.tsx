import { Fragment, ReactNode } from 'react';
import * as S from './styles';
import dog from '../../assets/gato1.jpg'

const ConatinerContend = ({children}:{children:ReactNode}) => {
  return (
    <S.StyledDiv>
      {children}
      
    </S.StyledDiv>    
  )
}

export default ConatinerContend;