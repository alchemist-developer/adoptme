import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AdotarPet from "../pages/AdotarPet";
import Contatar from "../pages/Contatar";
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Admin from '../pages/Admin'


function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet />} />
        <Route path="/contato" element={<Contatar />} />
        <Route path="/" element={<Home/>} />
        <Route path="/userprofile" element={<Perfil/>} />
        <Route path= '/admin' element = {<Admin/>}/>
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;