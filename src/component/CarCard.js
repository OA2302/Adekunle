import React, { useState} from 'react';
import { FaCalendar, FaUsers, FaBolt, FaRoad, FaCogs, FaDollarSign, FaThumbsUp } from 'react-icons/fa';
import './carcard.css';
import PaymentForm from './PaymentForm';
import Cs from './Comment';

function CarCard({ car }) {
  const {
    imageUrl,
    name,
    yearProduced,
    occupants,
    hybrid,
    distanceOnFullTank,
    automatic,
    price,
  } = car;
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // Track whether the button is liked

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }

    setIsLiked(!isLiked); // Toggle the liked state
  };

  const likeButtonClass = `like-button ${isLiked ? 'like-button-clicked' : ''}`;


  return (
    <div className="car-card">
      <img src={imageUrl} alt={name} />

      <h2>{name}</h2>
      <p> <FaCalendar/>Year Produced: {yearProduced}</p>
      <p>
        <FaUsers /> Occupants: {occupants}
      </p>
      {hybrid && (
        <p>
          <FaBolt /> Power Source: Hybrid
        </p>
      )}
      <p>
        <FaRoad /> Distance on Full Tank: {distanceOnFullTank} miles
      </p>
      <p>
        <FaCogs /> Transmission: {automatic ? 'Automatic' : 'Manual'}
      </p>
      <p>
        <FaDollarSign /> Price: ${price}
      </p>
      <div className='flex'>
      <button className='flx' onClick={handleLikeClick}>
      <a href="/"> {likes}</a>
        <FaThumbsUp className={likeButtonClass} />
          {isLiked ? 'Liked!' : 'like'}
        </button>
      <PaymentForm car={car} className='btn' />
      </div>
      <div className='comment'><Cs/></div>
    </div>
  );
}

export default CarCard;