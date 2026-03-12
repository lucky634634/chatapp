import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/Firebase";

export default function HomePage() {
	const navigate = useNavigate();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate(`/chat/${user.uid}`);
			}
		});
		return unsubscribe;
	}, [navigate]);
	return <>
		<NavBar />
	</>;
}
