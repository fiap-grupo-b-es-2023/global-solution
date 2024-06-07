import {createContext} from "react";

export const SearchContext = createContext({
    searchDetails: { checkInDate: null, checkOutDate: null, guests: '' },
    setSearchDetails: () => {},
});