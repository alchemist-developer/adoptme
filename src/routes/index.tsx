import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";

import AdotarPet from "../pages/AdotarPet";
import Contatar from "../pages/Contatar";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import QueroDoar from '../pages/QueroDoar'
import QueroAdotar from '../pages/QueroAdotar'
import ProfileUser from '../pages/ProfileUser'
import { type QueroAdotarValues } from '../types'


function Routes() {
  const [inputValues, setInputValues] = useState<QueroAdotarValues>({
    cidade: '',
    escolhaDoAnimal: '',
    estado: '',
    generoDoAnimal: '',
    idadeDoAnimal: '',
    tamanhoDoAnimal: ''
  })

  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet inputValues={inputValues}/>} />
        <Route path="/contato/:id" element={<Contatar/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path= '/admin' element = {<Admin/>}/>
        <Route path='/login' element={<Login />} />
        <Route path= '/querodoar' element = {<QueroDoar/>}/>
        <Route path='/queroadotar' element={<QueroAdotar setInputValues={setInputValues}/>} />
        <Route path='/userprofile' element={<ProfileUser/>} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;