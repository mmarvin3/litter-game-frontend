import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
        <div>
            <Link to='/'>
                CleanUp Crew
            </Link>
        </div>
    )
}

export default Header;