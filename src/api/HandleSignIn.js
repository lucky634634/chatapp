import { browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

export async function HandleSignIn(email, password, rememberMe) {
    try {
        const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
        await setPersistence(auth, persistence);
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (error) {
        console.error("Error signing in:", error);
    }

}