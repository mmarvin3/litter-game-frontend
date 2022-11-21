import "../Footer/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer" align="center">
            <Link to="/about">
            Follow the CleanUp Crew © 2022
            </Link>
        </footer>
    );
}

export default Footer;