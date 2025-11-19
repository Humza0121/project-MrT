import "../styles/form.css";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleLogin(e:React.FormEvent) {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className="form-container">
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" required/>

                <label>Password</label>
                <input type="password" required />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}