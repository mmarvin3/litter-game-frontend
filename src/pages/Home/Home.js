import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="home">
      <h1>Welcome to CleanUp Crew</h1>
      <h4>Pick up litter to brighten your community.</h4>
      <h4>See your impact for a brighter world.</h4>

      <button>
        <h4>
          <Link to="/login">Login to Continue</Link>
        </h4>
      </button>

      <br />
      <br />
      <button>
        <h4>Explore as Guest</h4>
      </button>
    </div>
  );
}

export default Home;
