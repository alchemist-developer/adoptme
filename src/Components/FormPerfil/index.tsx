import ButtonAdotar from '../ButtonAdotar';
import Inputs from '../Inputs';
import * as S from './styles';

const FormPerfil = () => {
  return (
    <S.StyledForm>
        <Inputs
          textLabel='Adicione uma imagem'
          typeInput='file'
        />
        <Inputs
          textLabel='Adicione uma descrição'
          as='textArea'  
        />
        <Inputs
          textLabel='Nome'
          typeInput='text'
        />
        <Inputs
          textLabel='E-email'
          typeInput='text'
        />
        <Inputs
          textLabel='Endereço'
          typeInput='text'
        />
        <Inputs
          textLabel='Telefone (opcional)'
          typeInput='text'
        />
        <Inputs
          textLabel='Telefone Celular'
          typeInput='text'
        />

        <S.Check 
          type="checkbox"
          id="custom-switch"
          label="Possuo conta no Whatsapp com esse número e aceito receber mensagens de pessoas interessadas através dele."
        />


        <ButtonAdotar color='green' type='submit'>
          Salvar informações
        </ButtonAdotar>
    </S.StyledForm>
  )
}

export default FormPerfil;