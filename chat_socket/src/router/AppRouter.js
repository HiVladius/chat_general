import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthRouter from "../router/AuthRouter";
import ChatPages from "../pages/ChatPages";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";

// import "../css/login-register.css";

function AppRouter() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/auth" element={<AuthRouter />} /> */}
              <Route path="/auth/login" element={<LoginPages />} />
              <Route path="/auth/register" element={<RegisterPages />} />
              <Route path="/" element={<ChatPages />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default AppRouter;
