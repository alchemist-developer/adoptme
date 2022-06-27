import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import AdotarPet from "../pages/AdotarPet";
  
  
  function Routes(): JSX.Element {
    return (
      <BrowserRouter>
        <WrapperRoutes>
  
          <Route path="/adotar" element={<AdotarPet />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }
  
  export default Routes;