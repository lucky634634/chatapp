import NavBar from "../components/NavBar";
import SignInWithButton from "../components/SignInWithButton";
import { FaGoogle } from "react-icons/fa";
import "./SignInPage.css";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignInPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value);
        }
        catch (error) {
            console.error("Error signing in:", error);
        }
    }

    return <>
        <NavBar />
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
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
            <div>-- or --</div>
            <div className="auth-services">
                {/* <button className="google-signin">Sign in with Google</button> */}
                <SignInWithButton provider="Google" icon={<FaGoogle />} onClick={() => alert("Sign in with Google")} />
            </div>
            <div className="signup-link">
                Don't have an account? <a href="/signup">Sign Up</a>
            </div>
        </div>
    </>
}