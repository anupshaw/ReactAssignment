import React, {  useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";


function App() {

  const val=useContext(AuthContext)
  
return (
  <React.Fragment>
<MainHeader />
      <main>
        {!val.isLoggedIn && <Login />}
        {val.isLoggedIn && <Home  />}
      </main>
      </React.Fragment>
  );
}

export default App;