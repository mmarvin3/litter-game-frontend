import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/firebase";

function Login() {
  return (
    <div class="login-page">
      <h1>Welcome to CleanUp Crew</h1>
      <h2>Login with Google</h2>
      <h2>Create an account</h2>

      <img
        src="../../../public/assets/images/polluted_earth.jpg"
        alt="polluted-earth"
      />
      <br />
      <br />
      <img src="../../../public/assets/images/clean_earth.png" alt="earth" />
    </div>
  );
}

export default Login;
