import { Fragment } from 'react';
import InputFile from '../InputFile';
import Inputs from '../Inputs';
import * as S from './styles';

interface Props{
    formik: any;
    display: boolean 
}

const FormPersonal = (props: Props) => {
  return (
    <S.StyledDiv display = {props.display}>
        <h3>Perfil</h3>
        <InputFile 
            onchange={props.formik.handleChange}
            value={props.formik.values.image}
            id="image"
        />

        <Inputs
            textLabel='Digite seu nome'
            typeInput='text'
            value = {props.formik.values.name_user}
            id = 'name_user'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.name_user && !!props.formik.errors.name_user}
            isvalid = {props.formik.touched.name_user && !props.formik.errors.name_user}
            erros = {props.formik.errors.name_user}   
        />

        <Inputs
            textLabel='Adicione uma descrição '
            as='textarea'
            value = {props.formik.values.description}
            id = 'description'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.description && !!props.formik.errors.description}
            isvalid = {props.formik.touched.description && !props.formik.errors.description}
            erros = {props.formik.errors.description} 
        />

        <Inputs
            textLabel='Endereço'
            typeInput='text'
            value = {props.formik.values.address}
            id = 'address'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.address && !!props.formik.errors.address}
            isvalid = {props.formik.touched.address && !props.formik.errors.address}
            erros = {props.formik.errors.address}   
        />

        <Inputs
            textLabel='Telefone (opcional)'
            typeInput='tel'
            value = {props.formik.values.phone}
            id = 'phone'
            onchange={props.formik.handleChange}
            pattern="[0-9]{10}"  
        />

        <Inputs
            textLabel='Telefone Celular'
            typeInput='tel'
            value = {props.formik.values.cellphone}
            id = 'cellphone'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.cellphone && !!props.formik.errors.cellphone}
            isvalid = {props.formik.touched.cellphone && !props.formik.errors.cellphone}
            erros = {props.formik.errors.cellphone}   
        />

        <S.Check 
            type="checkbox"
            name="check"
            label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
            value = 'true'
            onChange={props.formik.handleChange} 
        />
    </S.StyledDiv>
  )
}

export default FormPersonal;