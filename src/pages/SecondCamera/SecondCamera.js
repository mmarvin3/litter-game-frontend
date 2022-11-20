import { Link } from "react-router-dom";
import "../Camera/Camera.css"

function SecondCamera(){
    return(
        <div>
            <Link className="camera" to='/afterpicture'>
            <button>Camera</button>
            </Link>
            <h2>Take an After picture!</h2>
            <h2>Position the camera to show your cleaned spot. When ready, click the circle to take a picture.</h2>
        </div>
    )
}

export default SecondCamera;