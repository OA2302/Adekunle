import React from 'react';
import CarCard from './CarCard';
import './carlist.css'

function CarList({ cars }) {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
