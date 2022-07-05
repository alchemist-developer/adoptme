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


function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet />} />
        <Route path="/contato" element={<Contatar />} />
        <Route path="/" element={<Home/>} />
        <Route path="/userprofile" element={<Perfil/>} />
        <Route path= '/admin' element = {<Admin/>}/>
        <Route path='/login' element={<Login />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;