import "./SignInWithButton.css";

export default function SignInWithButton({ provider, icon, onClick }) {
    return <>
        <button onClick={onClick} className="sign-in-with-button">
            {icon ? icon : provider}
        </button>
    </>;
}