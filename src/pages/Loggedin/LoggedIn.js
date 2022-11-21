import "./Loggedin.css";
import { Link } from "react-router-dom";

function Loggedin() {
    return (
        <div class="loggedin">
            <h2>Click the Camera Icon Take a Pic and Start a Timer</h2>
            <Link to='/camera'>
                <img src="https://i.gyazo.com/584634aafbbc9a2da1237cb67174f1fe.png" alt="cam icon"></img>
                {/* <button>Camera</button> */}
            </Link>
            <h2>Don't want to take a pic? Just start a CleanUp Timer</h2>
            <Link to='/timer'>
                <div id="timer-circle">
                    <button>00:00</button>
                </div>
            </Link>
        </div>
    )
}

export default Loggedin;