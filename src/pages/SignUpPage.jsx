import "./SignUpPage.css"
import NavBar from "../components/NavBar";

export default function SignUpPage() {
    return <>
        <NavBar />
        <div className="signup-container">
            <form className="signup-form">
                <div className="title">Sign Up</div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" className="text-input" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" className="text-input" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" className="text-input" />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" placeholder="Confirm your password" className="text-input" />
                <button type="submit">Sign Up</button>
            </form>
            <div>-- or --</div>
            <div className="auth-services">
                <button className="google-signup">Sign up with Google</button>
            </div>
            <div className="signin-link">
                Already have an account? <a href="/signin">Sign In</a>
            </div>
        </div>
    </>
}