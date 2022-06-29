import { Fragment } from "react";
import { Container } from "react-bootstrap";
import FormPerfil from "../../FormPerfil";
import Header from "../../Header";
import * as S from './styles'

const Perfil = () => {
  return (
    <Fragment>
      <Header logo = 'center'/>
      <Container>
        <S.StylesH3>Perfil</S.StylesH3>
        <FormPerfil/>
      </Container>
    </Fragment>

  )
}

export default Perfil;