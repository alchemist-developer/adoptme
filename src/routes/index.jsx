import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AdotarPet from "../pages/AdotarPet";
import Contatar from "../pages/Contatar";
import Home from '../pages/Home';
import Perfil from '../pages/Perfil'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import QueroDoar from '../components/QueroDoar'
import QueroAdotar from '../components/QueroAdotar'
import { useState } from "react";

function Routes() {

  const [inputValues, setInputValues] = useState({})

  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet />} />
        <Route path="/contato" element={<Contatar />} />
        <Route path="/" element={<Home/>} />
        <Route path="/userprofile" element={<Perfil/>} />
        <Route path= '/admin' element = {<Admin/>}/>
        <Route path='/login' element={<Login />} />

        <Route path= '/querodoar' element = {<QueroDoar/>}/>
        <Route path='/queroadotar' element={<QueroAdotar setInputValues={setInputValues}/>} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;