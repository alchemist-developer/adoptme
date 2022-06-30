import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Components/pages/Admin";
import Home from "./Components/pages/Home";
import Perfil from "./Components/pages/Perfil";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/userprofile" element={<Perfil/>} />
        <Route path= '/admin' element = {<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;