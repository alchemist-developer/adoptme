// import './index.css'
import imgQueroDoar from '../../assets/img-quero-doar.png'
import { useState } from 'react'

function QueroDoar(){

    const [urlImg, setUrlImg] = useState(imgQueroDoar)

    
    function showFile(event: any){
        const imgTarget = event.target.files[0]
         setUrlImg(URL.createObjectURL(imgTarget))
    }

    return(
        <main>
        <h3>Quero doar</h3>
            <form>
                <span id='span-add-img'>Adicione uma imagem do Pet</span>
                <div className='div-img'>
                    <img id='img-input-file' src={urlImg} alt="img"/>
                    <div className='div-input-file'>
                        <span>Envie um arquivo</span>
                        <label id='label-input-file' htmlFor="input-file">Procurar no dispositivo</label>
                        <input type="file" accept="image/*" name="input-file" id='input-file' onChange={showFile}/>
                    </div>
                </div>
                <label htmlFor="nome-pet">Nome</label>
                <input id='nome-pet' name='nome-pet' type="text" />
                <label htmlFor="descricao-pet">Descrição</label>
                <textarea name="descricao-pet" id="descricao-pet" cols={30} rows={5}></textarea>
                <span>Espécie</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio inputCachorro" style={{}} id="cachorro" name="escolha-do-animal" value="cachorro"/>
                    <label htmlFor="cachorro">Cachorro</label>
                    <input type="radio" className="inputRadio" id="gato" name="escolha-do-animal" value="gato"/>
                    <label htmlFor="gato">Gato</label>
                    <input type="radio" className="inputRadio" id="outros" name="escolha-do-animal" value="outros"/>
                    <label htmlFor="outros">Outros</label>
                </div>
                <span>Porte</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio inputCachorro" id="pequeno" name="tamanho-do-animal" value="pequeno"/>
                    <label htmlFor="pequeno">Pequeno</label>
                    <input type="radio" className="inputRadio" id="medio" name="tamanho-do-animal" value="medio"/>
                    <label htmlFor="medio">Médio</label>
                    <input type="radio" className="inputRadio" id="grande" name="tamanho-do-animal" value="grande"/>
                    <label htmlFor="grande">Grande</label>
                </div>
                <span>Gênero</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="femea" name="genero-do-animal" value="femea"/>
                    <label htmlFor="femea">Fêmea</label>
                    <input type="radio" className="inputRadio" id="macho" name="genero-do-animal" value="macho"/>
                    <label htmlFor="macho">Macho</label>
                </div>
                <span>Idade</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="filhote" name="idade-do-animal" value="filhote"/>
                    <label htmlFor="filhote">Filhote</label>
                    <input type="radio" className="inputRadio" id="adulto" name="idade-do-animal" value="adulto"/>
                    <label htmlFor="adulto">Adulto</label>
                    <input type="radio" className="inputRadio" id="idoso" name="idade-do-animal" value="idoso"/>
                    <label htmlFor="idoso">Idoso</label>
                </div>
                <span>Pet com deficiência?</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="sim-deficiencia" name="animal-deficiente" value="sim-deficiencia"/>
                    <label htmlFor="sim-deficiencia">Sim</label>
                    <input type="radio" className="inputRadio" id="nao-deficiencia" name="animal-deficiente" value="nao-deficiencia"/>
                    <label htmlFor="nao-deficiencia">Não</label>
                </div>
                <span>Pet está em tratamento?</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="sim-tratamento" name="animal-tratamento" value="sim-tratamento"/>
                    <label htmlFor="sim-tratamento">Sim</label>
                    <input type="radio" className="inputRadio" id="nao-tratamento" name="animal-tratamento" value="nao-tratamento"/>
                    <label htmlFor="nao-tratamento">Não</label>
                </div>
                <label htmlFor="caracteristicas-pet">Características do animal</label>
                <textarea name="caracteristicas-pet" id="caracteristicas-pet" cols={30} rows={2}></textarea>
                <button>Salvar</button>
            </form>
        </main>
    )
}

export default QueroDoar;