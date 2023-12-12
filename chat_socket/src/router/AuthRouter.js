//Switch ya no se usa en la version 6 de react-router-dom
//Se remplaza por Routes

// Funcional Component

import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import '../css/login-register.css'

const AuthRouter = () => {
  return (
    <div className="liter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <Switch>
            <Route path="/auth/login" component={LoginPages} />
            <Route path="/auth/register" component={RegisterPages} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
