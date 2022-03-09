import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import img_URL from "../../assets/images/image_login.png";
import Login from "./Login";
import logo from "../../assets/images/logo.png";
import Login_SignUp from "./Login_SignUp";
import { PATH } from "../../constants/path";
import SignUp from "./SignUp";
function Auth() {
  return (
    <div className="main">
      <div className="main__Image">
        <img src={img_URL} />
      </div>
      <div className="main_Form">
        <img src={logo} />
        <Routes>
          <Route index element={<Navigate to={PATH.LOGIN_SIGNUP} />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.LOGIN_SIGNUP} element={<Login_SignUp />} />
          <Route path={PATH.SIGNUP} element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
