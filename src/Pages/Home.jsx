import {useState} from 'react';
import SearchBar from "../components/SearchBar";
import BackgroundVideo from "../components/BackgroundVideo";
import CategoryCard from '../components/CategoryCard';
import SearchGrid from '../components/SearchGrid';
import {Typography} from "@mui/material";
import AccommodationDetails from "./AccommodationDetails.jsx";

const mockResults = [
    {
        location: "Piracaia, Brasil",
        distance: "50 km",
        dates: "18 – 23 de ago.",
        price: "R$612/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 1",
        rating: 4.5
    },
    {
        location: "Bom Jesus dos Perdões, Brasil",
        distance: "49 km",
        dates: "14 – 19 de jul.",
        price: "R$1.506/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 2",
        rating: 4.8
    },
    {
        location: "Juquitiba, Brasil",
        distance: "65 km",
        dates: "16 – 21 de jun.",
        price: "R$493/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 3",
        rating: 4.2

    },
    {
        location: "Paiol do Meio, Brasil",
        distance: "56 km",
        dates: "22 – 27 de jun.",
        price: "R$357/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 4",
        rating: 4.6
    },
    {
        location: "Jarinu, Brasil",
        distance: "46 km",
        dates: "10 – 15 de jun.",
        price: "R$209/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 5",
        rating: 4.1
    },
    {
        location: "Ibiúna, Brasil",
        distance: "70 km",
        dates: "12 – 17 de jul.",
        price: "R$1.209/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 6",
        rating: 4.7
    },
    {
        location: "São Roque, Brasil",
        distance: "60 km",
        dates: "20 – 25 de ago.",
        price: "R$1.009/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 7",
        rating: 4.9
    },
    {
        location: "Atibaia, Brasil",
        distance: "40 km",
        dates: "24 – 29 de jul.",
        price: "R$1.209/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 8",
        rating: 4.3
    },
    {
        location: "Mairiporã, Brasil",
        distance: "55 km",
        dates: "28 de jun – 3 de jul.",
        price: "R$1.209/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 9",
        rating: 4.4
    },
    {
        location: "Santana de Parnaíba, Brasil",
        distance: "45 km",
        dates: "30 de jun – 5 de jul.",
        price: "R$1.209/noite",
        image: "https://via.placeholder.com/200",
        description: "Descrição do local 10",
        rating: 4.5
    }
];


const Home = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [selectedAccommodationId, setSelectedAccommodationId] = useState(null);

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };
    const handleCardClick = (id) => {
        setSelectedAccommodationId(id);
    };
    return (
        <div className="flex flex-col h-screen">


            {!isSearchActive && (
                <div className="relative h-1/2">
                    <BackgroundVideo/>
                </div>
            )}


            <div className={`flex items-start justify-center ${isSearchActive ? 'mt-4' : 'absolute inset-0'}`}
                 style={{marginTop: isSearchActive ? '4rem' : '20vh'}}>
                <SearchBar onSearchClick={handleSearchClick} isSearchActive={isSearchActive}/>
            </div>


            {!isSearchActive ? (
                <div className="relative mt-10 flex-grow">
                    <div className="max-w-7xl mx-auto px-4">
                        <Typography variant="h4" className="text-start">Explore por categoria</Typography>
                        <div className="grid lg:grid-cols-4 gap-10 mt-5">
                            <CategoryCard title="Categoria 1" description="Descrição da categoria 1"/>
                            <CategoryCard title="Categoria 2" description="Descrição da categoria 2"/>
                            <CategoryCard title="Categoria 3" description="Descrição da categoria 3"/>
                            <CategoryCard title="Categoria 4" description="Descrição da categoria 4"/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-16">
                    {selectedAccommodationId === null ? (
                        <SearchGrid results={mockResults} onCardClick={handleCardClick}/>
                    ) : (
                        <AccommodationDetails id={selectedAccommodationId}/>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
