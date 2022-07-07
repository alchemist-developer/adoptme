import ButtonAdotar from '../ButtonAdotar';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import * as S from './styles';
import FormPersonal from '../FormPersonal';
import { cadastroUsuario } from '../../service/user';
import { toast } from 'react-toastify'
import InputFile from '../InputFile';
import Inputs from '../Inputs';

const FormPerfil = () => {

  const validationSchema = Yup.object({
    name_user: Yup.string().required('Por favor preencha com seu nome'),

    password: Yup.string().required('Por favor preencha com uma senha').min(8, 'Sua senha deve ter no mínimo 8 caracteres').max(12, 'Sua senha deve ter no máximo 12 caracteres'),

    confirmPassword: Yup.string().oneOf([Yup.ref('senha'), null], 'As senhas não são iguais').required('Por favor preencha com uma senha'),

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
    
      
      let response = await cadastroUsuario(data)
      
      if (response.user_id) {

      }
      else{

      }  
    }
  })


  const advance = () => {
    if (formik.values.name_user && !formik.errors.confirmPassword) {
        toast.success("Agora preencha o seu perfil!", {
            position: toast.POSITION.TOP_CENTER
        });
       
    }
    else{
      toast.warn('Preencha todos os campos!')  
    }
  }

  let onchange = (e: any) => {        
    const files = e.target.files[0];        
    formik.setFieldValue("image", files);
}

  return (
    <>
        <S.StyledForm 
            onSubmit = {formik.handleSubmit}
        >

        <h3>Editar Perfil</h3>
        <InputFile 
            onchange={onchange}
            id="image"
            erros = {formik.errors.image}  
        />

        <Inputs
            textLabel='Nome'
            typeInput='text'
            placeholder='Digite seu nome'
            value = {formik.values.name_user}
            id = 'name_user'
            onchange={formik.handleChange}
            isinvalid = {formik.touched.name_user && !!formik.errors.name_user}
            isvalid = {formik.touched.name_user && !formik.errors.name_user}
            erros = {formik.errors.name_user}   
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

        <Inputs
            textLabel='Sobre (Opocional)'
            as='textarea'
            placeholder='Insira uma informação'
            value = {formik.values.comments}
            id = 'comments'
            onchange={formik.handleChange}
            isinvalid = {formik.touched.comments && !!formik.errors.comments}
            isvalid = {formik.touched.comments && !formik.errors.comments}
            erros = {formik.errors.comments} 
        />

        <Inputs
            textLabel='Endereço'
            typeInput='text'
            placeholder='Digite um endereço'
            value = {formik.values.address}
            id = 'address'
            onchange={formik.handleChange}
            isinvalid = {formik.touched.address && !!formik.errors.address}
            isvalid = {formik.touched.address && !formik.errors.address}
            erros = {formik.errors.address}   
        />

        <Inputs
            textLabel='Telefone Fixo (Opcional)'
            typeInput='tel'
            placeholder='(99) 9999-9999'
            value = {formik.values.phone}
            id = 'phone'
            onchange={formik.handleChange}
            pattern="[0-9]{10}"  
        />

        <Inputs
            textLabel='Telefone Celular'
            typeInput='tel'
            placeholder='(99) 9999-9999'
            value = {formik.values.mobile}
            id = 'mobile'
            onchange={formik.handleChange}
            isinvalid = {formik.touched.mobile && !!formik.errors.mobile}
            isvalid = {formik.touched.mobile && !formik.errors.mobile}
            erros = {formik.errors.mobile}   
        />

        <S.Check 
            type="checkbox"
            name="whats"
            label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
            value = 'true'
            onChange={formik.handleChange} 
        />

            <ButtonAdotar 
            display= {true} 
            color='#1E1E1E' 
            type='submit'
            >

            Salvar Perfil ✔

            </ButtonAdotar>

        </S.StyledForm>
    </>

  )
}

export default FormPerfil;