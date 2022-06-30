import { useSelector } from 'react-redux';
import BackArrow from '../BackArrow';
import Logo from '../Logo';
import OptionMenu from '../OptionMenu';
import { RootState } from '../store';
import * as S from './styles';


const Header = () => {

  const logo = useSelector((state:RootState) => state.componentSlice.logo)

  return(
    <S.StyledDiv position = {logo}>
      <BackArrow display = {logo}/>
      <Logo margin = {logo}/>
      <OptionMenu/>
    </S.StyledDiv>

    )
}

export default Header;