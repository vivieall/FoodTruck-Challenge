import React, { useState } from "react";
import styles from "./FoodTruckCard.module.css";

interface FoodTruck {
  locationid: string;
  Applicant: string;
  FacilityType: string;
  FoodItems: string;
  LocationDescription: string;
}

const FoodTruckCard: React.FC<{ truck: FoodTruck }> = ({ truck }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {isFlipped ? (
          <>
            <h3>{truck.Applicant}</h3>
            <h4 className={styles.infoFood}>{truck.LocationDescription}</h4>
          </>
        ) : (
          <>
            <h3>{truck.Applicant}</h3>
            <h4 className={styles.infoFood}>🚚 What you can eat here:</h4>
            <p className={styles.items}>{truck.FoodItems}</p>
          </>
        )}
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.button} onClick={toggleFlip}>
          {isFlipped ? "🔙 Back" : "🔍 See Locations"}
        </button>
      </div>
    </div>
  );
};

export default FoodTruckCard;
