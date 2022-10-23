import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import NavBar from "./Home/NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./login/Login";
// import Register from "./Login/Register";
import Logout from "./login/logout";
// import ProtectedRouteOddajMain from "./OddajRzeczy/ProtectedRoute";
// import GlobalContextProv from "./OddajRzeczy/Context/GlobalContextProv";

function App() {
  return (

        <BrowserRouter basename= 'Robocze_TypeScript'>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/logowanie' element={<Login/>}/>
              <Route path='/wylogowano' element={<Logout/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
