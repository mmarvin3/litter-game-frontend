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
import Summary from "./pages/Summary/Summary";
import SecondCamera from "./pages/SecondCamera/SecondCamera";
import AfterPicture from "./pages/AfterPicture/AfterPicture";
import SliderScreen from "./pages/SliderScreen/SliderScreen";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div class="App">
      <Header user={user} />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login user={user} />
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

      <Route path='/secondcamera'>
        <SecondCamera/>
      </Route>

      <Route path='/afterpicture'>
        <AfterPicture/>
      </Route>

      <Route path='/sliderscreen'>
        <SliderScreen/>
      </Route>

      <Route path='/summary'>
        <Summary/>
      </Route>

      <Route path='/leaderboard'>
        <Leaderboard/>
      </Route>
      
    </div>
  );
}

export default App;
