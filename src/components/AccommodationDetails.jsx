import { Typography, Box, Divider } from '@mui/material';
import accommodations from '../data/accommodations.js';
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater } from 'react-icons/fa';
import ReservationCard from './ReservationCard.jsx';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext.jsx';
const iconComponents = {
    "FaLeaf": FaLeaf,
    "FaRecycle": FaRecycle,
    "FaSolarPanel": FaSolarPanel,
    "FaWater": FaWater
};

const iconColors = {
    "FaLeaf": "text-green-500",
    "FaRecycle": "text-blue-500",
    "FaSolarPanel": "text-yellow-500",
    "FaWater": "text-teal-500"
};

const AccommodationDetails = () => {
    const { searchDetails } = useContext(SearchContext);

    const { id: idParam } = useParams();
    const id = parseInt(idParam, 10); // Transforma o id em um número inteiro
    const accommodation = accommodations.find(acc => acc.id === id);


    if (!accommodation) {
        return <div>Acomodação não encontrada</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 mt-8">
            <Typography variant="h4" className="font-bold mb-6">{accommodation.name}</Typography>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="col-span-3">
                            <div className="bg-gray-300 h-80 rounded-lg"></div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-gray-300 h-40 rounded-lg"></div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-gray-300 h-40 rounded-lg"></div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-gray-300 h-40 rounded-lg"></div>
                        </div>
                    </div>

                    <Typography variant="h5" className="font-bold mb-4">O que esse lugar oferece</Typography>
                    <Box className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {accommodation.highlights.map((highlight, index) => {
                            const IconComponent = iconComponents[highlight.icon];
                            return (
                                <Box key={index} className="flex items-center space-x-2 text-gray-700">
                                    <IconComponent className={`text-2xl ${iconColors[highlight.icon]}`} />
                                    <Typography variant="body1" className="text-gray-700">{highlight.text}</Typography>
                                </Box>
                            );
                        })}
                    </Box>

                    <Divider className="my-6" />

                    <Typography variant="h5" className="font-bold mb-4">Sobre a acomodação</Typography>
                    <Typography variant="body1" className="mb-6 text-gray-700">
                        {accommodation.description}
                    </Typography>

                    <Divider className="my-6" />

                    <Typography variant="h5" className="font-bold mb-4">Contribuições para a Conservação</Typography>
                    {accommodation.conservationProjects.map((project, index) => (
                        <Box key={index} className="mb-6">
                            <Typography variant="h6" className="font-bold">{project.title}</Typography>
                            <Typography variant="body1" className="text-gray-700">{project.description}</Typography>
                        </Box>
                    ))}

                    <Divider className="my-6" />

                    <Typography variant="h5" className="font-bold mb-4">Depoimentos de Hóspedes</Typography>
                    {accommodation.testimonials.map((testimonial, index) => (
                        <Box key={index} className="mb-6">
                            <Typography variant="body1" className="italic text-gray-700">"{testimonial.comment}"</Typography>
                            <Typography variant="body2" className="text-zinc-600">- {testimonial.name}, {testimonial.date}</Typography>
                        </Box>
                    ))}
                </div>
                <div className="sticky top-4">
                    <ReservationCard
                        originalPrice={accommodation.originalPrice}
                        discount={accommodation.discount}
                        priceUnit="R$/noite"
                        checkInDate={searchDetails.checkInDate}
                        checkOutDate={searchDetails.checkOutDate}
                        guests={searchDetails.guests}
                        summaryItems={accommodation.summaryItems || []}
                        extraPerson={accommodation.extraPersonFee}
                        rating={accommodation.rating}
                        numberOfRatings={accommodation.numberOfRatings}
                    />
                </div>
            </div>
        </div>
    );
};

export default AccommodationDetails;
