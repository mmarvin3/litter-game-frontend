import "./Camera.css";
import { Link } from "react-router-dom";

function Camera(){
    return(
        <div class="camera">
            <Link to='/picture'>
                <button>Capture</button>
            </Link>
            <h2>Take a before pic</h2>
            <p>Position the camera to show your cleanup spot. When ready, click the circle to capture the photo.</p>
        </div>
    )
}

export default Camera;