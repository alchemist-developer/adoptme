import ButtonAdotar from '../ButtonAdotar';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import * as S from './styles';
import FormCadastro from '../Cadastro';
import FormPersonal from '../FormPersonal';
import Header from "../Header";
import Logo from "../Logo";
import dogTurtle from '../../assets/dogTurtle.gif'
import success from '../../assets/success.gif'
import errorCat from '../../assets/errorCat.gif'
import BackArrow from "../BackArrow";
import { useState } from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Modal } from 'react-bootstrap';
import { cadastroUsuario } from '../../service/user';
import { toast } from 'react-toastify'
import { User } from '../../types';
import OptionMenu from '../OptionMenu';
import LinkOptionMenu from '../LinkOptionMenu';
import searchHeartBlack from '../../assets/searchHeartBlack.png'
import handHeart from '../../assets/handHeart.png'
import { useNavigate } from 'react-router-dom';


const FormPerfil = () => {

  const navigate = useNavigate()

  const validationSchema = Yup.object({
    name_user: Yup.string().required('Por favor preencha com seu nome'),

    email: Yup.string().email('Por favor preencha com um email válido').required('Por favor preencha com seu email'),

    password: Yup.string().required('Por favor preencha com uma password').min(8, 'Sua password deve ter no mínimo 8 caracteres').max(12, 'Sua password deve ter no máximo 12 caracteres'),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais').required('Por favor preencha com uma password'),

    comments: Yup.string(),

    address: Yup.string().required('O endereço é obrigatório'),

    phone: Yup.string(),

    mobile: Yup.string().min(10,'Deve ter no mínimo 10 digitios').required('O telefone é obrigatório'),

    image: Yup.string().required('A imagem deve ser obrigatório'),
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
      whats: 'false',

    },
    validationSchema,
    onSubmit: async (values)=>{
      let data = new FormData()
      data.append('name_user', values.name_user)      
      data.append('password', values.password)      
      data.append('email', values.email)   
      data.append('image', values.image)

      if (values.comments) {       
        data.append('comments', values.comments)  
      }      
          
      if (values.phone) {
        data.append('phone', values.phone) 
      }

      data.append('address', values.address)     
      data.append('mobile', values.mobile)      
      data.append('whats', values.whats)
    
      setShow(true)
      setErro('Enviando dados...')
      setimagemModal(dogTurtle)  
      
      
      let response = await cadastroUsuario(data as unknown as User)
      
      if (response.user_id) {
        setShow(true)
        setErro('Conta criada com sucesso!')
        setimagemModal(success)
      }
      else{
        setShow(true)
        setimagemModal(errorCat)
        setErro(response)
      }  
    }
  })

  const [changePage, setChangePage] = useState(true)
  const [show, setShow] = useState(false)
  const [erro, setErro] = useState('')
  const [imagemModal, setimagemModal] = useState(dogTurtle)

  const advance = () => {
    if (formik.values.email && !formik.errors.confirmPassword) {
      setChangePage(false)
      toast.success("Para criar sua conta é necessário preencher os campos abaixo!", {
        position: toast.POSITION.TOP_CENTER
      });
       
    }
    else{
      toast.warn('Preencha todos os campos!')  
    }
  }

  const back = () => {
    if(changePage){
      console.log(changePage)
      return navigate('/')
    }
    return setChangePage(true)
  }

  return (
    <>
      <Header 
        display= {true} 
        logo="center" 
        background="rgba(255, 255, 255, 0.75)"
      >

        <BackArrow 
          display = {changePage ?'none' : 'center'} 
          url = '' 
          onclick = {()=>back()}
        />
        
        <Logo margin = {changePage ?'none' : 'center'}/>

        <OptionMenu user_name='login' >
        <LinkOptionMenu display = {true} rota="/queroadotar" icon= {searchHeartBlack} >
            Buscar um amigo
          </LinkOptionMenu>
          <LinkOptionMenu display = {true} rota="/login" icon= {handHeart} >
            Doar um amigo
          </LinkOptionMenu>
        </OptionMenu>

      </Header>

      <S.StyledForm 
        display = {changePage} 
        onSubmit = {formik.handleSubmit}
      >

        <FormCadastro display= {changePage} formik = {formik}/>

        <FormPersonal display= {!changePage} formik = {formik}/>

        <ButtonAdotar 
          display= {!changePage} 
          color='#1E1E1E' 
          type='submit'
        >
          Salvar Perfil ✔
        </ButtonAdotar>
    
        <S.DivButton>

          <ButtonAdotar 
            onclick={advance} 
            margin = {9} 
            display= {changePage} 
            color='#1E1E1E' 
            type='button'
          >
            Avançar 
          <FiLogIn/>
          </ButtonAdotar>
        </S.DivButton>

      <Modal centered show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{erro}</Modal.Title>
        </Modal.Header>
        <S.Modalbody>
            <S.Img src={imagemModal} />
        </S.Modalbody>
      </Modal>

      </S.StyledForm>
    </>

  )
}

export default FormPerfil;