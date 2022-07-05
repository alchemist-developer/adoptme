import imgLogo from '../../assets/logo2.png'
import * as S from './styles';

interface Props{
  margin: string;
}

const Logo = ({margin}:Props) => {
  return (
    <S.Img src={imgLogo} margin={margin} />
  );
}

export default Logo;