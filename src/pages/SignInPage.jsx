import NavBar from "../components/NavBar";
import SignInWithButton from "../components/SignInWithButton";
import { FaGoogle } from "react-icons/fa";
import "./SignInPage.css";
import { Link, useNavigate } from "react-router-dom";
import { HandleSignIn } from "../api/HandleSignIn";

export default function SignInPage() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const email = e.target[0].value;
            const password = e.target[1].value;
            const rememberMe = e.target[2].checked;
            const user = await HandleSignIn(email, password, rememberMe);
            if (!user) {
                alert("User not found");
                return;
            }
            navigate(`/chat/${user.uid}`);
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
                <Link className="forgot-password" href="">Forgot password?</Link>
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
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </>
}