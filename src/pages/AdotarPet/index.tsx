import React from 'react';
// import { Container } from './styles';
import CardDog from '../../components/CardDog';

function AdotarPet(props: any) {
  console.log(props.inputValues)
  
  return (
    <>
      <CardDog />
    </>
  );
}

export default AdotarPet;