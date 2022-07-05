import ButtonAdotar from '../ButtonAdotar';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import * as S from './styles';
import FormCadastro from '../Cadastro';
import FormPersonal from '../FormPersonal';
import Header from "../Header";
import Logo from "../Logo";
import BackArrow from "../BackArrow";
import OptionMenu from "../OptionMenu";
import { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Modal } from 'react-bootstrap';

const FormPerfil = () => {

  const validationSchema = Yup.object({
    name_user: Yup.string().required('Por favor preencha com seu nome'),

    email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),

    password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais').required('Por favor preencha com uma password'),

    comments: Yup.string(),

    address: Yup.string().required('O endereço é obrigatório'),

    phone: Yup.string(),

    mobile: Yup.string().min(10,'Deve ter no mínimo 10 digitios').required('O telefone é obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      name_user: '',
      password: '',
      confirmPassword: '',
      email: '',
      image: '',
      comments: '',
      address: '',
      phone: '',
      mobile: '',
      whats: '',

    },
    validationSchema,
    onSubmit: (values)=>{
      console.log(values);
      let data = new FormData()
      data.append('name_user', values.name_user)      
      data.append('password', values.password)      
      data.append('email', values.email)   
      data.append('image', values.image)      
      data.append('comments', values.comments)      
      data.append('address', values.address)      
      data.append('phone', values.phone)      
      data.append('mobile', values.mobile)      
      data.append('whats', values.whats)
            
      setShow(true)     
    }
  })

  const [changePage, setChangePage] = useState(true)
  const [show, setShow] = useState(false)

  return (
    <>
      <Header display= {!changePage} logo="center" background="rgba(255, 255, 255, 0.75)">
        <BackArrow display = {'center'} url = '' onclick = {()=>setChangePage(true)}/>
        <Logo margin = {'center'}/>
        <OptionMenu displayProfile="none"/>
      </Header>
      <S.StyledForm display = {changePage} onSubmit = {formik.handleSubmit}>

        <FormCadastro display= {changePage} formik = {formik} />

        <FormPersonal display= {!changePage} formik = {formik} />

        <ButtonAdotar display= {!changePage} color='#1E1E1E' type='submit'>
          Salvar Perfil ✔
        </ButtonAdotar>

        <S.DivButton>
          <ButtonAdotar onclick={()=>setChangePage(!changePage)} margin = {9} display= {changePage} color='#1E1E1E' type='button'>
            Avançar <FiLogIn/>
          </ButtonAdotar>
        </S.DivButton>

      <Modal centered show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Conta criada com sucesso!</Modal.Title>
        </Modal.Header>
      </Modal>

      </S.StyledForm>
    </>

  )
}

export default FormPerfil;