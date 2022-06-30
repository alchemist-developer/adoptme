import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import FormPerfil from "../../FormPerfil";
import Header from "../../Header";
import { setDisplay, setLogo } from "../../store/Components";
import * as S from './styles'

const Perfil = () => {

  const dispatch = useDispatch()
  dispatch(setDisplay('none'))
  dispatch(setLogo('center'))

  return (
    <Fragment>
      <Header />
      <Container>
        <S.StylesH3>Perfil</S.StylesH3>
        <FormPerfil/>
      </Container>
    </Fragment>

  )
}

export default Perfil;