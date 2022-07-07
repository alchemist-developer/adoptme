import "./style.css";
import Foto from "../../assets/cardd3.jpg";
import Mail from "../../assets/mail.png";
import Header from "../Header";
import Logo from "../Logo";
import OptionMenu from "../OptionMenu";
import { listarTodosDonos } from "../../service/user";
import { useState, useEffect } from "react";
import baseAPI from "../../service/baseAPI";
import { useParams } from "react-router-dom";
import user from "../../store/user";

export default function Contact() {

  const { id } = useParams();

  const [users, setUsers] = useState();



  useEffect(() => {
    const loadUsers = async () => {
      try {
        baseAPI.defaults.headers[
          "Authorization"
        ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMywiZW1haWwiOiJlbWFpbC51c3VhcmlvQGdtYWlsLmNvbSIsIm5hbWVfdXNlciI6Ik5vbWUgZG8gdXN1w6FyaW8gQXR1YWxpemFkbyIsImFkZHJlc3MiOiJSdWEgZG8gVXN1w6FyaW8sIDEwMSAiLCJwaG9uZSI6IigxMSkgMTIzNC01Njc4IiwiaWF0IjoxNjU2Nzc5NTYxfQ.FN79EI59dh3xt1mk62r3Qcif02SAHUR5aqxjHfsW5AI`;
        
        const response = await listarTodosDonos();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, []);
  // console.log(users);
  // const [usuario, setUsuario] = useState({});

  // async function acharUsuario(){
  //   users.forEach((user) => {
  //     if( user.user_id === Number(id))
  //     setUsuario(user)
      
  //   })
  // }

  var usuario = {}

  async function acharUsuario(){
    for (let index = 0; index < users.length; index++) {
      if(users[index].user_id === Number(id)){
        usuario = (users[index])
        console.log(usuario)
        break
      }
    }
  }
  acharUsuario()

  return (
    <>
      <Header display={true} logo="none" background="white">
        <Logo margin={"none"} />
        {/* <OptionMenu displayProfile="flex" /> */}
      </Header>
      <div className="container-contato">
        <div className="img-contact">
          <img className="contato-img" src={Foto} alt="imagem do contato" />
        </div>
        <div className="body-contato">
          <div className="desc-contato">
            <h1>{usuario.name_user}</h1>
            <p className="local-contato"></p>
            <p> </p>
          </div>

          <div className="box-contato">
            <h1>Quer adotar o Bob?</h1>
            <p>Para adotar ou saber mais fale com o Protetor</p>
            <p>
              <img src={Mail} alt="" /> faleconosco@ongproteger.com.br
            </p>
            <div className="whatsapp">
              <h6>Entre em contato com a ONG Proteger no Whatsapp</h6>
              <a href="">Contatar via Whatsapp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
