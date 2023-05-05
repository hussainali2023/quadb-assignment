import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './BookingTicket.css'
import { toast } from 'react-hot-toast';

const BookingTicket = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    console.log(data)
    const [userName, setUserName] = useState()
    const [userPhone, setUserPhone] = useState()

    const handleSubmit = (e) =>{
e.preventDefault()
const ticket = {
    movieId: data?.id,
    movieName: data?.name,
    movieGenres: data?.genres[0],
    userName: userName,
    userPhone: userPhone,
    bookingStatus: "booked"
}
localStorage.setItem("ticket", JSON.stringify(ticket))
toast.success("Ticket Booked Successfull")
navigate(`/card-details/${data?.id}`)
}
    return (
        <div className='ticket'>
            <h1>Book Ticket {data?.name}</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}  action="">
  
                        <label htmlFor="">Movie Name:</label><br />
                    <input readOnly value={data?.name} type="text" name="" id="" /><br />
                   
                        <label htmlFor="rating">Movie Genres:</label><br />
                    <input readOnly defaultValue={data?.genres[0]} type="text" name="" id="" /><br />
                   
                        <label htmlFor="">Enter Your Name</label><br />
                    <input required onBlur={(e)=> setUserName(e.target.value)} type="text" name="" id="" /><br />
                    
                        <label htmlFor="">Phone:</label><br />
                    <input required onBlur={(e)=> setUserPhone(e.target.value)} type="number" name="" id="" /><br />
                    <button type='submit' className=''>Confirm Booking</button>
                    
                </form>
            </div>
        </div>
    );
};

export default BookingTicket;