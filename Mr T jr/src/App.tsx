import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import BookTrip from "./BookTrip";
import BookRoom from "./BookRoom";
import Header from "./Header";
import "./styles/global.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-trip" element={<BookTrip />} />
        <Route path="/book-room" element={<BookRoom />} />
      </Routes>
    </Router>
  );
}

export default App;