import NavBar from "../components/NavBar";
import "./SignInPage.css";

export default function SignInPage() {
    return <>
        <NavBar />
        <form className="signin-form">
            <div className="title">Sign In</div>
            <input type="email" placeholder="Enter your email" className="text-input" />
            <input type="password" placeholder="Enter your password" className="text-input" />
            <a className="forgot-password" href="">Forgot password?</a>
            <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
        </form>
    </>
}