import Logo from '../Logo';
import OptionMenu from '../OptionMenu';
import * as S from './styles';


const Header = () => {

  return(
    <S.StyledDiv>
      <Logo/>
      <OptionMenu/>
    </S.StyledDiv>

    )
}

export default Header;