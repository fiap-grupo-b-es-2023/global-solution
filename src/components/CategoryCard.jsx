import { Box, Typography, Card, CardContent } from '@mui/material';

const CategoryCard = ({ title, description }) => {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent>
                <Box className="h-40 bg-gray-200 mb-2"></Box>
                <Typography variant="h6" className="mb-1">{title}</Typography>
                <Typography variant="body2" className="text-gray-600">{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
