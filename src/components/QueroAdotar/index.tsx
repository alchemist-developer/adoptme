import './index.css'
import imgQueroAdotar from '../../assets/img-quero-adotar.png'
import { CgTrack } from 'react-icons/cg'

function QueroAdotar(){
    return(
        <main>
        <img src={imgQueroAdotar} alt="img"/>
            <form>
                <h3>Quero adotar</h3>
                <span>Endereço</span>
                <input type="text" />
                <span>Estou procurando</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="cachorro" name="escolha-do-animal" value="cachorro"/>
                    <label htmlFor="cachorro">Cachorro</label>
                    <input type="radio" className="inputRadio" id="gato" name="escolha-do-animal" value="gato"/>
                    <label htmlFor="gato">Gato</label>
                    <input type="radio" className="inputRadio" id="outros" name="escolha-do-animal" value="outros"/>
                    <label htmlFor="outros">Outros</label>
                </div>
                <span>Porte</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="pequeno" name="tamanho-do-animal" value="pequeno"/>
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
                    <input type="radio" className="inputRadio" id="tanto-faz" name="genero-do-animal" value="tanto-faz"/>
                    <label htmlFor="tanto-faz">Tanto faz</label>
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
                <span>Considera adotar um pet com deficiência?</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="sim-deficiencia" name="animal-deficiente" value="sim-deficiencia"/>
                    <label htmlFor="sim-deficiencia">Sim</label>
                    <input type="radio" className="inputRadio" id="nao-deficiencia" name="animal-deficiente" value="nao-deficiencia"/>
                    <label htmlFor="nao-deficiencia">Não</label>
                </div>
                <span>Considera adotar um pet que está em tratamento?</span>
                <div className="div-escolha-do-animal">
                    <input type="radio" className="inputRadio" id="sim-tratamento" name="animal-tratamento" value="sim-tratamento"/>
                    <label htmlFor="sim-tratamento">Sim</label>
                    <input type="radio" className="inputRadio" id="nao-tratamento" name="animal-tratamento" value="nao-tratamento"/>
                    <label htmlFor="nao-tratamento">Não</label>
                </div>
                <button>Buscar</button>
            </form>
        </main>
    )
}

export default QueroAdotar;