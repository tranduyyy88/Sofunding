import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import { PATH } from "../constants/path";
import Auth from "../pages/auth/Auth";
const Router = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.AUTH} element={<Auth />} />
    </Routes>
  );
};

export default Router;
