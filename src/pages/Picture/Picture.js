import "./Picture.css";
import { Link } from "react-router-dom";

function Picture() {
    return (
        <div class="picture">
            <img src="https://i0.wp.com/bkreader.com/wp-content/uploads/2020/08/3738821611_3a2c334f2f_c.jpg?fit=800%2C536&ssl=1" alt="trash" id="pic" width="300px"/>
            <h2>Keep this picture?</h2>
            <div id="buttons">
                <Link to='/camera'>
                <button>Retake</button>
                </Link>
                <Link to ='/timer'>
                    <button id="keep">Keep</button>
                </Link>
            </div>    
        </div>
    )
}

export default Picture