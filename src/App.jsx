// App.jsx
import './App.css';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; // Importe o locale 'en-gb'

import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Pages/Root";
import AccommodationDetails from "./components/AccommodationDetails.jsx";
import UnderConstruction from "./Pages/UnderConstruction";
import SearchGrid from "./components/SearchGrid"; // Importe o componente SearchGrid

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <UnderConstruction />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/problema",
                element: <About />,
            },
            {
                path: "/acomodacao/:id",
                element: <AccommodationDetails />,
            },
            {
                path: "/em-desenvolvimento",
                element: <UnderConstruction />,
            },
            {
                path: "/busca",
                element: <SearchGrid />, // Adicione a rota para SearchGrid
            },
        ],

    },

]);

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en-gb')}> {/* Defina o locale para 'en-gb' */}
            <RouterProvider router={router}/>
        </LocalizationProvider>
    );
}

export default App;