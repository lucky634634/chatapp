import "./NavBar.css"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

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
                <a className="logo" href="/">MyApp</a>
            </div>
            <div className="nav-right">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
                <ul className="auth-links">
                    <li><a href="/signin">Sign In</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>
}