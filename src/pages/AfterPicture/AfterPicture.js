import { Link } from "react-router-dom";
import "../Picture/Picture.css"

function AfterPicture() {
    return (
        <div className="picture">
            <h2>Keep this picture?</h2>
            <div id="buttons">
                <Link to='/secondcamera'>
                    <button>Retake</button>
                </Link>
                <Link to='/sliderscreen'>
                    <button id="keep">Keep</button>
                </Link>
            </div>
        </div>
    )
}

export default AfterPicture