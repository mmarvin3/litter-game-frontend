import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Welcome to CleanUp Crew</h1>
            <Link to='/login'>Login to Continue</Link>
            <h3>Login with Google</h3>
            <h3>Continue as Guest</h3>
        </div>
    )
}

export default Home;