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
        src="https://media.istockphoto.com/id/187953515/vector/polluted-planet.jpg?s=612x612&w=0&k=20&c=CXV8my72fPFVuduP9fqTtntS0BiQVMG0clwYmJ1QMZY="
        alt="polluted-earth" width="300px"
      />
      <br />
      <br />
      <img src="https://www.news.ucsb.edu/sites/default/files/styles/article_horizontal/public/images/2022/climate-change-earth-uc-santa-barbara.jpg?itok=qiU0U6Zt" alt="earth" width="300px"/>
    </div>
  );
}

export default Login;
