import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import videoSrc from '../../assets/multimedia/splash-foodtruck.mp4';


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToFoodTrucks = () => {
    navigate('/foodtrucks');
  };

  return (
    <div className={styles.container}>
      <video
        autoPlay
        loop
        className={styles.backgroundVideo}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <button onClick={navigateToFoodTrucks} className={styles.button}>
        🚚 See Food Trucks 🔍
      </button>
    </div>
  );
};

export default HomePage;