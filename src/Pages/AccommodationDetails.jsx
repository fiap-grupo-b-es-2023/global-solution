import React, { useState } from 'react';
import ReservationCard from '../components/ReservationCard';
import { Typography, Box, Button } from '@mui/material';
import { FaLeaf, FaRecycle, FaSolarPanel, FaWater } from 'react-icons/fa';

const highlights = [
    { icon: <FaLeaf />, text: 'Uso de energia solar' },
    { icon: <FaRecycle />, text: 'Reciclagem de resíduos' },
    { icon: <FaSolarPanel />, text: 'Painéis solares' },
    { icon: <FaWater />, text: 'Conservação de água' },
];

const testimonials = [
    {
        name: 'João Silva',
        comment: 'Adorei a estadia! A preocupação com a sustentabilidade é evidente em cada detalhe.',
        date: '12/01/2024',
    },
    {
        name: 'Maria Oliveira',
        comment: 'Uma experiência incrível! Aulas sobre conservação dos oceanos foram um diferencial.',
        date: '20/02/2024',
    },
];

const conservationProjects = [
    {
        title: 'Projeto Limpeza das Praias',
        description: 'Participamos ativamente na limpeza das praias locais, removendo lixo e promovendo a conscientização ambiental.',
    },
    {
        title: 'Preservação da Vida Marinha',
        description: 'Apoiamos projetos que visam a preservação da vida marinha, incluindo iniciativas de proteção de corais e tartarugas marinhas.',
    },
];

const AccommodationDetails = ({ id }) => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState('2 adultos');

    const handleDateChange = (field, date) => {
        if (field === 'checkInDate') {
            setCheckInDate(date);
        } else if (field === 'checkOutDate') {
            setCheckOutDate(date);
        }
    };

    const handleGuestsChange = (value) => {
        setGuests(value);
    };

    const summaryItems = [
        { description: 'Subtotal', amount: 'R$3000' },
        { description: 'Taxa de serviço', amount: 'R$300' },
        { description: 'Taxa de limpeza', amount: 'R$150' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 mt-8">
            <Typography variant="h4" className="font-bold mb-6">Hotel X</Typography>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-3 gap-2 mb-6">
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
                    <Box className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {highlights.map((highlight, index) => (
                            <Box key={index} className="flex items-center space-x-2 text-gray-700">
                                <span className="text-lg">{highlight.icon}</span>
                                <Typography variant="body1">{highlight.text}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Button variant="outlined" className="w-full mb-6 border-gray-400 text-gray-600 hover:bg-gray-50">
                        Mostrar todas as comodidades
                    </Button>
                    <Typography variant="h5" className="font-bold mb-4">Contribuições para a Conservação</Typography>
                    {conservationProjects.map((project, index) => (
                        <Box key={index} className="mb-4">
                            <Typography variant="h6" className="font-bold">{project.title}</Typography>
                            <Typography variant="body1" className="text-gray-700">{project.description}</Typography>
                        </Box>
                    ))}
                    <Typography variant="h5" className="font-bold mb-4">Depoimentos de Hóspedes</Typography>
                    {testimonials.map((testimonial, index) => (
                        <Box key={index} className="mb-4">
                            <Typography variant="body1" className="italic text-gray-700">"{testimonial.comment}"</Typography>
                            <Typography variant="body2" className="text-zinc-600">- {testimonial.name}, {testimonial.date}</Typography>
                        </Box>
                    ))}
                    <Typography variant="h5" className="font-bold mb-4">Descrição</Typography>
                    <Typography variant="body1" className="mb-6 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus arcu, efficitur a pulvinar et, vestibulum id nunc. In sit amet efficitur neque. Quisque erat orci, consectetur at magna vitae, vestibulum suscipit justo. Donec ut diam nec eros ornare maximus. Nullam egestas mauris sollicitudin ligula congue, eu eleifend magna posuere. Vivamus tincidunt urna id enim tincidunt facilisis. Mauris ante libero, convallis vel vulputate id, sagittis a metus. Aenean consectetur egestas erat in dignissim.
                    </Typography>
                </div>
                <div className="sticky top-4">
                    <ReservationCard
                        initialPrice="R$612"
                        discountedPrice="R$500"
                        priceUnit="/noite"
                        checkInDate={checkInDate}
                        checkOutDate={checkOutDate}
                        guests={guests}
                        summaryItems={summaryItems}
                        total="R$3450"
                        onDateChange={handleDateChange}
                        onGuestsChange={handleGuestsChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default AccommodationDetails;
