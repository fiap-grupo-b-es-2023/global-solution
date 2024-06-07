import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar";
import {SearchContext} from "../Context/SearchContext.jsx";

function RootLayout() {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const [searchDetails, setSearchDetails] = useState({ checkInDate: null, checkOutDate: null, guests: '' });

    const location = useLocation();

    const handleSearchClick = (details) => {
        setIsSearchActive(true);
        setSearchDetails(details);
    };


    useEffect(() => {
        if (location.pathname !== '/busca' && !location.pathname.startsWith('/acomodacao')) {
            setIsSearchActive(false);
        }
    }, [location.pathname]);

    return (
        <SearchContext.Provider value={{searchDetails, setSearchDetails}}>
            <div className="flex flex-col h-screen">
                <Header />
                {location.pathname !== '/em-desenvolvimento' && location.pathname !== '/problema' && (
                    <div className={`flex items-start justify-center  ${isSearchActive ? 'mt-4' : 'absolute inset-0'} `}
                         style={{ marginTop: isSearchActive ? '4rem' : '20vh' }}>
                        <SearchBar onSearchClick={handleSearchClick} />
                    </div>
                )}
                <Outlet />
            </div>
        </SearchContext.Provider>
    );
}
export default RootLayout;