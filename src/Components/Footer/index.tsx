import logo from '../assets/img/logo1.svg';
import * as S from './styles';

const Footer = () => {
  return (
    <S.StyledContainer>
        <S.Img src = {logo}/>
        <h4>me.adota</h4>
        <p>Parágrafo</p>
        <p>Parágrafo</p>
        <p>Parágrafo</p>
        <p>Parágrafo</p>
        <p>Parágrafo</p>
        <p>Parágrafo</p>
    </S.StyledContainer>
  )
}

export default Footer;