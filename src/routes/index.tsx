import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import Tinder from "../pages/tinder";
  
  
  function Routes(): JSX.Element {
    return (
      <BrowserRouter>
        <WrapperRoutes>
  
          <Route path="/tinder" element={<Tinder />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }
  
  export default Routes;