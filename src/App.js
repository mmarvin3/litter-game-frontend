import logo from './logo.svg';
import './App.css';

import { auth } from "./services/firebase";
import { useState, useEffect } from "react";

function App() {

  const [ user, setUser ] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
