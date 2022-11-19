import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../../services/firebase";

function Header(props) {
  return (
    <header class="App-header">
      <Link to="/">
        <h1>CleanUp Crew</h1>
      </Link>
      <nav class="App-nav">
        <ul>
          {props.user ? (
            <li onClick={logout}>Logout</li>
          ) : (
            <li onClick={login}>Login</li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
