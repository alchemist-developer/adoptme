import BackArrow from '../BackArrow';
import Logo from '../Logo';
import OptionMenu from '../OptionMenu';
import * as S from './styles';

interface Props{
  logo: string;
}

const Header = ({logo}: Props) => {

  return(
    <S.StyledDiv position = {logo}>
      <BackArrow display = {logo}/>
      <Logo margin = {logo}/>
      <OptionMenu/>
    </S.StyledDiv>

    )
}

export default Header;