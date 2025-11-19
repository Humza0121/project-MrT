import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookTrip from "./pages/BookTrip";
import BookRoom from "./pages/BookRoom";
import Header from "./components/Header";
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