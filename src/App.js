// Styling
import "./App.css";

// Dependencies
import React from "react";
import { Route } from "react-router-dom";

// Firebase Services
import { auth } from "./services/firebase";
import { useState, useEffect } from "react";

// Components
import Header from "./components/Header/Header";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Loggedin from "./pages/Loggedin/LoggedIn";
import Camera from "./pages/Camera/Camera";
import Picture from "./pages/Picture/Picture";
import Timer from "./pages/Timer/Timer";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <Header user={user} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/loggedin">
        <Loggedin />
      </Route>

      <Route path="/camera">
        <Camera />
      </Route>

      <Route path="/picture">
        <Picture />
      </Route>

      <Route path="/timer">
        <Timer/>
      </Route>
      
    </div>
  );
}

export default App;
