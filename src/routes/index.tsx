import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";

import AdotarPet from "../pages/AdotarPet";
//@ts-ignore
import Contatar from "../pages/Contatar";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import QueroDoar from '../pages/QueroDoar'
import QueroAdotar from '../pages/QueroAdotar'
import ProfileUser from '../pages/ProfileUser'
import { type QueroAdotarValues } from '../types'
import { useSelector } from "react-redux";


function Routes() {
  

  const [inputValues, setInputValues] = useState<QueroAdotarValues>({
    cidade: '',
    escolhaDoAnimal: '',
    estado: '',
    generoDoAnimal: '',
    idadeDoAnimal: '',
    tamanhoDoAnimal: ''
  })

  const permission  = useSelector((state: any)=> state.persistedReducer.isLogged)



  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet inputValues={inputValues}/>} />
        <Route path="/contato/:id" element={<Contatar/>} />
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path= '/querodoar' element = {permission ? <QueroDoar/> : <Home/>}/>
        <Route path='/queroadotar' element={<QueroAdotar setInputValues={setInputValues}/>} />
        <Route path='/userprofile' element={permission ? <ProfileUser/> : <Home/>} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}


export default Routes;