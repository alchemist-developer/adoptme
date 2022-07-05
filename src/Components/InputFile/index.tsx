import * as S from './styles';
import imgDefault from '../../assets/imgDefault.png'
import { Fragment, useState } from 'react';

interface Props{
  onchange: (e: any) => void;
  id: string;
  isvalid?: boolean;
  isinvalid?: boolean;
  erros?: any;
}

const InputFile = ({onchange, id, isvalid, isinvalid, erros}:Props) => {

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
          <S.InputText type="text" value = {teste} disabled/>
          <small> {erros} </small>
          <S.Input
            accept="image/png,image/jpeg,image/jpg"
            type = 'file'  
            id = {id}
            onChange={(e:any) => takeImage(e)} 
            value ={undefined}
            name = {id}
            isValid={isvalid}
            isInvalid={isinvalid}
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