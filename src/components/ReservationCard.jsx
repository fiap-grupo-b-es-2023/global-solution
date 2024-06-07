import {Card, CardContent, Button, Typography, Divider, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import StarIcon from '@mui/icons-material/Star';
import {differenceInCalendarDays} from 'date-fns';
import {useState} from 'react';
import {Link} from "react-router-dom";


const PriceDisplay = ({
                          initialPrice,
                          discountedPrice,
                          priceUnit,
                          guestsNumber,
                          extraPerson,
                          rating,
                          numberOfRatings
                      }) => {
    let pricePerNight = initialPrice;
    if (guestsNumber > 2) {
        pricePerNight += (guestsNumber - 2) * extraPerson;
    }
    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <p className="line-through text-neutral-500 text-xl">{pricePerNight}</p>
                <p className="text-xl font-semibold">{discountedPrice} <span className="text-sm">{priceUnit}</span></p>
            </div>
            <div className="flex items-center text-sm">
                <StarIcon className="text-yellow-500"/>
                <p className="ml-1">4.99</p>
                <p className="ml-1 text-zinc-600">337 reviews</p>
            </div>
        </div>
    );
}

const DateInput = ({label, value, onChange, className}) => (
    <div className={`flex flex-col flex-1 p-4 border border-neutral-300 ${className}`}>
        <p className="text-xs font-semibold text-neutral-800">{label}</p>
        <DatePicker
            value={value}
            onChange={onChange}
            sx={{
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {border: 'none'},
                '& .MuiOutlinedInput-input': {padding: '0.5rem 0'},
            }}
        />
    </div>
);

const GuestsInput = ({label, guests, onChange}) => (
    <div className="flex flex-col p-4 border border-neutral-300 rounded-lg rounded-t-none w-full">
        <p className="text-xs font-semibold text-neutral-800">{label}</p>
        <TextField
            variant="standard"
            placeholder="Adicionar hóspedes"
            value={guests}
            onChange={onChange}
            InputProps={{disableUnderline: true}}
        />
    </div>
);

const SummaryItem = ({description, amount}) => (
    <div className="flex justify-between mt-4">
        <p>{description}</p>
        <p>R${amount}</p>
    </div>
);

const ReservationForm = ({
                             originalPrice,
                             discount,
                             priceUnit,
                             checkInDate,
                             checkOutDate,
                             guests,
                             summaryItems = [],
                             onDateChange,
                             onGuestsChange,
                             extraPerson,
                             rating,
                             numberOfRatings
                         }) => {
    const guestsNumber = Number(guests);
    const pricePerNight = originalPrice + (guestsNumber > 2 ? (guestsNumber - 2) * extraPerson : 0);
    const nights = differenceInCalendarDays(new Date(checkOutDate), new Date(checkInDate));
    let subtotal = pricePerNight * nights;
    const discountedPrice = subtotal * (1 - discount);
    const total = discountedPrice + summaryItems.reduce((total, item) => total + item.amount, 0);

    return (
        <div>
            <PriceDisplay initialPrice={pricePerNight} discountedPrice={pricePerNight * (1 - discount)}
                          priceUnit={priceUnit} guestsNumber={guestsNumber} extraPerson={extraPerson}
                          numberOfRatings={numberOfRatings} rating={rating}/>
            <div className="flex mt-6 ">
                <DateInput label="CHECK-IN" value={checkInDate} onChange={(date) => onDateChange('checkInDate', date)}
                           className="rounded-lg rounded-r-none rounded-b-none"/>
                <DateInput label="CHECKOUT" value={checkOutDate} onChange={(date) => onDateChange('checkOutDate', date)}
                           className="rounded-lg rounded-l-none rounded-b-none"/>
            </div>
            <GuestsInput label="GUESTS" guests={guests} onChange={(e) => onGuestsChange(e.target.value)}/>
            <Link to="/em-desenvolvimento">
                <Button
                    className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg text-xl font-semibold hover:bg-emerald-600">
                    Reserve
                </Button>
            </Link>
            <Typography className="mt-4 text-sm text-center text-zinc-600">You won’t be charged yet</Typography>
            <div className="mt-6">
                {summaryItems.map((item, index) => (
                    <SummaryItem key={index} description={item.description} amount={item.amount}/>
                ))}
                <SummaryItem description={`R$${originalPrice * (1 - discount)} x ${nights} noites`}
                             amount={discountedPrice}/>

            </div>
            <Divider className="mt-6"/>
            <SummaryItem description="Total" amount={total}/>
        </div>
    );
}


const ReservationCard = (props) => {
    console.log(props)
    const [checkInDate, setCheckInDate] = useState(props.checkInDate);
    const [checkOutDate, setCheckOutDate] = useState(props.checkOutDate);
    const [guests, setGuests] = useState(props.guests);

    const handleDateChange = (type, date) => {
        if (type === 'checkInDate') {
            setCheckInDate(date);
        } else if (type === 'checkOutDate') {
            setCheckOutDate(date);
        }
    };

    const handleGuestsChange = (value) => {
        setGuests(value);
    };

    return (
        <Card className="max-w-lg mx-auto my-8">
            <CardContent>
                <ReservationForm
                    {...props}
                    checkInDate={checkInDate}
                    checkOutDate={checkOutDate}
                    guests={guests}
                    onDateChange={handleDateChange}
                    onGuestsChange={handleGuestsChange}
                />
            </CardContent>
        </Card>
    );
};

export default ReservationCard;
