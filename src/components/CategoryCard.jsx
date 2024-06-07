import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

const CategoryCard = ({ title, description, image }) => {
    return (
        <Link to="/em-desenvolvimento">
            <Card className="hover:shadow-lg transition-shadow duration-200">
                <CardContent>
                    {image && <img src={image} alt={title} className="h-40 w-full object-cover mb-2 rounded-lg" />}
                    <Typography variant="h6" className="mb-1">{title}</Typography>
                    <Typography variant="body2" className="text-gray-600">{description}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CategoryCard;