import banner from '../../assets/bannerCadastro.png'
import Inputs from '../Inputs'
import * as S from './styles'


interface Props{
  formik: any,
  display: boolean,
}

const FormCadastro = ({formik, display}: Props) => {

  return (
    <S.SytledDiv display={display}>
      <S.Img src= {banner} />
      <S.H1 className='cadastro'>Cadastre-se</S.H1>
      <S.P className='retornaLogin'>Já possui conta? <a href='/login'>Entre aqui</a></S.P>
      <S.DivInput display = {true}>
      <Inputs
          textLabel='Email'
          placeholder='Digite seu email'
          value = {formik.values.email}
          id = 'email'
          onchange={formik.handleChange}
          isinvalid = {formik.touched.email && !!formik.errors.email}
          isvalid = {formik.touched.email && !formik.errors.email}
          erros = {formik.errors.email} 
        />
      <Inputs
          textLabel='Senha'
          placeholder='Crie uma senha'
          value = {formik.values.password}
          typeInput='password'
          id = 'password'
          onchange={formik.handleChange}
          isinvalid = {formik.touched.password && !!formik.errors.password}
          isvalid = {formik.touched.password && !formik.errors.password}
          erros = {formik.errors.password} 
        />
      <Inputs
          textLabel='Repetir senha'
          placeholder='Digite a senha novamente'
          value = {formik.values.confirmPassword}
          id = 'confirmPassword'
          typeInput='password'
          onchange={formik.handleChange}
          isinvalid = {formik.touched.confirmPassword && !!formik.errors.confirmPassword}
          isvalid = {formik.touched.confirmPassword && !formik.errors.confirmPassword}
          erros = {formik.errors.confirmPassword} 
        />
      </S.DivInput>
    </S.SytledDiv>

  )
}

export default FormCadastro;