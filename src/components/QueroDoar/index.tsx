import { useState } from 'react'
import * as S from './styles';
import { useFormik } from 'formik';
import { toast } from 'react-toastify'
import { cadastroPet } from '../../service/pet'
import baseAPI from '../../service/baseAPI'
 
import holdingHeart from '../../assets/hand-holding-heart.png'
import imgQueroDoar from '../../assets/img-quero-doar.png'

function QueroDoar(){

    const [urlImg, setUrlImg] = useState(imgQueroDoar)
    const arrEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantis"]

    
    function showFile(event: any){
        const imgTarget = event.target.files[0]
        setUrlImg(URL.createObjectURL(imgTarget))
        //  formik.values.imagemDoPet = urlImg
         formik.values.imagemDoPet = event.target.files[0]
    }


    const formik = useFormik({
        initialValues: {
            estado: 'Acre',
            cidade: '',
            generoDoAnimal: '',
            escolhaDoAnimal: '',
            tamanhoDoAnimal: '',
            idadeDoAnimal: '',
            nomeDoPet: '',
            descricaoDoPet: '',
            imagemDoPet: '',
        },
        onSubmit: async values => {
            try {
                if(values.nomeDoPet === '' || values.descricaoDoPet === ''|| values.imagemDoPet === ''|| values.cidade === '' || values.escolhaDoAnimal === '' || values.estado === '' || values.generoDoAnimal === '' || values.idadeDoAnimal === '' || values.tamanhoDoAnimal ===''){
                    toast.warn('Preencha todos os campos!')
                    return
                }
                alert(JSON.stringify(values, null, 2));   

                localStorage.setItem("@dadosInput", JSON.stringify(values))
                // navigate("/adotar")

                let data = new FormData()
                data.append('state', values.estado)
                data.append('city', values.cidade)
                data.append('gender', values.generoDoAnimal)
                data.append('type', values.escolhaDoAnimal)
                data.append('size', values.tamanhoDoAnimal)
                data.append('age', values.idadeDoAnimal)
                data.append('name_pet', values.nomeDoPet)
                data.append('comments', values.descricaoDoPet)
                data.append('image', values.imagemDoPet)

                //@ts-ignore
                baseAPI.defaults.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMywiZW1haWwiOiJlbWFpbC51c3VhcmlvQGdtYWlsLmNvbSIsIm5hbWVfdXNlciI6Ik5vbWUgZG8gdXN1w6FyaW8gQXR1YWxpemFkbyIsImFkZHJlc3MiOiJSdWEgZG8gVXN1w6FyaW8sIDEwMSAiLCJwaG9uZSI6IigxMSkgMTIzNC01Njc4IiwiaWF0IjoxNjU2Nzc5NTYxfQ.FN79EI59dh3xt1mk62r3Qcif02SAHUR5aqxjHfsW5AI`
                await cadastroPet(data)
                toast.success('Seu pet foi cadastrado com sucesso!')

            } catch (error) {
                console.log('Deu erro:' + error)
            }

        }
    })

    return(
        <>
            <S.Main>
            <S.H3>Queremos saber sobre o pet</S.H3>
                <form  onSubmit={formik.handleSubmit}>
                    <S.Span id='span-add-img'>Adicione uma imagem do Pet</S.Span>


                    <S.DivUpload>
                        <S.InputImg id='imgInputFile' src={urlImg} alt="imagem do pet"/>
                        <S.DivLabelImg>
                            <S.LabelImg id='label-input-file' htmlFor="input-file">Procurar imagem</S.LabelImg>
                            <S.Input type="file" accept="image/*" name="input-file" id='input-file' onChange={showFile}/>
                        </S.DivLabelImg>
                    </S.DivUpload>  


                    <S.LabelInputText htmlFor="nomeDoPet">Nome</S.LabelInputText>
                    <S.InputText onChange={formik.handleChange} value={formik.values.nomeDoPet} placeholder='Insira o nome do pet' id='nomeDoPet' name='nomeDoPet' type="text" />
                    <S.LabelInputText htmlFor="descricaoDoPet">Descrição</S.LabelInputText>
                    <S.TextArea onChange={formik.handleChange} value={formik.values.descricaoDoPet} placeholder='Insira uma informação' name="descricaoDoPet" id="descricaoDoPet" cols={30} rows={5}></S.TextArea>
                    
                    <S.LabelInputText>Estado</S.LabelInputText>
                    <S.FormSelect onChange={formik.handleChange} name="estado">
                        {arrEstados.map((estado) => {
                            return(
                                <option value={estado}>{estado}</option>
                            )
                        })}
                    </S.FormSelect>
                    <S.LabelInputText htmlFor="cidade">Cidade</S.LabelInputText>
                    <S.InputText onChange={formik.handleChange} value={formik.values.cidade} placeholder='Insira o nome da cidade' id='cidade' name='cidade' type="text" />                  
                    
                    <S.SpanInfo>Espécie</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="cachorro" name="escolhaDoAnimal" value="cachorro"/>
                        <S.LabelInput htmlFor="cachorro">Cachorro</S.LabelInput>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="gato" name="escolhaDoAnimal" value="gato"/>
                        <S.LabelInput htmlFor="gato">Gato</S.LabelInput>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="outros" name="escolhaDoAnimal" value="outros"/>
                        <S.LabelInput htmlFor="outros">Outros</S.LabelInput>
                    </div>
                    <S.SpanInfo>Porte</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="pequeno" name="tamanhoDoAnimal" value="pequeno"/>
                        <S.LabelInput htmlFor="pequeno">Pequeno</S.LabelInput>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="medio" name="tamanhoDoAnimal" value="medio"/>
                        <S.LabelInput htmlFor="medio">Médio</S.LabelInput>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="grande" name="tamanhoDoAnimal" value="grande"/>
                        <S.LabelInput htmlFor="grande">Grande</S.LabelInput>
                    </div>
                    <S.SpanInfo>Gênero</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="femea" name="generoDoAnimal" value="femea"/>
                        <S.LabelInput htmlFor="femea">Fêmea</S.LabelInput>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="macho" name="generoDoAnimal" value="macho"/>
                        <S.LabelInput htmlFor="macho">Macho</S.LabelInput>
                    </div>
                    <S.SpanInfo>Idade</S.SpanInfo>
                    <div>
                        <S.InputPrimeiraCor onChange={formik.handleChange} type="radio" id="filhote" name="idadeDoAnimal" value="filhote"/>
                        <S.LabelInput htmlFor="filhote">Filhote</S.LabelInput>
                        <S.InputSegundaCor onChange={formik.handleChange} type="radio" id="adulto" name="idadeDoAnimal" value="adulto"/>
                        <S.LabelInput htmlFor="adulto">Adulto</S.LabelInput>
                        <S.InputTerceiraCor onChange={formik.handleChange} type="radio" id="idoso" name="idadeDoAnimal" value="idoso"/>
                        <S.LabelInput htmlFor="idoso">Idoso</S.LabelInput>
                    </div>
                    <S.Button type='submit'>Incluir pet <S.ImgButton src={holdingHeart}/></S.Button>
                </form>
            </S.Main>
        </>
    )
}

export default QueroDoar;