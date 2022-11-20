import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/firebase";

function Login(props) {
  return (
    <div class="login-page">
      <h1>Welcome to CleanUp Crew</h1>

      <button id="login" onClick={login}>
        {
          props.user ? (
              <Link to="/loggedin">Click here to continue</Link>
          ) : (
            <strong>Login with Google</strong>
          )
        }
      </button>

      <br />
      <br />

      <button id="guest">
        <strong>Explore as Guest</strong>
      </button>
      <br/><br/>
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
