import { Link } from "react-router-dom";

function Camera(){
    return(
        <div>
            <Link to='/picture'>
            <button>Camera</button>
            </Link>
            <h2>Take a before pic</h2>
        </div>
    )
}

export default Camera;