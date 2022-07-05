import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AdotarPet from "../pages/AdotarPet";
import Contatar from "../pages/Contatar";

function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/adotar" element={<AdotarPet />} />
        <Route path="/contato" element={<Contatar />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}

export default Routes;