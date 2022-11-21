import { Link } from "react-router-dom";
import "../Camera/Camera.css"

function SecondCamera() {
    return (
        <div className="camera">
            <Link to='/afterpicture'>
                <button>Camera</button>
            </Link>
            <h2>Take an After Picture!</h2>
            <h2>Position the camera to show your cleaned spot. When ready, click the circle to take a picture.</h2>
        </div>
    )
}

export default SecondCamera;