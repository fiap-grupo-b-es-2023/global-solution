import { Box } from '@mui/material';
import LocationCard from './LocationCard';
import placeHolder from '../assets/placeholder.png';
import accommodations from "../data/accommodations.js";
import {useNavigate} from "react-router-dom";

const SearchGrid = () => {
    const navigate = useNavigate();


    const handleCardClick = (id) => {
        navigate(`/acomodacao/${id}`)
    };

    return (
        <div className="mt-16">
            <Box className="grid lg:grid-cols-3 gap-10 mt-2 max-w-6xl mx-auto px-4">
                {accommodations.map((accommodation, index) => (
                    <LocationCard
                        key={accommodation.id}
                        hotelName={accommodation.hotelName}
                        location={accommodation.location}
                        description={accommodation.description}
                        date={accommodation.dates}
                        price={accommodation.price}
                        rating={accommodation.rating}
                        imageUrl={placeHolder}
                        imageAlt={accommodation.location}
                        onClick={() => handleCardClick(accommodation.id)}
                    />
                ))}
            </Box>
        </div>

    );
};

export default SearchGrid;