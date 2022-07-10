import arrowLeft from '../../assets/arrowLeft.png'
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
        <S.Img src= {arrowLeft} alt="" />
      </S.StyledLink>
    </S.Arrow>
  )
}

export default BackArrow;