import { Link } from "react-router-dom";

function Picture() {
    return (
        <div>
            <h2>Keep this picture retake?</h2>
            <button>Retake</button>
            <Link to ='/timer'>
                <button>Keep</button>
            </Link>
        </div>
    )
}

export default Picture