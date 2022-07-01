import * as S from './styles';
import cat from '../assets/img/gato2.jpg'

const CardAdmin = () => {
  return (
    <S.StyledDiv>
        <S.Img src= {cat} />
    </S.StyledDiv>
  );
}

export default CardAdmin;