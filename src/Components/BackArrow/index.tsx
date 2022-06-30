import {AiOutlineArrowLeft} from 'react-icons/ai'
import * as S from './styles';

interface Props{
  display: string;
}

const BackArrow = ({display}: Props) => {
  return (
    <S.Arrow display={display} >
      <S.StyledLink to={'/'}>
        <AiOutlineArrowLeft size={25}/>
      </S.StyledLink>
    </S.Arrow>
  )
}

export default BackArrow;