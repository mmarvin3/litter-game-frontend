import "./Camera.css";
import { Link } from "react-router-dom";

function Camera(){
    return(
        <div class="camera">
            <img src="https://i.gyazo.com/a23bbec3a470401b83742852132bbb26.png"></img>
            <Link to='/picture'>
                <button></button>
            </Link>
            <h2>Take a Before Pic!</h2>
            <p>Position the camera to show your cleanup spot. When ready, click the circle to capture the photo.</p>
        </div>
    )
}

export default Camera;