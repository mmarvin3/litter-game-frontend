import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Loggedin from './components/Loggedin/LoggedIn';
import Camera from './components/Camera/Camera';
import Picture from './components/Picture/Picture';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/loggedin'>
        <Loggedin/>
      </Route>
      <Route exact path='/camera'>
        <Camera/>
      </Route>
      <Route exact path='/picture'>
        <Picture></Picture>
      </Route>
    </div>
  )
}

export default App;
