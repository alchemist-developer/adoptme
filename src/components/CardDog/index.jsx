import React from "react";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardContent from "../CardContent";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import OptionMenu from "../../components/OptionMenu";
import axios from "axios";
import { listarTodos } from "../../service/pet";
import { useEffect, useState } from "react";
// import { Container } from './styles';

function CardDog(props) {
  var INPUT = JSON.parse(localStorage.getItem("@dadosInput"));

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
  // console.log(pets);

  const array = [];
  async function newPets() {
    pets.forEach((pet) => {
      if (
        pet.state === INPUT.estado &&
        pet.gender === INPUT.generoDoAnimal &&
        pet.size === INPUT.tamanhoDoAnimal &&
        pet.type === INPUT.escolhaDoAnimal &&
        pet.age === INPUT.idadeDoAnimal
      ) {
        array.push(pet);
      }
    });
    console.log(array);
  }

  newPets();

  return (
    <>
      <Header display={"true"} logo="none" background="white">
        <Logo margin={"none"} />
        <OptionMenu displayProfile="flex" />
      </Header>

      <Swiper
        spaceBetween={0.9}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CardContent />
        </SwiperSlide>
        <SwiperSlide>
          <CardContent />
        </SwiperSlide>
        <SwiperSlide>
          <CardContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CardDog;
