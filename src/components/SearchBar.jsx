import { Box, TextField, IconButton, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchBar = ({ onSearchClick, isSearchActive }) => {
    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-full p-2 shadow-md bg-white max-w-5xl mx-auto"       >
            <Box className="flex flex-col items-start px-3">
                <Typography variant="caption" className="font-bold mb-1">Onde</Typography>
                <TextField
                    variant="standard"
                    placeholder="Buscar destinos"
                    InputProps={{
                        disableUnderline: true,
                        className: "w-36",
                    }}
                />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem className="h-10" />
            <Box className="flex flex-col items-start px-3">
                <Typography variant="caption" className="font-bold mb-1">Check-in</Typography>
                <DatePicker
                    sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '& .MuiOutlinedInput-input': { padding: '0.5rem 0' },
                    }}
                />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem className="h-10" />
            <Box className="flex flex-col items-start px-3">
                <Typography variant="caption" className="font-bold mb-1">Check-out</Typography>
                <DatePicker
                    sx={{
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '& .MuiOutlinedInput-input': { padding: '0.5rem 0' },
                    }}
                />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem className="h-10" />
            <Box className="flex flex-col items-start px-3">
                <Typography variant="caption" className="font-bold mb-1">Quem</Typography>
                <TextField
                    variant="standard"
                    placeholder="Adicionar hóspedes"
                    InputProps={{
                        disableUnderline: true,
                        className: "w-36",
                    }}
                />
            </Box>
            <IconButton className="bg-red-500 text-white rounded-full p-3 hover:bg-red-500"  onClick={onSearchClick}>
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default SearchBar;
