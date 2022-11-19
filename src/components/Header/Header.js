import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../../services/firebase";

function Header(props) {
  return (
    <header class="App-header">
      <button>
        <h1>☰</h1>
      </button>

      <Link to="/">
        <h1 align="center">CleanUp Crew</h1>
      </Link>

      <nav class="App-nav">
        <ul>
          {props.user ? (
            <li onClick={logout} id="logout">
              <img
                src="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
                alt="profile-picture"
                width="40px"
                height="40px"
              />
              <br />
              <small>Logout</small>
            </li>
          ) : (
            <li onClick={login}>Login</li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
