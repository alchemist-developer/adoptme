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


export default function Contact() {
  const [users, setUsers] = useState();

  // @ts-ignore
  const dadosUsuario = JSON.parse(localStorage.getItem("persist:@users"));
  const token = dadosUsuario.accessToken;
  const newToken = token.replace(/"/g, "");

  const { id } = useParams();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        baseAPI.defaults.headers[
          "Authorization"
        ] = `Bearer ${newToken}`;
        
        const response = await listarTodosDonos();
        setUsers(response);
       
      } catch (error) {
        console.log(error);
      }
    };
    loadUsers();
  }, []);
  
  var usuario = {};

  async function acharUsuario() {
    await users.forEach((user) => {
      if (user.user_id === Number(id)) {
        usuario = user;
      }
    });
  }
  acharUsuario();

  return (
    <>
      <Header display={true} logo="none" background="white">
        <Logo margin={"none"} />
        
      </Header>
        <div className="img-contact">
      <div className="container-contato">
          <img className="contato-img" src={`http://res.cloudinary.com/luizatrocino/image/upload/`+usuario.image_user} alt="imagem do contato" />
        </div>
        <div className="body-contato">
          <div className="desc-contato">
            <h1>{usuario.name_user}</h1>
            <p className="local-contato">{usuario.address}</p>
            <p>{usuario.comments}</p>
          </div>

          <div className="box-contato">
              <h1>Quer adotar?</h1>
            <p>Para adotar ou saber mais fale com o Protetor</p>
            <p>
              <img src={Mail} alt="" /> faleconosco@ongproteger.com.br
            </p>
            <div className="whatsapp">
              <h6>Entre em contato com {usuario.name_user} no Whatsapp</h6>
              <a href={`https://wa.me/`+ usuario.whats}>Abrir no Whatsapp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
