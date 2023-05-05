import React, { useEffect, useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = () => {
const [dataCollection, setDataCollection] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
            const data = await response.json();
            setDataCollection(data);
        }
        fetchData();
    }, []);

    // console.log(dataCollection)
    console.log(dataCollection)

    return (
        <div className='main-card'>
            {
                dataCollection?.map(data => <>
                  <div className='card'>
                {
                    data?.show?.image?.medium ? <img src={data?.show?.image?.medium} alt="card-pic" /> : <img src="https://i.ibb.co/Stc4w13/resize-1683292705561855781image.jpg" alt="" />
                }
  {/* <img src={data?.show?.image?.medium} alt="card-pic" /> */}
  <h2>{data?.show?.name}</h2>
  <p>{}</p>
<Link to={`/card-details/${data?.show?.id}`}>Read More</Link>

                  </div>

                </>)
            }
        </div>
    );
};

export default Card;
