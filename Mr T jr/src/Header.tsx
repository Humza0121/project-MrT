import { Link } from "react-router-dom";
import "../styles/layout.css";

export default function Header() {
    return (
        <header className="header">
            <h2>Booking Portal</h2>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/book-trip">Book Trip</Link>
                <Link to="/book-room">Book Room</Link>
            </nav>
        </header>
    );
}