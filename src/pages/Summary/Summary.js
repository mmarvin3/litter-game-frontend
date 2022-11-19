import { Link } from "react-router-dom";

function Summary() {
    return(
        <div>
            <h1>CleanUp Complete!</h1>
            <h2>
                CleanUp Summary:
                Time Spent: 25 minutes total
                CleanUp Points earned: 250
            </h2>
            <Link to='leaderboard'>
            <button>View Leaderboard</button>
            </Link>
        </div>
    )
}

export default Summary