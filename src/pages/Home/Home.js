import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="home" align="center">
      <h1>Welcome to CleanUp Crew!</h1>
      <h4>Pick up litter to brighten your community.</h4>
      <h4>See your impact for a brighter world.</h4>

      <button id="login">
          <strong><Link to="/login">Login to Continue</Link></strong>
      </button>

      <br />
      <br />

      <button id="guest">
        <strong>Explore as Guest</strong>
      </button>
    </div>
  );
}

export default Home;
