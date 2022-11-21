import { Link } from "react-router-dom";
import "../Picture/Picture.css"

function AfterPicture() {
    return (
        <div className="picture">
            <img src="https://i.gyazo.com/f60e6da8cc2e2ff5589e96e51e3f25af.png" alt="After Photo"></img>
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