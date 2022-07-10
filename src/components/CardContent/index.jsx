import React, { useState, useEffect } from "react";
import "./style.css";
import Vetor from "../../assets/vector.png";
import Share from "../../assets/Vector.svg";
import InfoDog from "../InfoDog";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css";
import { listarTodos } from "../../service/pet";
import { useNavigate } from "react-router-dom";
import Coracao from "../../assets/Vector (4).png";
import { Link } from 'react-router-dom'


function CardContent() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((oldActive) => !oldActive);
  }

  const INPUT = JSON.parse(localStorage.getItem("@dadosInput"));

  const [pets, setPets] = useState({});
  useEffect(() => {
    const loadPets = async () => {
      try {
        const response = await listarTodos();
        setPets(response);
      } catch (error) {
        console.log(error);
      }
    };
    loadPets();
  }, []);

  const array = [];

  async function newPets() {
    pets.forEach((pet) => {
      if (
        pet.state === INPUT.estado &&
        (pet.gender === INPUT.generoDoAnimal ||
          INPUT.generoDoAnimal == "generoTantofaz") &&
        (pet.size === INPUT.tamanhoDoAnimal ||
          INPUT.tamanhoDoAnimal == "porteTantoFaz") &&
        (pet.type === INPUT.escolhaDoAnimal ||
          INPUT.escolhaDoAnimal == "animalTantofaz") &&
        (pet.age === INPUT.idadeDoAnimal ||
          INPUT.idadeDoAnimal == "idadeTantoFaz")
      ) {
        array.push(pet);
      }

      // if (
      //     // (
      // //   INPUT.escolhaDoAnimal.value === "tanto faz" &&
      // //   INPUT.idadeDoAnimal === "tanto faz" &&
      // //   INPUT.tamanhoDoAnimal === "tanto faz" &&
      // //   INPUT.generoDoAnimal === "tanto faz" &&
      // // ) 
      // )
    });
  }

  newPets();

  return (
    <>
      <Swiper
        spaceBetween={0.9}
        slidesPerView={1}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {array.length == 0 ? (
          <h1 id="tituloSemPet">Não encontramos pets com essa descrição <Link to="/queroadotar">Retornar</Link></h1>
        ) : (
          array.map((pet) => {
            return (
              <SwiperSlide>
                <div className="card-container">
                  <div>
                    <img
                      className="card-img"
                      src={
                        `http://res.cloudinary.com/luizatrocino/image/upload/` +
                        pet.image_pet01
                      }
                      alt=""
                    />
                  </div>
                  <InfoDog active={active}>
                    <div className="info-dog-column">
                      <div className="button-hover">
                        <button onClick={handleClick} className="btn-fromtop">
                          <img src={Vetor} alt="" />
                        </button>
                      </div>
                      <div className="dog-content">
                        <div className="dog-nome-row">
                          <h1>{pet.name_pet}</h1>
                          <button className="compartilhar-btn">
                            <img src={Share} alt="" />
                          </button>
                        </div>
                        {/* <p className="doador">
                                  {" "}
                                  <strong>{}</strong>
                                </p> */}
                        <p className="local">{pet.state}</p>
                        <div className="row-container">
                          <div className="row-item1">{pet.type}</div>
                          <div className="row-item2">{pet.gender}</div>
                          <div className="row-item3">{pet.age}</div>
                          <div className="row-item4">{pet.size}</div>
                        </div>
                        <div className="observacoes">
                          <p>Observações importantes:</p>
                          <p
                            className="desimport { Img } from './../Logo/styles';
          cricao"
                          >
                            {pet.comments}
                          </p>
                          <p></p>
                        </div>
                      </div>
                      <div className="flex-end">
                        <button
                          onClick={() => {
                            navigate("/contato/" + pet.user_id);
                          }}
                          type="button"
                          href="/contato"
                          className="btn-contatar"
                        >
                          Adotar pet{" "}
                          <span>
                            <img src={Coracao}></img>
                          </span>
                        </button>
                      </div>
                    </div>
                  </InfoDog>
                </div>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </>
  );
}

export default CardContent;
