import React from 'react';
// import { Container } from './styles';
import CardDog from '../../components/CardDog';

function AdotarPet(props) {
  console.log(props.inputValues.values.estado)
  return (
    <>
      <CardDog />
    </>
  );
}

export default AdotarPet;