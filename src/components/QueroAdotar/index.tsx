import React, { useState } from 'react';
import * as S from './styles';
import wallpaperPug from '../../assets/wallpaper-pug.png'
import searchHeartt from '../../assets/searchHeartt.svg'

import { useFormik } from 'formik';
import { useNavigate  } from 'react-router-dom';



function QueroAdotar(props: any){

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            estado: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));   
            props.setInputValues({values})

            navigate("/adotar")
        }
    })

    return(
        <>
            <header>
                <h1>Menu</h1>
            </header>
            <S.Main>
            <S.CardPug src={wallpaperPug} alt="Card cachorro Pug preto"/>
                <S.Form onSubmit={formik.handleSubmit}>
                    <S.H3>Quero adotar</S.H3>
                    <span>Estado</span>
                    <S.FormSelect onChange={formik.handleChange} name="estado" form="">
                        <option value="acre">Acre</option>
                        <option value="alagoas">Alagoas</option>
                        <option value="amazonas">Amazonas</option>
                        <option value="bahia">Bahia</option>
                    </S.FormSelect>
                    <S.DivSexoAnimal>
                        <S.DivInputSexoAnimal>
                            <S.InputFemea onChange={formik.handleChange} value="femea" type="radio" className="inputRadio" id="femea" name="generoDoAnimal"/>
                            <S.LabelFemea id="label-input-femea" htmlFor="femea"></S.LabelFemea>
                            <S.SpanSexoAnimal>Fêmea</S.SpanSexoAnimal>
                        </S.DivInputSexoAnimal>
                        <S.DivInputSexoAnimal>
                            <S.InputMacho onChange={formik.handleChange} type="radio" className="inputRadio" id="macho" name="generoDoAnimal" value="macho"/>
                            <S.LabelMacho id="label-input-macho" htmlFor="macho"></S.LabelMacho>
                            <S.SpanSexoAnimal>Macho</S.SpanSexoAnimal>
                        </S.DivInputSexoAnimal>
                        <S.DivInputSexoAnimal>
                            <S.InputTantoFaz onChange={formik.handleChange} type="radio" className="inputRadio" id="tanto-faz" name="generoDoAnimal" value="tanto-faz"/>
                            <S.LabelTantoFaz id="label-input-tanto-faz" htmlFor="tanto-faz"></S.LabelTantoFaz>
                            <S.SpanSexoAnimal>Tanto faz</S.SpanSexoAnimal>
                        </S.DivInputSexoAnimal>
                    </S.DivSexoAnimal>
                    <S.Span>Estou procurando</S.Span>
                    <S.DivInputRadio>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="cachorro" name="escolhaDoAnimal" value="cachorro"/>
                        <S.Label htmlFor="cachorro">Cachorro</S.Label>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="gato" name="escolhaDoAnimal" value="gato"/>
                        <S.Label htmlFor="gato">Gato</S.Label>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="outros" name="escolhaDoAnimal" value="outros"/>
                        <S.Label htmlFor="outros">Outros</S.Label>
                        <S.InputQuartaCor onChange={formik.handleChange} type="radio" id="animal-tanto-faz" name="escolhaDoAnimal" value="animalTantofaz"/>
                        <S.Label htmlFor="animal-tanto-faz">Tanto faz</S.Label>
                    </S.DivInputRadio>
                    <S.Span>Porte</S.Span>
                    <S.DivInputRadio>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="pequeno" name="tamanhoDoAnimal" value="pequeno"/>
                        <S.Label htmlFor="pequeno">Pequeno</S.Label>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="medio" name="tamanhoDoAnimal" value="medio"/>
                        <S.Label htmlFor="medio">Médio</S.Label>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="grande" name="tamanhoDoAnimal" value="grande"/>
                        <S.Label htmlFor="grande">Grande</S.Label>
                        <S.InputQuartaCor onChange={formik.handleChange} type="radio" id="porte-tanto-faz" name="tamanhoDoAnimal" value="porteTantoFaz"/>
                        <S.Label htmlFor="porte-tanto-faz">Tanto faz</S.Label>
                    </S.DivInputRadio>
                    <S.Span>Idade</S.Span>
                    <S.DivInputRadio>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="filhote" name="idadeDoAnimal" value="filhote"/>
                        <S.Label htmlFor="filhote">Filhote</S.Label>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="adulto" name="idadeDoAnimal" value="adulto"/>
                        <S.Label htmlFor="adulto">Adulto</S.Label>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="idoso" name="idadeDoAnimal" value="idoso"/>
                        <S.Label htmlFor="idoso">Idoso</S.Label>
                        <S.InputQuartaCor onChange={formik.handleChange} type="radio" id="idade-tanto-faz" name="idadeDoAnimal" value="idadeTantoFaz"/>
                        <S.Label htmlFor="idade-tanto-faz">Tanto faz</S.Label>
                    </S.DivInputRadio>
                    <S.Span>Considera adotar um pet com deficiência?</S.Span>
                    <S.DivInputRadio>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="sim-deficiencia" name="animalDeficiente" value="simDeficiencia"/>
                        <S.Label htmlFor="sim-deficiencia">Sim</S.Label>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="nao-deficiencia" name="animalDeficiente" value="naoDeficiencia"/>
                        <S.Label htmlFor="nao-deficiencia">Não</S.Label>
                    </S.DivInputRadio>
                    <S.Span>Considera adotar um pet que está em tratamento?</S.Span>
                    <S.DivInputRadio>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="sim-tratamento" name="animalTratamento" value="simTratamento"/>
                        <S.Label htmlFor="sim-tratamento">Sim</S.Label>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="nao-tratamento" name="animalTratamento" value="naoTratamento"/>
                        <S.Label htmlFor="nao-tratamento">Não</S.Label>
                    </S.DivInputRadio>
                    <S.Button type='submit'>Buscar amigo <img src={searchHeartt} /></S.Button>
                </S.Form>
            </S.Main>
        </>
    )
}

export default QueroAdotar;

function setInputValues(arg0: { values: { estado: string; }; }) {
    throw new Error('Function not implemented.');
}
function inputValues(inputValues: any) {
    throw new Error('Function not implemented.');
}

