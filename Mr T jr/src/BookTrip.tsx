import "../styles/form.css";

export default function BookTrip() {
    return(
        <div className="form-container">
            <h1>Book a Residential Trip</h1>
            <form>
                <label>Destination</label>
                <input type="text" placeholder="City or loaction" />

                <label>Start Date</label>
                <input type="date" />

                <label>End Date</label>
                <input type="date" />

                <button type="submit">Book Trip</button>
            </form>
        </div>
    );
}