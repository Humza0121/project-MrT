import "../styles/form.css";

export default function BookRoom() {
    return(
        <div className="form-container">
            <h1>Book a Hotel Room</h1>
            <form>
                <label>Hotel Name</label>
                <input type="text" />

                <label>Check-In</label>
                <input type="date" />

                <label>Check-Out</label>
                <input type="date" />

                <label>Guests</label>
                <input type="number" min="1" />

                <button type="submit">Book Room</button>
            </form>
        </div>
    );
}