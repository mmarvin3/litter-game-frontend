import { Link } from "react-router-dom";

function SliderScreen() {
    return (
        <div>
            <h1>Lookin' good!</h1>
            <h2>Slide the bar to change from before and after picture.</h2>
            <h2>Click the button below to see a summary of your CleanUp!</h2>
            <Link to='/summary'>
            <button>CleanUp Summary</button>
            </Link>
        </div>
    )
}

export default SliderScreen