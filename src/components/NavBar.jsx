import "./NavBar.css"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

export default function NavBar() {
    const toggleTheme = () => {
    }

    return <>
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo">MyApp</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {localStorage.getItem("theme") === "dark" ? <FaSun /> : <FaMoon />}
                </button>
                <ul className="auth-links">
                    <li><a href="/signin">Sign In</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>
}