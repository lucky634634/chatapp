import "./NavBar.css"

export default function NavBar() {
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
            <ul className="auth-links">
                <li><a href="/signin">Sign In</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
    </>
}