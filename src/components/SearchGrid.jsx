// components/SearchGrid.jsx
import { Box } from '@mui/material';
import LocationCard from './LocationCard';

const SearchGrid = ({ results, onCardClick }) => {
    return (
        <Box className="grid lg:grid-cols-3 gap-10 mt-2 max-w-6xl mx-auto px-4">
            {results.map((result, index) => (
                <LocationCard
                    key={index}
                    location={result.location}
                    description={result.description}
                    date={result.dates}
                    price={result.price}
                    rating={result.rating}
                    imageUrl={result.image}
                    imageAlt={result.location}
                    onClick={() => onCardClick(index)}
                />
            ))}
        </Box>
    );
};

export default SearchGrid;
