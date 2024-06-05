import './App.css';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./components/Header";
import AccommodationDetails from "./Pages/AccommodationDetails.jsx";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/problema" element={<About />} />
                    <Route path="/acomodacao/:id" element={<AccommodationDetails />} />
                </Routes>
            </Router>
        </LocalizationProvider>
    );
}

export default App;
