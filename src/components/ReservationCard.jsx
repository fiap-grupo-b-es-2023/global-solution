import React from 'react';
import { Card, CardContent, Button, Typography, Divider, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import StarIcon from '@mui/icons-material/Star';

const PriceDisplay = ({ initialPrice, discountedPrice, priceUnit }) => (
    <div className="flex justify-between">
        <div className="flex gap-1">
            <p className="line-through text-neutral-500 text-xl">{initialPrice}</p>
            <p className="text-xl font-semibold">{discountedPrice} <span className="text-sm">{priceUnit}</span></p>
        </div>
        <div className="flex items-center text-sm">
            <StarIcon className="text-yellow-500" />
            <p className="ml-1">4.99</p>
            <p className="ml-1 text-zinc-600">337 reviews</p>
        </div>
    </div>
);

const DateInput = ({ label, value, onChange, className }) => (
    <div className={`flex flex-col flex-1 p-4 border border-neutral-300 ${className}`}>
        <p className="text-xs font-semibold text-neutral-800">{label}</p>
        <DatePicker
            value={value}
            onChange={onChange}
            sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: 'none' },
                '& .MuiOutlinedInput-input': { padding: '0.5rem 0' },
            }}
        />
    </div>
);

const GuestsInput = ({ label, guests, onChange }) => (
    <div className="flex flex-col p-4 border border-neutral-300 rounded-lg rounded-t-none w-full">
        <p className="text-xs font-semibold text-neutral-800">{label}</p>
        <TextField
            variant="standard"
            placeholder="Adicionar hóspedes"
            value={guests}
            onChange={onChange}
            InputProps={{ disableUnderline: true }}
        />
    </div>
);

const SummaryItem = ({ description, amount }) => (
    <div className="flex justify-between mt-4">
        <p>{description}</p>
        <p>{amount}</p>
    </div>
);


const ReservationForm = ({ initialPrice, discountedPrice, priceUnit, checkInDate, checkOutDate, guests, summaryItems, total, onDateChange, onGuestsChange }) => (
    <div>
        <PriceDisplay initialPrice={initialPrice} discountedPrice={discountedPrice} priceUnit={priceUnit} />
        <div className="flex mt-6 ">
            <DateInput label="CHECK-IN" value={checkInDate} onChange={(date) => onDateChange('checkInDate', date)} className="rounded-l-lg rounded-r-none rounded-b-none" />
            <DateInput label="CHECKOUT" value={checkOutDate} onChange={(date) => onDateChange('checkOutDate', date)} className="rounded-r-lg rounded-l-none rounded-b-none" />
        </div>
        <GuestsInput label="GUESTS" guests={guests} onChange={(e) => onGuestsChange(e.target.value)} />
        <Button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg text-xl font-semibold hover:bg-emerald-600">
            Reserve
        </Button>
        <Typography className="mt-4 text-sm text-center text-zinc-600">You won’t be charged yet</Typography>
        <div className="mt-6">
            {summaryItems.map((item, index) => (
                <SummaryItem key={index} description={item.description} amount={item.amount} />
            ))}
        </div>
        <Divider className="mt-6" />
        <SummaryItem description="Total before taxes" amount={total} />
    </div>
);

const ReservationCard = (props) => (
    <Card className="max-w-lg mx-auto my-8">
        <CardContent>
            <ReservationForm {...props} />
        </CardContent>
    </Card>
);

export default ReservationCard;
