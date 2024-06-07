import { Box, Typography } from '@mui/material';

const LocationCard = ({ location,hotelName, description, date, price, rating, imageUrl, imageAlt, onClick}) => (
    <Box className="flex flex-col text-sm" onClick={onClick}>
        <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl h-[250px]" />
        <Box className="flex gap-5 justify-between mt-4 w-full">
            <Box className="flex flex-col">
                <Box className="flex flex-col text-zinc-600">
                    <Typography variant="h6" className="font-[590] text-neutral-800">{hotelName}</Typography>
                    <Typography variant="body2" className="mt-1">{location}</Typography>
                </Box>
                <Typography variant="body2" className="justify-center mt-2 text-neutral-800">
                    <span className="font-[590] text-neutral-800">{price}</span>
                </Typography>
            </Box>
            <Box className="flex gap-1 self-start whitespace-nowrap text-neutral-800">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3519d40af15702780075f9b60fc8205a8e770dde6c66614b24f115b2669426e4?apiKey=7eb8e09d7ad04703a8457b4aef69a0dc&" alt="" className="shrink-0 self-start w-4 aspect-square fill-neutral-800" />
                <Typography variant="body2">{rating}</Typography>
            </Box>
        </Box>
    </Box>
);

export default LocationCard;