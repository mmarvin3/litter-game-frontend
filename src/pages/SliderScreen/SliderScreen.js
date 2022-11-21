import { Link } from "react-router-dom";
import "../Picture/Picture.css"
import "../SliderScreen/SliderScreen.css"

function SliderScreen() {
    return (
        <div className="picture">
            <h1>Lookin' good!</h1>
            <h2>Slide the bar to change from before and after picture.</h2>
            <Link to='/summary'>
                <button id="summary-button">CleanUp Summary</button>
            </Link>
        </div>
    )
}

export default SliderScreen