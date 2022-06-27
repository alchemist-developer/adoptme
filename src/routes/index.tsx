import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import adotarPet from "../pages/adotarPet";
  
  
  function Routes(): JSX.Element {
    return (
      <BrowserRouter>
        <WrapperRoutes>
  
          <Route path="/adotar" element={<Tinder />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }
  
  export default Routes;