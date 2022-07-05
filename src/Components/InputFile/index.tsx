import * as S from './styles';
import imgDefault from '../assets/img/imgDefault.png'
import { Fragment, useState } from 'react';

interface Props{
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
}

const InputFile = ({onchange, value, id}:Props) => {

    const [files, setFiles] = useState(imgDefault);
    const [teste, setTeste] = useState('');

    const takeImage = (e:any) => {
      {onchange(e)}      
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
          
          <S.Input
            accept="image/png,image/jpeg,image/jpg"
            type = 'file'  
            id = {id}
            onChange={(e:any) => takeImage(e)} 
            value ={value} 
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