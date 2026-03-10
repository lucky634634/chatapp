import "./SignUpPage.css"
import NavBar from "../components/NavBar";
import SignInWithButton from "../components/SignInWithButton";
import { auth, db } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function SignUpPage() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value) {
            alert("Please fill in all fields!");
            return;
        }
        if (e.target[2].value !== e.target[3].value) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await createUserWithEmailAndPassword(auth, e.target[1].value, e.target[2].value);
            const user = res.user;
            await updateProfile(user, { displayName: e.target[0].value });
            await setDoc(doc(db, "users", user.uid), {
                name: e.target[0].value,
                email: e.target[1].value,
                uid: user.uid
            });
            alert("Sign up successful!");

        }
        catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use. Please sign in instead.");
                return;
            }
            console.error("Error signing up:", error);
        }
    }
    return <>
        <NavBar />
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
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
                {/* <button className="google-signup">Sign up with Google</button> */}
                <SignInWithButton provider="Google" onClick={() => alert("Sign up with Google")} />
            </div>
            <div className="signin-link">
                Already have an account? <a href="/signin">Sign In</a>
            </div>
        </div>
    </>
}