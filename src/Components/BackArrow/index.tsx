import {AiOutlineArrowLeft} from 'react-icons/ai'
import * as S from './styles';

interface Props{
  display: string;
  url?: string | any;
  onclick: () => void;
}

const BackArrow = ({display, url, onclick}: Props) => {
  return (
    <S.Arrow display={display} onClick = {onclick}>
      <S.StyledLink to={url}>
        <AiOutlineArrowLeft size={25}/>
      </S.StyledLink>
    </S.Arrow>
  )
}

export default BackArrow;