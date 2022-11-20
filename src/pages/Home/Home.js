import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="home">
      <h1>Welcome to CleanUp Crew</h1>

      <br/>
      
      <h4>Pick up litter to brighten your community.</h4>
      <h4>See your impact for a brighter world.</h4>

      <button>
          <Link to="/login">Login to Continue</Link>
      </button>

      <br />
      <br />
      <button>
        Explore as Guest
      </button>
    </div>
  );
}

export default Home;
