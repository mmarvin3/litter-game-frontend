import "../Header/Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../../services/firebase";

function Header(props) {
  const photoStyles = {
    borderRadius: "50%",
    height: "2.5rem",
    margin: "0 0.5rem",
  };

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
          {
            props.user ? (
              <>
                <li id="welcome">{/*Welcome, {props.user.displayName}*/}
                  <img 
                    src={props.user.photoURL} 
                    alt={props.user.displayName}
                    style={photoStyles}
                  />
                </li>
                <li onClick={logout} id="logout">Logout</li>
              </>
              ) : (
                <li onClick={login}>Login</li>
              )
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
