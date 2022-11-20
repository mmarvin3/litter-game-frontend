import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/firebase";

function Login(props) {
  return (
    <div class="login-page">
      <h1>Welcome to CleanUp Crew</h1>

      {
        props.user ? (
          <button id="login"><Link to="/loggedin">Click here to continue</Link></button>
        ) : (
          <strong><button id="login" onClick={login}>Login with Google</button></strong>
        )
      }
      {/* <button id="login" onClick={login}>
        {
          props.user ? (
              <Link to="/loggedin">Click here to continue</Link>
          ) : (
            <strong>Login with Google</strong>
          )
        }
      </button> */}

      <br />
      <br />

      <button id="guest">
        <strong>Explore as Guest</strong>
      </button>
      <br/><br/>
      <img
        src="https://i.gyazo.com/4225085289429b911622e806f70b1ed7.png"
        alt="polluted-earth" width="300px" height="300px"
      />
      <br />
      <br />
      <img src="https://i.gyazo.com/64337d8def4bf89bc0a2e2883b8d32ea.png" alt="earth" width="300px" height="350px"
      />
    </div>
  );
}

export default Login;
