import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CardDetails.css'

const CardDetails = () => {
    const data = useLoaderData(1)
    console.log(data)
    let html = data?.summary;
let div = document.createElement("div");
div.innerHTML = html;
let text = div.textContent || div.innerText || "";

const bookingData = JSON.parse(localStorage.getItem('ticket'))
const movieName = bookingData.movieName


const checkMovieName = movieName === data?.name;



    return (
        <div className='detail-container'>
            <div className='detail'>
                {
                  data?.image?.original ? <img src={data?.image?.original} alt="detail-pic" /> : <img src="https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image" alt="" />
                }
                {/* <img src={data?.image?.original} alt="detail-pic" /> */}
                <div className='detail-text'>
                <h2>{data?.name}</h2>
              <p>{text}</p>
              { 
                checkMovieName ? <button className='disabled' disabled>Already Booked</button> : <Link to={`/book-ticket/${data?.id}`}>   <button>Book Ticket</button> </Link> 
              }  
              
                </div>
                                </div>
        </div>
    );
};

export default CardDetails;