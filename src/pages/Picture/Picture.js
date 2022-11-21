import "./Picture.css";
import { Link } from "react-router-dom";

function Picture() {
    return (
        <div class="picture">
            <img src="https://i.gyazo.com/3b4b798457516fd9d020e39cedbac01c.png" alt="trash" id="pic" width="300px" />
            <h2>Keep this picture?</h2>
            <div id="buttons">
                <Link to='/camera'>
                    <button>Retake</button>
                </Link>
                <Link to='/timer'>
                    <button id="keep">Keep</button>
                </Link>
            </div>
        </div>
    )
}

export default Picture