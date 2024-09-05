import React, { useState, useEffect } from "react";
import FoodTruckCard from "../FoodTruckCard/FoodTruckCard";
import styles from './FoodTruckList.module.css';

interface FoodTruck {
  locationid: string;
  Applicant: string;
  FacilityType: string;
  FoodItems: string;
  Status: string;
  LocationDescription: string;
}

const FoodTruckList: React.FC = () => {
  const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [trucksPerPage] = useState(8);
  const [sortOrder, setSortOrder] = useState<string>('');

  useEffect(() => {
    fetch('https://foodtruck-challenge.onrender.com/api/foodtrucks')
      .then(response => response.json())
      .then(data => {
        const approvedTrucks = data.filter((truck: FoodTruck) => truck.Status === 'APPROVED');
        setFoodTrucks(approvedTrucks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const getSortedTrucks = (trucks: FoodTruck[]) => {
    if (sortOrder === 'az') {
      return trucks.sort((a, b) => a.Applicant.localeCompare(b.Applicant));
    } else if (sortOrder === 'za') {
      return trucks.sort((a, b) => b.Applicant.localeCompare(a.Applicant));
    }
    return trucks;
  };

  const filteredTrucks = getSortedTrucks(
    foodTrucks.filter(truck => search.length < 3 || truck.FoodItems.toLowerCase().includes(search))
  );

  const indexOfLastTruck = currentPage * trucksPerPage;
  const indexOfFirstTruck = indexOfLastTruck - trucksPerPage;
  const currentTrucks = filteredTrucks.slice(indexOfFirstTruck, indexOfLastTruck);

  const totalPages = Math.ceil(filteredTrucks.length / trucksPerPage);
  const changePage = (offset: number) => {
    setCurrentPage(prev => Math.min(Math.max(1, prev + offset), totalPages));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchAndSort}>
        <input
          type="text"
          placeholder="Search by food type...(ex: tacos, asian, sandwich, fruit, salads, coffee, bear)"
          onChange={handleSearchChange}
          className={styles.searchBar}
        />
        <select onChange={handleSortChange} className={styles.sortSelect}>
          <option value="">Sort By</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>
      <div className={styles.truckContainer}>
        <div className={styles.truckList}>
          {currentTrucks.map((truck: FoodTruck) => (
            <FoodTruckCard key={truck.locationid} truck={truck} />
          ))}
        </div>
        <div className={styles.pagination}>
          <button onClick={() => changePage(-1)} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => changePage(1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckList;