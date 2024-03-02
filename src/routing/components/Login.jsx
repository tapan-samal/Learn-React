import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginHandle = () => {
    localStorage.setItem("isLoggedin", true); //We can use session storage also
    navigate("/dashboard");
  };

  return (
    <div className="signin-page">
      <h1 style={{ padding: "30px" }}>Login Page</h1>
      <button className="btn" onClick={loginHandle}>
        Login Here
      </button>{" "}
      <br />
      <br />
      <button className="btn" onClick={() => navigate("/signup")}>
        Create an Account
      </button>
    </div>
  );
};

export default Login;
