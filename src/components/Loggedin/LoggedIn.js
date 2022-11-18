import { Link } from "react-router-dom";

function Loggedin() {
    return (
        <div>
            <h2>Click the Camera Icon Take a Pic and Start a Timer</h2>
                <Link to='/camera'>
                <button>Camera</button>
                </Link>
            <h2>Don't want to take a pic? Just start a CleanUp Timer</h2>
                <button>Timer</button>
        </div>
    )
}

export default Loggedin;