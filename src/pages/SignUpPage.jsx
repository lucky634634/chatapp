import "./SignUpPage.css"
import NavBar from "../components/NavBar";
import SignInWithButton from "../components/SignInWithButton";
import { auth, db } from "../api/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignUpPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate(`/chat/${user.uid}`);
            }
        });
        return unsubscribe;
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value) {
            alert("Please fill in all fields!");
            return;
        }
        if (new Date(e.target[1].value) > new Date()) {
            alert("Date of birth cannot be in the future!");
            return;
        }
        if (new Date(e.target[1].value).getFullYear() - new Date().getFullYear() < 18) {
            alert("You must be at least 13 years old to sign up!");
            return;
        }
        if (new Date(e.target[1].value).getFullYear() < 1900) {
            alert("Date of birth cannot be before 1900!");
            return;
        }
        if (e.target[3].value.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        if (e.target[3].value !== e.target[4].value) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await createUserWithEmailAndPassword(auth, e.target[1].value, e.target[2].value);
            const user = res.user;
            await updateProfile(user, { displayName: e.target[0].value });
            await setDoc(doc(db, "users", user.uid), {
                name: e.target[0].value,
                email: e.target[2].value,
                uid: user.uid,
                dateOfBirth: new Date(e.target[1].value).getUTCDate(),
                createdAt: new Date().getUTCDate(),
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
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" className="text-input" />
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
                Already have an account? <Link to="/signin">Sign In</Link>
            </div>
        </div>
    </>
}