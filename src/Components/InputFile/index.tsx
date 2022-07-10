import * as S from './styles';
import imgDefault from '../../assets/imgDefault.png'
import { Fragment, useState } from 'react';

interface Props{
  onchange: (e: any) => void;
  id: string;
  erros?: any;
  isvalid?: boolean;
  isinvalid?: boolean;
}

const InputFile = ({onchange, id, erros, isvalid, isinvalid}:Props) => {

    const [files, setFiles] = useState(imgDefault);
    const [teste, setTeste] = useState('');

    const takeImage = (e:any) => {
      onchange(e)
      setFiles(URL.createObjectURL(e.target.files[0]));
      setTeste(e.target.files[0].name);
    }    

  return (
    <Fragment>
      <S.StyledP>Adicione uma imagem para seu perfil</S.StyledP>
      <S.StyledDiv>          
        <S.Img src={files}/>
        <S.StyledDivInput>
        <S.Small> {erros} </S.Small>
          <S.InputText 
            type="text"
            disabled 
            value = {teste} 
            isValid={isvalid}
            isInvalid={isinvalid}
            color = {erros}
          />

          <S.Input
            accept="image/png,image/jpeg,image/jpg"
            type = 'file'  
            id = {id}
            onChange={(e:any) => takeImage(e)} 
            value ={undefined}
            name = {id}

          />

          <S.StyledLabel htmlFor='image' >
            Adcione uma imagem
          </S.StyledLabel>
        </S.StyledDivInput>
      </S.StyledDiv>
    </Fragment>


  )
}

export default InputFile;