import "./App.css";

function App() {
	return <>
		<nav className="navbar">
			<div className="nav-left">
				<div className="logo">MyApp</div>
				<ul className="nav-links">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<ul className="auth-links">
				<li><a href="#">Sign In</a></li>
				<li><a href="#">Sign Up</a></li>
			</ul>
		</nav>
		<form className="signin-form">
			<div className="title">Sign In</div>
			<input type="email" placeholder="Enter your email" className="text-input"/>
			<input type="password" placeholder="Enter your password" className="text-input"/>
			<a className="forgot-password" href="">Forgot password?</a>
			<div>
				<input type="checkbox" id="remember" />
				<label htmlFor="remember">Remember me</label>
			</div>
			<button type="submit">Sign In</button>
		</form>
	</>;
}

export default App;
