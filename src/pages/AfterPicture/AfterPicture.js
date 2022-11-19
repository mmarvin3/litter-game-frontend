import { Link } from "react-router-dom";

function AfterPicture() {
    return (
        <div>
            <h2>Keep this picture retake?</h2>
            <Link to='/secondcamera'>
                <button>Retake</button>
            </Link>
            <Link to='/sliderscreen'>
                <button>Keep</button>
            </Link>
        </div>
    )
}

export default AfterPicture