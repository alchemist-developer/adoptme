import * as S from './styles';
import imgDefault from '../assets/img/imgDefault.png'
import { FormEvent, Fragment, useState } from 'react';


const InputFile = () => {

    const [files, setFiles] = useState(imgDefault);
    const [teste, setTeste] = useState('');

    const takeImage = (e:any) => {
      setFiles(URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);
      
      setTeste(e.target.files[0].name);
      
    }

    

  return (
    <Fragment>
      <S.StyledP>Adicione uma imagem para seu perfil</S.StyledP>
      <S.StyledDiv>          
        <S.Img src={files}/>
        <S.StyledDivInput>
          <S.InputText type="text" value = {teste} disabled/>
          <S.Input type = 'file'  name = 'inputFile' id = 'inputFile' onChange = { (e: any) =>takeImage(e) } />
          <S.StyledLabel htmlFor='inputFile'>
            Adcione uma imagem
          </S.StyledLabel>
        </S.StyledDivInput>
      </S.StyledDiv>
    </Fragment>


  )
}

export default InputFile;