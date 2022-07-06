import { useState } from 'react'
import * as S from './styles';

import holdingHeart from '../../assets/hand-holding-heart.png'
import imgQueroDoar from '../../assets/img-quero-doar.png'

function QueroDoar(){

    const [urlImg, setUrlImg] = useState(imgQueroDoar)

    
    function showFile(event: any){
        const imgTarget = event.target.files[0]
         setUrlImg(URL.createObjectURL(imgTarget))
    }

    return(
        <>
            <header>
                <h1>MENU</h1>
            </header>
            <S.Main>
            <S.H3>Queremos saber sobre o pet</S.H3>
                <form>
                    <S.Span id='span-add-img'>Adicione uma imagem do Pet</S.Span>
                    <S.DivUpload>
                        <S.InputImg id='img-input-file' src={urlImg} alt="img"/>
                        <S.DivLabelImg className='div-input-file'>
                            <S.LabelImg id='label-input-file' htmlFor="input-file">Procurar imagem</S.LabelImg>
                            <S.Input type="file" accept="image/*" name="input-file" id='input-file' onChange={showFile}/>
                        </S.DivLabelImg>
                    </S.DivUpload>  
                    <S.LabelInputText htmlFor="nome-pet">Nome</S.LabelInputText>
                    <S.InputText placeholder='Insira o nome do pet' id='nome-pet' name='nome-pet' type="text" />
                    <S.LabelInputText htmlFor="descricao-pet">Descrição</S.LabelInputText>
                    <S.TextArea placeholder='Insira uma informação' name="descricao-pet" id="descricao-pet" cols={30} rows={5}></S.TextArea>
                    <S.SpanInfo>Espécie</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor type="radio" id="cachorro" name="escolha-do-animal" value="cachorro"/>
                        <S.LabelInput htmlFor="cachorro">Cachorro</S.LabelInput>
                        <S.InputSegundaCor type="radio" id="gato" name="escolha-do-animal" value="gato"/>
                        <S.LabelInput htmlFor="gato">Gato</S.LabelInput>
                        <S.InputTerceiraCor type="radio" id="outros" name="escolha-do-animal" value="outros"/>
                        <S.LabelInput htmlFor="outros">Outros</S.LabelInput>
                    </div>
                    <S.SpanInfo>Porte</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor type="radio" id="pequeno" name="tamanho-do-animal" value="pequeno"/>
                        <S.LabelInput htmlFor="pequeno">Pequeno</S.LabelInput>
                        <S.InputSegundaCor type="radio" id="medio" name="tamanho-do-animal" value="medio"/>
                        <S.LabelInput htmlFor="medio">Médio</S.LabelInput>
                        <S.InputTerceiraCor type="radio" id="grande" name="tamanho-do-animal" value="grande"/>
                        <S.LabelInput htmlFor="grande">Grande</S.LabelInput>
                    </div>
                    <S.SpanInfo>Gênero</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor type="radio" id="femea" name="genero-do-animal" value="femea"/>
                        <S.LabelInput htmlFor="femea">Fêmea</S.LabelInput>
                        <S.InputSegundaCor type="radio" id="macho" name="genero-do-animal" value="macho"/>
                        <S.LabelInput htmlFor="macho">Macho</S.LabelInput>
                    </div>
                    <S.SpanInfo>Idade</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor type="radio" id="filhote" name="idade-do-animal" value="filhote"/>
                        <S.LabelInput htmlFor="filhote">Filhote</S.LabelInput>
                        <S.InputSegundaCor type="radio" id="adulto" name="idade-do-animal" value="adulto"/>
                        <S.LabelInput htmlFor="adulto">Adulto</S.LabelInput>
                        <S.InputTerceiraCor type="radio" id="idoso" name="idade-do-animal" value="idoso"/>
                        <S.LabelInput htmlFor="idoso">Idoso</S.LabelInput>
                    </div>
                    <S.Button>Incluir pet <S.ImgButton src={holdingHeart}/></S.Button>
                </form>
            </S.Main>
        </>
    )
}

export default QueroDoar;