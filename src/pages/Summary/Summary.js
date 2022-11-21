import { Link } from "react-router-dom";
import "../Picture/Picture.css"
import "../Summary/Summary.css"

function Summary() {
    return (
        <div className="picture">
            <div id="summary-background">
                <h1>CleanUp Complete!</h1>
                <h2>
                    CleanUp Summary:
                </h2>
                <h2>Time Spent: 25 minutes total</h2>
                <h2>CleanUp Points earned: 250</h2>
                <h1>Congratulations!</h1>
                <h1>You are now a</h1>
                <h1>Star Cleaner!</h1>
                <img src="https://i.gyazo.com/682feaf60960eabf702074c87061da43.png" alt="stars"></img>
            </div>
            <Link to='leaderboard'>
                <button id="view-leaderboard-button">View Leaderboard</button>
            </Link>
        </div>
    )
}

export default Summary