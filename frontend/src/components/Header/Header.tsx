import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const comingSoon = () => {
        alert('Coming soon this section will be available!');
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                🚚 FoodTrucks<span className={styles.highlight}>Finder 🔍</span>
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                &#9776;
            </button>
            {isOpen && (
                <nav className={styles.navMenu}>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/foodtrucks')}>FoodTrucks</li>
                        <li onClick={comingSoon}>Contact</li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;