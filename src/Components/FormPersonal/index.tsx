import { Fragment } from 'react';
import InputFile from '../InputFile';
import Inputs from '../Inputs';
import * as S from './styles';

interface Props{
    formik: any;
    display: boolean 
}

const FormPersonal = (props: Props) => {

    let onchange = (e: any) => {        
        const files = e.target.files[0];        
        props.formik.setFieldValue("image", files);
    }

  return (
    <S.StyledDiv display = {props.display}>
        <h3>Perfil</h3>
        <InputFile 
            onchange={onchange}
            id="image"
            erros = {props.formik.errors.image}  
        />

        <Inputs
            textLabel='Nome'
            typeInput='text'
            placeholder='Digite seu nome'
            value = {props.formik.values.name_user}
            id = 'name_user'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.name_user && !!props.formik.errors.name_user}
            isvalid = {props.formik.touched.name_user && !props.formik.errors.name_user}
            erros = {props.formik.errors.name_user}   
        />

        <Inputs
            textLabel='Sobre (Opocional)'
            as='textarea'
            placeholder='Insira uma informação'
            value = {props.formik.values.comments}
            id = 'comments'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.comments && !!props.formik.errors.comments}
            isvalid = {props.formik.touched.comments && !props.formik.errors.comments}
            erros = {props.formik.errors.comments} 
        />

        <Inputs
            textLabel='Endereço'
            typeInput='text'
            placeholder='Digite um endereço'
            value = {props.formik.values.address}
            id = 'address'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.address && !!props.formik.errors.address}
            isvalid = {props.formik.touched.address && !props.formik.errors.address}
            erros = {props.formik.errors.address}   
        />

        <Inputs
            textLabel='Telefone Fixo (Opcional)'
            typeInput='tel'
            placeholder='(99) 9999-9999'
            value = {props.formik.values.phone}
            id = 'phone'
            onchange={props.formik.handleChange}
            pattern="[0-9]{10}"  
        />

        <Inputs
            textLabel='Telefone Celular'
            typeInput='tel'
            placeholder='(99) 9999-9999'
            value = {props.formik.values.mobile}
            id = 'mobile'
            onchange={props.formik.handleChange}
            isinvalid = {props.formik.touched.mobile && !!props.formik.errors.mobile}
            isvalid = {props.formik.touched.mobile && !props.formik.errors.mobile}
            erros = {props.formik.errors.mobile}   
        />

        <S.Check 
            type="checkbox"
            name="whats"
            label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
            value = 'true'
            onChange={props.formik.handleChange} 
        />
    </S.StyledDiv>
  )
}

export default FormPersonal;