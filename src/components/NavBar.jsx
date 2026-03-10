import "./NavBar.css"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const currentTheme = localStorage.getItem("theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setCurrentTheme(newTheme);

        console.log(localStorage.getItem("theme"));
    }

    return <>
        <nav className="navbar">
            <div className="nav-left">
                <Link className="logo" to="/">MyApp</Link>
            </div>
            <div className="nav-right">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
                <ul className="auth-links">
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    </>
}