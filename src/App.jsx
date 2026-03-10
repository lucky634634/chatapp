import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/chatapp/" element={<HomePage />} />
				<Route path="chatapp/signin" element={<SignInPage />} />
				<Route path="chatapp/#/signup" element={<SignUpPage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
