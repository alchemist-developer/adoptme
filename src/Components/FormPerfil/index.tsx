import ButtonAdotar from '../ButtonAdotar';
import Inputs from '../Inputs';
import { useFormik } from 'formik';
import * as S from './styles';

const FormPerfil = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      description: '',
      address: '',
      phone: '',
      cellphone: '',
      check: '',
    },
    onSubmit: (values)=>{
      console.log(values);
      
    }
  })

  return (
    <S.StyledForm onSubmit = {formik.handleSubmit} >
        <Inputs
          textLabel='Adicione uma imagem'
          typeInput='file'
          id= 'image'
          value=''
          onchange={formik.handleChange}
        />
        <Inputs
          textLabel='Adicione uma descrição'
          as='textarea'
          value = {formik.values.description}
          id = 'description'
          onchange={formik.handleChange}  
        />
        <Inputs
          textLabel='Nome'
          typeInput='text'
          value = {formik.values.name}
          id = 'name'
          onchange={formik.handleChange}  
        />
        <Inputs
          textLabel='E-email'
          typeInput='email'
          value = {formik.values.email}
          id = 'email'
          onchange={formik.handleChange}  
        />
        <Inputs
          textLabel='Endereço'
          typeInput='text'
          value = {formik.values.address}
          id = 'address'
          onchange={formik.handleChange}  
        />
        <Inputs
          textLabel='Telefone (opcional)'
          typeInput='tel'
          value = {formik.values.phone}
          id = 'phone'
          onchange={formik.handleChange}
          pattern="[0-9]{10}"  
        />
        <Inputs
          textLabel='Telefone Celular'
          typeInput='tel'
          value = {formik.values.cellphone}
          id = 'cellphone'
          onchange={formik.handleChange}  
        />

        <S.Check 
          type="checkbox"
          name="check"
          label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
          value = 'true'
          onChange={formik.handleChange} 
        />


        <ButtonAdotar color='green' type='submit'>
          Salvar informações
        </ButtonAdotar>
    </S.StyledForm>
  )
}

export default FormPerfil;