import * as S from './styles';
import imgDefault from '../assets/img/imgDefault.png'
import { Fragment, useState } from 'react';


const InputFile = () => {

    const [files, setFiles] = useState(imgDefault);

  return (
    <Fragment>
      <S.StyledP>Adicione uma imagem para seu perfil</S.StyledP>
      <S.StyledDiv>          
        <S.Img src={files}/>
        <S.StyledDivInput>
          <S.Input type = 'file' name = 'inputFile' id = 'inputFile' onChange = { (e: any) => setFiles(URL.createObjectURL(e.target.files[0]))} />
          <S.StyledLabel htmlFor='inputFile'>
            Adcione uma imagem
          </S.StyledLabel>
        </S.StyledDivInput>
      </S.StyledDiv>
    </Fragment>


  )
}

export default InputFile;