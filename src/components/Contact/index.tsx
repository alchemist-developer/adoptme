import './style.css'
import Foto from '../../assets/cardd3.jpg'
import Mail from '../../assets/mail.png'
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";

export default function Contact() {
    return (
        <>

            <Header display={true} logo="none" background="white">
                <Logo margin={'none'} />
                <OptionMenu displayProfile="flex" />
            </Header>

            <div className="container-contato">

                <div className="img-contact">
                    <img className='contato-img' src={Foto} alt="imagem do contato" />
                </div>
                <div className='body-contato'>
                    <div className="desc-contato">
                        <h1>ONG Proteger</h1>
                        <p className='local-contato'>Penha, São Paulo, BR</p>
                        <p>Somos um projeto voluntário de resgate e abrigo de animais que sofreram maus tratos. Atuamos na região Norte de São Paulo, no bairro Vila Guilherme. </p>
                    </div>

                    <div className="box-contato">
                        <h1>Quer adotar o Bob?</h1>
                        <p>Para adotar ou saber mais fale com o Protetor</p>
                        <p><img src={Mail} alt="" /> faleconosco@ongproteger.com.br</p>
                        <div className='whatsapp'>
                            <h6>Entre em contato com a ONG Proteger no Whatsapp</h6>
                            <a href="">Contatar via Whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

