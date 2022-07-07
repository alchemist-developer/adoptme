import { Link } from 'react-router-dom';
import imgLogo from '../../assets/logo2.png'
import * as S from './styles';

interface Props{
  margin: string;
}

const Logo = ({margin}:Props) => {
  return (
    <S.StyledLink to={'/'} margin={margin}>
          <S.Img src={imgLogo}  />
    </S.StyledLink>

  );
}

export default Logo;