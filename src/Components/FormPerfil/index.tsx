import ButtonAdotar from '../ButtonAdotar';
import Inputs from '../Inputs';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import * as S from './styles';
import InputFile from '../InputFile';

const FormPerfil = () => {

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email valido').required('O email é obrigatório'),
    description: Yup.string(),
    address: Yup.string().required('O endereço é obrigatório'),
    phone: Yup.string(),
    cellphone: Yup.string().min(10,'Deve ter no mínimo 10 digitios').required('O telefone é obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      image: '',
      description: '',
      address: '',
      phone: '',
      cellphone: '',
      check: '',
    },
    validationSchema,
    onSubmit: (values)=>{
      console.log(values);
      
    }
  })

  return (
    <S.StyledForm onSubmit = {formik.handleSubmit}>

      <InputFile/>

      <Inputs
        textLabel='Adicione uma descrição '
        as='textarea'
        value = {formik.values.description}
        id = 'description'
        onchange={formik.handleChange}
        isinvalid = {formik.touched.description && !!formik.errors.description}
        isvalid = {formik.touched.description && !formik.errors.description}
        erros = {formik.errors.description} 
      />



      <Inputs
        textLabel='Nome'
        typeInput='text'
        value = {formik.values.name}
        id = 'name'
        onchange={formik.handleChange}
        isinvalid = {formik.touched.name && !!formik.errors.name}
        isvalid = {formik.touched.name && !formik.errors.name}
        erros = {formik.errors.name} 

      />
      <Inputs
        textLabel='E-email'
        typeInput='email'
        value = {formik.values.email}
        id = 'email'
        onchange={formik.handleChange}
        isinvalid = {formik.touched.email && !!formik.errors.email}
        isvalid = {formik.touched.email && !formik.errors.email}
        erros = {formik.errors.email}   
      />
      <Inputs
        textLabel='Endereço'
        typeInput='text'
        value = {formik.values.address}
        id = 'address'
        onchange={formik.handleChange}
        isinvalid = {formik.touched.address && !!formik.errors.address}
        isvalid = {formik.touched.address && !formik.errors.address}
        erros = {formik.errors.address}   
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
        isinvalid = {formik.touched.cellphone && !!formik.errors.cellphone}
        isvalid = {formik.touched.cellphone && !formik.errors.cellphone}
        erros = {formik.errors.cellphone}   
      />

      <S.Check 
        type="checkbox"
        name="check"
        label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
        value = 'true'
        onChange={formik.handleChange} 
      />


      <ButtonAdotar color='#1E1E1E' type='submit'>
        Salvar Perfil ✔
      </ButtonAdotar>
    </S.StyledForm>
  )
}

export default FormPerfil;