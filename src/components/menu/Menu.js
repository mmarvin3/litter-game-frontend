import "../menu/Menu.css";
import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../../services/firebase";

function Menu(props) {
  return;
  <div>
    <ul>
      <li>Image + Name</li>
      <li>Home</li>
      <li>CleanUp History</li>
      <li>CleanUp Crews</li>
      <li>Leaderboard</li>
      <li>Badges</li>
      <li>Gallery</li>
      {props.user ? (
        <li onClic={logout} id="menu-logout">
          Logout
        </li>
      ) : (
        <li onClick={login}>Login</li>
      )}
    </ul>
  </div>;
}

export default Menu;
