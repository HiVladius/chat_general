//Switch ya no se usa en la version 6 de react-router-dom
//Se remplaza por Routes

import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<LoginPages />} />
        <Route path="/auth/register" element={<RegisterPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRouter;
