import { Link } from 'react-router-dom';
import logo from '../../assets/logoFooter.png';
import * as S from './styles';

const Footer = () => {
  return (
    <S.StyledContainer>
      <Link to={'/userprofile'}>
        <S.Img src = {logo}/>
      </Link>        
        <S.StyledLink to={'/'}>
          <S.P>
            me.adota
          </S.P>          
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Quem somos
          </S.P>          
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Transparência com você
          </S.P>
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Testemunho
          </S.P>          
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Adotar um amigo
          </S.P>
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Doar um pet
          </S.P>
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Login
          </S.P>          
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Cadastro
          </S.P>
        </S.StyledLink>

        <S.StyledLink to = {'/'}>
          <S.P>
            Voltar ao topo
          </S.P>
        </S.StyledLink>

        <S.RightReserved>
          me.adota todos os direitos reservados 
        </S.RightReserved>
    </S.StyledContainer>
  )
}

export default Footer;