import Sidebar from "./sidebar/sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./header/header";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/Orders";
import Login from "./login/Login";
function App() {
  return (
    <div className="App">
      <div className="main_Content">
        <Sidebar />
        <div className="main_Section">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
      <Login />
    </div>
  );
}

export default App;
