import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { PATH } from "../../constants/path";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const HomePage = () => {
  return (
    <div className="main_Content">
      <Sidebar />
      <div className="main_Section">
        <Header />
        <Routes>
          <Route index element={<Navigate to={PATH.DASHBOARD} />} />
          <Route path={PATH.DASHBOARD} element={<Dashboard />} />
          <Route path={PATH.ORDERS} element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
