import { Link } from "react-router-dom";
import "../Picture/Picture.css"
import "../Summary/Summary.css"

function Summary() {
    return(
        <div className="picture">
            <h1>CleanUp Complete!</h1>
            <h2>
                CleanUp Summary:
                Time Spent: 25 minutes total
                CleanUp Points earned: 250
            </h2>
            <Link to='leaderboard'>
            <button id="view-leaderboard-button">View Leaderboard</button>
            </Link>
        </div>
    )
}

export default Summary