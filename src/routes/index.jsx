import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AdotarPet from "../pages/AdotarPet";
import Contatar from "../pages/Contatar";
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import QueroDoar from '../components/QueroDoar'
import QueroAdotar from '../components/QueroAdotar'
import ProfileUser from '../pages/ProfileUser'

import { useState } from "react";

function Routes() {

  const [inputValues, setInputValues] = useState({})

  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet inputValues={inputValues} />} />
        <Route path="/contato" element={<Contatar />} />
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