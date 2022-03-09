import React from "react";
import { Link } from "react-router-dom";

const Login_SignUp = () => {
  return (
    <div className="main_Form--Content">
      <Link to="/sign_up" className="button_Login">
        Sign Up
      </Link>
      <Link to="/auth/login" className="button_signup">
        Login
      </Link>
    </div>
  );
};

export default Login_SignUp;
