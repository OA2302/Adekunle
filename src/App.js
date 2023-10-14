import React, { useState } from 'react';
import CarsData from './component/CarsData';
import CarList from './component/Carslist';
import Pagination from './component/Pagination';
import SearchBar from './component/CarSearch';
import './App.css';
import BackgroundAudio from './component/BackgroundAudio';

function App() {
  const [cars, setCars] = useState(CarsData);
  const [currentPage,  setCurrentPage] = useState(1);
  const carsPerPage = 9;
  const [filter, setFilter] = useState('All'); // State for the selected filter option

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // Filter cars based on the selected filter option
  const filteredCars = filter === 'All'
    ? cars
    : cars.filter(car => car.carType === filter);

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    const filteredCars = CarsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <div className="flex">
        <h1 className='name'><a href='/'>Adekunle Car Auto</a></h1>
       
        <div className="filter-bar">
          <label>Filter by Car Type:</label>
          <select onChange={(e) => setFilter(e.target.value)}>
          <option value="/">All</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Sports">Sports</option>
          <option value="Muscle">Muscle</option>
          <option value="Luxury">Luxury</option>
          <option value="Exotic" >Exotic</option>
          <option value="Truck" >Truck</option>
          <option value="Electric" >Electric</option>
          <option value="Compact" >Compact</option>
          <option value="Hypercar" >Hypercar</option>
          <option value="Hatchback" >Hatchback</option>
          <option value="Minivan" >Minivan</option>
          </select>
        </div>
      </div>
      <SearchBar onSearch={handleSearch} />

      <CarList cars={currentCars} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={onPageChange}
        className="pagination"
      />
         <footer><small>okikiadenekan • © 2023<br/>
          for Adekunle Silver</small></footer>
      <BackgroundAudio/>
    </div>
  );
}

export default App;
